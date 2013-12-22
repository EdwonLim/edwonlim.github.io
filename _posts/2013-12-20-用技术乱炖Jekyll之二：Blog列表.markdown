---
layout: post
title: "用技术乱炖Jekyll之二：Blog列表"
date: 2013-12-20 17:00:00
category: column1
summary: "本篇主要讲解Blog列表的构建。"
---

## index.html 的第二部分

`index.html` 的第二部分，是一个html的部分（注：`{` 和 `%`、`%` 和 `}`、`{` 和 `{`、`}` 和 `}`之间是没有空格的，这里为了不被解析，加的空格）。

{% highlight html %}

<div id="home">
    <h1>Blog Posts</h1>
    <ul class="posts">
        { % for post in site.posts % }
        <li>
            <span>{ { post.date | date_to_string } }</span>
            &raquo;
            <a href="{ { post.url } }">{ { post.title } }</a>
        </li>
        { % endfor % }
    </ul>
</div>

{% endhighlight %}

在这里，你会看到 `for ... in` 语句。

`for` 是循环，`site.posts` 是所有post的博客列表。

`{ { post.date | date_to_string } }`： 把日期转为字符串。

`post.url`, `post.title` ：则是获得连接和标题。

这样，会得到一段博客列表的HTML片段。

代码其实非常好理解的。

## 怎么把它放到页面上

使用 `{ { content } }`。

在模板 `default.html` 中对应的位置添加上面的标记即可。

可以 `git checkout -f step_2` 获取此步的代码。

效果如下：

![Blogs](http://ww4.sinaimg.cn/large/71c50075jw1ebp4n5lhlfj20kn02vjrf.jpg)

## 乱炖一下CSS

文章的题目就是乱炖，这里我就乱炖一下CSS。

*【百度百科】CSS目前最新版本为CSS3，是能够真正做到网页表现与内容分离的一种样式设计语言。相对于传统HTML的表现而言，CSS能够对网页中的对象的位置排版进行像素级的精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力，并能够进行初步交互设计，是目前基于文本展示最优秀的表现设计语言。CSS能够根据不同使用者的理解能力，简化或者优化写法，针对各类人群，有较强的易读性。*

我不是做设计的，所以在这里这是简单的剖析一个CSS，列出几条。

* CSS布局必须要学的是盒子布局，然后CSS3推出了弹性盒子布局，非常好用（忘掉IE）。
* 其他的方面，我觉得都是对页面的修饰，主要是设计，靠感觉。（忘了IE吧）
* CSS3动画挺好玩，而且会使用显卡，比JS做动画好多了。（已经忘了IE）
* CSS3的3D也是挺好玩的，做简单的3D模型还是可以的。（IE是神马东西）
* 可以去看看LESS、SASS一类的动态样式语言，它会被编译成CSS，比CSS好写，而且灵活。
* 最后一点，就是适配，移动设备适配，怎么让网页在移动设备上展现的漂亮。(觉大部分移动设备上示没有IE的)

下面是修饰后的页面：

![Blogs](http://ww4.sinaimg.cn/large/71c50075jw1ebp5tyl648j20md09sab5.jpg)

可以 `git checkout -f step_3` 获取此步的代码。