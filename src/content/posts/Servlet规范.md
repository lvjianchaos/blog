## 1. 关于系统架构

---
#### Question(Check Yourself) ：

![系统架构](https://cdn.jsdelivr.net/gh/lvjianchaos/Images/image-20260311142325671.png)

- 系统架构主要分为哪两种形式？
- C/S 架构的特点、优缺点及适用场景是什么？
- B/S 架构的特点、优缺点及适用场景是什么？
- 开发 Web 系统需要掌握哪些技术栈？
- JavaEE 在 Web 开发中的定位和作用是什么？

---
### 1.1 系统架构的分类

系统架构主要有两种常见形式：

- C/S 架构 （Client/Server 客户端/服务器架构）
  - 定义： 客户端通过安装特定软件与服务器进行交互。
  - 示例： 微信、QQ、桌面游戏等。
  - 特点：
    - 需要安装专门的客户端软件。
  - 优点：
    - 速度快： 大部分数据和逻辑集成在客户端，减少网络传输。
    - 用户体验好： 界面炫酷，响应迅速，提供丰富的交互。
    - 界面灵活： 可使用专用语言实现更复杂的界面效果。
    - 服务器压力小： 客户端承担了部分数据处理和存储，减轻服务器负担。
    - 安全性相对较高： 数据分散在多个客户端，即使服务器出现问题，数据丢失风险相对较低。
  - 缺点：
    - 升级维护成本高： 每次更新都需要客户端重新下载安装，维护复杂且成本较高。
    - 安装不便： 用户需要额外进行软件安装步骤。
  - 适用场景： 适用于对性能、用户体验和安全性要求较高的娱乐性软件或专业工具。
- B/S 架构 （Browser/Server 浏览器/服务器架构）
  - 定义： 用户通过 Web 浏览器直接访问服务器提供的服务，无需安装额外客户端软件。
  - 示例： 各类网站 （如 百度、京东、网易邮箱）。
  - 与 C/S 关系： B/S 架构可以视为一种特殊的 C/S 架构，其中“客户端”是统一且固定的浏览器软件。
  - 优点：
    - 升级维护便捷： 只需更新服务器端，客户端无需任何操作，维护成本低。
    - 用户操作方便： 只需打开浏览器输入网址即可访问，无需安装。
  - 缺点：
    - 速度相对慢： 所有数据都从服务器端获取，网络传输量大。
    - 用户体验相对较差： 界面受限于浏览器支持的 HTML、CSS、JavaScript，难以实现过于复杂的炫酷效果。
    - 安全性风险： 所有数据集中在服务器，一旦服务器发生故障（如火灾、地震），数据丢失风险较高。
  - 适用场景： 适用于对维护成本要求低、用户方便性要求高、对界面酷炫程度要求不高的公司内部业务系统。
  1.2 Web 系统开发所需技术
  开发 B/S 架构的系统，本质上就是开发网站或 Web 系统。这需要掌握前端和后端两方面的技术：
- Web 前端技术 （运行在浏览器）:
  - HTML （结构）
  - CSS （样式）
  - JavaScript （行为）
- Web 后端技术 （运行在服务器）:
  - Java （JavaWEB 开发的核心规范是 Servlet）
  - C、C++、Python、PHP 等语言也常用于后端开发。
  1.3 JavaEE 简介
  JavaEE （Java Enterprise Edition） 是 Java 的一个重要组成部分，专注于企业级应用的开发，尤其是 Web 系统的开发。
- Java 三大主要版本：
  - JavaSE （Standard Edition）: Java 标准版，提供核心类库，是 Java 学习和应用的基础。
  - JavaEE （Enterprise Edition）: Java 企业版，包含一套用于开发企业级项目（如 Web 系统）的类库和规范。Servlet 就是 JavaEE 规范之一。
  - JavaME （Micro Edition）: Java 微型版，用于开发嵌入式系统和小型设备的内核程序 （如机顶盒、吸尘器等）。
- Servlet 的地位： Servlet 是 JavaEE 规范中的一项，是 JavaWeb 开发的核心技术。
2. B/S 结构系统的通信原理

---
Question(Check Yourself) ：
- Web 系统的基本访问流程是怎样的？
- 域名、IP 地址和端口号在 Web 通信中各自的作用是什么？
- 详细描述一个 Web 系统的通信步骤。
- URL、请求 （Request） 和响应 （Response） 各自的含义是什么？

---
2.1 Web 系统访问过程概述
用户访问 Web 系统的基本过程如下：
1. 打开浏览器。
2. 在地址栏输入合法网址 （URL）。
3. 回车确认。
4. 浏览器显示服务器响应的结果。
2.2 核心概念
- 域名 （Domain Name）: 便于记忆的网站地址，例如 www.baidu.com。
  - 当在浏览器中输入域名后，DNS域名解析器会将其解析为具体的 IP 地址和端口号 （例如 http://110.242.68.3:80/index.html）。
- IP 地址 （Internet Protocol Address）: 计算机在网络中的唯一标识，类似于身份证号。在同一网络中，IP 地址必须唯一。
  - 计算机之间通信的前提是知道对方的 IP 地址。
- 端口号 （Port Number）: 用于标识一台计算机上运行的特定软件或服务。
  - 一台计算机上可以运行多个软件，每个软件启动后会占用一个唯一的端口号。
  2.3 Web 系统通信步骤
  一个典型的 Web 系统通信流程如下：
1. 用户输入 URL: 用户在浏览器中输入网址。
2. 域名解析： 域名解析器将域名解析为 IP 地址和端口号（例如 http://110.242.68.3:80/index.html）。
3. 查找主机： 浏览器根据解析出的 IP 地址在网络中搜索并找到目标服务器主机。
4. 定位服务： 定位到该主机上对应端口号（如 80 端口）的服务器软件。
5. 识别资源： 服务器软件获知浏览器请求的资源名称（例如 index.html）。
6. 发送响应： 服务器软件找到 index.html 文件，并将其内容作为响应发送回浏览器。
7. 浏览器接收： 浏览器接收到来自服务器的代码（HTML、CSS、JavaScript）。
8. 渲染展示： 浏览器解析并执行接收到的代码，最终在界面上展示效果。
2.4 请求与响应
- URL （Uniform Resource Locator）: 统一资源定位符，即资源的网址。
- 请求 （Request）: 数据从浏览器端 （Browser） 发送至服务器端 （Server） 的过程。
- 响应 （Response）: 数据从服务器端 （Server） 发送至浏览器端 （Browser） 的过程。
暂时无法在飞书文档外展示此内容
3. Web 服务器软件

---
Question(Check Yourself) ：
- 常见的 Web 服务器和应用服务器有哪些？它们之间有什么关系？
- Tomcat 服务器的特性和运行环境要求是什么？
- 如何安装和启动 Tomcat 服务器？
- Tomcat 的主要目录结构及其作用是什么？
- 如何配置 Tomcat 运行所需的环境变量？

---
3.1 常见的 Web 服务器与应用服务器
- Web 服务器： 主要处理静态资源请求，并支持 Servlet 和 JSP 规范。
  - Tomcat
  - Jetty
- 应用服务器： 实现了 JavaEE 的所有规范（共 13 种），功能更全面，通常包含 Web 服务器的功能。
  - JBOSS
  - WebLogic
  - WebSphere
- 关系： 应用服务器包含 Web 服务器的功能。例如，JBOSS 内部就内嵌了 Tomcat 服务器。
3.2 Tomcat 服务器详解
Tomcat 是一个由 Apache 软件基金会开发的开源、免费、轻量级 Web 服务器，主要实现了 JavaEE 中的 Servlet 和 JSP 规范。
- 别名： Catalina （据传在风景优美的 Catalina 岛上开发，寓意其轻巧、快速）
- Logo: 一只公猫，象征其轻便、小巧的特点。
- 开发语言： Java 语言。
- 运行环境： 运行 Tomcat 服务器必须先安装 JRE （Java 运行时环境），因此需要先配置好 JDK 环境。
3.3 Tomcat 的安装与启动
1. 安装： Tomcat 通常提供绿色版 （zip 包），直接解压即可完成安装。
  - 建议将开发工具统一放置在某个路径下 （如 D:\dev） 便于管理。
2. 启动：
  - 进入 Tomcat 的 bin 目录下。
  - 执行 startup.bat （Windows） 或 startup.sh （Linux/Unix） 脚本来启动服务器。
    - bat文件是windows操作系统专用的，是批处理文件；这种文件中可以编写大量的windows的dos命令，然后执行bat文件就相当于批量执行dos命令
    - tomcat服务器提供了bat和sh文件，说明了tomcat服务器的通用性
  - 注意： startup.bat 实际上会调用 catalina.bat，而 catalina.bat 最终会执行 org.apache.catalina.startup.Bootstrap 类中的 main 方法来启动 Tomcat。
    - catalina.bat文件中有这样一行配置：MAINCLASS=org.apache.catalina.startup.Bootstrap
  - 环境变量： 启动 Tomcat 需要配置以下环境变量：
    - JAVA_HOME： 指向 JDK 的安装根目录。
    - CATALINA_HOME： 指向 Tomcat 服务器的安装根目录。
    - PATH： 添加 %JAVA_HOME%\bin;和%CATALINA_HOME%\bin
3. 关闭： 执行 shutdown.bat （Windows） 或 shutdown.sh （Linux/Unix） 脚本。为了避免与 Windows 关机命令冲突，通常会将 shutdown.bat 重命名为 stop.bat。
4. 测试： 启动成功后，在浏览器地址栏输入 http://localhost:8080 （或 http://127.0.0.1:8080） 来验证 Tomcat 是否正常运行。
3.4 Tomcat 目录结构
Tomcat 的主要目录及其作用如下：
- bin： 存放 Tomcat 服务器的命令文件 （如启动、关闭脚本）。
- conf： 存放 Tomcat 服务器的配置文件 （如 server.xml，用于配置端口号，默认是 8080）。
- lib： 存放 Tomcat 服务器的核心程序 JAR 包 （Java 类文件）。
- logs： 存放 Tomcat 服务器的运行日志文件。
- temp： 存放 Tomcat 服务器的临时文件。
- webapps： 用于存放 Web 应用 （webapp）。
- work： 存放 JSP 文件被翻译后的 Java 文件以及编译后的 class 文件。
4. 实现最基本的 Web 应用（静态）

---
Question(Check Yourself) ：
- 如何在 Tomcat 上部署一个简单的静态 Web 应用？
- 如何通过浏览器访问部署好的静态 Web 资源？
- 什么是静态资源和动态资源？动态网页技术的核心是什么？

---
4.1 静态 Web 应用部署步骤
要创建一个不包含 Java 小程序的最基本 Web 应用：
1. 创建 Web 应用目录： 在 CATALINA_HOME\webapps 目录下新建一个子目录，作为你的 Web 应用名称 （例如 oa）。所有 Web 应用都必须放在 webapps 目录下。
2. 创建资源文件： 在新创建的 Web 应用目录 （例如 oa） 下创建 HTML、CSS、JavaScript 等静态资源文件 （例如 index.html）。
3. 启动 Tomcat: 启动 Tomcat 服务器。
4. 访问： 在浏览器地址栏输入 URL 进行访问，格式为 http://IP地址:端口号/项目名/资源名 （例如 http://127.0.0.1:8080/oa/index.html）。
4.2 静态与动态资源
- 静态资源： 内容固定，直接存储在文件中的资源 （如 HTML、CSS、JS 文件）。
- 动态资源： 内容根据数据库数据或其他逻辑动态生成或变化。
  - 动态网页技术： 指页面中的数据是动态的，根据数据库中数据的变化而变化，而不是指页面中有 Flash 动画。
  - 实现动态网页通常需要后端程序 （如 Java 程序） 连接数据库 （通过 JDBC） 来获取数据并渲染页面。
5. 动态 Web 应用中的角色与协议

---
Question(Check Yourself) ：
- 在一个动态 Web 应用的请求-响应过程中，涉及哪些主要角色？
- 不同角色之间需要遵守哪些关键协议或规范？
- Servlet 规范在 Web 服务器和 Web 应用解耦中的作用是什么？

---
[图片]
5.1 参与角色
在一个 B/S 结构的动态 Web 系统中，主要有以下几类角色参与：
- 浏览器软件开发团队： 如 Google Chrome， Mozilla Firefox， Internet Explorer 等。
- Web 服务器开发团队： 如 Tomcat， Jetty， WebLogic， JBOSS， WebSphere 等。
- 数据库服务器开发团队： 如 Oracle， MySQL 等。
- Web 应用开发团队： JavaWeb 程序员负责开发的部分。
5.2 角色间协议与规范
不同角色之间通过特定的协议或规范进行通信和协作：
- Web 应用开发团队 与 Web 服务器开发团队： 遵守 JavaEE 规范 之一 Servlet 规范。
  - Servlet 规范的作用： 实现 Web 服务器与 Web 应用之间的解耦，确保遵循规范的 Web 应用可以在不同的 Web 服务器上运行。
- 浏览器 与 Web 服务器： 遵守 HTTP 协议 （超文本传输协议）。
- Web 应用开发团队 与 数据库服务器开发团队： 遵守 JDBC 规范。
暂时无法在飞书文档外展示此内容
5.3 Servlet 规范内容
Servlet 规范定义了构建 Web 应用的标准，包括：
- 规定的接口和类。
- Web 应用中应包含的配置文件及其名称、存放路径和内容。
- 合法有效的 Web 应用的目录结构。
- ......
6. 开发带有 Servlet 的 Web 应用 （动态）

---
Question(Check Yourself) ：
- 开发包含 Servlet 的 Web 应用，其标准的目录结构是怎样的？
- WEB-INF 目录下各个子目录和文件的作用是什么？
- Servlet 类的编写和编译需要注意哪些问题？
- 如何在 web.xml 中配置 Servlet 的映射关系？
- 浏览器访问 Servlet 的 URL 规则是怎样的？
- Servlet 请求-响应的内部处理流程是怎样的？

---
6.1 开发步骤
开发一个包含 Servlet （Java 小程序） 的 Web 应用，通常遵循以下步骤：
1. 创建 Web 应用根目录： 在 webapps 目录下新建一个目录 （如 crm） 作为 Web 应用的根目录。
2. 创建 WEB-INF 目录： 在 Web 应用根目录下创建 WEB-INF 目录。这是一个严格按照 Servlet 规范命名的目录，必须全大写且名称一致。
3. 创建 classes 目录： 在 WEB-INF 目录下创建 classes 目录。此目录用于存放 Java 程序编译后的 .class 字节码文件，必须全小写。
4. 创建 lib 目录 （可选）: 在 WEB-INF 目录下创建 lib 目录。如果 Web 应用需要使用第三方 JAR 包 （如数据库驱动包），必须将它们放置在此目录下，名称必须全小写。
5. 创建 web.xml 文件： 在 WEB-INF 目录下创建 web.xml 文件。这是 Web 应用的配置文件，用于描述请求路径与 Servlet 类之间的映射关系，名称必须为 web.xml，且必须放置在此位置。建议从现有项目中复制模板。
  - web.xml 示例骨架：
    <?xml version="1.0" encoding="UTF-8"?>
    <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
                             https://jakarta.ee/xml/ns/jakartaee/web-app_5_0.xsd"
         version="5.0"
         metadata-complete="true">

</web-app>
6. 编写 Servlet Java 程序： 编写 Java 程序实现 jakarta.servlet.Servlet 接口 （注意，从 JakartaEE 9 开始，包名变为 jakarta.servlet.Servlet）。此接口不在 JDK 中，而是在 Tomcat 服务器的 CATALINA_HOME\lib\servlet-api.jar 中。Java 源文件位置随意，但编译后的 .class 文件必须放入 classes 目录。
7. 编译 Servlet: 编译 Servlet 时，需要将 servlet-api.jar 加入到 CLASSPATH 环境变量中，以便编译器找到 Servlet 接口。此 CLASSPATH 配置仅用于编译，与 Tomcat 运行时无关。
变量名：CLASSPATH
变量值：.;D:\Tomcat\apache-tomcat-9.0.102\lib\servlet-api.jar
8. 部署 .class 文件： 将编译后的 Servlet .class 文件复制到 WEB-INF\classes 目录下。
9. 配置 web.xml 注册 Servlet: 在 web.xml 文件中配置 servlet 和 servlet-mapping 标签，将 Servlet 类名与请求路径关联起来。
  - web.xml 配置示例：
<?xml version="1.0" encoding="UTF-8"?>

<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
                      https://jakarta.ee/xml/ns/jakartaee/web-app_5_0.xsd"
  version="5.0"
  metadata-complete="true">
        <servlet>
                <servlet-name>HelloServlet</servlet-name>
                <servlet-class>com.chaos.servlet.HelloServlet</servlet-class>
        </servlet>
        <servlet-mapping>
                <servlet-name>HelloServlet</servlet-name>
                <url-pattern>/hello</url-pattern>
        </servlet-mapping>
</web-app>
      - <servlet-name>： 用于在 web.xml 中标识 Servlet，可自定义，但 servlet 和 servlet-mapping 中需保持一致。
      - <servlet-class>： 必须是 Servlet 的全限定类名 （包含包名）。
      - <url-pattern>： 定义 Servlet 对应的请求路径，必须以 / 开头，可自定义。
10. 启动 Tomcat 服务器。
11. 浏览器访问： 在浏览器地址栏输入 URL，必须与 web.xml 中配置的 url-pattern 相匹配，并包含项目名。
  - 例如：如果 url-pattern 是 /hello，项目名为 crm，则访问 URL 为 http://127.0.0.1:8080/crm/hello。
  - 注意： HTML 页面中的超链接若使用相对路径，也需注意包含项目名，即/crm/hello。HTML 页面文件必须放置在 WEB-INF 目录之外。
6.2 合法 Web 应用的目录结构
一个标准的 Web 应用目录结构如下：
webapproot/
├── WEB-INF/
│   ├── classes/        (存放编译后的 Java 字节码文件)
│   ├── lib/            (存放第三方 JAR 包，可选)
│   └── web.xml         (Web 应用配置文件，注册 Servlet)
├── html/               (存放 HTML 文件)
├── css/                (存放 CSS 文件)
├── javascript/         (存放 JavaScript 文件)
├── image/              (存放图片文件)
└── ...                 (其他静态资源)
6.3 浏览器请求到 Servlet 执行的粗略流程
当浏览器发送请求到服务器执行 Servlet 时，大致流程如下：
1. 用户输入 URL 或点击超链接 （例如 http://127.0.0.1:8080/crm/hello）。
2. Tomcat 服务器接收到请求，截取请求路径 （例如 /crm/hello）。
3. Tomcat 服务器根据项目名 （/crm） 找到对应的 Web 应用。
4. Tomcat 在该 Web 应用的 web.xml 文件中查找与 /hello 对应的 Servlet 类 （例如 com.chaos.servlet.HelloServlet）。
5. Tomcat 通过反射机制创建该 Servlet 类的对象。
6. Tomcat 调用 Servlet 对象的 service() 方法来处理请求。

---
7. JavaEE 版本与 Servlet 类名变更

---
Question(Check Yourself) ：
- JavaEE 的发展历程和名称变更是什么？
- Servlet 接口的包名在不同版本中是如何变化的？
- 这些变化对旧项目部署有什么影响？

---
7.1 JavaEE 到 Jakarta EE
- 捐赠与更名： Oracle 将 JavaEE 规范捐赠给了 Apache 基金会。
- 新名称： JavaEE 不再使用，现在统一称为 Jakarta EE。
- 版本演进： JavaEE 8 之后的版本不再是 "JavaEE 9"，而是 Jakarta EE 9。
7.2 Servlet 包名变化
- JavaEE 8 及之前： Servlet 类名为 javax.servlet.Servlet。
- Jakarta EE 9 及之后： Servlet 类名为 jakarta.servlet.Servlet （包名从 javax 变更为 jakarta）。
7.3 兼容性影响
- 如果你的旧项目仍使用 javax.servlet.Servlet，则无法直接部署到 Tomcat 10 及更高版本。
- 旧项目只能部署到 Tomcat 9 或更早版本，因为这些版本仍然识别 javax.servlet 包。

---
8. Tomcat 控制台乱码问题解决

---
Question(Check Yourself) ：
- 如何解决 Tomcat 在 DOS 命令行窗口中输出乱码的问题？

---
8.1 解决方案
要解决 Tomcat 在 DOS 命令窗口中的控制台乱码问题，需要修改 Tomcat 配置文件：
1. 打开 CATALINA_HOME/conf/logging.properties 文件。
2. 将文件中的 java.util.logging.ConsoleHandler.encoding 配置项修改为 GBK：
java.util.logging.ConsoleHandler.encoding = GBK

---
9. 在 Servlet 中响应 HTML 代码

---
Question(Check Yourself) ：
- 如何在 Servlet 的 service 方法中向浏览器输出 HTML 代码？

---
9.1 输出 HTML 代码
在 Servlet 的 service 方法中，可以通过 ServletResponse 对象获取 PrintWriter 来向浏览器发送 HTML 代码：
public void service(ServletRequest request, ServletResponse response){
    // 设置响应内容类型为 HTML，并指定字符编码（通常是 UTF-8）
    // 设置须在获取流之前
    response.setContentType("text/html;charset=UTF-8"); // 推荐添加 charset
    // 获取 PrintWriter 对象，用于向浏览器输出内容
    PrintWriter out = response.getWriter(); 
    // 输出 HTML 代码
    out.print("<h1>hello servlet!</h1>");
    // 确保流关闭或刷新，这里通常不需要手动关闭，(Tomcat)容器会管理
    // out.close(); 
}

---
10. Servlet 中连接数据库

---
Question(Check Yourself) ：
- 如何在 Servlet 中实现数据库连接？
- 数据库驱动 JAR 包应该放在 Web 应用的哪个位置？

---
10.1 连接数据库
由于 Servlet 本质上是 Java 程序，因此可以在 Servlet 中编写 JDBC （Java Database Connectivity） 代码来连接数据库。
10.2 驱动 JAR 包存放位置
在 Web 应用中连接数据库时，数据库驱动 JAR 包 （例如 com.mysql.cj.jdbc.Driver 所在的 JAR 包） 必须放置在 WEB-INF/lib 目录下。

---
11. 在集成开发环境 （IDEA） 中开发 Servlet

---
Question(Check Yourself) ：
- 如何在 IntelliJ IDEA 中创建一个符合 Servlet 规范的 Web 应用模块？
- 如何将 Servlet API JAR 包添加到 IDEA 项目的 Classpath 中？
- 如何在 IDEA 中配置和部署 Web 应用到 Tomcat 服务器？
- 在开发过程中，建议使用哪种模式启动 Tomcat？

---
11.1 IDEA 开发 Servlet 步骤
使用 IntelliJ IDEA 开发 Servlet 的一般流程如下：
1. 新建项目：
  - 可以先创建一个 Empty Project （空工程），例如命名为 javaweb。
  - 在空工程下新建 Module （模块）。
2. 新建模块：
  - 选择新建一个普通的 JavaSE 模块 （例如命名为 servlet01）。
  - 注意： 此时不要直接新建 Java Enterprise 模块，后续再添加框架支持。
3. 添加 Web 应用框架支持：
  - 右键点击新建的 Module，选择 Add Framework Support...。
  - 在弹出的窗口中，选择 Web Application。IDEA 会自动生成符合 Servlet 规范的 Web 应用目录结构。
  - 重要： 在 IDEA 中，Web Application 模板生成的 web 目录就是 Web 应用的根目录（指/crm等项目根目录）。
4. 编写 Servlet:
  - 创建 Servlet 类，并使其实现 jakarta.servlet.Servlet 接口 （或继承 HttpServlet）。
  - 解决 Servlet API 缺失： 此时可能会提示 Servlet.class 未找到。需要将 Tomcat CATALINA_HOME/lib 目录下的 servlet-api.jar 和 jsp-api.jar 添加到 IDEA 项目的 Classpath 中。
    - 路径： File -> Project Structure -> Modules -> 你的模块 -> Dependencies 标签页 -> 点击 '+' 号 -> JARs or Directories...，选择对应的 JAR 包。
  - 在 Servlet 的 service 方法中编写业务逻辑 （例如连接数据库）。
5. 放置第三方 JAR 包： 在 WEB-INF 目录下新建 lib 目录 （必须全小写），并将连接数据库的驱动 JAR 包等第三方库放入其中。
6. 注册 Servlet: 在 WEB-INF/web.xml 文件中配置 Servlet 的注册和映射关系 （如第 6 节所示）。
7. 提供 HTML 页面： 创建 HTML 页面 （例如 student.html），其中包含访问 Servlet 的超链接。该 HTML 文件不能放在 WEB-INF 目录下。
  - HTML 超链接示例 （注意项目名 /xmm）:
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>student page</title>
    </head>

    <body>
        <a href="/xmm/servlet/student">student list</a>
    </body>
</html>
8. 关联 Tomcat 服务器并部署 Web 应用：
  - 点击 IDEA 右上角的 Add Configuration。
  - 点击左上角的 + 号，选择 Tomcat Server -> Local。
  - 在弹出的配置界面中，切换到 Deployment 标签页，点击 + 号部署你的 Web 应用模块。
  - 修改 Application context （部署路径） 为 /xmm （或你希望的项目访问路径）。
9. 启动 Tomcat: 点击 IDEA 右上角的绿色箭头启动 Tomcat，或点击绿色小虫子以 Debug 模式启动。开发中建议使用 Debug 模式。
10. 访问： 在浏览器中输入 URL 访问 HTML 页面，例如 http://localhost:8080/xmm/student.html。

---
12. Servlet 对象的生命周期

---
Question(Check Yourself) ：
- 什么是 Servlet 对象的生命周期？它由谁来管理？
- Servlet 对象的生命周期方法有哪些？它们的调用时机和次数是怎样的？
- Servlet 对象是单例的吗？为什么？
- 为什么不建议手动编写 Servlet 的构造方法？

---
12.1 生命周期概述
- 定义： Servlet 对象的生命周期指其从创建、初始化、服务直到销毁的整个过程。
- 管理： Servlet 对象的创建、方法的调用和最终销毁，完全由 Tomcat 服务器 （Web 容器） 负责管理，开发者无法直接干预。
  - Web 容器 （Web Container）: 负责管理 Servlet 对象的生命周期。
  - Web 容器内部通常维护一个 HashMap 集合，存储了 Servlet 对象及其与请求路径的映射关系。
  12.2 生命周期方法
  Servlet 接口定义了以下核心生命周期方法：
1. 构造方法：
  - 调用时机： 默认情况下，Tomcat 启动时不会立即创建 Servlet 对象，而是在用户 第一次请求 该 Servlet 时才实例化。
    - 可以通过在 web.xml 的 <servlet> 标签中添加 <load-on-startup> 子标签并设置整数值 （值越小优先级越高，如 <load-on-startup>1</load-on-startup>），强制 Tomcat 在启动时就创建 Servlet 实例。
  - 调用次数： 只执行一次。
  - 注意： 必须有无参数构造方法才能被 Web 容器实例化。不建议手动编写构造方法，否则可能覆盖默认的无参构造导致实例化失败 （500 错误）。
2. init(ServletConfig config) 方法：
  - 调用时机： 在 Servlet 对象实例化之后，用户 第一次请求 时被 Tomcat 调用，用于进行 Servlet 的初始化操作。
  - 调用次数： 只执行一次。
  - 作用： 通常用于执行只需执行一次的初始化操作，如初始化数据库连接池、线程池等。
3. service(ServletRequest req, ServletResponse res) 方法：
  - 调用时机： 每次用户发送请求时，都会被 Tomcat 调用。
  - 调用次数： 用户发送 N 次请求，service 方法就会被调用 N 次。
  - 作用： 处理用户请求的核心方法，所有业务逻辑都在此方法中实现。
4. destroy() 方法：
  - 调用时机： 在服务器关闭或 Web 应用卸载时，Tomcat 在销毁 Servlet 对象内存之前调用。
  - 调用次数： 只执行一次。
  - 作用： 通常用于释放资源，如关闭数据库连接、文件流等。
- 思考Tomcat伪代码
public class Tomcat {
    public static void main(String[] args){
        // .....
        // Tomcat服务器伪代码
        // 创建LoginServlet对象（通过反射机制，调用无参数构造方法来实例化LoginServlet对象）
        Class clazz = Class.forName("com.bjpowernode.javaweb.servlet.LoginServlet");
        Object obj = clazz.newInstance();
        
        // 向下转型
        Servlet servlet = (Servlet)obj;
        
        // 创建ServletConfig对象
        // Tomcat服务器负责将ServletConfig对象实例化出来
        // 多态（Tomcat服务器完全实现了Servlet规范）
        ServletConfig servletConfig = new org.apache.catalina.core.StandardWrapperFacade();
        
        // 调用Servlet的init方法
        servlet.init(servletConfig);
        
        // 调用Servlet的service方法
        // ....
  
    }
}
12.3 Servlet 对象的单例特性
- 单例与假单例： Servlet 对象是 单例 （单实例） 的，即每个 Servlet 类在 Web 容器中只会创建一个实例。
  - 但这被称为“假单例”，因为它并非通过严格的单例模式 （如私有化构造方法） 实现，而是由 Tomcat 容器控制只创建一个实例。
- 原因： Web 容器为了节省资源，对每个 Servlet 类只创建一个对象，并在所有请求之间共享该对象。
- 影响： 由于 Servlet 对象是单例的，如果 service 方法中涉及到成员变量的修改，可能会引发线程安全问题。

---
13. GenericServlet 与 HttpServlet

---
Question(Check Yourself) ：
- 直接实现 Servlet 接口有什么缺点？
- GenericServlet 的作用是什么？它解决了什么问题？
- HttpServlet 的作用是什么？在实际开发中为什么更推荐使用 HttpServlet？
- Servlet 类的继承结构是怎样的？

---
13.1 Servlet 接口的缺点
直接实现 Servlet 接口的缺点是，开发者需要实现接口中的所有方法 （init， service， destroy， getServletConfig， getServletInfo），即使大部分情况下只需要用到 service 方法，这会导致代码显得冗余和丑陋。
13.2 GenericServlet （通用 Servlet）
- 作用： GenericServlet 是一个抽象类，实现了 Servlet 接口，并对其中除了 service 方法以外的其他方法提供了实现。它采用了 适配器设计模式 （Adapter Pattern）。
- 优点： 开发者在编写 Servlet 时，只需继承 GenericServlet 并重写抽象的 service 方法即可，大大简化了 Servlet 的编写。
- init 和 ServletConfig： GenericServlet 中的 init 方法仍然会被 Tomcat 调用，并由 Tomcat 负责创建和传递 ServletConfig 对象。
- 如何设计这个类呢？这是我的思考。有必要去看源码。
public abstract class GenericServlet implements Servlet {
    // 成员变量
    private ServletConfig config;
  
    /**
     * init 方法中ServletConfig是Tomcat创建好的
     * 这个ServletConfig对象在init方法的参数上，属于局部变量
     * 若此ServletConfig对象肯定以后再service方法使用，应该如何保证呢？
     * - 使用成员变量
     * 但若此init()方法，子类要重写，ServletConfig对象不就丢失了吗？怎么保证？
     * - 设置为final，子类不允许重写。
     * 但若子类一定要重写这个方法呢？
     * - 创建一个无参init方法，这个init就是供子类重写的
        *
     * 模板方法模式（Template Method Pattern）
     */
     @Override
     final public void init(ServletConfig config) {
        this.config = config;
        // 调用init方法
        init();
     } 
    
    /**
     * 此init方法供子类重写
     */
     public void init(){}
    
    @Override
    public ServletConfig getServletConfig() {
        return config;
    }
    
    /**
     * 抽象方法，最常用，故要求所有子类实现
     */
        public abstract void service(ServletRequest req, ServletResponse res) 
            throws ServletException, IOException;
    
    @Override
    public void destroy(){}
    @Override
    public void getServletInfo(){return null;}
   }
   13.3 HttpServlet （HTTP 专用 Servlet）
- 作用： HttpServlet 是一个抽象类，继承自 GenericServlet，专门为 HTTP 协议 设计。它根据 HTTP 请求方法 （GET， POST 等） 将 service 方法进一步细化为 doGet()， doPost() 等具体方法。
- 优点： 在 B/S 架构的 Web 系统中，所有通信都基于 HTTP 协议，使用 HttpServlet 能更便捷地处理不同类型的 HTTP 请求。
- 推荐使用： 实际开发中，我们编写的 Servlet 类通常会继承 HttpServlet 类，并根据需要重写 doGet() 或 doPost() 等方法。
13.4 Servlet 类的继承结构
Servlet 接口及其主要实现类的继承关系如下：
jakarta.servlet.Servlet (接口)          【爷爷】
      ↑
jakarta.servlet.GenericServlet (抽象类，实现 Servlet 接口) 【儿子】
      ↑
jakarta.servlet.http.HttpServlet (抽象类，继承 GenericServlet) 【孙子】
      ↑
我们自己编写的 Servlet 类 (继承 HttpServlet)

---
14. ServletConfig

---
Question(Check Yourself) ：
- 什么是 ServletConfig 对象？它封装了哪些信息？
- ServletConfig 对象的生命周期是怎样的？
- 如何通过 ServletConfig 对象获取配置信息和 ServletContext 对象？

---
14.1 ServletConfig 概述
- 定义： ServletConfig 是一个配置信息对象，封装了 web.xml 文件中 <servlet> 标签内部的配置信息 （例如初始化参数）。
- 一对一关系： 一个 Servlet 对象对应一个 ServletConfig 对象。
- 生命周期： ServletConfig 对象由 Tomcat 服务器创建，并默认在用户第一次请求该 Servlet 时被创建。
- 传递： Tomcat 服务器在调用 Servlet 对象的 init() 方法时，会将对应的 ServletConfig 对象作为参数传递进去。
- Tomcat实现了ServletConfig接口：public class org.apache.catalina.core.StandardWrapperFacade inplements Servlet Config {}
14.2 ServletConfig 常用方法
ServletConfig 接口提供以下常用方法来获取配置信息：
- public String getInitParameter(String name)： 根据参数名称获取初始化参数的值。
- public Enumeration<String> getInitParameterNames()： 获取所有初始化参数的名称。
- public ServletContext  getServletContext()： 获取当前 Servlet 对应的 ServletContext 对象。
- public String getServletName()： 获取 Servlet 的名称 （即 web.xml 中 <servlet-name> 的值）。
这些方法在 Servlet 类中可以直接通过 this 调用，因为 GenericServlet 内部已经实现了 ServletConfig 的相关功能。

---
15. ServletContext

---
Question(Check Yourself) ：
- 什么是 ServletContext 对象？它和 ServletConfig 有什么区别？
- ServletContext 对象的生命周期是怎样的？
- ServletContext 为什么被称为“应用域”？它在共享数据方面有什么特点和注意事项？
- 如何通过 ServletContext 获取应用根路径、文件真实路径以及记录日志？
- 简述常见的缓存机制。

---
15.1 ServletContext 概述
- 定义： ServletContext 称为 Servlet 上下文对象或“应用域”对象，代表整个 Web 应用程序。
- 范围： 在同一个 Web 应用 （webapp） 中，所有的 Servlet 对象都共享同一个 ServletContext 对象。
- 生命周期： ServletContext 对象在服务器启动 Web 应用时创建，在服务器关闭或 Web 应用卸载时销毁。它是应用级别的对象，与 web.xml 文件一一对应，对一个webapp来说，ServletContext对象只有一个。
- 比喻： 就像一个教室里有多个学生 （Servlet），教室 （ServletContext） 里的物品 （数据） 是所有学生共享的，例如空调。
- Tomcat实现了这个接口：com.apache.catalina.core.ApplicationContextFacade implements ServletContext{}
15.2 ServletContext 常用方法
ServletContext 接口提供多种方法来获取应用信息、配置和进行数据共享：
- 获取初始化参数：
  - public String getInitParameter(String name)： 根据参数名称获取应用级别的初始化参数值。
  - public Enumeration<String> getInitParameterNames()： 获取所有应用级别初始化参数的名称。
  - 配置位置： 这些参数配置在 web.xml 文件中的 <context-param> 标签中，通常用于存放整个项目共享的配置信息。
  <context-param>
    <param-name>pageSize</param-name>
    <param-value>10</param-value>
  </context-param>
- 获取路径：
  - public String getContextPath()： 获取 Web 应用的根路径 （项目名）。 （非常重要，在 Java 代码中应动态获取，避免写死项目路径）
  - public String getRealPath(String path)： 获取 Web 应用中某个文件或目录的真实（绝对）路径。
- 日志记录：
  - public void log(String message)
  - public void log(String message, Throwable t)
  - 这些日志信息会记录到 Tomcat logs 目录下的 localhost.yyyy-mm-dd.log 文件中
    - catalina.2021-11-05.log：服务器端的java程序运行的控制台信息。
    - localhost.2021-11-05.log ：ServletContext对象的log方法记录的日志信息存储到这个文件中
    - localhost_access_log.2021-11-05.txt： 访问日志
- 应用域数据共享 （setAttribute/getAttribute/removeAttribute）:
  - ServletContext 也被称为“应用域”，可以用于在整个 Web 应用范围内共享数据。
  - public void setAttribute(String name, Object value)： 向应用域中存储数据 （类似 Map.put(key, value)）。
  - public Object getAttribute(String name)： 从应用域中获取数据 （类似 Map.get(key)）。
  - public void removeAttribute(String name)： 从应用域中删除数据 （类似 Map.remove(key)）。
  - 使用场景与注意事项：
    - 适用于所有用户共享的数据。
    - 数据量应较小，避免占用过多内存，因为 ServletContext 生命周期长 （随应用启动而生，随应用关闭而灭）。
    - 存放的数据通常是很少修改或几乎不修改的只读数据，以避免线程并发带来的安全问题。
    - 将数据放入应用域可以作为一种缓存机制，提高访问效率。
    15.3 常见的缓存机制
    除了 ServletContext 作为应用域缓存外，还有其他常见的缓存机制：
- 堆内存中的字符串常量池： 存储字符串字面量，当创建相同字符串时直接复用。
- 堆内存中的整数型常量池： 存储 [-128， 127] 范围内的 Integer 类型引用，超出范围则新建。
- 连接池 （Connection Pool）: 预先创建并管理一组数据库连接对象 （如 java.sql.Connection），复用连接以避免频繁创建和关闭连接的开销，提高数据库访问效率和安全性。
- 线程池 （Thread Pool）: 预先创建并管理一组线程对象，复用线程以避免频繁创建和销毁线程的开销，提高系统并发处理能力。Tomcat 服务器本身就支持多线程，并使用线程池来处理客户端请求。
- Redis：NoSQL数据库；非关系型数据库；缓存数据库。

---
16. HTTP协议
回顾博客：试探HTTP协议

---
Question(Check Yourself)：
- 什么是HTTP协议？它由哪个组织制定？
- HTTP请求协议和响应协议分别包含哪些部分？
- URI和URL的区别是什么？
- 常见的HTTP状态码有哪些？分别表示什么含义？
- GET请求和POST请求的主要区别是什么？如何选择使用？
- 如何查看HTTP协议的具体内容？

---
13.1 协议基础
13.1.1 协议的定义
- 协议是由特定个人或组织预先制定的一套规范或标准，遵循该规范可实现无障碍沟通。
- 示例：人与人之间通过“中国普通话协议”进行交流，双方遵循同一套语言规范，从而实现有效沟通。
13.1.2 HTTP协议的概念
- 定义：HTTP（HyperText Transfer Protocol，超文本传输协议）是由W3C（万维网联盟）制定的一种用于在B/S（浏览器/服务器）架构中传输数据的规范。
- W3C相关信息：
  - 全称“万维网联盟组织”，负责制定HTTP、HTML4.0、HTML5、XML、DOM等一系列互联网标准。
  - 万维网之父是蒂姆·伯纳斯·李（Tim Berners-Lee）。
- 超文本的含义：
  - 指不仅包括普通文本，还涵盖声音、视频、图片等流媒体信息。
  - HTTP协议支持传输各类数据，包括普通字符串和流媒体。
- 协议作用范围：HTTP协议用于浏览器与Web服务器之间的数据交互，浏览器向服务器发送数据需遵循请求协议，服务器向浏览器返回数据需遵循响应协议。
- 解耦合特性：
  - 浏览器不依赖特定品牌的Web服务器，Web服务器也不依赖特定品牌的浏览器。
  - 示例：Firefox浏览器可向Tomcat服务器或Jetty服务器发送请求，不受服务器品牌限制。
- 核心术语：
  - 请求（request）：浏览器向Web服务器发送数据的过程。
  - 响应（response）：Web服务器向浏览器返回数据的过程。
  13.2 HTTP请求协议（B --> S）
  HTTP请求协议定义了浏览器向Web服务器发送数据的格式，由以下四部分组成：
  13.2.1 组成部分
- 请求行：包含请求的核心信息。
- 请求头：包含浏览器及请求的附加信息。
- 空白行：用于分隔请求头和请求体。
- 请求体：浏览器向服务器发送的具体数据。
13.2.2 具体报文示例
- GET请求报文：
  GET /servlet05/getServlet?username=lucy&userpwd=1111 HTTP/1.1  请求行
  Host: localhost:8080                                           请求头
  Connection: keep-alive
  sec-ch-ua: "Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"
  ...（其他请求头信息）
                                                               空白行
                                                               请求体（GET请求通常无请求体）
- POST请求报文：
POST /servlet05/postServlet HTTP/1.1                           请求行
Host: localhost:8080                                           请求头
Connection: keep-alive
Content-Length: 25
...（其他请求头信息）
                                                               空白行
username=lisi&userpwd=123                                      请求体
13.2.3 各部分详解
1. 请求行
  - 组成：由请求方式、URI、HTTP协议版本号三部分组成，之间用空格分隔。
  - 请求方式（7种）：
    - 常用：GET、POST
    - 其他：DELETE、PUT、HEAD、OPTIONS、TRACE
  - URI与URL：
    - URI（Uniform Resource Identifier，统一资源标识符）：代表网络中某个资源的名称，但无法通过它定位资源。
    - URL（Uniform Resource Locator，统一资源定位符）：包含URI，可定位网络中的资源。
    - 关系示例：http://localhost:8080/servlet05/index.html 是URL，/servlet05/index.html 是URI。
  - 协议版本号：如HTTP/1.1。
2. 请求头
  - 作用：传递浏览器相关信息、请求的主机信息、Cookie等附加数据。
  - 示例：
    - Host：请求的主机地址及端口，如 Host: localhost:8080。
    - User-Agent：浏览器相关信息，如 User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) ...。
    - Accept-Language：浏览器可接受的语言，如 Accept-Language: zh-CN,zh;q=0.9。
