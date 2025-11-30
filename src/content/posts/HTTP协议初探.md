---
title: HTTP协议初探
published: 2024-11-26
description: 'HTTP概念、发展与应用'
image: ''
tags: ["HTTP","网络","前端"]
category: '笔记'
draft: false 
lang: 'zh-CN'
---
---

## 初识HTTP

**Before Reading**  :  [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)  

### 背景知识

Q: 从浏览器的地址栏输入URL()按下回车到页面展示出来,发生了什么?
A: 简而言之,包括 ==URL 解析、DNS 解析、TCP 连接建立、HTTP 请求发送、服务器处理请求、**HTTP 响应发送**、浏览器接收响应、浏览器渲染页面、加载资源和 JavaScript 执行==。其中每个步骤又包含多个子步骤和复杂的处理逻辑.

先回想一下**TCP/IP 协议栈**(**应用层**;**传输层**;**网络层**;**网络接口层**),在这里,我们呢主要关注最上层的应用层中HTTP相关内容.

### 什么是HTTP?

HTTP（HyperText Transfer Protocol，超文本传输协议）是互联网上应用最广泛的一种网络协议。它是客户端和服务器之间进行通信的基础协议，用于传输超文本（如 HTML 文档）和其他资源（如图像、视频、JSON 数据等）。

#### 概念

- **超文本传输协议**：HTTP 是一种应用层协议，用于在客户端和服务器之间传输超文本（如 HTML 文档）和其他资源。
  
- **基于 TCP 协议**：HTTP 建立在 TCP/IP 协议栈之上，使用 TCP 协议进行数据传输。默认情况下，HTTP 使用 80 端口，HTTPS 使用 443 端口。
  
- **请求-响应模型**：HTTP 采用请求-响应模型，客户端发送 HTTP 请求，服务器返回 HTTP 响应。
  
- **简单可扩展**：HTTP 协议设计简单，易于实现和扩展。它支持多种请求方法（如 GET、POST、PUT、DELETE 等）和头部字段，可以根据需要进行扩展。
  
- **无状态**：HTTP 协议是无状态的，即服务器不会保存客户端的请求状态。每个请求都是独立的，服务器不会记住之前的请求。
  
#### 特点

##### 1. 请求-响应模型

HTTP 采用请求-响应模型，客户端发送 HTTP 请求，服务器返回 HTTP 响应。请求和响应都包含以下几个部分：

- **请求行/状态行**：包含请求方法（如 GET、POST）、请求路径（如 `/index.html`）和 HTTP 协议版本（如 HTTP/1.1）。
  
- **请求头/响应头**：包含各种头部字段，如 `User-Agent`、`Accept`、`Content-Type`、`Content-Length` 等。
  
- **请求体/响应体**：包含请求或响应的数据，通常是 HTML、JSON、XML 等格式的数据。
  
##### 2. 简单可扩展

HTTP 协议设计简单，易于实现和扩展。它支持多种请求方法（如 GET、POST、PUT、DELETE 等）和头部字段，可以根据需要进行扩展。例如：

- **请求方法**：HTTP 定义了多种请求方法，如 GET（获取资源）、POST（提交数据）、PUT（更新资源）、DELETE（删除资源）等。
  
- **头部字段**：HTTP 支持多种头部字段，如 `User-Agent`（客户端标识）、`Accept`（客户端接受的媒体类型）、`Content-Type`（请求或响应的数据类型）等。
  
##### 3. 无状态

HTTP 协议是无状态的，即服务器不会保存客户端的请求状态。**每个请求都是独立的，服务器不会记住之前的请求**。这种设计简化了服务器的设计和实现，但也带来了一些问题，如需要通过其他方式（如 Cookie、Session）来维护客户端状态。

##### 4. 基于 TCP 协议

HTTP 建立在 TCP/IP 协议栈之上，使用 TCP 协议进行数据传输。TCP 协议提供了可靠的、面向连接的通信服务，确保数据在网络中的可靠传输。

##### 5. 支持多种资源类型

HTTP 不仅用于传输超文本（如 HTML 文档），还支持传输多种资源类型，如图像、视频、音频、JSON 数据、XML 数据等。通过 `Content-Type` 头部字段，服务器可以指定响应数据的类型，客户端可以根据类型进行处理。

### 协议分析

#### 发展

##### HTTP/0.9 (1991) - The One Liner

- **特点**：
  
  - 最早的 HTTP 版本，非常简单。

  - 只支持 GET 请求方法。

  - 没有请求头和响应头，只有请求行和响应体。

  - 响应体只能是 HTML 文档。

- ***示例**:

- 请求

```http
Get /index.html
```

- 响应

```http
(response body)
(connection closed)
```

##### HTTP/1.0（1996）

- **特点**：
  
  - 引入了请求头和响应头，支持多种请求方法（如 GET、**POST、HEAD**）

  - 添加了**状态码(Status code)** 以标识响应

  - 支持多种资源类型（如 HTML、**图像、视频、纯文本等**）。

  - 每个请求都需要建立一个新的 TCP 连接，请求完成后立即关闭连接。
  
    - 引入了字符集支持, 包括多部分类型、授权、缓存、内容编码等
- **示例**:

- 请求
 如下所示:
  - 除了请求,
  - 客户端还发送了它的个人信息,
  - 要求的响应类型
  - 等等等等

```http
GET / HTTP/1.0
Host: cs.fyi
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)
Accept: */*
```

- 响应
 如下所示:
  - 响应的开头是吧友版本号的HTTP,接着一个状态码和一个描述它的词或原因

```http
HTTP/1.0 200 OK 
Content-Type: text/html
Content-Length: 137582
Expires: Thu, 05 Dec 1997 16:00:00 GMT
Last-Modified: Wed, 5 August 1996 15:55:28 GMT
Server: Apache 0.84

(response body)
(connection closed)
```

在这一版本,请求和响应仍然保持着ASCII编码, 但是响应体课包含图片,视频,纯文本和其他内容类型, 比起"Hyper Text", HMTP(Hypermedia transfer protocol)或许是更恰切的描述,不过...

HTTP/1.0的一个**主要缺点**是不能为每此连接提供多个请求。也就是说，无论何时客户机需要从服务器获得什么东西，它都必须打开一个新的 TCP 连接，在这个单个请求完成之后，连接将被关闭。对于任何下一个需求，它必须在一个新的连接上。
So,Why is it **BAD**?
让我们假设您访问了一个包含10个图像、5个样式表和5个 javascript 文件的网页，当请求该网页时，总共需要获取20个项目。由于服务器在请求完成后立即关闭连接，因此将有一系列20个独立的连接，其中每个项目将在其各自的连接上逐个提供服务。这种大量的连接会导致严重的性能损失，因为需要一个新的 TCP 连接会造成严重的性能损失，这是由于**三路握手**后缓慢启动造成的

###### Three-way Handshake

1. **客户端发送 SYN 包**：客户端向服务器发送一个 SYN（同步）包(由 客户机拾取一个随机数假设为`x` 组成)，请求建立连接。

2. **服务器发送 SYN-ACK 包**：服务器收到 SYN 包后，向客户端发送一个 SYN-ACK（同步-确认）包(由 服务器拾取的 `y` 和数字 `x+1`，其中 `x` 是客户端发送的数字 组成)，表示同意建立连接。

3. **客户端发送 ACK 包**：客户端收到 SYN-ACK 包后，向服务器发送一个 ACK（确认）包(由 `y+1` 组成)，表示连接已建立。

三次握手完成后，客户端和服务器之间的数据共享就可以开始了。值得注意的是，客户端可以在调度最后一个 ACK 数据包后立即开始发送应用程序数据，但服务器仍然必须等待收到 ACK 数据包才能完成请求。

