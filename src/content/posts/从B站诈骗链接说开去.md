---
title: 从B站"诈骗链接"说开去
published: 2026-03-15
description: ''
image: ''
tags: ['bilibili','url','short-link','技术']
category: ''
draft: false
lang: 'zh-CN'
---

:::important[想法来源]
观看 [二叉树树](https://space.bilibili.com/325903362) 的视频 [【B站评论惊现诈骗链接！！！这是怎么做的？？？？】 ](https://www.bilibili.com/video/BV1tCw8zpE21/)  后，想要更深入地了解这个原理，从而有了这期博客。
:::

## 引言

在浏览 `BiliBili` 评论区时，常常会发现 B 站的视频链接以标题的形式显现，如下图：

<img src="https://cdn.jsdelivr.net/gh/lvjianchaos/Images/videolinkwithtitle.webp" alt="视频链接显示标题示例" style="border-radius: 1em;"/>

但会遇到点击的视频标题与跳转到的视频页标题不一致的现象，也就是我们所说的**诈骗链接**。具体情形可以从二叉树树的视频中看到。

他也给出了如何制作这样的“诈骗链接”：

1. 模板：`https://www.bilibili.com/video/BV_X/../BV_Y`
2. `BV_X` 替换为显示标题的 `BV` 号，`BV_Y` 替换为跳转的 `BV` 号
3. 使用任意B站短链接生成器（例如：[B站短链接生成工具](https://www.bilitools.top/)）生成短链接，并发布于B站评论区

以及漏洞的剖析：前端在渲染链接时，读取第一个合法 `BV` 号获取标题，在这里就是 `BV_X` 对应的标题，而点击会去跳转到原始的 `url`（包含`/../`），从而实际跳转到 `https://www.bilibili.com/video/BV_Y`。

这样的解释固然正确合理，但于我而言，我还想要了解更多——为什么会造成这样的结果呢？

下文就记录了我的一些探索的所得。

## 关于 B 站评论区链接的渲染

在 B 站发布评论时，尽管输入的是纯文本，但仍有些会变为能够跳转的链接（颜色、文本前图标等区分），大约包含以下几类：

- <a>@昵称</a> —— 昵称必须是存在的，并且没有拉黑你
- <a>av号</a> —— 存在，显示视频标题；不存在，显示 av 号
- <a>BV号</a> —— 存在，显示视频标题；不存在，显示 BV 号
- <a>bilibili.com域名下所有标准链接</a> —— 显示链接；若是视频链接且存在，即显示对应视频标题
- <a>b23.tv短链接</a> —— 与原始链接有关，若原始链接是视频且存在，则显示对应视频链接；否则显示短链接
- <a>站内搜索文本</a> —— 
- …………

## 关于短链接极其原理的浅析

## URL 的演进与规范

## 复盘