3. 空白行
  - 是请求头与请求体的分隔标志，由一个空行（回车换行）组成。
4. 请求体
  - 作用：存储浏览器向服务器发送的具体数据。
  - GET请求：通常无请求体，数据通过请求行中的URI传递。
  - POST请求：数据存放在请求体中，格式为 name=value&name=value（如表单数据）。
13.3 HTTP响应协议（S --> B）
HTTP响应协议定义了Web服务器向浏览器返回数据的格式，由以下四部分组成：
13.3.1 组成部分
- 状态行：包含响应的核心状态信息。
- 响应头：包含服务器及响应的附加信息。
- 空白行：用于分隔响应头和响应体。
- 响应体：服务器向浏览器返回的具体数据。
  13.3.2 具体报文示例
  HTTP/1.1 200 ok                                     状态行
  Content-Type: text/html;charset=UTF-8               响应头
  Content-Length: 160
  Date: Mon, 08 Nov 2021 13:19:32 GMT
  ...（其他响应头信息）
                                                    空白行
<!doctype html>                                     响应体
<html>
    <head>
        <title>from get servlet</title>
    </head>
    <body>
        <h1>from get servlet</h1>
    </body>
</html>
13.3.3 各部分详解
1. 状态行
  - 组成：由HTTP协议版本号、状态码、状态描述信息三部分组成，之间用空格分隔。
  - 状态码：
    - 200：请求成功。
    - 404：请求的资源不存在（前端错误）。
    - 405：请求方式与服务器处理方式不一致（前端错误）。
    - 500：服务器端程序出现异常（服务器端错误）。
  - 状态描述信息：如“ok”表示请求成功，“not found”表示资源不存在。
