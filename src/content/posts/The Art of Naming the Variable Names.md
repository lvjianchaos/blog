---
title: The Art of Naming the Variable Names
published: 2024-01-29
description: '作为入门者所了解的变量命名'
image: ''
tags: [入门, 变量名, 编程, C]
category: '笔记'
draft: false 
lang: 'zh_CN'
---

## 一、总论

身为IT行业的小白，我们不能仅仅沉浸于代码语言的层次上或算法与数据结构的快感中，我们应该思考：但在这些基本都搞定了呢！？我们又该何去何从？

实际上，最高深的层次往往不是代码的算法与数据结构的构建本身，而是**编程的艺术**。一些大师级别的人物，他们在谈到编程或软件构建上绝不仅停留在代码、语言、算法和数据结构上，而是提升到一个极高的层次——编程的艺术。也就是说：思维和艺术将会决定你写代码的高度。

而编程的艺术其中一个重要的点便是——**变量名命名**。

### 变量名命名的重要性

变量名真正的命名往往直接决定软件构建的效果、代码的性能，甚至可能影响到软件的安全和效益，以及所出现的问题一半都可能源于变量名命名。

**我们为何如是说呢？**<u>“一个好的变量名命名不是一个即时的效果，而是一个长期的效益。”</u>一个例子：我们设想下列情景：

（1）我养了一只狗🐕，它叫小黑，小黑死去之后，我又养了一只叫小白的狗🐕；这样并无问题，我们都能分清楚。

（2）可是，如果我养了10000只**不同**（这里说不同只是方便假设，因为这里不能用数组，而是无联系的10000个变量）的鸡，那么一万只鸡我该是这样命名吗？：a,b,c,d…aa,ab,………当第二天我们说`鸡chicken`下蛋了，那么`鸡chicken`是谁呢？我们还能搞清吗？所以说变量名命名的方式直接决定变量名的所带来的后果/效果。**没有好的变量名命名，会导致程序难以理解和维护**。

变量名命名的规范

**我们这里以C语言来进行代码部分的编写，以进行具体阐释。**

关于常见的**错误命名**(🔺注意：这是在具有实际开发情景下的代码，不是无实际意义的语法展示示例)：

```c
#include <stdio.h>
// 不明所以，不知其意
int main(void)
{
    int a,b;
    char c;
    
    int a[10];
    
    int ss = s1 + s2;
    
    int i;
    for(i = 0;i < 10;i++)
    {
        //……
    }
    
    return 0;
}

void f() {
    
}
void fff() {
    
}
void havesex() {
    
}
void qian() {
    
}
```

一些**规范示范**：

```c
#include <stdio.h>
#include <stdbool.h>
int main(void)
{
    double balance = 100.00;
    // double a = 100.00; X错；如果使用这样的代码，过一段时间后，当回看代码时，你还会知道a是余额的意思吗？
    
    return 0;
}

bool is_leap_year(int year) {
    // TODO  ==》 意思是:这里还有代码要写
    return false;
}

// 当然，这是下划线命名，有些命名是使用驼峰命名法，这异曲同工：bool isLeapYear(int year){}
```

我们很容易发现，**不同的变量名命名直接会导致阅读体验的分野**。

而一个标准规范的变量名命名应具备什么样的**特质**呢？

**可读性好、便于记忆、见名知意**；或者更直白的说：一眼就可以看出这是在干什么。我们应心怀这样一句话去命名变量——<u>“优秀的代码命名都是自解释的”</u>。

仍是上述的例子：`判断是否为闰年` -`is_leap_year()`，(关于为何不用中文拼音命名而采用英语命名，这是由语言自身和历史传统影响的，这里不做阐释)，我们能否将其改为`is_leap()`呢？不能。`leap`还有跳跃之意，若是如此命名，必会造成歧义；而一个**好的变量或函数名应准确表达含义**，便于阅读与理解。

### 变量名命名的注意