当然, 严重的性能损耗, 不仅仅是由于 TCP 连接的建立过程（三次握手）造成的，还包括 TCP 连接的关闭、连接的重复建立和关闭、并发请求的限制以及缺乏缓存机制等因素。

#####  HTTP/1.1（1997）

- **特点**：
  
  - **引入了持久连接（Keep-Alive）**，允许多个请求和响应复用同一个 TCP 连接，减少了连接建立和关闭的开销。要关闭连接，请求上必须有标题 Connection: close。客户端通常在最后一个请求中发送此标头以安全地关闭连接。

  - **支持管道化（Pipelining）**，允许客户端在一个 TCP 连接上发送多个请求，服务器按顺序返回响应。那么,客户机如何知道这是第一个响应下载完成和下一个响应的内容开始的地方? 要解决这个问题，必须有 Content-Length 头，客户端可以使用它来确定响应的结束位置，并且可以开始等待下一个响应。
     >It should be noted that in order to benefit from persistent connections or pipelining, Content-Length header must be available on the response, because this would let the client know when the transmission completes and it can send the next request (in normal sequential way of sending requests) or start waiting for the the next response (when pipelining is enabled).
     >
     >But there was still an issue with this approach. And that is, what if the data is dynamic and server cannot find the content length before hand? Well in that case, you really can’t benefit from persistent connections, could you?! In order to solve this HTTP/1.1 introduced chunked encoding. In such cases server may omit content-Length in favor of chunked encoding (more to it in a moment). However, if none of them are available, then the connection must be closed at the end of request.

    - **分块传输(Chunked Transfers)** ,  在动态内容的情况下，当服务器在传输开始时无法真正找到 Content-Length 时，它可能会开始分块发送内容（逐块），并在发送时为每个块添加 Content-Length。当所有 chunk 都发送完毕时，即整个传输已完成，它会发送一个空 chunk，即 Content-Length 设置为零的 chunk，以识别传输已完成的客户端。为了通知客户端有关分块传输的信息，服务器包含标头 Transfer-Encoding： chunked
  
  - 引入了缓存机制（如 `Cache-Control`、`ETag`），提高了性能。

  - 支持虚拟主机（Virtual Hosts），允许多个域名共享同一个 IP 地址。

  - 引入了更多的请求方法（如 PUT、DELETE、OPTIONS、PATCH）和状态码。
  
    - 客户端 Cookie
  
    - 增强的压缩支持
    - ......

#####  HTTP/2（2015）