2. 响应头
  - 作用：传递服务器相关信息、响应数据的类型、长度等。
  - 示例：
    - Content-Type：响应内容的类型及编码，如 Content-Type: text/html;charset=UTF-8。
    - Content-Length：响应体的长度，如 Content-Length: 160。
    - Date：响应的时间，如 Date: Mon, 08 Nov 2021 13:19:32 GMT。
3. 空白行
  - 是响应头与响应体的分隔标志，由一个空行（回车换行）组成。
4. 响应体
  - 作用：服务器返回的具体数据，通常是HTML、JSON等格式的字符串。
  - 处理方式：浏览器会对响应体进行渲染、解释和执行，最终展示为用户可见的页面效果。
13.4 请求方式详解
13.4.1 GET请求与POST请求的发送方式
- POST请求：仅当使用form表单且method="post"时发送，如 <form method="post" action="/servlet05/postServlet">。
- GET请求：以下情况均发送GET请求：
  - 在浏览器地址栏输入URL并回车。
  - 点击超链接（<a>标签）。
  - form表单未指定method属性（默认method="get"）。
  - form表单指定method="get"。
13.4.2 GET请求与POST请求的区别
区别点
GET请求
POST请求
数据传输位置
数据附加在URI后，以“?”分隔，显示在地址栏
数据存放在请求体中，不显示在地址栏
数据类型与长度
仅支持普通字符串，长度受浏览器限制
支持任何类型数据（包括流媒体），理论上无长度限制
适用场景
从服务器获取数据
向服务器提交数据
安全性
数据回显在地址栏，敏感信息易泄露
数据不回显，相对安全
缓存支持
支持，响应结果会被浏览器缓存
不支持，响应结果不会被浏览器缓存
13.4.3 GET请求与POST请求的选择原则
- 选择依据：根据请求目的选择，获取资源建议用GET，提交数据建议用POST。
- 具体场景：
  - 表单提交大量数据或包含敏感信息（如密码）时，使用POST。
  - 文件上传必须使用POST（需传输流媒体数据）。
  - 从服务器查询数据、访问静态资源等场景，使用GET。
