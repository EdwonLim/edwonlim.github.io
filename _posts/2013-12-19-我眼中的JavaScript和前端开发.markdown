---
layout: post
title:  "我眼中的JavaScript和前端开发"
date:   2013-12-19 18:00:00
categories: blog
summary: "阐述一下对JavaScript和前端开发的理解，包括对HTML5和NodeJS的看法。"
---

JavaScript是非常热的一门语言，在TIOBE编程语言排行榜，排名10名左右。排名不说明一切，但是从一个方面证明了它的价值，它的主流性。

其中的几种编程语言：

* C，学习计算机系统的基本原理
* Lisp，学习程序构造的基本原理
* Java，学习面向对象的基本原理

大家说都适合新手学习。也有人说Python这种生产力极强的动态语言也适合新手学。

上面的观点，我并不反对，但是我觉得对于还没对编程产生浓厚兴趣的小伙伴，学习JS是一个非常容易提升兴趣的事情，至少你做出来的东西，可以轻易地看到效果，也可以地向别人展示。

一个成果物，对一个人兴趣的提升，是有很大帮助的。

或许有人说到JavaScript，就会想到做网页的小工，难登大雅之堂。其实，每种语言有它的定位，它的用处。当JS在越来越多的地方使用时，我们会给他建一个殿堂。

### JavaScript是什么

JavaScript是一种基于对象和事件驱动并具有相对安全性的客户端脚本语言。同时也是一种广泛用于客户端Web开发的脚本语言，常用来给HTML网页添加动态功能，比如响应用户的各种操作。它最初由网景公司（Netscape）的Brendan Eich设计，是一种动态、弱类型、基于原型的语言，内置支持类。

JavaScript是Sun公司的注册商标。Ecma国际以JavaScript为基础制定了ECMAScript标准。JavaScript也可以用于其他场合，如服务器端编程。完整的JavaScript实现包含三个部分：ECMAScript，文档对象模型，字节顺序记号。

Netscape公司在最初将其脚本语言命名为LiveScript。在Netscape在与Sun合作之后将其改名为JavaScript。JavaScript最初受Java启发而开始设计的，目的之一就是“看上去像Java”，因此语法上有类似之处，一些名称和命名规范也借自Java。但JavaScript的主要设计原则源自Self和Scheme[2]。JavaScript与Java名称上的近似，是当时网景为了营销[3]考虑与Sun公司达成协议的结果。为了取得技术优势，微软推出了JScript脚本语言。Ecma国际（前身为欧洲计算机制造商协会）创建了ECMA-262标准（ECMAScript）。现两者都属于ECMAScript的实现。尽管JavaScript作为给非程序人员的脚本语言，而非是作为给程序人员的编程语言来推广和宣传，但是JavaScript具有非常丰富的特性。

（以上来自百度百科，小伙伴们可以喷一下）

### 我眼中的JavaScript

在Web上，JavaScript是神的存在，不管在PC或者在移动设备上，浏览器中的JS无所不能。然后随着HTML5的盛行，JS被赋予更多的使命，例如本地操作、本地存储以及Socket等等。在虔诚的JS工程师看来，JS能做任何事。

这里，要感谢Google的V8引擎，这让JS的运行效率大幅增强，这样，JS就可以做一些复杂的预算，比如说绘图和3D变化的运算。

JavaScript是全端的
跨平台，这个词大家都熟悉，而用的最多的就是Java的跨平台特性。Java的跨平台是基于JVM（Java虚拟机）的，只要装有JVM的机器就可以运行Java程序。

而JS的跨平台是基于浏览器的，一个设备上可以没有Java环境，但是它必须有浏览器。

其实，真正让JS跨平台的是JS解析器，是JS的运行环境，其中最好的应该是V8引擎。这时，有人把V8引擎放入了本地环境，并加入了系统级接口，这样使JavaScript不在依赖于浏览器而在本地运行——这就是NodeJS。

### NodeJS（简称Node）

关于Node，它是对V8引擎的封装，加入了文件系统、http、net等本地接口，使JS能像其他语言一样，操作本地资源，完成相关逻辑。在GitHub上，高居第二。

这里对于Http服务，Node由于JS的异步编程特性，对于多并发处理有先天优势，而对多核CPU的利用，则是它先天的劣势。

当然对于一个小的Web项目来说，Node是极为优秀的服务端选择。它的高性能，令人垂涎。而大部分问题的解决方案都可以在npm（Node的包管理工具）中找到。

这里有人会问到，JS能以操作DOM（HTML中的节点），Node怎么搞呢？

其实浏览器的暴露给JS的另一接口属于Dom的，其中最有名的一种叫做Webkit，是Google Chrome浏览器和Apple Safari浏览器使用的浏览器引擎。（Ghrome现在使用基于Webkit的Blink引擎）

### WebKit

关于Webkit，它包含的WebCore排版引擎和 JSCore脚本引擎，用来渲染页面和执行脚本的。

Webkit实现了大部分HTML5和CSS3的新特性，所以你的Web项目能在Chrome运行得很完美。

### Node-Webkit

如果Node和Webkit合体呢？这样你可以用Node的部分操作本地资源，用Webkit的部分显示操作界面。活脱脱的一个本地应用程序，用熟知的技术，快速编写完成。

项目地址：https://github.com/rogerwang/node-webkit

还有一点，它还跨平台呢！Win，Mac，Linux通吃。

PC的平台后面就是移动设备的平台。

### WebApp和原生App

一个挣个你死我活的话题，其实真心没有任何必要。

对于一个星期或者更长时间才使用一次的app，耗费大精力为每个平台开发一个原生的App真心没有什么必要。

对于用户交互不多的App，WebApp的性能，也足以满足要求。

### 混合App

原生应用的壳加上Web App的心，一种适中的解决方案。

相关项目:

PhoneGap : [http://phonegap.com](http://phonegap.com)

AppCan : [http://www.appcan.cn](http://www.appcan.cn)

Titanium : [http://www.appcelerator.com/titanium/titanium-sdk/](http://www.appcelerator.com/titanium/titanium-sdk/)

下面，回到前端。

### 前端开发

对于大前端，其实包括页面设计和脚本开发两部分。

页面设计主要是HTML+CSS，包括设计和切图。

脚本开发，主要是JS，各种功能的开发。

页面设计看中项目经验，适配各种设备的经验尤为重要。

脚本开发，主要是JS开发，也主要看中项目经验，同时也要求算法和其他语言的知识。

随着互联网的发展和移动互联网的兴起，对于Web开发的需求逐渐增多，而大学中并没有此类课程，导致专业人才大多是自学或者从培训机构走出，故对学历的要求没有更多的要求。

说实话，服务器开发中的女生是可遇而不可求，前端开发的女生是可遇而价很高的。

###迈向全端

由于Node，由于Webkit，你可以用JS同时开发前后端程序，也许这是一条路，是一个机会。