- **特点**：
  
  - 基于 Google 的 SPDY 协议，改进了性能和安全性。

  - 引入了**多路复用（Multiplexing）**，允许多个请求和响应在同一个 TCP 连接上并行传输，解决了 HTTP/1.1 的队头阻塞问题, 即客户端不必等待需要时间的请求，而其他请求仍将得到处理。

  - 引入了**头部压缩（Header Compression）**，减少了传输的数据量。
     它的本质是，当我们不断从同一个客户端访问服务器时，我们会一遍又一遍地在标头中发送大量冗余数据，有时可能会有 cookie 增加标头大小，从而导致带宽使用和延迟增加

     与请求和响应不同，标头不是以 gzip 或 compress 等格式压缩的，但有一种不同的标头压缩机制，即使用霍夫曼代码对文本值进行编码，并且标头表由客户端和服务器维护，客户端和服务器在后续请求中省略任何重复的标头（例如用户代理等），并使用由两者维护的标头表引用它们。

  补充: 当我们谈论 Headers 时，Headers 仍然与 HTTP/1.1 中相同，除了添加了一些伪 Headers，即 `：method`、`：scheme`、`：host` 和 `:p ath`

  - 支持**服务器推送（Server Push）**，服务器可以在客户端请求之前主动推送资源，减少了客户端的等待时间。
     例如，假设浏览器加载了一个网页，它会解析整个页面以找出它必须从服务器加载的远程内容，然后向服务器发送后续请求以获取该内容
  
  服务器推送允许服务器通过推送它知道客户端将需要的数据来减少往返。它是如何完成的呢? 服务器发送一个名为 PUSH_PROMISE 的特殊帧通知客户端，“嘿，我即将将此资源发送给您！不要向我要。” PUSH_PROMISE 帧与导致推送发生的流相关联，并且它包含承诺的流 ID，即服务器将发送要推送的资源的流。
  
  - 使用**二进制帧（Binary Framing）** 代替了文本格式，提高了解析效率。
     作为二进制协议，它更容易解析，但与 HTTP/1.x 不同的是，它不再能被人眼读取。HTTP/2 的主要构建块是帧和流
  
        HTTP 消息现在由一个或多个帧组成。元数据有一个 HEADERS 帧，有效负载有一个  DATA 帧，并且存在几种其他类型的帧（HEADERS、DATA、RST_STREAM、SETTINGS、PRIORITY 等），您可以通过 [HTTP/2 规范](https://http2.github.io/http2-spec/#FrameTypes)进行检查。

  每个 HTTP/2 请求和响应都有一个唯一的流 ID，并被划分为帧。帧只不过是二进制数据片段。帧的集合称为 Stream。每个帧都有一个 stream id，用于标识它所属的流，并且每个帧都有一个通用的标头。此外，除了 stream ID 唯一之外，值得一提的是，客户端发起的任何请求都使用奇数，而来自服务器的响应具有偶数 stream ID。
  
  除了 HEADERS 和 DATA 之外，这里值得一提的另一个帧类型是 RST_STREAM。这是一种特殊的帧类型，用于中止某些流，即客户端可以发送此帧以让服务器知道我不再需要此流。在 HTTP/1.1 中，让服务器停止向客户端发送响应的唯一方法是关闭连接，这会导致延迟增加，因为必须为任何连续请求打开新连接。在 HTTP/2 中，客户端可以使用 RST_STREAM 并停止接收特定流，而连接仍将打开，而其他流仍将处于活动状态。
  
  - **请求优先级(Request Prioritization)**
  
  客户端可以通过在打开流的 HEADERS 帧中包含优先级信息来为流分配优先级。在任何其他时间，客户端都可以发送 PRIORITY 帧来更改流的优先级。
  
  在没有任何优先级信息的情况下，server 异步处理请求，即没有任何顺序。如果为流分配了优先级，则根据此优先级信息，server 决定需要提供多少资源来处理哪个请求。

- **示例**：
  
  - HTTP/2 使用二进制帧传输数据，无法直接查看文本格式。

##### HTTP/3（2020）

- **特点**：
  
  - 基于 Google 的 QUIC 协议，改进了性能和安全性。

  - 使用 UDP 协议代替 TCP 协议，减少了连接建立和拥塞控制的开销。

  - 引入了多路复用（Multiplexing），允许多个请求和响应在同一个 UDP 连接上并行传输，解决了 TCP 的队头阻塞问题。

  - 引入了头部压缩（QPACK），减少了传输的数据量。

  - 支持 0-RTT（Zero Round Trip Time）连接建立，减少了连接建立的时间。

  - 使用 TLS 1.3 进行加密，提高了安全性。

- **示例**：
  
  - HTTP/3 使用 QUIC 协议传输数据，无法直接查看文本格式。

###### 总结

- **HTTP/0.9**：最早的版本，非常简单，只支持 GET 请求。
  
- **HTTP/1.0**：引入了请求头和响应头，支持多种请求方法和资源类型。
  
- **HTTP/1.1**：引入了持久连接、管道化、缓存机制、虚拟主机等，提高了性能和功能。
  
- **HTTP/2**：基于 SPDY 协议，引入了多路复用、头部压缩、服务器推送等，进一步提高了性能。
  
- **HTTP/3**：基于 QUIC 协议，使用 UDP 代替 TCP，引入了多路复用、头部压缩、0-RTT 连接建立等，进一步提高了性能和安全性。

#### 报文

以 ==HTTP/1.1== 为例
![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/HTTP_1.1.png)

##### 请求方法 Method

###### 1. GET

- **用途**：获取资源。
  
- **特点**：
  
  - 请求参数通过 URL 传递，通常用于获取数据。

  - 请求是幂等的，即多次请求不会改变服务器状态。

  - 请求体为空。

- **示例**：
  
```http
GET /index.html HTTP/1.1
Host: www.example.com
```

###### 2. POST

- **用途**：提交数据，通常用于创建资源。
  
- **特点**：
  
  - 请求参数通过请求体传递，通常用于提交表单数据或上传文件。

  - 请求不是幂等的，即多次请求可能会改变服务器状态。

  - 请求体可以包含数据。

- **示例**：
  
```http
POST /submit HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded

name=John&age=30
```

###### 3. PUT

- **用途**：更新资源，通常用于替换现有资源。
  
- **特点**：
  
  - 请求参数通过请求体传递，通常用于更新资源。

  - 请求是幂等的，即多次请求不会改变服务器状态。

  - 请求体可以包含数据。

- **示例**：
  
```http
PUT /user/123 HTTP/1.1
Host: www.example.com
Content-Type: application/json
{
  "name": "John",
  "age": 30
}
```

###### 4. DELETE

- **用途**：删除资源。
  
- **特点**：
  
  - 请求参数通过 URL 传递，通常用于删除资源。

  - 请求是幂等的，即多次请求不会改变服务器状态。

  - 请求体为空。

- **示例**：
  
```http
DELETE /user/123 HTTP/1.1
Host: www.example.com
```

###### 5. HEAD

- **用途**：获取资源的元数据，不返回响应体。
  
- **特点**：
  
  - 请求参数通过 URL 传递，通常用于获取资源的元数据（如响应头）。

  - 请求是幂等的，即多次请求不会改变服务器状态。

  - 响应体为空。

- **示例**：
  
```http
HEAD /index.html HTTP/1.1
Host: www.example.com
```

###### 6. OPTIONS

- **用途**：获取服务器支持的请求方法和功能。
  
- **特点**：
  
  - 请求参数通过 URL 传递，通常用于获取服务器支持的请求方法和功能。

  - 请求是幂等的，即多次请求不会改变服务器状态。

  - 响应体通常包含服务器支持的请求方法和功能。

- **示例**：
  
```http
OPTIONS /user HTTP/1.1
Host: www.example.com
```

###### 7. PATCH

- **用途**：部分更新资源。
  
- **特点**：
  
  - 请求参数通过请求体传递，通常用于部分更新资源。

  - 请求不是幂等的，即多次请求可能会改变服务器状态。

  - 请求体可以包含数据。

- **示例**：
  
```http
PATCH /user/123 HTTP/1.1
Host: www.example.com
Content-Type: application/json
{
  "age": 31
}
```

###### 8. CONNECT

- **用途**：建立隧道，通常用于代理服务器。
  
- **特点**：
  
  - 请求参数通过 URL 传递，通常用于建立隧道。

  - 请求不是幂等的，即多次请求可能会改变服务器状态。

  - 请求体为空。

- **示例**：
  
```http
CONNECT www.example.com:443 HTTP/1.1
Host: www.example.com
```

###### 9. TRACE

- **用途**：回显请求，用于调试。
  
- **特点**：
  
  - 请求参数通过 URL 传递，通常用于调试。

  - 请求是幂等的，即多次请求不会改变服务器状态。

  - 响应体包含请求的原始数据。

- **示例**：
  
```http
TRACE /index.html HTTP/1.1
Host: www.example.com
```

###### ==总结==

|   **方法**    |       用途        |
| :---------: | :-------------: |
|   **GET**   |      获取资源       |
|  **POST**   |  提交数据，通常用于创建资源  |
|   **PUT**   | 更新资源，通常用于替换现有资源 |
| **DELETE**  |      删除资源       |
|  **HEAD**   | 获取资源的元数据，不返回响应体 |
| **OPTIONS** | 获取服务器支持的请求方法和功能 |
|  **PATCH**  |     部分更新资源      |
| **CONNECT** | 建立隧道，通常用于代理服务器  |
|  **TRACE**  |    回显请求，用于调试    |

###### **补充:**

- Safe(安全的) : 不会修改服务器的数据的方法
 GET HEAD OPTIONS
- Idempotent(幂等的) : 同样的请求被执行一次与连续执行多次的效果是==一样==的, 服务器的状态也是==一样==的, 所有的safe方法都是Idempotent的
 GET HEAD OPTIONS DELETE

##### 状态码 Status Code

| Status Code |           解释           |
| :---------: | :--------------------: |
|   **1xx**   |  信息性状态码，表示请求已被接收，继续处理  |
|   **2xx**   |    成功状态码，表示请求已成功处理     |
|   **3xx**   | 重定向状态码，表示需要进一步操作才能完成请求 |
|   **4xx**   |   客户端错误状态码，表示客户端请求有误   |
|   **5xx**   | 服务器错误状态码，表示服务器处理请求时出错  |

###### 常见的例子

- **100 Continue**：服务器已接收到请求头，客户端应继续发送请求体

- **200 OK**：请求成功，服务器返回请求的资源

- **301 Moved Permanently**：请求的资源已永久移动到新位置，客户端应使用新的 URL
  
- **302 Found**：请求的资源临时移动到新位置，客户端应继续使用原 URL

- **401 Unauthorized**：请求需要身份验证，客户端未提供有效的身份验证信息

- **404 Not Found**：请求的资源不存在

- **500 Internal Server Error**：服务器内部错误，无法完成请求

- **502 Bad Gateway**：服务器作为网关或代理时，从上游服务器收到无效响应

- **504 Gateway Timeout**：服务器作为网关或代理时，等待上游服务器的响应超时

##### RESTful API

RESTful API（Representational State Transfer,表现层状态转化 API）是一种基于 HTTP 协议的 Web 服务设计风格它通过标准的 HTTP 方法（如 GET、POST、PUT、DELETE）来操作资源，并使用统一的接口来访问和操作这些资源。RESTful API 的设计理念是简单、轻量、易于扩展和维护。

###### 核心概念

1. 资源（Resource）
  
- **资源**是 RESTful API 的核心概念，表示系统中的任何对象或数据。资源可以是用户、订单、产品、文章等。

- 每个资源都有一个**唯一的标识符（URI）**，用于在系统中唯一标识该资源。

2. 统一接口（Uniform Interface）
  
- **统一接口**是指 RESTful API 使用标准的 HTTP 方法来操作资源。常见的 HTTP 方法包括：
  - **GET**：获取资源。

  - **POST**：创建资源。

  - **PUT**：更新资源。

  - **DELETE**：删除资源。

- 通过统一接口，客户端可以使用相同的接口来访问和操作不同的资源，简化了 API 的设计和使用。

3. 状态转移（State Transfer）
  
- **状态转移**是指客户端和服务器之间的交互过程中，资源的状态会发生变化。RESTful API <u>通过 HTTP 方法来实现状态转移</u>。

- 例如，客户端发送一个 POST 请求来创建一个新资源，服务器接收到请求后，资源的状态从“不存在”变为“存在”。

4. 无状态（Stateless）
  
- **无状态**是指服务器不会保存客户端的请求状态。每个请求都是独立的，服务器不会记住之前的请求。

- 这种设计简化了服务器的设计和实现，但也带来了一些问题，如需要通过其他方式（如 Cookie、Session）来维护客户端状态。
  
###### RESTful API 的设计原则

1. **使用名词表示资源**

- 资源应该使用名词来表示，而不是动词。例如，使用 `/users` 表示用户资源，而不是 `/getUsers`。

2. 使用 HTTP 方法操作资源

- 使用标准的 HTTP 方法来操作资源：
  - **GET**：获取资源。

  - **POST**：创建资源。

  - **PUT**：更新资源。

  - **DELETE**：删除资源。

3. 使用 URI 标识资源

- 每个资源都有一个唯一的 URI，用于在系统中唯一标识该资源。例如，`/users/123` 表示 ID 为 123 的用户资源。

4. 使用 JSON 或 XML 表示资源
  
- 资源通常使用 JSON 或 XML 格式表示，便于客户端和服务器之间的数据交换。

5. 使用状态码表示请求结果
  
- 使用标准的 HTTP 状态码表示请求的结果，如 200 OK、404 Not Found、500 Internal Server Error 等。

###### 示例

==用户管理==

1. 获取所有用户

- **请求方法**：GET
  
- **URI**：`/users`
  
- **示例**：

```http
GET /users HTTP/1.1
Host: api.example.com
```

- **响应**：

```json
[
  {
 "id": 1,
 "name": "Alice",
 "email": "alice@example.com"
  },
  {
 "id": 2,
 "name": "Bob",
 "email": "bob@example.com"
  }
]
```

2. 获取单个用户

- **请求方法**：GET
  
- **URI**：`/users/{id}`
  
- **示例**：
  
```http
GET /users/1 HTTP/1.1
Host: api.example.com
```

- **响应**：

```json
{
  "id": 1,
  "name": "Alice",
  "email": "alice@example.com"
}    
```

3. 创建用户

- **请求方法**：POST
  
- **URI**：`/users`
  
- **示例**：

```http
POST /users HTTP/1.1
Host: api.example.com
Content-Type: application/json
{
  "name": "Charlie",
  "email": "charlie@example.com"
}   
```

- **响应**：

```json
{
  "id": 3,
  "name": "Charlie",
  "email": "charlie@example.com"
}    
```

4. 更新用户

- **请求方法**：PUT
  
- **URI**：`/users/{id}`
  
- **示例**：

```http
PUT /users/1 HTTP/1.1
Host: api.example.com
Content-Type: application/json
{
  "name": "Alice Smith",
  "email": "alice.smith@example.com"
}
```

- **响应**：

```json
{
  "id": 1,
  "name": "Alice Smith",
  "email": "alice.smith@example.com"
}
```

5. 删除用户

- **请求方法**：DELETE
  
- **URI**：`/users/{id}`
  
- **示例**：

```http
DELETE /users/1 HTTP/1.1
Host: api.example.com
```

- **响应**：

```json
{
  "message": "User deleted successfully"
}
```

##### 常用请求头

###### 1. Host

- **用途**：指定请求的目标主机和端口。
  
- **示例**：

```http
Host: www.example.com
```

###### 2. User-Agent

- **用途**：标识客户端的类型和版本。如:UA头部等
  
- **示例**：

```http
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
```

###### 3. Accept

- **用途**：指定客户端可以接受的响应内容类型。
  
- **示例**：

```http
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
```

###### 4. Accept-Language

- **用途**：指定客户端可以接受的自然语言。
  
- **示例**：

```http
Accept-Language: en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7
```

###### 5. Accept-Encoding

- **用途**：指定客户端可以接受的编码方式（如 gzip、deflate）。
  
- **示例**：

```http
Accept-Encoding: gzip, deflate, br
```

###### 6. Content-Type

- **用途**：指定请求体的 MIME 类型。
     MIME 类型（Multipurpose Internet Mail Extensions Type）是一种标准，用于表示文档、文件或字节流的性质和格式。MIME 类型由两部分组成：**类型**（Type）和**子类型**（Subtype），中间用斜杠（`/`）分隔。例如：

  - `text/plain`：表示纯文本文件。

  - `text/html`：表示 HTML 文件。

  - `application/json`：表示 JSON 数据。

  - `image/jpeg`：表示 JPEG 图像文件。

  - `audio/mpeg`：表示 MP3 音频文件。

  - `video/mp4`：表示 MP4 视频文件。
- **示例**：

```http
Content-Type: application/json
```

###### 7. Content-Length

- **用途**：指定请求体的长度（以字节为单位）。
  
- **示例**：

```http
Content-Length: 1234
```

###### 8. Authorization

- **用途**：指定客户端的身份验证信息。
  
- **示例**：

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

###### 9. Cookie

- **用途**：指定客户端发送的 Cookie 信息。有Cookie并且同域访问时会自动带上
  
- **示例**：

```http
Cookie: session_id=abc123; user_id=456
```

###### 10. Referer

- **用途**：指定请求的来源 URL(适用于所有类型的请求, 会精确到详细页面地址, csrf拦截长常到这个字段)。
  
- **示例**：

```http
Referer: https://www.example.com/previous-page
```

###### 11. Origin

- **用途**：指定请求的来源域名，通常用于跨域请求。Origin比Refer更尊重隐私
  
- **示例**：

```http
Origin: https://www.example.com
```

###### 12. Cache-Control

- **用途**：指定缓存策略。
  
- **示例**：

```http
Cache-Control: no-cache
```

###### 13. If-Modified-Since

- **用途**：指定请求资源的最后修改时间，用于条件请求。对应服务器的Last-Modified, 用来匹配看文件是否变动,只能精确到1s之内
  
- **示例**：

```http
If-Modified-Since: Sat, 29 Oct 2022 19:43:31 GMT
```

###### 14. If-None-Match

- **用途**：指定请求资源的 ETag，用于条件请求。对应服务器的ETag, 用来匹配文件内容是否改变(非常精确)
  
- **示例**：

```http
If-None-Match: "abc123456789"
```

###### 15. Connection

- **用途**：指定连接的管理方式，如保持连接（Keep-Alive）或关闭连接（Close）。
  
- **示例**：

```http
Connection: keep-alive
```

###### 16. Upgrade

- **用途**：指定客户端希望升级的协议，如 WebSocket。
  
- **示例**：

```http
Upgrade: websocket
```

###### 17. X-Requested-With

- **用途**：标识请求是否为 AJAX 请求。
  
- **示例**：

```http
X-Requested-With: XMLHttpRequest
```

###### 18. X-Forwarded-For

- **用途**：指定客户端的真实 IP 地址，通常用于代理服务器。
  
- **示例**：

```http
X-Forwarded-For: 192.0.2.1
```

###### 19. X-Forwarded-Proto

- **用途**：指定客户端请求的协议（如 HTTP 或 HTTPS），通常用于代理服务器。
  
- **示例**：

```http
X-Forwarded-Proto: https
```

###### 20. X-CSRF-Token

- **用途**：指定 CSRF（跨站请求伪造）令牌，用于防止 CSRF 攻击。
  
- **示例**：

```http
X-CSRF-Token: abc123456789
```

##### 常见响应头

###### 1. Content-Type

- **用途**：指定响应体的 MIME 类型。
  
- **示例**：

```http
Content-Type: text/html; charset=UTF-8
```

- **解释**：`Content-Type` 响应头用于指定响应体的 MIME 类型，如 `text/html` 表示 HTML 文档，`application/json` 表示 JSON 数据。`charset` 参数用于指定字符编码，如 `UTF-8`。

###### 2. Cache-Control

- **用途**：指定缓存策略。
  
- **示例**：

```http
Cache-Control: max-age=3600, public
```

- **解释**：`Cache-Control` 响应头用于指定缓存策略，如 `max-age=3600` 表示资源可以在 3600 秒（1 小时）内使用缓存，`public` 表示资源可以被任何缓存存储。

###### 3. Last-Modofied

- **用途**：指定资源的最后修改时间。
  
- **示例**：

```http
Last-Modified: Wed, 21 Oct 2025 07:28:00 GMT
```

- **解释**：`Last-Modified` 响应头用于指定资源的最后修改时间，客户端在后续请求中可以通过 `If-Modified-Since` 请求头来判断资源是否已修改。

###### 4. Expires

- **用途**：指定资源的过期时间。
  
- **示例**：

```http
Expires: Wed, 21 Oct 2025 07:28:00 GMT
```

- **解释**：`Expires` 响应头用于指定资源的过期时间，表示资源在指定时间之前可以使用缓存，而不需要重新请求服务器。

###### 5. Max-age

- **用途**：指定资源的缓存时间（以秒为单位）。
  
- **示例**：

```
http
Cache-Control: max-age=3600
```

- **解释**：`Max-Age` 是 `Cache-Control` 响应头的一个指令，用于指定资源的缓存时间（以秒为单位）。它告诉客户端在指定时间内可以使用缓存的资源，而不需要重新请求服务器。

###### 6. Set-Cookie

- **用途**：设置 Cookie。
  
- **示例**：

```
http
Set-Cookie: session_id=abc123; Expires=Wed, 21 Oct 2025 07:28:00 GMT; Path=/; Secure; HttpOnly

```

- **解释**：`Set-Cookie` 响应头用于设置 Cookie，客户端在后续的请求中会将该 Cookie 发送回服务器。`Expires` 参数用于指定 Cookie 的过期时间，`Path` 参数用于指定 Cookie 的路径，`Secure` 参数表示 Cookie 只能通过 HTTPS 协议发送，`HttpOnly` 参数表示 Cookie 不能通过 JavaScript 访问。

###### 7. Server

- **用途**：指定服务器软件的名称和版本。
  
- **示例**：

```
http
Server: Apache/2.4.46 (Unix)
```

- **解释**：`Server` 响应头用于指定服务器软件的名称和版本，如 `Apache/2.4.46` 表示服务器使用的是 Apache 2.4.46 版本。

###### 8.Access-Control-Allow-Origin

- **用途**：指定允许访问资源的源（域名）。
  
- **示例**：

```http
Access-Control-Allow-Origin: *
```

- **解释**：`Access-Control-Allow-Origin` 响应头用于指定允许访问资源的源（域名）。`*` 表示允许所有域名访问资源，也可以指定具体的域名，如 `https://www.example.com`。

##### 缓存

HTTP 缓存（HTTP Caching）是一种用于减少网络请求和提高网站性能的技术。通过缓存，客户端（通常是浏览器）可以在本地存储资源的副本，并在后续请求中使用这些缓存的资源，而不需要重新请求服务器。HTTP 缓存可以显著减少网络延迟和带宽消耗，提高网站的响应速度和用户体验。

###### HTTP 缓存的类型

1. 强缓存

  **强缓存**是指客户端在缓存有效期内直接使用本地缓存的资源，而不需要向服务器发送请求。强缓存通过以下响应头来控制：

- **`Cache-Control`**：指定缓存策略，如 `max-age`、`public`、`private`、`no-cache`、`no-store` 等。

- **`Expires`**：指定资源的过期时间，表示资源在指定时间之前可以使用缓存。

   `Cache-Control` 指令
  到期

- **`max-age`**：指定资源的缓存时间（以秒为单位）。例如，`Cache-Control: max-age=3600` 表示资源可以在 3600 秒（1 小时）内使用缓存。
  可缓存性
- **`public`**：表示资源可以被任何缓存存储，包括代理服务器。

- **`private`**：表示资源只能被客户端缓存，不能被代理服务器缓存。

- **`no-cache`**：表示资源在使用缓存之前必须向服务器验证，即使缓存未过期。

- **`no-store`**：表示资源不能被缓存，每次请求都必须从服务器获取最新的资源。
  重新验证/重新加载
- **`must-revaliable`**:  一旦资源过期，在成功向原始服务器验证之前，不能使用

  `Expires` 响应头

  `Expires` 响应头的值是一个具体的日期和时间，表示资源的过期时间。例如，`Expires: Wed, 21 Oct 2025 07:28:00 GMT` 表示资源在 2025 年 10 月 21 日 07:28:00 之前可以使用缓存。

2. 协商缓存

 **协商缓存**是指客户端在缓存过期后，向服务器发送请求，询问资源是否有更新。服务器通过比较资源的最后修改时间和客户端的缓存时间，决定是否返回新的资源。协商缓存通过以下响应头和请求头来控制：

- **`Last-Modified`** 和 **`If-Modified-Since`**：通过资源的最后修改时间来判断资源是否有更新。

- **`ETag`** 和 **`If-None-Match`**：通过资源的唯一标识符（ETag）来判断资源是否有更新。

 `Last-Modified` 和 `If-Modified-Since`

- **`Last-Modified`**：服务器在响应头中返回资源的最后修改时间。例如，`Last-Modified: Wed, 21 Oct 2025 07:28:00 GMT`。

- **`If-Modified-Since`**：客户端在请求头中发送资源的最后修改时间，服务器通过比较这个时间和资源的实际修改时间，决定是否返回新的资源。

 `ETag` 和 `If-None-Match`

- **`ETag`**：服务器在响应头中返回资源的唯一标识符（ETag）。例如，`ETag: "abc123456789"`。

- **`If-None-Match`**：客户端在请求头中发送资源的 ETag，服务器通过比较这个 ETag 和资源的实际 ETag，决定是否返回新的资源。

###### HTTP 缓存的工作流程

![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/%E7%BC%93%E5%AD%98_%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B.png)

1. 强缓存的工作流程

1. **客户端请求资源**：客户端向服务器发送请求，请求某个资源。

2. **服务器返回资源和缓存策略**：服务器返回资源，并在响应头中设置 `Cache-Control` 和 `Expires` 等缓存策略。

3. **客户端缓存资源**：客户端根据缓存策略缓存资源。

4. **客户端使用缓存资源**：在缓存有效期内，客户端直接使用本地缓存的资源，而不需要重新请求服务器。

2. 协商缓存的工作流程

1. **客户端请求资源**：客户端向服务器发送请求，请求某个资源。

2. **服务器返回资源和缓存策略**：服务器返回资源，并在响应头中设置 `Last-Modified` 和 `ETag` 等缓存策略。

3. **客户端缓存资源**：客户端根据缓存策略缓存资源。

4. **客户端缓存过期**：在缓存过期后，客户端向服务器发送请求，并在请求头中设置 `If-Modified-Since` 和 `If-None-Match`。

5. **服务器验证资源**：服务器通过比较 `If-Modified-Since` 和 `If-None-Match` 与资源的实际修改时间和 ETag，决定是否返回新的资源。

6. **服务器返回响应**：如果资源未修改，服务器返回 `304 Not Modified` 响应，客户端继续使用缓存的资源；如果资源已修改，服务器返回新的资源。

###### 缓存的最佳实践

1. 使用 `Cache-Control` 和 `Expires`

- 对于静态资源（如图片、CSS 文件、JavaScript 文件），可以设置较长的 `max-age` 和 `Expires`，以减少客户端对服务器的请求，提高网站的性能。

- 对于动态内容（如 API 响应），可以设置较短的 `max-age` 和 `Expires`，以确保客户端能够及时获取最新的内容。

2. 使用 `Last-Modified` 和 `ETag`

- 对于经常更新的资源，可以使用 `Last-Modified` 和 `ETag` 进行协商缓存，减少带宽消耗。

- 对于不经常更新的资源，可以使用强缓存策略，减少客户端对服务器的请求。

3. 避免缓存敏感数据

- 对于包含敏感数据的响应（如用户个人信息、支付信息等），应设置 `Cache-Control: no-store`，确保数据不会被缓存。

4. 使用 CDN

- 使用内容分发网络（CDN）可以进一步提高缓存的效果，减少服务器的负载和网络延迟。

##### Cookie

Cookie 是一种在客户端（通常是浏览器）和服务器之间传递的小型文本数据。服务器可以通过 HTTP 响应头（`Set-Cookie`）将 Cookie 发送给客户端，客户端在后续的请求中通过 HTTP 请求头（`Cookie`）将 Cookie 发送回服务器。Cookie 通常用于存储用户会话信息、用户偏好设置、购物车内容等。

###### Cookie 的用途

1. 会话管理

- **会话管理**是 Cookie 最常见的用途之一。服务器可以通过 Cookie 来识别用户的会话，从而实现用户登录状态的保持。
- 例如，当用户登录网站时，服务器会生成一个唯一的会话 ID，并将其存储在 Cookie 中。客户端在后续的请求中会将该 Cookie 发送回服务器，服务器通过会话 ID 识别用户。

2. 个性化设置

- **个性化设置**是指根据用户的偏好设置，提供个性化的内容和服务。服务器可以通过 Cookie 存储用户的偏好设置，并在后续的请求中根据这些设置提供个性化的内容。
- 例如，网站可以根据用户的语言偏好设置，提供不同语言的页面内容。

3. 购物车

- **购物车**是电子商务网站中常见的功能。服务器可以通过 Cookie 存储用户的购物车内容，并在用户浏览网站时保持购物车的状态。
- 例如，当用户将商品添加到购物车时，服务器会将商品信息存储在 Cookie 中。用户在浏览其他页面时，购物车内容会保持不变。

4. 跟踪用户行为

- **跟踪用户行为**是指通过 Cookie 记录用户的浏览行为，从而进行用户行为分析和广告投放。
- 例如，广告平台可以通过 Cookie 记录用户的浏览历史，从而向用户展示相关的广告。

###### Cookie 的属性

Cookie 可以通过多个属性来控制其行为和生命周期。以下是一些常见的 Cookie 属性：

1. `Name` 和 `Value`

- **`Name`**：Cookie 的名称，用于在客户端和服务器之间唯一标识该 Cookie。
- **`Value`**：Cookie 的值，存储在 Cookie 中的数据。

2. `Domain`

- **`Domain`**：指定 Cookie 可以发送给哪些域名。默认情况下，Cookie 只能发送给设置它的域名。
- 例如，如果 `Domain` 设置为 `example.com`，则 Cookie 可以发送给 `www.example.com` 和 `blog.example.com`。

3. `Path`

- **`Path`**：指定 Cookie 可以发送给哪些路径。默认情况下，Cookie 只能发送给设置它的路径及其子路径。
- 例如，如果 `Path` 设置为 `/blog`，则 Cookie 可以发送给 `/blog` 和 `/blog/post`。

4. `Expires` 和 `Max-Age`

- **`Expires`**：指定 Cookie 的过期时间，表示 Cookie 在客户端的存储时间。过期后，Cookie 会被删除。
- **`Max-Age`**：指定 Cookie 的最大存活时间（以秒为单位）。过期后，Cookie 会被删除。
- 例如，`Expires=Wed, 21 Oct 2025 07:28:00 GMT` 表示 Cookie 在 2025 年 10 月 21 日 07:28:00 过期。

5. `Secure`

- **`Secure`**：指定 Cookie 只能通过 HTTPS 协议发送。如果设置为 `Secure`，则 Cookie 不会通过 HTTP 协议发送。
- 例如，`Secure;` 表示 Cookie 只能通过 HTTPS 协议发送。

6. `HttpOnly`

- **`HttpOnly`**：指定 Cookie 不能通过 JavaScript 访问。如果设置为 `HttpOnly`，则 Cookie 只能通过 HTTP 请求发送，不能通过 JavaScript 访问。
- 例如，`HttpOnly;` 表示 Cookie 不能通过 JavaScript 访问。

7. `SameSite`

- **`SameSite`**：指定 Cookie 在跨站请求时的行为。有三个可选值：
  - **`Strict`**：Cookie 只能发送给同站请求，不能发送给跨站请求。
  - **`Lax`**：Cookie 可以发送给同站请求和部分跨站请求（如 GET 请求）。
  - **`None`**：Cookie 可以发送给同站请求和跨站请求，但必须设置 `Secure` 属性。
- 例如，`SameSite=Lax;` 表示 Cookie 可以发送给同站请求和部分跨站请求。

###### 设置 Cookie

服务器可以通过 HTTP 响应头（`Set-Cookie`）设置 Cookie。以下是一个设置 Cookie 的示例：

```http
HTTP/1.1 200 OK
Set-Cookie: session_id=abc123; Expires=Wed, 21 Oct 2025 07:28:00 GMT; Domain=example.com; Path=/; Secure; HttpOnly; SameSite=Lax
Content-Type: text/html

<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>
```

###### 发送 Cookie

客户端在后续的请求中会通过 HTTP 请求头（`Cookie`）将 Cookie 发送回服务器。以下是一个发送 Cookie 的示例：

```http
GET /index.html HTTP/1.1
Host: www.example.com
Cookie: session_id=abc123
```

###### Cookie 的安全性

1. 防止 CSRF 攻击

- **CSRF（跨站请求伪造）**攻击是指攻击者通过诱导用户访问恶意网站，利用用户的身份发送恶意请求。
- 通过设置 `SameSite=Strict` 或 `SameSite=Lax`，可以防止 CSRF 攻击。

2. 防止 XSS 攻击

- **XSS（跨站脚本）**攻击是指攻击者通过注入恶意脚本，窃取用户的 Cookie 信息。
- 通过设置 `HttpOnly`，可以防止 JavaScript 访问 Cookie，从而防止 XSS 攻击。

3. 防止中间人攻击

- **中间人攻击**是指攻击者通过拦截网络通信，窃取用户的 Cookie 信息。
- 通过设置 `Secure`，可以确保 Cookie 只能通过 HTTPS 协议发送，从而防止中间人攻击。

Cookie 是一种在客户端和服务器之间传递的小型文本数据，通常用于存储用户会话信息、用户偏好设置、购物车内容等。Cookie 可以通过多个属性来控制其行为和生命周期，如 `Domain`、`Path`、`Expires`、`Max-Age`、`Secure`、`HttpOnly` 和 `SameSite`。服务器可以通过 HTTP 响应头（`Set-Cookie`）设置 Cookie，客户端在后续的请求中通过 HTTP 请求头（`Cookie`）将 Cookie 发送回服务器。通过合理使用 Cookie，可以实现各种网络应用的功能需求，同时确保安全性。

#### HTTPS概述

HTTPS（HyperText Transfer Protocol Secure）是 HTTP 的安全版本，使用 SSL/TLS 协议对数据进行加密和认证，确保数据在传输过程中的安全性和完整性。HTTPS 通过加密通信内容，防止数据被窃听和篡改，同时通过数字证书对服务器进行认证，确保客户端连接到的是合法的服务器。

##### HTTPS 的工作原理

###### 1. 加密通信

HTTPS 使用 SSL/TLS 协议对数据进行加密，确保数据在传输过程中不会被窃听和篡改。SSL/TLS 协议使用对称加密和非对称加密相结合的方式，对数据进行加密和解密。

- **对称加密**：使用相同的密钥对数据进行加密和解密。对称加密速度快，但密钥传输存在安全风险。
  
- **非对称加密**：使用公钥和私钥对数据进行加密和解密。公钥可以公开，私钥必须保密。非对称加密安全性高，但速度较慢。
  
###### 2. 数字证书

HTTPS 使用数字证书对服务器进行认证，确保客户端连接到的是合法的服务器。数字证书由受信任的第三方机构（CA，Certificate Authority）签发，包含服务器的公钥、服务器信息和 CA 的签名。

- **公钥**：用于加密数据，客户端使用服务器的公钥对数据进行加密。
  
- **私钥**：用于解密数据，服务器使用自己的私钥对数据进行解密。
  
- **CA 签名**：用于验证数字证书的真实性，客户端使用 CA 的公钥验证证书的签名。
  
###### 3. 握手过程

HTTPS 的握手过程包括以下几个步骤：

1. **客户端发送 ClientHello**：客户端向服务器发送 ClientHello 消息，包含支持的 SSL/TLS 版本、加密算法列表和随机数。

2. **服务器发送 ServerHello**：服务器选择 SSL/TLS 版本和加密算法，并生成随机数，发送 ServerHello 消息。

3. **服务器发送证书**：服务器将自己的数字证书发送给客户端，包含服务器的公钥和 CA 的签名。

4. **客户端验证证书**：客户端使用 CA 的公钥验证证书的签名，确保证书的真实性。

5. **客户端生成 Pre-Master Secret**：客户端生成 Pre-Master Secret，并使用服务器的公钥进行加密，发送给服务器。

6. **服务器解密 Pre-Master Secret**：服务器使用自己的私钥解密 Pre-Master Secret。

7. **客户端和服务器生成 Master Secret**：客户端和服务器使用 Pre-Master Secret 和之前的随机数，生成 Master Secret。

8. **客户端和服务器生成会话密钥**：客户端和服务器使用 Master Secret 生成会话密钥，用于对称加密通信内容。

9. **客户端发送 Finished**：客户端发送 Finished 消息，使用会话密钥加密，表示握手过程完成。

10. **服务器发送 Finished**：服务器发送 Finished 消息，使用会话密钥加密，表示握手过程完成。
![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/HTTPS.png)

##### HTTPS 的优点

###### 1. 数据加密

HTTPS 使用 SSL/TLS 协议对数据进行加密，确保数据在传输过程中不会被窃听和篡改。

###### 2. 服务器认证

HTTPS 使用数字证书对服务器进行认证，确保客户端连接到的是合法的服务器。

###### 3. 数据完整性

HTTPS 使用消息认证码（MAC）确保数据在传输过程中不会被篡改。

##### HTTPS 的缺点

###### 1. 性能开销

HTTPS 的握手过程和加密解密操作会引入一定的性能开销，尤其是在低带宽和高延迟的网络环境中。

###### 2. 部署成本

HTTPS 需要购买和配置数字证书，部署和维护 HTTPS 服务器的成本较高。

##### 例子

###### 1. 使用 HTTPS 访问网站

**客户端请求**：

```http
GET /index.html HTTP/1.1
Host: www.example.com
```

**服务器响应**：

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>

```

在这个例子中，客户端使用 HTTPS 协议访问 `www.example.com` 网站，服务器返回一个 HTML 文件。HTTPS 协议确保数据在传输过程中被加密，防止数据被窃听和篡改。

###### 2. 使用数字证书认证服务器

**服务器证书**：

```json
{
  "subject": {
    "commonName": "www.example.com",
    "organization": "Example Inc.",
    "country": "US"
  },
  "issuer": {
    "commonName": "DigiCert SHA2 Secure Server CA",
    "organization": "DigiCert Inc.",
    "country": "US"
  },
  "publicKey": "-----BEGIN PUBLIC KEY-----\n...\n-----END PUBLIC KEY-----",
  "signature": "..."
}

```

在这个例子中，服务器使用数字证书对自身进行认证。数字证书包含服务器的公钥、服务器信息和 CA 的签名。客户端使用 CA 的公钥验证证书的签名，确保证书的真实性。

---

## HTTP协议应用场景分析 —— 以[今日头条](https://www.toutiao.com/)为例

### 静态资源

第一次进入页面：
![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1_%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90_index.css.png)

刷新一次后：
![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1_%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90_index.css2.png)
此时，状态码200一定发起了请求（指 client请求—server响应 的完整过程）吗？
（来自磁盘缓存）=》这次的请求是从**本地缓存**拿到的
观察**缓存策略**：
![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1_%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90_index.css_%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5.png)
Cache-Control: max-age=2592000

- 强缓存
- Cache-Control: 一月
别的信息：
- Access-Control-Allow-Origin: * => *允许所有域名访问*
- Content-Type: text/css => *资源类型： css*

静态资源在部署上有没有什么方案呢？
为了性能优化/用户体验优化，即：让用户更快地看到页面和做一些可交互的行为。而影响到这些的可能是，整个页面里的静态资源的访问速度。那我们提高静态资源的访问速度也一定程度上加强了用户体验。

静态资源方案： 缓存 + CDN + 文件名hash

- CDN：Content Delivery NetWork，内容分发网络
- 通过用户就近性和服务器负载的判断，CDN确保内容以一种极为高效的方式为用户的请求提供服务。

除了保证用户拿到的资源更快，我们还要保证用户拿到文件更新！
 所以一般我们在文件名上做一些手脚，在我们这里就是**文件名哈希**。可以看到上述图片中的文件名的中间：*index.7f8dc804.css* 。

### 登录

- 业务场景
  - **表单登录**
  - 扫码登录
- 技术方式
  - SSO

- 账号密码登录
- 打开控制台 - network - 勾选 preserve log - 过滤quick_login
![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1_%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90_%E7%99%BB%E5%BD%95.png)
观察请求，这两个有什么区别呢？
最大的区别：Method不同
第一个请求：
![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/%E7%99%BB%E5%BD%95%E8%AF%B7%E6%B1%821.png)
**发起的是：OPTIONS请求，为什么呢？**
- **跨域， cross-origin**
**什么是跨域？**
一个域名由：scheme+host name+port 组成，只要是不同的话，我们都认为是跨域。
![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/%E8%B7%A8%E5%9F%9F%E8%BE%A8%E6%9E%90.png)
一般来说，
 *- https 默认使用端口号 443
  - http 默认使用端口号 80*
跨域
- CORS(Cross-Origin Resource Sharing)
- 预请求：获知服务端是否允许该跨域资源请求（*复杂请求*）
  - 简单请求
  - 复杂请求：只有在复杂请求才会发起跨域请求，生产生活场景中大部分都是复杂请求
- 相关协议头
  - Access-Control-Allow-Origin
  - Access-Control-Allow-Origin
  - Access-Control-Expose-Headers
  - Access-Control-Max-Age
  - Access-Control-Allow-Credentials
  - Access-Control-Allow-Methods
  - Access-Control-Allow-Headers
  - Access-Control-Request-Method
  - Access-Control-Request-Headers
  - Origin
 ![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/%E8%B7%A8%E5%9F%9F%E7%A4%BA%E6%84%8F%E5%9B%BE.png)

**跨域解决方案**

- CORS
- 代理服务器
  - 同源策略是浏览器的安全策略，不是HTTP
  - ![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8.png)
- Iframe通信
  - 限制较多，诸多不便

![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/%E7%99%BB%E5%BD%95_%E5%85%B7%E4%BD%93%E9%97%AE%E9%A2%98.png)

1. 想什么地址做了什么动作？

- 使用POST方法
- 目标域名：<https://sso.toutiao.com>
- 目标：quick_login/v2/

2. 携带了那些信息？返回了哪些信息？

- 携带：
- Post body，数据格式为form
- 希望获取的数据格式为json
- 已有的cookie
- 返回信息
- 数据格式json
- set-cookie信息

**刷新一下页面或下次进入页面问什么能够记住登陆状态呢？**

鉴权

- Session + cookie
![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/Session%2BCookie.png)
- JWT(JSON web token)
![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/JWT.png)
各自的优劣，和应用场景

**点击右上角发文章，跳转后的网站为什么自动登录？**

SSO：单点登录（Single Sign On）
![](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/note/HTTP%E5%8D%8F%E8%AE%AE/SSO%E7%A4%BA%E6%84%8F%E5%9B%BE.png)

---

## HTTP协议实战分析

在实际开发中，HTTP协议的应用非常广泛，涵盖了从浏览器到服务器的各个层面。以下是详细的实战分析，包括浏览器中的AJAX请求（XHR和Fetch）、Node.js中的HTTP/HTTPS标准库和常用请求库（axios），以及如何通过网络优化和稳定性提升用户体验。

### 浏览器

#### AJAX之XHR

XMLHttpRequest（XHR）是浏览器中最早用于进行AJAX请求的技术。虽然现在有更现代的Fetch API，但XHR仍然在一些旧项目中使用。

- readyState

| 编号  | 状态               | 含义                         |
| :-: | ---------------- | -------------------------- |
|  0  | UNSENT           | 代理被创建，但尚未调用open()方法        |
|  1  | OPENED           | open()方法已经被调用              |
|  2  | HEADERS_RECEIVED | send()方法已经被调用，并且头部和状态已经可获得 |
|  3  | LOADNING         | 下载中；responseText属性已经包含部分数据 |
|  4  | DONE             | 下载操作已完成                    |

##### 封装XHR请求方法

```javascript
function ajax(options) {
    // 默认配置
    const defaults = {
        method: 'GET', // 默认请求方法为GET
        url: '', // 请求的URL
        async: true, // 默认异步请求
        data: null, // 请求数据
        headers: {}, // 请求头
        success: function() {}, // 请求成功回调
        error: function() {} // 请求失败回调
    };

    // 合并用户配置和默认配置
    const settings = Object.assign({}, defaults, options);

    // 创建XMLHttpRequest对象
    const xhr = new XMLHttpRequest();

    // 配置请求
    xhr.open(settings.method, settings.url, settings.async);

    // 设置请求头
    for (let header in settings.headers) {
        xhr.setRequestHeader(header, settings.headers[header]);
    }

    // 设置回调函数
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                // 请求成功，调用success回调
                settings.success(xhr.responseText);
            } else {
                // 请求失败，调用error回调
                settings.error(xhr.statusText);
            }
        }
    };

    // 发送请求
    xhr.send(settings.data);
}