13.4.4 数据格式
- 无论是GET还是POST请求，发送数据的格式均为 name=value&name=value。
- 其中，name 对应表单中input标签的name属性，value 对应input标签的value属性。
13.5 协议内容查看方式
- 使用Chrome浏览器的开发者工具：按下F12键打开开发者工具，切换到“Network”面板，选择具体的请求，即可查看HTTP协议的详细内容（包括请求头、响应头、请求体、响应体等）。
13.6 补充：GET请求缓存问题解决
- 问题：GET请求的响应结果会被浏览器缓存，可能导致获取到旧数据。
- 解决方法：在请求URL后添加随时间变化的参数（如时间戳），使每次请求的URL不同，从而避免缓存。
- 示例：https://example.com/image.jpg?t=1620000000000（t的值为当前系统毫秒数）。
17. 模板方法设计模式

---
Question(Check Yourself)：
- 什么是设计模式？常见的设计模式分类有哪些？
- 什么是模板方法设计模式？其核心思想是什么？
- 模板类通常是什么类型？模板方法有什么特点？
- 模板方法设计模式中，抽象方法的作用是什么？

---
14.1 设计模式基础
14.1.1 设计模式的定义
- 设计模式是针对特定问题的一套固定解决方案，具有可重复性和通用性，能够在相似场景中被多次复用，帮助开发者提高代码的可维护性、可扩展性和可读性。
14.1.2 常见设计模式分类
- GoF设计模式（Gang of Four，四人组设计模式）：
  - 指由四位作者提出的23种经典设计模式，涵盖了面向对象编程中常见问题的解决方案。
  - 常见示例：单例模式、工厂模式、代理模式、门面模式、责任链设计模式、观察者模式、模板方法设计模式等。
- JavaEE设计模式：
  - 主要针对Java企业级应用开发中出现的特定场景而总结的模式。
  - 常见示例：DAO（数据访问对象）、DTO（数据传输对象）、VO（值对象）、PO（持久化对象）、POJO（简单Java对象）等。
  14.2 模板方法设计模式详解
  14.2.1 核心定义