但是，准确表达含义并不是要求名字严格按照英文使其变得**特别长**。举个例子，我们定义一个变量`unsigned int the_max_country_number_of_the_olympic_team = 20`；如此定义变量名，我们一定会理解这样的变量是何种意思，但我们不难发现这样的问题：太长了！长到难以使用了！所以说，长度问题也是变量名的一个重要问题；如何**对变量名的长度和完整性进行取舍**，这是我们亟需掌握的能力。

上述论断中，我们认识到一个优秀的变量名可以使人“一眼就可以看出这是在干什么”，也就是说**给予人最最直观的体验**。所以说，一些变量名往往**以动词开头**，如：`double  checkTotal(User user){return 0.00;}`；但是一些诸如`double CHECK(User user){return 0.00}`、`double checks(User user){return 0.00}`、`double havemoney(){}`是不合常识与规范的。

这里，我们写一些好的**变量名命名**(<u>驼峰命名法</u>)。

```c++
// 关于速度
double trainVelocity = 310.25;  // 高铁运行时速(km/h)
double velocityInMph = ;  //
// 关于日期
Date currentDate = ;
// 一些行号
int lines;
int linesPerPage;  // 每一页的行数
```

一个小结：我们的首要认识——变量名命名十分重要，乃至直接决定着我们代码的质量、性能；甚至如果我们的变量命名是有问题的，那么我们的项目到最后总是难以重构与维护。可谓说问题之大了。

我们不妨看看一些著名的项目如Linux的源码，向大师级别的人物学习。

## 二、更为恰当地命名

我们肯定会有这样的**疑问**：使用像英语这样的语言，我们所要表达一个相同的意思常常会有不同的表述（比如说：表示钱💴，可能有人表示为`double wallet = 100.00`，而有些人表示为诸如 `money` `balance`等其他名称）。*所以说，这种命名方式是否为规范或恰当呢？或者说我们是否有更好的命名方式呢？而当我们面对上述这样不同单词表达相同意思的情况，又该如何选择呢？*

这里引入这样的”暴论“——一个好的名字应有**2个意思**：<u>1. 表达了什么</u>(如：`double balance; //表达的就是(用户/账户的)余额`)；<u>2. 单词的立意</u>(上述`balance`具有多个意思:平衡、保持平横、抵消……)，单词的立意本质上说，它就是与前面的类型等因素相称，不造成歧义即仅表现出一种明确的意思。当一个变量名具备这两种性质，那么就会知道它所要表达的本意。

**注意**：关于变量，我们所要表达的东西一定不能是怎样的；如果是，那么问题出现<u>，因为变量根本不是“怎样的”，而是表达一个”什么“</u>。

```c
// 日常生活用语
studentData;
// input计算机界的学术语==》是更凸显IT界特指的变量
input_stu_data;

inputRec;

double sum;  
// sum的意思？虽然名词词性上是金额总数；但实际上它是属于一种计算机术语还是其他的呢？我们的立意并不清晰
// 假设这个sum变量定义在财务报告系统，那么这个sum是什么？是求和函数还是要干什么？所以会产生歧义，会引起混淆
// 因此为了准确表达总额的含义，我们不妨可以这样定义：double calcValue;这样就会很清晰的知道这是一个值、一个计算总值
```

所以，我们还是回到上述的2个意思：<u>1. 表达了什么</u>；<u>2. 单词的立意</u>。单词有各种各样的意思，在学术界它是怎样？它是否会有歧义？这是我们所要在乎与考虑的。

## 三、讲究长度的变量