// 使用示例
ajax({
    url: 'https://api.example.com/data',
    success: function(response) {
        console.log('GET请求成功:', response);
    },
    error: function(error) {
        console.error('GET请求失败:', error);
    }
});
```

#### AJAX之Fetch

Fetch API是现代浏览器中用于进行网络请求的一种更简洁、更强大的方式。它基于Promise，提供了更直观和灵活的API。

- XML的升级版
- 使用Promise
- 模块化设计，Response，Request，Header对象
- 通过数据流处理对象，支持分块读取

##### 封装Fetch请求方法

```javascript
function fetchRequest(url, options = {}) {
    // 默认配置
    const defaults = {
        method: 'GET', // 默认请求方法为GET
        headers: {
            'Content-Type': 'application/json' // 默认请求头
        },
        credentials: 'same-origin' // 默认凭据模式
    };

    // 合并用户配置和默认配置
    const settings = Object.assign({}, defaults, options);

    // 发送请求
    return fetch(url, settings)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // 将响应解析为JSON
        })
        .catch(error => {
            console.error('Fetch error:', error);
            throw error;
        });
}

// 使用示例
fetchRequest('https://api.example.com/data')
    .then(data => console.log('GET请求成功:', data))
    .catch(error => console.error('GET请求失败:', error));