- 模板方法设计模式是一种行为型设计模式，其核心思想是：在模板类中定义一个核心算法的骨架（即模板方法），将算法中某些不确定的实现步骤延迟到子类中，由子类根据具体需求进行实现。
- 通俗来说，就是“先搭好架子，再填细节”，模板类确定整体流程，子类负责完善具体步骤。
14.2.2 模板类的特点
- 模板类通常是抽象类（abstract class）：因为它需要声明一些抽象方法，留给子类实现，同时包含一个或多个模板方法来定义算法骨架。
- 模板方法的特性：
  - 模板方法是模板类中定义核心算法流程的方法，通常会用final关键字修饰，以防止子类重写该方法而破坏整体算法骨架（但并非强制要求，根据实际需求可灵活调整）。
  - 模板方法内部会按顺序调用一系列方法，其中可能包含抽象方法（由子类实现）和具体方法（模板类自身实现）。
  14.2.3 抽象方法的作用
- 抽象方法是模板类中声明的、没有具体实现的方法，其作用是将算法中可变的步骤交给子类来实现，使不同的子类可以根据自身需求提供不同的实现细节，从而在不改变算法整体骨架的前提下，实现功能的多样化。
- 例如：在一个“制作饮品”的模板类中，模板方法定义“煮水→冲泡→倒入杯中→添加调料”的流程，其中“冲泡”和“添加调料”可作为抽象方法，由“制作咖啡”和“制作茶”的子类分别实现（咖啡用咖啡粉冲泡、加奶糖；茶用茶叶冲泡、加蜂蜜）。
14.3 模式优势
- 代码复用：模板类中定义的算法骨架可被多个子类共享，减少重复代码。
- 行为控制：父类（模板类）控制算法的整体流程，子类仅负责填充具体实现，符合“开闭原则”（对扩展开放，对修改关闭）。
- 逻辑清晰：将核心流程集中在模板方法中，使代码的结构更清晰，便于理解和维护。
18.  HttpServlet源码分析

---
Question(Check Yourself)：
- HttpServlet类位于哪个包？它与GenericServlet的关系是什么？
- HttpServletRequest和HttpServletResponse对象的作用分别是什么？
- Servlet的生命周期包括哪些阶段？
- HttpServlet的service方法是如何处理不同请求方式的？
- 为什么会出现405错误？如何避免？

---
16.1 类层次结构与核心接口
16.1.1 类层次结构
- HttpServlet类位于jakarta.servlet.http包下，是一个抽象类，专门为HTTP协议设计，继承自GenericServlet。
- 相比GenericServlet，HttpServlet提供了对HTTP协议的更具体支持，如处理不同HTTP请求方法（GET、POST等）。
16.1.2 相关接口与类
- 核心接口：
  - jakarta.servlet.Servlet：Servlet规范的核心接口，定义了Servlet的基本生命周期方法。
  - jakarta.servlet.ServletConfig：封装Servlet的配置信息。
  - jakarta.servlet.ServletContext：表示Servlet运行的上下文环境。
- HTTP专用接口与类：
  - jakarta.servlet.http.HttpServlet：HTTP协议专用的Servlet基类。
  - jakarta.servlet.http.HttpServletRequest：封装HTTP请求信息。
  - jakarta.servlet.http.HttpServletResponse：封装HTTP响应信息。
  16.2 HttpServletRequest与HttpServletResponse
  16.2.1 HttpServletRequest
- 作用：封装了客户端发送的HTTP请求的所有信息，包括请求行、请求头、请求体等。
- 工作原理：Tomcat服务器解析HTTP请求协议后，将数据封装到HttpServletRequest对象中，Servlet通过该对象获取请求信息。
16.2.2 HttpServletResponse
- 作用：用于向客户端发送HTTP响应，包括设置响应状态码、响应头、响应体等。
16.3 Servlet生命周期回顾
1. 初始化阶段：
  - 第一次请求时，Tomcat通过反射创建Servlet对象。
  - 调用init(ServletConfig config)方法进行初始化。
2. 服务阶段：
  - 每次请求都会调用service方法处理请求。
3. 销毁阶段：
  - 服务器关闭时，调用destroy方法释放资源。
16.4 HttpServlet源码深度解析
16.4.1 service方法的核心逻辑
- 第一个service方法：
  @Override
  public void service(ServletRequest req, ServletResponse res)
    throws ServletException, IOException {
    HttpServletRequest  request = (HttpServletRequest) req;
    HttpServletResponse response = (HttpServletResponse) res;
    service(request, response);
  }
  - 作用：将通用的ServletRequest和ServletResponse对象转换为HTTP专用的HttpServletRequest和HttpServletResponse对象。
  - 为什么需要转换？因为HTTP协议有额外的特性（如请求方法、Cookie等），需要更具体的接口支持。
- 第二个service方法（模板方法）：
protected void service(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {
    String method = req.getMethod();
    switch (method) {
        case "GET":
            // 处理GET请求逻辑
            break;
        case "POST":
            // 处理POST请求逻辑
            break;
        // 其他请求方法...
    }
}
  - 作用：根据请求方法（GET、POST等）调用对应的doXxx方法。
  - 设计模式：典型的模板方法模式，父类定义算法骨架，子类实现具体步骤。
16.4.2 请求方法处理机制
- HttpServlet默认实现的doXxx方法（如doGet、doPost）：
protected void doGet(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {
    String msg = lStrings.getString("http.method_get_not_supported");
    resp.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, msg);
}
  - 默认行为：返回405错误（Method Not Allowed），表示请求方法不被支持。
  - 为什么？因为HttpServlet不知道子类需要支持哪些请求方法，需要子类主动重写。
16.5 405错误的成因与解决
16.5.1 405错误的成因
- 当客户端发送的请求方法（如GET）与Servlet中重写的方法不匹配（如只重写了doPost）时，触发405错误。
- 示例：
  - 前端发送GET请求，但Servlet只重写了doPost方法。
  - HttpServlet的service方法调用doGet，但doGet默认实现返回405。
  16.5.2 避免405错误的方法
1. 正确匹配请求方法：
  - 若前端使用GET请求，后端重写doGet方法。
  - 若前端使用POST请求，后端重写doPost方法。
2. 同时重写doGet和doPost：
  - 适用于GET和POST请求处理逻辑相似的场景。
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {
    processRequest(req, resp);
}

@Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {
    processRequest(req, resp);
}

private void processRequest(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {
    // 处理请求的通用逻辑
}
3. 直接重写service方法：
  - 适用于需要自定义请求处理逻辑的场景。
@Override
protected void service(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {
    String method = req.getMethod();
    if ("GET".equals(method)) {
        // 自定义GET处理逻辑
    } else if ("POST".equals(method)) {
        // 自定义POST处理逻辑
    }
}
16.6 最终的Servlet开发步骤
1. 继承HttpServlet：
public class HelloServlet extends HttpServlet {
    // 实现doGet或doPost
}
2. 重写doGet或doPost方法：
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp)
    throws ServletException, IOException {
    // 处理GET请求
}
3. 配置Servlet到web.xml：
<servlet>
    <servlet-name>helloServlet</servlet-name>
    <servlet-class>com.example.HelloServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>helloServlet</servlet-name>
    <url-pattern>/hello</url-pattern>
</servlet-mapping>
4. 前端页面配合：
  - 确保form表单的method属性与Servlet重写的方法一致。
<form action="/hello" method="get">
    <!-- 表单内容 -->
</form>
16.7 常见问题解答
Q：为什么不建议同时重写doGet和doPost？
A：若两者处理逻辑相同，可提取公共方法，避免代码重复；若逻辑不同，应分开实现，保持单一职责。

Q：直接重写service方法有什么缺点？
A：会失去HttpServlet提供的一些默认处理逻辑（如GET请求的缓存控制），需自行实现。

Q：405错误有什么作用？
A：405错误是HTTP协议的一部分，用于明确告知客户端请求方法不被支持，帮助调试和规范API使用。
19.  Web站点欢迎页面配置

---
Question(Check Yourself)：
- 什么是Web站点的欢迎页面？它的作用是什么？
- 如何在web.xml中配置欢迎页面？有哪些注意事项？
- 当Web应用中同时存在局部和全局欢迎页面配置时，优先使用哪一个？
- 欢迎页面可以是Servlet吗？如果可以，如何配置？

---
15.1 欢迎页面的基本概念
- 定义：对于一个Web应用（WebApp），欢迎页面是指当用户访问该应用的根路径（即未指定具体资源路径）时，服务器自动返回的默认页面。
- 示例：
  - 访问 http://localhost:8080/servlet06/login.html：明确指定访问login.html资源。
  - 访问 http://localhost:8080/servlet06：未指定具体资源，此时会默认访问欢迎页面。
  15.2 欢迎页面的配置方法
  15.2.1 配置静态HTML页面为欢迎页
  步骤：
1. 在IDEA工具的web目录下创建HTML文件，例如：login.html。
2. 在web.xml文件中添加如下配置：
<welcome-file-list>
    <welcome-file>login.html</welcome-file>
</welcome-file-list>
3. 配置说明：
  - 路径不需要以“/”开头，默认从Web应用的根目录开始查找。
  - 若配置为 page1/page2/page.html，则表示从Web应用根目录下的page1/page2目录中查找page.html文件。
15.2.2 配置多个欢迎页面
- 支持在web.xml中配置多个欢迎页面，服务器会按配置顺序依次查找，直到找到存在的页面为止。
- 示例：
<welcome-file-list>
    <welcome-file>page1/page2/page.html</welcome-file>
    <welcome-file>login.html</welcome-file>
    <welcome-file>index.jsp</welcome-file>
</welcome-file-list>
- 优先级规则：越靠上的欢迎页面优先级越高，若第一个页面不存在，则继续查找下一个，以此类推。
15.3 全局与局部欢迎页面配置
15.3.1 全局配置（Tomcat默认配置）
- Tomcat服务器在 CATALINA_HOME/conf/web.xml 文件中预先配置了全局欢迎页面：
<welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>index.jsp</welcome-file>
</welcome-file-list>
- 作用：当Web应用未在自身的web.xml中配置欢迎页面时，将使用Tomcat的全局配置。
15.3.2 局部配置（Web应用自定义配置）
- 在Web应用的web.xml文件中配置的欢迎页面属于局部配置。
- 优先级规则：局部配置优先于全局配置。若Web应用自身配置了欢迎页面，则使用该配置；否则使用Tomcat的全局配置。
15.4 配置Servlet为欢迎页面
15.4.1 实现原理
欢迎页面不仅可以是静态HTML文件，也可以是动态的Servlet。因为Servlet本质上也是Web资源，可处理请求并返回响应。
15.4.2 配置步骤
1. 创建Servlet类：
public class WelcomeServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.print("<h1>Welcome to bjpowernode!</h1>");
    }
}
2. 在web.xml中配置Servlet：
<servlet>
    <servlet-name>welcomeServlet</servlet-name>
    <servlet-class>com.bjpowernode.javaweb.servlet.WelcomeServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>welcomeServlet</servlet-name>
    <url-pattern>/welcome</url-pattern>
</servlet-mapping>
3. 在web.xml中配置欢迎页面指向该Servlet：
<welcome-file-list>
    <welcome-file>welcome</welcome-file>
</welcome-file-list>
4. 配置说明：
  - welcome-file 标签的值应与Servlet的url-pattern保持一致（不包含上下文路径）。
  - 访问Web应用根路径时，服务器会自动转发到该Servlet处理请求。
15.5 常见问题与注意事项
- 路径问题：配置欢迎页面时，路径不要以“/”开头，且默认从Web应用根目录开始查找。
- 优先级问题：局部配置 > 全局配置，多个欢迎页面按配置顺序依次查找。
- Servlet作为欢迎页：确保Servlet的url-pattern与welcome-file配置一致，且Servlet已正确映射。
20. 关于WEB-INF目录
- 在WEB-INF目录下新建了一个文件：welcome.html
- 打开浏览器访问：http://localhost:8080/servlet07/WEB-INF/welcome.html 出现了404错误。
- 注意：放在WEB-INF目录下的资源是受保护的。在浏览器上不能够通过路径直接访问。所以像HTML、CSS、JS、image等静态资源一定要放到WEB-INF目录之外。

---
21. HttpServletRequest接口详解

---
Question(Check Yourself)：
- HttpServletRequest接口的父接口是什么？其实现类由谁提供？
- HttpServletRequest对象封装了哪些信息？它的生命周期是怎样的？
- 如何获取前端提交的数据？常用的相关方法有哪些？
- 什么是请求域？它与应用域有何区别？如何选用？
- 请求转发的实现方式是什么？转发时路径写法有何注意事项？
- getParameter和getAttribute方法的区别是什么？

