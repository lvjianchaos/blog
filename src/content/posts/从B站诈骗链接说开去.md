---
title: 从B站"诈骗链接"说开去
published: 2026-03-15
description: ''
image: ''
tags: ['bilibili','url','shortlink','bug']
category: 'CS'
draft: false
lang: 'zh-CN'
---

:::important[想法来源]
观看 [二叉树树](https://space.bilibili.com/325903362) 的视频 [【B站评论惊现诈骗链接！！！这是怎么做的？？？？】 ](https://www.bilibili.com/video/BV1tCw8zpE21/)  后，想要更深入地了解这个现象，从而有了这期博客。
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

## 关于 B 站评论区链接的渲染

据我观察，在B站发布评论时，输入文本是 **B 站相关链接** 则会被渲染为超链接；其中，<u>若链接指向的是某个 B 站视频，则会被渲染为对应视频标题</u>。当然，B站评论区还会存在其他类型的超链接，比如：跳转站外的蓝链(广告...)、BV号、av号、@用户昵称 …… 而其中`BV号`、`av号`也会替换为其对应的视频标题进行超链接的渲染。

从根本来说，前端 `HTML` 中，<a href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links" title="了解超链接">创建超链接</a> 通过 `<a>`标签实现，这里同样如此。问题在于：如何确认评论中某段文本是超链接？超链接的`url`如何得来？以及，如何确认渲染内容不是`url`而是对应视频标题？该视频标题如何得来？

观察网络请求，或查看[文档](https://sessionhu.github.io/bilibili-API-collect/docs/comment/)可得：

1. `GET` 请求 `https://api.bilibili.com/x/v2/reply/wbi/main` 懒加载获取评论区明细

![screenshot-of-the-reply-response](C:\Users\Administrator\Downloads\screenshot-of-the-reply-response.png)

## 浅谈短链接

## URL 的演进与规范

## 复盘

## 相关资料

- https://www.bilitools.top/
- https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links
- https://sessionhu.github.io/bilibili-API-collect/
- https://en.wikipedia.org/wiki/URL
- https://en.wikipedia.org/wiki/Directory_traversal_attack
- https://url.spec.whatwg.org/#url
- https://en.wikipedia.org/wiki/Canonicalization#URL
- https://developer.mozilla.org/zh-CN/docs/Web/API/URL