```

### Node.js

#### 标准库：HTTP/HTTPS

Node.js提供了内置的`http`和`https`模块，用于创建HTTP和HTTPS服务器以及发送HTTP请求。

- 默认模块，无需安装其他依赖
- 功能有限/不是十分友好

##### 使用HTTP模块发送请求

```javascript
const http = require('http');

function httpRequest(options, data) {
    return new Promise((resolve, reject) => {
        const req = http.request(options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                resolve(responseData);
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        if (data) {
            req.write(data);
        }

        req.end();
    });
}

// 使用示例
const options = {
    hostname: 'api.example.com',
    port: 80,
    path: '/data',
    method: 'GET'
};

httpRequest(options)
    .then(data => console.log('GET请求成功:', data))
    .catch(error => console.error('GET请求失败:', error));
```

#### 常用请求库：axios

axios是一个基于Promise的HTTP客户端，适用于浏览器和Node.js。它提供了更简洁的API，并且支持拦截器、取消请求等功能。

- 支持浏览器，nodejs环境
- 丰富的拦截器

##### 安装axios

```bash
npm install axios
```

##### 使用axios发送请求

```javascript
const axios = require('axios');

function axiosRequest(url, options = {}) {
    return axios({
        url,
        ...options
    })
        .then(response => response.data)
        .catch(error => {
            console.error('Axios error:', error);
            throw error;
        });
}

// 使用示例
axiosRequest('https://api.example.com/data')
    .then(data => console.log('GET请求成功:', data))
    .catch(error => console.error('GET请求失败:', error));
```

### 用户体验

#### 网络优化

网络优化是提升用户体验的关键。以下是一些常见的网络优化策略：

1. **压缩资源**：使用Gzip或Brotli压缩静态资源（如HTML、CSS、JavaScript），减少传输数据量。
2. **缓存策略**：通过设置HTTP响应头（如`Cache-Control`、`Expires`），利用浏览器缓存减少重复请求。
3. **CDN加速**：使用内容分发网络（CDN）将静态资源分发到全球多个节点，减少延迟和提高加载速度。
4. **减少HTTP请求**：合并CSS和JavaScript文件，减少页面加载时的HTTP请求数量。
5. **使用HTTP/2**：HTTP/2支持多路复用、头部压缩等特性，可以显著提升页面加载速度。

#### 稳定性

稳定性是确保应用可靠运行的关键。以下是一些提升稳定性的策略：

1. **错误处理**：在请求失败时，提供友好的错误提示，并记录错误日志以便后续分析。
2. **超时设置**：为请求设置合理的超时时间，避免长时间等待导致用户体验下降。
3. **重试机制**：在请求失败时，自动重试请求，提高请求成功率。
4. **监控和报警**：使用监控工具（如Prometheus、Grafana）实时监控应用性能，并在异常时发送报警通知。

### 总结

通过封装XHR和Fetch请求方法，我们可以在浏览器中实现简洁、可复用的AJAX请求。在Node.js中，可以使用内置的HTTP/HTTPS模块或第三方库（如axios）进行网络请求。通过网络优化和稳定性提升，我们可以显著改善用户体验，确保应用的可靠运行。在实际开发中，可以根据需求进一步优化和扩展这些方法，以满足复杂的业务需求。