---
17.1 接口基础与实现
17.1.1 接口层次结构
- HttpServletRequest接口全限定名称为jakarta.servlet.http.HttpServletRequest，是Servlet规范的重要组成部分。
- 继承关系：public interface HttpServletRequest extends ServletRequest {}，即ServletRequest是其直接父接口。
17.1.2 实现类与对象创建
- 实现类：由Tomcat服务器（Web容器）提供，如org.apache.catalina.connector.RequestFacade，该类实现了HttpServletRequest接口。
- 对象创建：HttpServletRequest对象由Tomcat服务器在每次请求到达时自动创建，无需开发者干预。
- 核心意义：Tomcat通过实现Servlet规范，将HTTP请求协议的信息封装到该对象中，开发者只需面向接口调用方法即可获取请求信息。
17.2 对象内容与生命周期
17.2.1 封装的信息
- HttpServletRequest对象封装了完整的HTTP请求协议内容，包括：
  - 请求行信息（请求方法、URI、协议版本）。
  - 请求头信息（Host、User-Agent、Cookie等）。
  - 请求体数据（表单提交的参数等）。
- 封装过程：用户发送HTTP请求后，Tomcat解析请求协议，将解析结果存入HttpServletRequest对象，传递给Servlet的service方法。
17.2.2 生命周期
- 有效性：仅在当前请求中有效，一次请求对应一个HttpServletRequest对象。
- 销毁：请求处理完成后，由Tomcat自动销毁，无法在多次请求间共享。
17.3 获取请求参数的方法
HttpServletRequest提供了4种获取前端提交数据的核心方法，基于键值对存储结构（Map<String, String[]>）：
方法
作用
Map<String, String[]> getParameterMap()
获取所有请求参数的键值对集合
Enumeration<String> getParameterNames()
获取所有参数名（Map的key）
String[] getParameterValues(String name)
根据参数名获取对应的值数组（适用于多值参数，如复选框）
String getParameter(String name)
获取参数值数组的第一个元素（最常用，适用于单值参数）
- 数据结构说明：前端提交的数据以name=value&name=value格式传输，Tomcat解析后用Map<String, String[]>存储，例如：
  - 表单提交username=zhangsan&hobby=reading&hobby=sports，对应Map为：
  {
    "username": ["zhangsan"],
    "hobby": ["reading", "sports"]
  }
- 注意事项：所有参数值均为字符串类型，即使前端输入数字，后端获取的仍是字符串形式（如"123"）。
17.4 请求域与数据共享
17.4.1 请求域的定义与作用
- 请求域是HttpServletRequest对象内置的存储空间，用于在一次请求的多个资源（如Servlet、HTML）之间共享数据。
- 生命周期：与请求同步，一次请求结束后，请求域中的数据自动失效。
17.4.2 操作请求域的方法
- void setAttribute(String name, Object obj)：向请求域中绑定数据（键为字符串，值为任意对象）。
- Object getAttribute(String name)：根据键从请求域中获取数据。
- void removeAttribute(String name)：从请求域中移除指定键的数据。
17.4.3 与应用域（ServletContext）的对比
特性
请求域（HttpServletRequest）
应用域（ServletContext）
作用范围
仅当前请求
整个Web应用（所有请求共享）
生命周期
一次请求
Web应用启动至关闭
资源占用
小（随请求销毁）
大（长期存在）
适用场景
单次请求内的数据共享（如转发时传递数据）
全局共享且极少修改的数据（如系统配置）
- 选用原则：优先使用请求域，减少资源占用，仅在需全局共享数据时使用应用域。
17.5 请求转发
17.5.1 定义与实现
- 请求转发是指将请求从一个资源（如AServlet）转发到另一个资源（如BServlet或HTML），属于一次请求的内部跳转。
- 实现代码：
// 获取请求转发器，参数为目标资源路径
RequestDispatcher dispatcher = request.getRequestDispatcher("/target");
// 执行转发
dispatcher.forward(request, response);

// 简化写法
request.getRequestDispatcher("/target").forward(request, response);
17.5.2 路径写法与注意事项
- 路径格式：以“/”开头，代表Web应用的根目录（无需包含项目名）。
  - 示例：转发到webapp目录下的page.html，路径为/page.html；转发到/servlet06/bservlet，路径为/bservlet。
- 可转发资源：包括Servlet、HTML、JSP等Web应用内的所有合法资源。
- 数据共享：转发前后的资源共享同一个request对象，可通过请求域传递数据。
17.6 其他常用方法
1. 获取客户端信息：
  - String getRemoteAddr()：获取客户端IP地址。
  - String getMethod()：获取请求方法（如GET、POST）。
2. 路径相关方法：
  - String getRequestURI()：获取请求URI（如/servlet06/test）。
  - String getContextPath()：获取Web应用的上下文路径（即项目名，如/servlet06）。
  - String getServletPath()：获取Servlet的映射路径（如/test）。
3. 解决乱码问题：
  - POST请求：Tomcat 9及以下版本需设置请求体字符集：request.setCharacterEncoding("UTF-8")（Tomcat 10及以上默认UTF-8，无需设置）。
  - GET请求：Tomcat 8及以上默认URI编码为UTF-8，无需额外配置；旧版本需修改CATALINA_HOME/conf/server.xml，添加URIEncoding="UTF-8"。
17.7 关键方法区别
- getParameter(String name)与getAttribute(String name)：
  - getParameter：用于获取前端提交的表单数据（用户输入的内容）。
  - getAttribute：用于获取请求域中绑定的数据（开发者在后端设置的对象）。
- 示例：
// 前端提交username=zhangsan
String username = request.getParameter("username"); // 结果："zhangsan"

// 后端绑定数据：request.setAttribute("user", new User())
User user = (User) request.getAttribute("user"); // 结果：绑定的User对象
17.8 总结
HttpServletRequest是处理HTTP请求的核心对象，封装了请求协议的全部信息，提供了获取请求数据、共享数据、转发请求等功能。掌握其方法的使用，尤其是参数获取、请求域操作和转发机制，是开发JavaWeb应用的基础。
22. Web应用中的资源跳转方式

---
Question(Check Yourself)：
- Web应用中实现资源跳转的两种方式是什么？
- 转发和重定向在代码实现上有何区别？
- 转发和重定向的本质区别是什么？如何通过浏览器地址栏区分两者？
- 如何选择使用转发或重定向？各自的适用场景是什么？
- 转发和重定向对跳转的目标资源有要求吗？

---
18.1 跳转方式概述
在Web应用中，实现资源跳转主要有两种方式：
- 转发（Forward）：由Web服务器内部完成的跳转，属于一次请求的内部传递。
- 重定向（Redirect）：由浏览器发起的二次请求跳转，属于两次独立的请求。
18.2 转发的实现与特点
18.2.1 代码实现
转发通过HttpServletRequest对象的请求转发器实现，具体代码如下：
// 1. 获取请求转发器，参数为目标资源的路径（以“/”开头，代表Web应用根目录）
RequestDispatcher dispatcher = request.getRequestDispatcher("/targetResource");
// 2. 执行转发，将当前请求和响应对象传递给目标资源
dispatcher.forward(request, response);

// 简化写法
request.getRequestDispatcher("/targetResource").forward(request, response);
18.2.2 核心特点
- 请求次数：仅一次请求，转发前后共享同一个request和response对象。
- 地址栏变化：浏览器地址栏显示的始终是初始请求的URL，不会发生变化。
- 跳转范围：只能跳转到当前Web应用内部的资源（如Servlet、JSP、HTML等）。
- 数据共享：可通过request域在转发的资源间传递数据（因共享同一个request对象）。
- 本质：由Web服务器（如Tomcat）控制跳转，浏览器对此无感知。
18.3 重定向的实现与特点
18.3.1 代码实现
重定向通过HttpServletResponse对象的sendRedirect方法实现，具体代码如下：
// 参数为目标资源的完整路径（需包含Web应用的上下文路径）
response.sendRedirect("/webappName/targetResource");
- 示例：若Web应用上下文路径为/servlet07，跳转至dept/list资源的代码为：
response.sendRedirect("/servlet07/dept/list");
18.3.2 核心特点
- 请求次数：两次独立的请求，第一次请求由浏览器发送至初始资源，第二次请求由浏览器根据服务器返回的重定向地址发起。
- 地址栏变化：浏览器地址栏会显示目标资源的URL，与初始请求的URL不同。
- 跳转范围：可跳转到当前Web应用内部的资源，也可跳转到其他Web应用或外部网站（如response.sendRedirect("https://www.baidu.com")）。
- 数据共享：两次请求使用不同的request对象，无法通过request域共享数据（需借助ServletContext或会话Session）。
- 本质：由浏览器根据服务器返回的302状态码和重定向地址发起第二次请求，跳转过程对浏览器可见。
18.4 转发与重定向的本质区别
对比维度
转发（Forward）
重定向（Redirect）
请求次数
1次请求
2次请求
地址栏URL
不变（显示初始请求URL）
变化（显示目标资源URL）
跳转控制者
Web服务器（Tomcat）
浏览器
数据共享
共享request域数据
不共享request域数据
路径写法
以“/”开头，无需包含上下文路径
需包含上下文路径（或完整URL）
跳转范围
仅限当前Web应用内部
可跨应用（包括外部网站）
18.5 通俗理解：借钱案例
- 转发：杜老师向张三借钱，张三没钱但私下向李四借到钱后交给杜老师。杜老师只发起一次请求（找张三），且不知道钱来自李四（对跳转无感知）。
- 重定向：杜老师向张三借钱，张三没钱但告知杜老师李四的地址，杜老师需自行向李四借钱。杜老师发起两次请求（先找张三，再找李四），且知道最终从李四处获得钱（对跳转有感知）。
18.6 跳转方式的选择原则
- 使用转发的场景：当需要在跳转前后的资源间共享request域中的数据时（如前一个Servlet处理数据后，需在后一个Servlet中展示数据），必须使用转发。
- 使用重定向的场景：除上述场景外，均建议使用重定向，尤其是以下情况：
  - 表单提交后（避免刷新页面导致重复提交）。
  - 跳转至其他Web应用或外部资源。
  - 无需共享request域数据的普通跳转（重定向更符合HTTP协议的无状态特性）。
  18.7 目标资源的要求
  转发和重定向对目标资源的要求相同：
- 可以是Web应用内部的任何合法资源，包括Servlet、JSP、HTML、CSS、JavaScript等。
- 转发仅能跳转至当前Web应用内的资源；重定向可跳转至任意合法的网络资源（如其他网站的URL）。
18.8 转发的刷新问题
- 问题描述：使用转发时，若用户刷新浏览器，会重新提交初始请求，可能导致重复处理（如重复提交表单）。
- 解决办法：对于表单提交等场景，建议使用重定向，避免刷新导致的重复操作（重定向后刷新仅会重新请求目标资源，而非初始请求）。
18.9 总结
转发和重定向是Web开发中实现资源跳转的核心方式，两者的本质区别在于请求次数和数据共享机制。开发中需根据是否需要共享request域数据选择合适的方式，重定向因更符合HTTP无状态特性而使用更为广泛。
23.  Servlet注解：简化配置开发

---
Question(Check Yourself)：
- 为什么需要Servlet注解？它相比传统的web.xml配置有什么优势？
- Servlet3.0及以上版本引入的核心注解是什么？其主要属性有哪些？
- 注解是否完全替代了web.xml文件？两者应如何配合使用？
- 注解中value属性有什么特殊之处？数组类型的属性在什么情况下可以省略大括号？