大家都知道像`unsigned int the_max_country_number_of_the_olympic_team = 20`；这样的变量名长度一定是有问题的。我们**参考以下论文：[Debugging effort estimation using software metrics](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=44385)和这个网站[IFSQ:SP-5—Poor Choice of Name](https://ifsq.org/indicator-SP-5.html)的概述**。

> **Research Findings:** The effort required to <u>debug a program is minimized</u> when variables had names <u>averaging 10 to 16 characters long</u>.

实际情况，在国内的企业命名长度要求大多为：9-15、10-16或**8-20**，还有些是8-16个。我们平常选取最大范围8-20的长度，可以说是问题不大。

这里，我们还可**以参阅这篇文章博客[Data Scientists Your Variable Names Are Awful Heres How To Fix Them](https://willkoehrsen.github.io/data%20science/software%20engineering/data-scientists-your-variable-names-are-awful-heres-how-to-fix-them/)的论述**。

于是，我们对上述极长的代码修改为`numTeamMembers`。

注意，变量名往往和其所处的作用域来进一步补充完备意思，所以这里虽不呈现奥林匹克之意，但它应该仅作用于奥林匹克的命名空间之下。这是我们之后要谈的。

## 四、变量作用域与长度及规范

以`for`语句为例

```c++
  // 变量作用域

  // 函数（OOP 方法） 类
 for(int i = length - 1;i >= 0;i --)
 {
     for(int j = 0;j < i;j ++)
     {
        
     }
 }
  // 我们会发现i和k的作用域或者说适用范围只在for语句中，这时候准确说来并无问题。
  // 这时变量范围被局限住了
```

```c++
  // 但是
 int i;
 for(i = length - 1;i >= 0;i --)
 {
     for(int j = 0;j < i;j ++)
     {
        
     }
 }

 i ++;
 i --;
 // 若i超出for的作用范围，这时我们就不能定义为i，因为没人知道这个i是啥；
 // 当我们定义在for循环内我们都知道这是计数器，但脱离for之后，我们的i++,i--又表示什么含义呢？
 // 不得而知，所以不能这样命名。
```

因此，我们会发现，<u>变量名命名在什么地方会决定变量名该如何命名，函数（OOP 方法）、类、作用域都会决定你如何去命名变量</u>。

这里，我们或可以参阅这本书[Software psychology: Human factors in computer and information systems](https://www.amazon.com/exec/obidos/ASIN/0876268165/acmorg-20)。

**结果简要概述**：特别短的名字(<8)我们常定义为局部变量，在for循环内可能会更短；它的作用域可能会决定它的长和短：**当一个变量名越短，可能它的作用域就越小**，甚至小到i,k这样的单字符。

但一些[防御性编程](https://zh.wikipedia.org/wiki/%E9%98%B2%E5%BE%A1%E6%80%A7%E7%BC%96%E7%A8%8B)会可能刻意绕开这些短的变量名。

**变量名可能一样**，我们会使用命名空间等所处的域不同来进行划分以**区分变量**。

```java
// 1. wallet
package com.goolgle.user;
// mysql sql引入要正确
public class Wallet {
    
}
// 2. wallet  
package com.goolgle.dog;
public class Wallet {
    
}
```

更为学术的说，我们称作这为：**划分全局[命名空间](https://zh.wikipedia.org/wiki/%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4#)**

```c++
namespace User {
    // Wallet
}

namespace Dog {
    // Wallet
}
```

对于一些不支持上述**划分全局命名空间**的操作的语言如：`C`语言。我们可以:

```c
design_Emp
dev_Emp
```

而对于可以使用**package**的`Java`语言，则更为简便:

```java
package com.goolgle.design;
// mysql sql引入要正确
public class Employee {
    
}

package com.goolgle.dev;
public class Employee {
    
}
```

## 五、细化:关于变量计数词

我们首先要明确：所要讨论的计数词**是什么**——这个计数不是循环中的`i`、`j` 、`k`，而是我们经常所用的计数，如：总共的人数、总分数和平均数、最大及最小值等各种各样的东西。我们在设计这些**涉及到计算的意思的变量名**，我们该怎样比较确恰地命名，这是此段所要探讨的。

```c
#include <stdio.h>
int main(void)
{
    // sum，avg/average，max，min，total……
    // num
    // 这些单词的表述都很好，但我们要注意一些点 
    
    // 举例：员工总数
    // 不建议使用sum，更建议total(总计)
    // int total_emp; // 或直接写全:total_employees

    // 为什么不用num呢？歧义的风险
    // int num_employees; // =》员工数量
    // int employee_num; // =》员工号？
    // 我们将其倒错会产生截然不同的意思
    // 所以，以上命名都不合理
    // 因此，我们可以对其进行规定约束：基本上，将计数词放在后面，除非特殊要求
 // 我们这样写：名词提前-计数词放后
    // 注意：这是为了好看的一种约束，这不是死板的。
    // 对错并无分别，取决于企业的规范
    int employee_total;
   // 若要表达员工号，也是尽可能不用num
    int employee_index;
    // 我们把计数单词放在前面，就意味者它的中心义或内涵
    return 0;
}
```

结论：常进行一种约束：**<u>名词提前-计数词放后</u>**

## 六、细化:对立词选择建议

在计算机术语中，常有一些有意思的词，他们总是对立的，然后这些对立的词常相匹配组成一些完整的变量。

```c
#include <stdio.h>
int main(void)
{
    up/down
    old/new
 first/last
    min/max
    opened/closed
    locked/unlocked
    ...
    begin/end
    return 0;
}
```

## 七、细化:常量、宏与指针

建议直接参考伟大的项目[linux](https://github.com/torvalds/linux)的源码。

```c++
#define NUM_FIVE 5  // × 表示具体数字错误也就是说不能出现FIVE 可以改为数组的容量

// C++的常量：Google常声明常量以k开头
// constant
const int kDaysInYear = 100;
// 题外话：匈牙利命名法
int *pSize;
```

这只是一个`约定`

## 八、细化:循环计数器i,j,k

```c++
#include <iostream>
int main(void)
{
    for(int i = 0;i < totalEmp.count;i++)
    {
        data[i] = j;
    }
}
```

从编程艺术来考虑，循环当中使用`i,j,k`是否规范？实际情况是**允许**的（**前提是**必须定义**在循环里面**，即**作用域的界定范围在循环中**，不会污染到其他东西）。例：`JavaScript`这门语言若定义为全局，它就会造成**变量的污染**。

但是，如果`i`定义在**循环之外**，这么写是**存在问题**的，因为这样的`i`很可能被循环之后的代码运用到，那此时这个`i`是什么数据？它是**垃圾数据**，它并没有得到有效的管理。

如果我们的`i`不仅在循环内用到，还在其外用到，那么它就不能定义为`i`，而应定义为一个**更具体的名称**。

```c++
#include <iostream>
int main(void)
{
    int record_count = 0;
    
    while ( condition ) {
        record_count ++;
    }
    
    record_count ++;
    cout << record_count << endl;
    
    return 0；
}
```

还有一种情况

```c++
#include <iostream>
int main(void)
{
    for(int i = 0;i < 9;i ++) {
        for(int j = 0;j < i;j ++) {
            // TODO
        }
    }
    // 这样写，并不是很好
    // 如果for循环多且嵌套或数组二维或更高维，那就不要再i,j,k了
    // 因为：我们很可能会不知道谁是谁了
    // 而要规避掉这样的风险，或者说更好一些，只需要对变量名规范命名就可以了；这样在逻辑上，我们可以直接清晰的明白所循环的是什么

    return 0；
}
```

需要**指明**：项目工程的开发与维护不可能仅一个人搞，团队协作是常态，因此好的变量命名会带给其他人对你代码直观的理解，别人才更易接手这样的项目。

## 九、细化:枚举命名的讲究

给人的感觉与常量相似，因为也是大写。

```c
#include <stdio.h>
int main(void)
{
    enum AlternateurlTableErrors {
        OK = 0,
        OUT_OF_MEMORY = 1,
        MALFORMED_INPUT = 2
    };
    return 0；
}
```

也有些语言、企业会规定加前缀等东西。

## 十、细化:临时变量的讲究

```c
#include <stdio.h>
int main(void)
{
    // 如果说后面还会用到temp这个变量，那么最好不要定义为temp
    // 它不像在for循环中的，定义作用域在内
    for(int i = 0;i < 19;i ++) {
        int temp = array[i];
        ..
        ...
    }
    // 但是如果后面还要被使用，那就不要定义为temp
    // 比如求三角形周长
    // int temp = a + b + c; ×错 有些随意 缺乏描述
    int triangle_perimeter = a + b + c;
    
    return 0；
}
```
