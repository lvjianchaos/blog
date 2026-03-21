---
title: Starting from the "Scam Links" on Bilibili
published: 2026-03-15
description: ''
image: ''
tags: ['bilibili','url','shortlink','bug']
category: 'CS'
draft: false
lang: 'zh-CN'
---

:::important[想法来源]
观看 [二叉树树](https://space.bilibili.com/325903362) 的视频 [【B站评论惊现诈骗链接！！！这是怎么做的？？？？】](https://www.bilibili.com/video/BV1tCw8zpE21/)  后，想要更深入地了解这个现象，从而有了这期博客。
:::

## 引言

在浏览 `BiliBili` 评论区时，常会发现 B 站的视频链接以标题的形式显现，如下图：

<img src="https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/bilibili诈骗链接说开去/videolinkwithtitle.webp" alt="视频链接显示标题示例" style="border-radius: 1em;"/>

但会遇到点击的视频标题与跳转到的视频页标题不一致的现象，也就是我们所说的**诈骗链接**。具体情形可以从[二叉树树](https://space.bilibili.com/325903362)的视频中看到。

他也给出了如何制作这样的“诈骗链接”：

1. 模板：`https://www.bilibili.com/video/BV_X/../BV_Y`
2. `BV_X` 替换为显示标题的 `BV` 号，`BV_Y` 替换为跳转的 `BV` 号
3. 使用任意B站短链接生成器（例如：[B站短链接生成工具](https://www.bilitools.top/)）生成短链接（符合`^https://b23\.tv/[A-Za-z0-9]{7}$`），并发布于B站评论区

以及漏洞的剖析：前端在渲染链接时，读取第一个合法 `BV` 号获取标题，在这里就是 `BV_X` 对应的标题，而点击会去跳转到原始的 `url`（包含`/../`），从而实际跳转到 `https://www.bilibili.com/video/BV_Y`。

这样的解释固然合乎道理，但于我而言，我还想要了解更多——为什么会造成这样的结果呢？

下文就记录了我的一些探索的所得。

---

## 关于 B 站评论区链接的渲染

据我观察，在B站发布评论时，输入文本是 **B 站相关链接** 则会被渲染为超链接；其中，<u>若链接指向的是某个 B 站视频，则会被渲染为对应视频标题</u>。当然，B站评论区还会存在其他类型的超链接，比如：跳转站外的蓝链(广告...)、BV号、av号、@用户昵称 …… 而其中`BV号`、`av号`等也会替换为其对应的`title`进行超链接的渲染。

**总结该现象：**

- 有的链接直接显示原始 URL；
- 有的链接显示成更友好的标题（例如视频标题）；
- 同一条评论里，可能两种显示方式同时出现。

---

从根本来说，前端 `HTML` 中，<a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links" title="了解超链接" target="blank">创建超链接</a> 通过 `<a>`标签实现，这里同样如此。问题在于：<u>如何确认评论中某段文本是超链接？超链接的`url`如何得来？以及，如何确认渲染内容不是`url`而是对应视频标题？该视频标题如何得来？</u>

观察网络请求，或查看<a href="https://sessionhu.github.io/bilibili-API-collect/docs/comment/" target="blank">文档</a>可得：

1. - `GET` 请求 `https://api.bilibili.com/x/v2/reply/wbi/main` 懒加载获取评论区明细

   <img src="https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/bilibili%E8%AF%88%E9%AA%97%E9%93%BE%E6%8E%A5%E8%AF%B4%E5%BC%80%E5%8E%BB/screenshot-of-the-reply-response.png" style="zoom: 67%;" />

2. 评论主体通常在 `content` 中，**常见字段**包括：

   - `message`：用户输入的原始文本；
   - **`jump_url`：可跳转片段的映射表（键通常是某个可识别 token，如 `BV...`）；**
   - `members`：`@用户` 的映射；
   - `emote`：表情映射；
   - `pictures`: 图片映射；

   一个典型的 `jump_url` 结构是：

   ```json
   {
     "BV12ecbz1EUZ": {
       "title": "【Seedance 2.0】星野露比也要跳蕾塞舞ヾ(≧▽≦*)o",
       "state": 0,
       ...
     },
     "BV1fscqz9EHs": {
       "title": "【Seedance 2.0】伊什塔尔-蕾塞舞★彡",
       "state": 0,
       ...
     }
   }
   ```

   > 注意：`jump_url` 的 key 是否与文本切片后的内容“精确一致”，决定了能否显示标题。

简单地浏览B站前端关于comment的`js`代码，对于整体渲染的流程应该可以**概括为 4 步**：

> 参照：<a href="https://s1.hdslb.com/bfs/seed/jinkela/commentpc/bili-comments.e0090ab8af.js" target="blank">bili-comments.e0090ab8af.js</a>

1. **拉取评论数据**  
   前端请求评论接口，得到 `replies` 列表及每条 `content`。

2. **文本解析为富文本节点**  
   核心解析函数会把 `message` 切成片段，并生成节点数组（例如 `span`、`a`、`img`）。

3. **节点渲染为 HTML**  
   富文本组件把节点数组转换成真实 DOM，例如：

   - `<a href="..." data-type="link">...</a>`
   - `<span>...</span>`

   ```js
   Hv = function (t, e, n, i, r) {
    return {
        tag: "a",
        style: i,
        dataset: r || {
            type: "link"
        },
        a: {
            text: uv(e || "网页链接"),
            href: t,
            icon: n,
            target: "_blank"
        }
     }
   }
   ```

   上述是源码中构造链接节点的一个逻辑，可见：超链接在数据层就是一个 `tag: "a"` 节点，`dataset.type` 默认是 `link`。

4. **点击事件分流**  
   点击链接后，根据 `data-type`（`link/search/goods/seek` 等）执行不同逻辑和埋点。

而其中最关键的机制是：

#### 先“切片”，再“按片段匹配 jump_url”

##### 1. 先做分片

解析器会按照多类规则切片，包括但不限于：

- URL（白名单/正则）；
- `AV/BV/CV/EP/SS`；
- `@用户名`；
- 时间点（如 `01:23`）；
- 普通文本；
- ......

源码中有这样的一些**正则匹配**（已添加注释）：

```js
// 匹配B站AV号：匹配以AV/av/Av/aV开头，后面跟一串数字的格式（如AV123456、av7890）
p = new RegExp("(AV|av|Av|aV)[0-9]+", "ug"), 

// 匹配B站BV号：B站视频的新标识符，规则是BV/bv/Bv/bV开头，
// 接着是1，然后跟9个字符（范围：1-9、A-N、P-Z、a-k、m-z，排除了O和l等易混淆字符）
f = new RegExp("(BV|bv|Bv|bV)1[1-9A-NP-Za-km-z]{9}", "ug"), 

// 匹配B站CV号/专栏移动端链接：
// 第一种：CV/cv开头+数字（如CV12345）；第二种：mobile/开头+数字（移动端专栏链接）
m = new RegExp("((CV|cv)[0-9]+|(mobile/[0-9]+))", "ug"), 

// 匹配B站EP号：番剧的剧集编号，EP/ep/Ep/eP开头+数字（如EP12、ep34）
y = new RegExp("(EP|ep|Ep|eP)[0-9]+", "ug"), 

// 匹配B站SS号：番剧的季度编号，SS/ss/Ss/sS开头+数字（如SS1、ss2）
b = new RegExp("(SS|ss|Ss|sS)[0-9]+", "ug"), 

// 匹配中括号包裹的任意Unicode字符：
// 匹配[]内包含的所有合法Unicode字符（涵盖基本多文种平面和扩展平面字符），
// 包括常见字符、emoji、生僻字等，是B站评论区常见的内容包裹格式
w = /\[(?:[\0-'\+-Z\\\^-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+\]/g, 

// 匹配B站及相关域名：
// 包含bilibili主域名（com/tv/cn）、衍生域名（esheep、biligame、b23.tv等）、
// 合作/关联域名（苏宁sugs、人民网、考拉、央视等），$v和Gv是外部变量（可能是协议/参数前缀）
x = new RegExp("".concat($v, "?([a-z0-9A-Z-]{1,15}.)?(bilibili\\.(com|tv|cn)|esheep\\.(com|cn|net)|biligame\\.(com|cn|net)|(bilibiliyoo|im9)\\.com|biliapi\\.net|b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233\\.cn|(sugs\\.suning\\.com)|jueze2021\\.peopleapp\\.com|kaola\\.com|bigfun\\.cn|mcbbs\\.net|mp\\.weixin\\.qq\\.com|static\\.cdsb\\.com|bjnews\\.com\\.cn|720yun\\.com|\\.cctv\\.com)($|/|)").concat(Gv), "ug"),

// 匹配B站视频链接：
// 包含bilibili主站/video路径、b23.tv等短链接，匹配AV号或BV号格式的视频链接
k = new RegExp("".concat($v, "?(((uat-)?www\\.bilibili\\.com)|(b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233\\.cn))(/video)?/((av[0-9]+)|((BV)1[1-9A-NP-Za-km-z]{9}))($|/|)").concat(Gv), "ug"), 

// 匹配B站番剧播放链接：
// 包含bangumi/play路径，匹配EP号或SS号的番剧播放链接
A = new RegExp("".concat($v, "?(((uat-)?www\\.bilibili\\.com/bangumi/(play/|media/)|(b23\\.tv|bili22\\.cn|bili33\\.cn|bili23\\.cn|bili2233.cn)/)(ss|ep)[0-9]+)($|/|)").concat(Gv), "ug"),

// 匹配B站专栏/文章链接：
// 包含read路径，匹配CV号、native?id、app/、mobile/等格式的专栏链接
_ = new RegExp("".concat($v, "?(uat-)?www\\.bilibili\\.com/read/((cv[0-9]+)|(native?id=[0-9]+)|(app/[0-9]+)|(native/[0-9]+)|(mobile/[0-9]+))($|/|)").concat(Gv), "ug"), 

// 匹配时间戳格式：
// 支持 数字#数字:数字:数字（如1#12:34:56）、数字:数字:数字（如12:34:56）、数字：数字：数字（中文冒号）
// 最少匹配 数字:数字:数字（如1:2:3），是视频评论区常见的时间点格式
E = /(\d+#)?(\d+(:|：)){1,2}\d\d/g
```

##### 2. 对每个“候选片段”再检查 `jump_url`

- 命中 `jump_url[片段]`：用对应信息组装链接节点；
- 未命中：走默认链接逻辑（通常保留原文本显示）

##### 3. 标题显示规则

当命中 `jump_url` 时，显示文案通常是：

- `title || 原片段文本`

即：**有标题就显示标题，否则退回原文本**。

这个应该是 `jump_url` 命中后的标题选择的函数：

```js
L = function (t, e) {
    var r = e.pc_url
       , o = e.app_url_schema
       , a = e.title
       , s = e.prefix_icon
       , l = e.match_once
       , c = e.icon_position
       , u = e.extra;
    if (l && N[t])
       return Wv(t);
    N[t] = !0;
    var d = 1 === c
       , h = "";
    if (r ? h = dv(r) : (C(x),
       x.test(t) ? (h = dv(t, !0),
          i && (C(k),
             k.test(h) && (h = Mv(h, i)))) : (C(f),
                C(p),
                C(m),
                f.test(t) ? (h = Ch({
                   bvid: t
                }),
                   i && (h = Mv(h, i))) : p.test(t) ? (h = Ch({
                      avid: Eu(t)
                   }),
                      i && (h = Mv(h, i))) : m.test(t) ? (h = Th(Eu(t)),
                         i && (h = Mv(h, i))) : h = function (t) {
                            if (t.startsWith("http")) {
                               var e = t.match(/www.bilibili.com\/h5\/note-app\/view\?cvid=(\d+)/);
                               return null != e && e[1] ? Th(e[1]) : t
                            }
                            return ""
                         }(t))),
       !h)
       return Wv(t);
    var y = a || t
       , b = ""
       , g = !1
       , w = "";
    (null != u && u.goods_item_id || null != u && u.goods_prefetched_cache) && (g = !0,
       null != u && u.goods_pc_click_urls && Array.isArray(u.goods_pc_click_urls) && (w = u.goods_pc_click_urls.join(",")),
       C(x),
       x.test(t) && (b = t));
    var A = g ? {
       type: "goods",
       "goods-url": w,
       "raw-url": b
    } : null != u && u.is_word_search ? {
       type: "search",
       keyword: uv(y)
    } : {
       type: "link"
    };
    return n === Uf.DESKTOP_APP ? A = v(v({}, A), {}, {
       link: h
    }) : n === Uf.MOBILE_BROWSER && o && (A = v(v({}, A), {}, {
       link: o
    })),
       Hv(h, y, s, d ? {
          display: "inline-flex",
          "flex-direction": "row-reverse",
          "--icon-width": "0.65em",
          "--icon-height": "1.2em"
       } : {
          "--icon-width": "1.2em",
          "--icon-height": "1.2em"
       }, A)
 }
```

简化并语义化后，关键逻辑如下：

```js
var L = function (token, config) {
   var title = config.title
   // ...省略 url 解析
   var renderText = title || token
   return Hv(resolvedHref, renderText, prefixIcon, style, dataset)
}
```

可见：命中时明确是 `title || token`，也就是“有标题显示标题、否则显示原片段文本”。

---

### 案例

上述的论述仍有不足之处，但能够分析出我们这一小节最开始的问题。就拿我们上面的截图作为案例：

<img src="https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/bilibili%E8%AF%88%E9%AA%97%E9%93%BE%E6%8E%A5%E8%AF%B4%E5%BC%80%E5%8E%BB/screenshot-of-the-reply-response.png" style="zoom: 70%; border-radius: 1em" />

- `message`是：

  ```text
  https://bilibili.com/video/BV12ecbz1EUZ/../../opus/1035673329881579520/../../video/BV1fscqz9EHs/
  ```

- 并且 `jump_url` 里有两个键并有对应的标题：

  - `BV12ecbz1EUZ`

  - `BV1fscqz9EHs`

最终渲染应该是：

- 第一段显示原始 URL 链接：`https://bilibili.com/video/BV12ecbz1EUZ/`
- 中间 `../../opus/.../../../video/` 显示为普通文本
- 第二段 `BV1fscqz9EHs` 显示为标题链接

与我们的实际渲染相符：

<img src="https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/bilibili%E8%AF%88%E9%AA%97%E9%93%BE%E6%8E%A5%E8%AF%B4%E5%BC%80%E5%8E%BB/example_render.png" alt="example_render" style="border-radius: 1em; zoom: 80%" />

在这里为什么第一个 `BV号` 没有替换 `title`，是 `jump_url` 失效了吗？不然，是**切片结果不同**：

1. 前半段先被识别为一个 URL 片段，片段文本是完整 URL，不是 `BV12...` 本身；  
2. `jump_url` 的 key 是 `BV12...`，与该 URL 片段不精确相等，因此无法直接命中；  
3. 后半段在后续分片中切出了独立 token：`BV1f...`，这时与 `jump_url` 的 key 精确匹配，所以能替换成标题。

还有类似这样的：
<img src="https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/bilibili%E8%AF%88%E9%AA%97%E9%93%BE%E6%8E%A5%E8%AF%B4%E5%BC%80%E5%8E%BB/example_2.png" alt="example_2" style="border-radius: 1em; zoom: 60%" />

- `message`: "`https://www.bilibili.com/video/BV1fscqz9EHs/../BV12ecbz1EUZav116057901629925cv1035673329881579520`"
- `jump_url` 仅有一个：
  - `https://www.bilibili.com/video/BV1fscqz9EHs/../BV12ecbz1EUZav116057901629925cv1035673329881579520`: `{title: "【Seedance 2.0】伊什塔尔-蕾塞舞★彡", state: 0,…}`

为什么没有渲染标题，就是”切片“后的无法精准匹配 `jump_url` 的键。当然，`jump_url`的计算是后端服务进行的操作，所以问题应该是**后端并不是按前端切片后的数据进行 jump_url 的计算，而自有一套算jump_url的方法**。而若要提高渲染 `jump_url` 为标题的“<s>命中率</s>”(:不知道这样说是否合理:)，后端的 `jump_url` 计算方法就必须更改，比如按照前端同样的逻辑先对消息进行分片后处理是否有要显示 `title` 的链接，或者前后端这一块的逻辑代码一起重构以互相匹配。

---

### 补充：流程图与对应代码锚点

<img src="https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/bilibili%E8%AF%88%E9%AA%97%E9%93%BE%E6%8E%A5%E8%AF%B4%E5%BC%80%E5%8E%BB/flowchart.png" alt="flowchart" style="border-radius: 1em" />

1. 解析入口（`qv`）

```js
function qv(t, e, n, i) {
   var a = t.content
   var s = a.message, l = a.emote, c = a.members, u = a.jump_url, d = a.vote
   // ... 分片与节点构造
}
```

1. 命中 `jump_url` 时优先走 `L()`

```js
var M = Vf(function (token) {
   return null != u && u[token] ? L(token, u[token]) : Hv(Sh(token), token)
}, ...)
```

1. 渲染层将节点数组变成 HTML

```js
setContents(nodes) {
   const html = nodes.map(/* node -> html */).join("")
   this.contents.innerHTML = html
}
```

1. 点击事件基于 `dataset` 分流

```js
this.disposables.addEventListener(this.contentsElement, "click", function (e) {
   var n = v({}, e.target.dataset)
   t.dispatchEvent(new CustomEvent("text-click", { detail: n }))
})
```

---

## 浅谈短链接

## URL 的演进与规范

## 复盘

## 相关资料

- <https://www.bilitools.top/>
- <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links>
- <https://sessionhu.github.io/bilibili-API-collect/>
- <https://en.wikipedia.org/wiki/URL>
- <https://en.wikipedia.org/wiki/Directory_traversal_attack>
- <https://url.spec.whatwg.org/#url>
- <https://en.wikipedia.org/wiki/Canonicalization#URL>
- <https://developer.mozilla.org/zh-CN/docs/Web/API/URL>
- <https://s1.hdslb.com/bfs/seed/jinkela/commentpc/bili-comments.e0090ab8af.js>

- <https://www.bilibili.com/video/BV1tCw8zpE21>

:::note
笔者水平不高，若上述所言有错误或不合理之处，恳请见谅并斧正；有任何建议也欢迎提出。
:::