---
19.1 注解引入的背景
19.1.1 传统web.xml配置的问题
- 对于复杂项目，web.xml文件会因大量Servlet配置变得庞大，甚至可能达到几十兆，不利于维护。
- 每新增一个Servlet都需要在web.xml中配置<servlet>和<servlet-mapping>标签，开发效率低。
- 多数Servlet配置信息极少修改，硬编码在XML中显得冗余。
19.1.2 注解的优势
- 开发效率高：无需编写繁琐的XML配置，直接在Java类上通过注解标注Servlet信息。
- 配置集中：Servlet的相关配置（如映射路径）与类定义放在一起，便于查阅和修改。
- 减少文件体积：大幅缩减web.xml文件的内容，使其更简洁。
19.2 核心注解：@WebServlet
19.2.1 注解的全限定名
Servlet3.0及以上版本中，核心注解为jakarta.servlet.annotation.WebServlet，用于标注一个类为Servlet。
19.2.2 主要属性及说明
属性名
作用
对应XML标签
备注
name
指定Servlet的名称
<servlet-name>
可选，默认值为类的全限定名
urlPatterns
指定Servlet的映射路径（支持多个）
<url-pattern>
数组类型，如{"/user", "/user/list"}
loadOnStartup
指定服务器启动时是否加载该Servlet（优先级）
<load-on-startup>
整数类型，值越小优先级越高，默认值为-1（请求时加载）
value
功能与urlPatterns一致，为默认属性
<url-pattern>
当注解中仅设置该属性时，可省略属性名
19.2.3 注解的使用格式
基本语法：
@WebServlet(属性名1=属性值1, 属性名2=属性值2, ...)
public class MyServlet extends HttpServlet {
    // 实现代码
}
示例：
// 配置映射路径和启动加载优先级
@WebServlet(name = "UserServlet", urlPatterns = {"/user", "/user/*"}, loadOnStartup = 1)
public class UserServlet extends HttpServlet { ... }

// 仅配置映射路径（省略value属性名）
@WebServlet("/hello") // 等价于@WebServlet(value = "/hello")
public class HelloServlet extends HttpServlet { ... }
19.3 注解与web.xml的配合
19.3.1 并非完全替代
注解的出现并未淘汰web.xml文件，两者需配合使用：
- 注解适用场景：配置信息稳定、极少修改的情况（如Servlet映射路径、启动优先级）。
- web.xml适用场景：需要频繁修改的配置（如全局参数、过滤器映射、欢迎页面等），或多环境部署时需动态调整的配置。
19.3.2 优先级规则
- 若注解与web.xml中配置了同一Servlet的信息，**web.xml的配置会覆盖注解**（XML配置优先级更高）。
- 建议：同一Servlet的配置仅使用一种方式，避免冲突。
19.4 注解使用的注意事项
- 数组属性的简化写法：当数组中只有一个元素时，可省略大括号，例如：
@WebServlet(urlPatterns = "/test") // 等价于urlPatterns = {"/test"}
- value属性的特殊性：当注解中仅设置value属性时，可省略属性名，例如：
@WebServlet("/login") // 等价于@WebServlet(value = "/login")
- 属性的可选性：无需配置所有属性，仅根据需求设置必要的属性（如多数情况下只需配置映射路径）。
19.5 总结
Servlet注解是Servlet3.0及以上版本对XML配置的重要补充，通过@WebServlet注解可简化Servlet的配置过程，提高开发效率。实际开发中应根据配置信息的稳定性选择注解或web.xml，形成“注解+配置文件”的混合开发模式，兼顾简洁性和灵活性。
24. 使用模板方法设计模式优化OA项目

---
Question(Check Yourself)：
- OA项目中单纯使用Servlet注解后仍存在什么问题？
- 类爆炸问题的根源是什么？如何从设计上解决这一问题？
- 模板方法设计模式在优化OA项目时的核心思路是什么？
- 如何实现“一个业务对应一个Servlet类，一个请求对应一个方法”的设计？

---
20.1 现有问题分析
20.1.1 类爆炸现象
- 问题描述：在传统开发模式中，一个请求对应一个Servlet类（如部门查询对应DeptQueryServlet，部门新增对应DeptAddServlet）。即使是单表CRUD操作，也需要创建6个Servlet类，导致项目中类的数量急剧增加（即“类爆炸”）。
- 影响：对于复杂业务系统，类的数量可能达到数千甚至上万，严重降低代码的可维护性和可读性。
20.1.2 问题根源
- 设计缺陷：将“请求处理”与“Servlet类”进行一对一绑定，忽略了业务逻辑的关联性（如部门相关的查询、新增、修改等操作属于同一业务域）。
- 代码冗余：不同Servlet类中存在大量重复代码（如请求参数解析、响应处理等）。
20.2 模板方法设计模式的优化思路
20.2.1 核心设计思想
- 业务聚合：将同一业务域的所有操作（如部门的CRUD）集中到一个Servlet类中，实现“一个业务对应一个Servlet类”。
- 方法拆分：在该Servlet类中，为每个具体请求（如查询、新增）定义一个对应的处理方法，实现“一个请求对应一个方法”。
- 模板封装：通过模板方法设计模式，在父类中定义请求处理的通用流程（如参数解析、方法分发、响应处理），子类仅需实现具体业务方法。
20.2.2 优化后的类结构
业务域
对应的Servlet类
包含的处理方法
部门管理
DeptServlet
doList()、doAdd()、doDelete()、doUpdate()等
用户管理
UserServlet
doList()、doAdd()、doDelete()、doUpdate()等
卡片管理
CardServlet
doList()、doAdd()、doDelete()、doUpdate()等
20.3 具体实现步骤
20.3.1 定义抽象模板父类
创建一个抽象的BaseServlet类，继承HttpServlet，作为所有业务Servlet的父类，封装通用流程：
public abstract class BaseServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        doPost(request, response); // GET请求统一交给POST处理
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // 1. 获取请求参数“method”，确定要调用的方法名
        String methodName = request.getParameter("method");
        if (methodName == null || methodName.trim().isEmpty()) {
            throw new ServletException("请指定要调用的方法名（method参数）");
        }

        // 2. 通过反射获取当前Servlet类中对应的方法
        try {
            // 获取当前子类的Class对象（如DeptServlet.class）
            Class<? extends BaseServlet> clazz = this.getClass();
            // 获取方法（参数为HttpServletRequest和HttpServletResponse）
            Method method = clazz.getMethod(methodName, HttpServletRequest.class, HttpServletResponse.class);
            // 3. 调用该方法处理请求
            method.invoke(this, request, response);
        } catch (NoSuchMethodException e) {
            throw new ServletException("不存在方法：" + methodName, e);
        } catch (Exception e) {
            throw new ServletException("方法调用失败：" + methodName, e);
        }
    }
}
20.3.2 编写业务Servlet子类
每个业务域的Servlet继承BaseServlet，实现具体的业务方法：
@WebServlet("/dept") // 部门相关请求统一映射到/dept
public class DeptServlet extends BaseServlet {
    // 处理部门列表查询请求
    public void doList(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // 业务逻辑：查询部门列表
        List<Dept> depts = deptService.findAll();
        request.setAttribute("depts", depts);
        request.getRequestDispatcher("/dept/list.jsp").forward(request, response);
    }

    // 处理部门新增请求
    public void doAdd(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // 业务逻辑：新增部门
        String deptName = request.getParameter("deptName");
        deptService.add(new Dept(deptName));
        response.sendRedirect(request.getContextPath() + "/dept?method=doList");
    }

    // 其他方法：doDelete()、doUpdate()等
}
20.3.3 前端请求方式
前端通过请求参数method指定要调用的方法，例如：
- 查询部门列表：/dept?method=doList
- 新增部门：表单提交至/dept?method=doAdd
20.4 优化优势
- 减少类数量：将同一业务域的操作聚合到一个Servlet类中，避免类爆炸（如部门相关操作从6个类减少为1个类）。
- 代码复用：父类BaseServlet封装了请求分发、反射调用等通用逻辑，子类无需重复编写。
- 易于维护：业务方法集中在对应Servlet类中，逻辑清晰，便于后期修改和扩展。
- 符合开闭原则：新增业务操作时，只需在子类中添加新方法，无需修改父类模板，降低耦合度。
20.5 注意事项
- 方法命名规范：子类中的业务方法名需与前端传递的method参数值一致，且参数必须为HttpServletRequest和HttpServletResponse。
- 异常处理：父类中已对常见异常（如方法不存在、调用失败）进行捕获，子类可专注于业务逻辑，无需重复处理通用异常。
- 安全性：需避免前端传递恶意的method参数（如调用Object类的toString()方法），可在父类中添加白名单校验，仅允许调用指定前缀的方法（如doXXX）。
20.6 总结
通过模板方法设计模式，OA项目的Servlet设计从“一个请求一个类”优化为“一个业务一个类、一个请求一个方法”，有效解决了类爆炸问题。父类BaseServlet定义通用流程（模板方法），子类专注于具体业务实现，既提高了代码复用率，又增强了系统的可维护性和扩展性。
25. 纯粹Servlet开发Web应用的缺陷分析

---
Question(Check Yourself)：
- 在Servlet中直接编写HTML、CSS、JavaScript等前端代码会带来哪些问题？
- 这些问题对开发效率和系统维护有何影响？
- 针对这些缺陷，可采用的解决思路是什么？其核心思想是什么？

---
21.1 纯粹Servlet开发的核心缺陷
纯粹使用Servlet开发Web应用时，通常需要在Java代码中嵌入HTML、CSS、JavaScript等前端代码（如通过PrintWriter输出页面内容），这种方式存在以下显著缺陷：

21.1.1 开发难度大，效率低下
- 前端代码（如HTML标签、CSS样式）与Java代码（如业务逻辑、数据处理）混合编写，两种语言的语法规则、格式要求差异较大，开发者需在两种思维模式中频繁切换，增加了编码复杂度。
- 示例：在Servlet中输出一个简单的表单页面，需手动拼接大量字符串，极易出现语法错误（如引号嵌套、标签未闭合等），且调试困难。
// Servlet中嵌入HTML的示例（繁琐且易出错）
PrintWriter out = response.getWriter();
out.println("<html>");
out.println("<head><title>用户表单</title></head>");
out.println("<body>");
out.println("<form action='/user' method='post'>");
out.println("用户名：<input type='text' name='username'><br>");
out.println("<input type='submit' value='提交'>");
out.println("</form>");
out.println("</body>");
out.println("</html>");
21.1.2 代码耦合度高，结构混乱
- 前端展示逻辑与后端业务逻辑强耦合在同一个Servlet类中，违反“单一职责原则”（一个类应只负责一项功能）。
- 例如：一个Servlet既包含用户数据的查询、校验等业务逻辑，又包含页面的HTML结构生成逻辑，导致代码职责不清，可读性差。
21.1.3 维护成本极高
- 前端样式或页面结构的微小修改（如调整按钮颜色、新增一个表单字段），都需要修改Servlet的Java代码，然后重新编译、打包、部署，流程繁琐。
- 团队协作困难：前端开发者需熟悉Java代码结构才能修改页面，后端开发者也需关注前端代码细节，分工不清晰，容易引发冲突。
21.1.4 代码扩展性差
- 随着业务增长，页面复杂度提高（如添加JavaScript交互、动态渲染数据），Servlet中的代码会变得异常臃肿，难以扩展新功能。
- 例如：为页面添加分页功能时，需同时修改数据查询的Java逻辑和页面渲染的HTML输出，改动范围大，风险高。
21.2 解决思路：分离与自动化生成
针对上述缺陷，核心解决思路是将前端代码与后端代码分离，并通过工具实现前端代码到后端执行逻辑的自动化转换，具体如下：
21.2.1 核心思想
- 开发者仅专注于编写前端代码（如HTML模板），无需手动编写Servlet中输出页面的Java代码。
- 引入中间层（如JSP、模板引擎等），由工具（或容器）自动将前端代码转换为可执行的Java代码（类似Servlet），并完成编译、运行等流程。
- 实现目标：前端开发者专注于页面展示，后端开发者专注于业务逻辑，两者通过约定的数据交互方式（如request域传递数据）协作，降低耦合度。
21.2.2 典型实现（以JSP为例）
- JSP（JavaServer Pages）本质上是一种特殊的Servlet，开发者可在JSP中直接编写HTML代码，并嵌入少量Java代码（用于数据展示）。
- 容器（如Tomcat）会自动将JSP文件编译为Servlet类，开发者无需手动编写输出HTML的Java代码，大幅简化开发流程。
- 示例：使用JSP实现上述表单页面，代码简洁且易于维护：
<!-- JSP页面（前端代码与少量数据展示逻辑分离） -->
<html>
  <head><title>用户表单</title></head>
  <body>
    <form action='/user' method='post'>
      用户名：<input type='text' name='username'><br>
      <input type='submit' value='提交'>
    </form>
  </body>
