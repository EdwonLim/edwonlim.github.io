---
layout: post
title: "用技术乱炖Jekyll之三：Post文章"
date: 2013-12-20 18:00:00
categories: blog
summary: "本篇主要讲解Blog文章页面的构建。"
---

## Post构建

文章的`layout`是`post.html`，可以 `git checkout -f step_4` 获取此步的代码。

看过对`index`和`default`的讲解，读`post.html`代码非常容易。

其中 `{ { content } }` 引入的则是用Markdown文档转换的HTML代码块。

下面是截图：

![Blogs](http://ww2.sinaimg.cn/large/71c50075jw1ebp5uz5r6uj20p60g977c.jpg)

## 乱炖Markdown

`Markdown`是一个非常适合写文章的标记语言，你可以很简单地通过`Markdown`写出一篇文章。
`Markdown`的目标只有个**易读**和**易写**，这样可以让写作的人只需要专注在文字，而不必纠结文章的`HTML`标签如何结构化，怎样让文章展现的更好看，更可读。

## 简单介绍几种常用的标记

{% highlight text %}

一级页头标题
=============

二级页头标题
-------------

普通段落.

# 一级标题

## 二级标题

### 三级标题

> 这是一个段落引用.
>
> 这是引用中的第二段.
>
> ## 这是引用段落中的一个二级标题

*斜体*

**加粗**

`标记（主要用于技术名词或命令）`

```
代码

```

[链接](http://weibo.com)

![图片](http://ww2.sinaimg.cn/large/71c50075jw1ebp5uz5r6uj20p60g977c.jpg)

{% endhighlight %}

上面就是比较常用的几个标记。

在Jekyll中，提供了一个代码高亮的标记:

{% highlight html %}

{ % highlight html % }
    <div></div>
{ % endhighlight % }

{% endhighlight %}

在这两个标记之间的代码会被高亮（`highlight`后是代码类型）。

### 好用的工具

Mac下有免费的Mou，Linux下有免费的UberWriter，Window下有半收费的MarkdownPad。