</html>
21.3 总结
纯粹Servlet开发Web应用的核心问题在于**前端代码与后端代码的强耦合**，导致开发效率低、维护成本高。解决这一问题的关键是通过技术手段（如模板引擎、JSP等）实现前后端代码分离，让开发者各司其职，并借助工具自动化完成代码转换和执行，从而提高系统的可维护性和扩展性。
26. B/S结构系统的会话机制（Session机制）

---
Question(Check Yourself)：
- 什么是会话？它与请求的关系是什么？
- 为什么需要Session机制？HTTP协议的无状态特性如何影响会话管理？
- Session对象的实现原理是什么？它如何区分不同用户的会话？
- Cookie禁用时，Session机制如何工作？这种情况下存在什么问题？
- 比较request、session、application三个域对象的作用域和使用场景。
- 如何利用Session机制解决OA项目中的登录验证问题？

---
22.1 会话与Session基础概念
22.1.1 会话的定义
- 会话（Session）指用户从打开浏览器开始，进行一系列操作，直至关闭浏览器的整个过程。在服务器端，每个会话对应一个HttpSession对象。
- 与请求的关系：一次会话包含多次请求（如用户在网站上浏览多个页面），每次请求对应一个HttpServletRequest对象。
22.1.2 Session机制的作用
- 核心功能：保存会话状态，解决HTTP协议的无状态问题。
- 典型场景：用户登录成功后，将用户信息存储在Session中，后续请求可通过Session验证用户身份，保持登录状态。
22.2 HTTP协议的无状态特性
- 无状态的含义：每次HTTP请求都是独立的，服务器无法识别两次请求是否来自同一用户。请求结束后，客户端与服务器的连接断开。
- 设计目的：减少服务器负担，提高并发处理能力。
- 带来的问题：无法自动保持用户状态（如登录状态），需借助额外机制（如Session）实现状态管理。
22.3 Session的实现原理
22.3.1 核心组件
- JSESSIONID：服务器为每个Session生成的唯一标识符，以Cookie形式存储在浏览器内存中。
- Session列表：服务器端维护的一个Map<JSESSIONID, HttpSession>，存储所有活跃的Session对象。
22.3.2 工作流程
1. 首次请求：
  - 用户访问网站，服务器创建新的HttpSession对象，生成唯一的JSESSIONID。
  - 服务器通过响应头（Set-Cookie）将JSESSIONID发送给浏览器，例如：
Set-Cookie: JSESSIONID=1234567890ABCDEF; Path=/; HttpOnly
2. 后续请求：
  - 浏览器自动在请求头中携带JSESSIONID（Cookie字段），例如：
Cookie: JSESSIONID=1234567890ABCDEF
  - 服务器根据JSESSIONID从Session列表中查找对应的HttpSession对象，获取用户状态。
22.3.3 会话结束条件
- 浏览器关闭：内存中的Cookie（含JSESSIONID）丢失，下次请求时服务器无法识别，生成新的Session。
- Session超时：服务器设置的Session有效期（默认30分钟），超时后自动销毁。
- 手动销毁：调用session.invalidate()方法。
22.4 Cookie禁用时的Session机制
- 问题：浏览器禁用Cookie后，无法存储JSESSIONID，导致每次请求都被视为新会话。
- 解决方案：URL重写（URL Rewriting）
  - 原理：在URL中显式添加JSESSIONID，例如：
  http://example.com/cart;jsessionid=1234567890ABCDEF
  - 实现方式：
  // 在Servlet中手动重写URL
  response.encodeURL(String url);
  - 局限性：需开发者在所有URL中手动添加JSESSIONID，增加开发成本，且易出错。
  22.5 三种域对象的比较
  域对象
  对应类
  作用域
  生命周期
  典型应用场景
  Request
  HttpServletRequest
  一次请求
  请求开始到结束
  传递单次请求的临时数据（如表单参数）
  Session
  HttpSession
  一次会话
  会话开始到结束（浏览器关闭或超时）
  保存用户状态（如登录信息）
  Application
  ServletContext
  整个应用
  服务器启动到关闭
  存储全局数据（如配置信息、计数器）
  22.6 OA项目中的登录验证实现
  22.6.1 登录成功处理
  // LoginServlet.java
  protected void doPost(HttpServletRequest request, HttpServletResponse response) {
    // 验证用户名密码
    String username = request.getParameter("username");
    String password = request.getParameter("password");
    User user = userService.login(username, password);
    
    if (user != null) {
        // 登录成功，将用户信息存入Session
        HttpSession session = request.getSession();
        session.setAttribute("currentUser", user);
        response.sendRedirect("/home"); // 重定向到主页
    } else {
        // 登录失败
        request.setAttribute("error", "用户名或密码错误");
        request.getRequestDispatcher("/login.jsp").forward(request, response);
    }
  }
  22.6.2 权限验证过滤器
  // AuthFilter.java
  public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) {
    HttpServletRequest request = (HttpServletRequest) req;
    HttpServletResponse response = (HttpServletResponse) res;
    
    // 获取Session中的用户信息
    HttpSession session = request.getSession(false); // 不创建新Session
    User user = (User) (session != null ? session.getAttribute("currentUser") : null);
    
    // 检查用户是否登录
    if (user == null) {
        // 未登录，重定向到登录页
        response.sendRedirect("/login.jsp");
    } else {
        // 已登录，继续请求
        chain.doFilter(request, response);
    }
  }
  22.6.3 注销功能
  // LogoutServlet.java
  protected void doGet(HttpServletRequest request, HttpServletResponse response) {
    // 销毁Session
    HttpSession session = request.getSession(false);
    if (session != null) {
        session.invalidate();
    }
    response.sendRedirect("/login.jsp");
  }
  22.7 Session使用注意事项
- 安全性：
  - 避免在Session中存储敏感信息（如密码）。
  - 启用HttpOnly和Secure属性保护JSESSIONID：
  // 在web.xml中配置Session Cookie
  <session-config>
    <cookie-config>
        <http-only>true</http-only>
        <secure>true</secure> <!-- 仅HTTPS传输 -->
    </cookie-config>
  </session-config>
- 性能优化：
  - 控制Session数据量，避免存储大对象。
  - 合理设置Session超时时间（session.setMaxInactiveInterval(seconds)）。
- 集群环境：
  - 分布式系统中需配置Session共享（如Redis、数据库），确保用户在不同服务器间保持会话状态。
  22.8 总结
  Session机制是B/S结构中管理用户状态的核心技术，通过JSESSIONID和服务器端Session列表实现用户会话的跟踪。与request和application域相比，Session适用于保存用户级别的状态信息。在OA项目中，利用Session可有效实现登录验证和权限控制，提升用户体验。
27.  Cookie机制详解

---
Question(Check Yourself)：
- Cookie的本质是什么？它保存在哪里？有哪些存储位置？
- Cookie和Session机制的核心区别是什么？它们如何配合实现会话状态管理？
- 如何通过Java代码创建、发送和接收Cookie？
- Cookie的有效时间（MaxAge）和路径（Path）属性有何作用？如何设置？
- 请举例说明Cookie的典型应用场景（如购物车、免登录功能）。
- 浏览器在什么情况下会自动发送Cookie给服务器？

---
23.1 Cookie的基本概念
23.1.1 定义与本质
- Cookie是HTTP协议中用于在客户端存储会话信息的小型数据片段，由name=value键值对组成，最终保存在浏览器客户端。
- 本质：服务器发送给浏览器的指令，浏览器根据指令将数据存储在本地（内存或硬盘），并在后续请求中自动提交给服务器。
23.1.2 存储位置
- 运行内存：默认存储位置，浏览器关闭后Cookie立即消失（临时Cookie）。
- 硬盘文件：通过设置有效时间（MaxAge），Cookie可持久化到硬盘，即使关闭浏览器也不会丢失。
23.2 Cookie与Session的对比
特性
Cookie
Session
存储位置
客户端（浏览器内存/硬盘）
服务器端（内存/数据库）
数据大小限制
较小（通常4KB以内）
较大（由服务器内存决定）
安全性
较低（数据在客户端，易被篡改）
较高（数据在服务器，仅传递SessionID）
生命周期
可手动设置（硬盘Cookie）或随浏览器关闭消失（内存Cookie）
会话结束（浏览器关闭）或超时（默认30分钟）
核心作用
存储轻量会话信息（如购物车商品ID、免登录标识）
存储敏感会话状态（如用户登录信息）
配合方式
Cookie常用来存储SessionID，帮助服务器找到对应的Session对象
依赖Cookie传递SessionID（或URL重写）
23.3 Cookie的典型应用场景
23.3.1 未登录状态下的购物车（如京东）
- 实现原理：将用户添加的商品ID以Cookie形式存储在硬盘中（如productIds=1001,1002,1003）。
- 优势：用户未登录时仍可保留购物车信息，关闭浏览器后数据不丢失。
- 局限性：清除Cookie后，购物车数据会丢失；数据量受限于Cookie大小（4KB）。
23.3.2 “十天内免登录”功能（如126邮箱）
- 实现流程：
  1. 用户登录时勾选“十天内免登录”，服务器生成包含用户名（加密）和有效期的Cookie。
  2. 浏览器将Cookie保存到硬盘，有效期设为10天。
  3. 后续访问时，浏览器自动提交Cookie，服务器验证通过后直接登录。
- 安全性：需对Cookie中的敏感信息（如密码）进行加密，避免明文存储。
23.4 Java中Cookie的操作
23.4.1 创建并发送Cookie
// 1. 创建Cookie对象（name和value均为字符串）
Cookie cookie = new Cookie("username", "zhangsan");

// 2. 设置有效期（单位：秒）
// 正数：存储到硬盘，有效期为指定秒数
cookie.setMaxAge(60 * 60 * 24 * 10); // 10天有效期
// 0：立即删除同名Cookie
// 负数：默认值，存储在内存，浏览器关闭后消失

// 3. 设置路径（控制哪些请求会携带该Cookie）
// 默认为当前请求路径的父路径（如请求路径为/servlet13/cookie，则默认路径为/servlet13/cookie）
// 手动设置为项目根路径：所有该项目的请求都会携带Cookie
cookie.setPath("/servlet13");

// 4. 发送Cookie到浏览器（通过响应头Set-Cookie）
response.addCookie(cookie);
23.4.2 接收浏览器发送的Cookie
// 1. 获取所有Cookie（可能为null，需判空）
Cookie[] cookies = request.getCookies();

// 2. 遍历Cookie数组，获取指定Cookie
if (cookies != null) {
    for (Cookie cookie : cookies) {
        String name = cookie.getName();
        String value = cookie.getValue();
        if ("username".equals(name)) {
            // 处理获取到的Cookie值
            System.out.println("用户名：" + value);
        }
    }
}
23.5 Cookie的路径（Path）机制
- 作用：控制浏览器在哪些请求路径下会自动携带Cookie。
- 规则：
  - 若Cookie的Path为/servlet13，则请求路径为/servlet13、/servlet13/user、/servlet13/order等均会携带该Cookie。
  - 若Cookie的Path为/servlet13/user，则仅/servlet13/user及其子路径（如/servlet13/user/profile）会携带Cookie。
- 最佳实践：对于全站共享的Cookie（如登录信息），建议将Path设为项目根路径（/项目名）。
23.6 浏览器发送Cookie的规则
- 自动发送条件：
  1. Cookie未过期。
  2. 请求路径与Cookie的Path匹配（请求路径为Path的子路径或等于Path）。
  3. 请求域名与Cookie的Domain匹配（默认同域，可设置跨域Cookie，但受浏览器限制）。
- 示例：
  - Cookie的Path为/servlet13，请求路径为/servlet13/dept/list：会携带Cookie。
  - Cookie的Path为/servlet13/user，请求路径为/servlet13/dept：不会携带Cookie。
  23.7 Cookie的局限性
- 大小限制：单个Cookie通常不超过4KB，一个域名下的Cookie数量有限（通常20-50个）。
- 安全性：存储在客户端，易被篡改或窃取，不适合存储敏感信息（如密码）。
- 跨域限制：浏览器遵循同源策略，不同域名的Cookie不互通。
23.8 总结
Cookie是客户端存储会话信息的关键机制，通过name=value键值对形式存储，可持久化到硬盘或临时存储在内存。在Java中，通过response.addCookie()发送Cookie，通过request.getCookies()接收。Cookie广泛应用于购物车、免登录等场景，但需注意安全性和大小限制。与Session配合使用时，Cookie通常用于存储SessionID，实现服务器对会话的跟踪。