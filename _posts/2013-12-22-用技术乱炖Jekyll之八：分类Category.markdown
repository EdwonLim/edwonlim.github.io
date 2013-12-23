---
layout: post
title: "用技术乱炖Jekyll之八：分类Category"
date: 2013-12-22 19:00:00
category: column1
summary: "本篇主要介绍怎么将博文分类显示。"
---

对于文章，都要有一个分类，把一类的文章归类在一起，统一展示。

而Jekyll也是支持分类的，只要把分类写在头部即可。

* 可以是`category: type`
* 也可以是`categories: [type1, type2]`

一篇文章可以有很多类别。

对于我的个人主页，我要做的第一个专栏就是“用技术乱炖Jekyll”，我把它的类型定为`column1`，凡是这个专栏的文章，我都把他的类型，设为`column1`。

为此，我建立了`columns`目录，在里面建立了分栏的总页和`column1`这个分栏的静态页。

你可以 `git checkout -f step_10` 来查看此步骤的代码。

在 `columns/column1/index.html` 中：

{% highlight html %}
    <ul>
        { % for post in site.categories.column1 % }
        <li>
            <a href="{ { post.url } }">{ { post.title } }</a>
            <small>{ { post.date | date: "%B %-d, %Y" } }</small>
            <p>{ { post.summary } }</p>
        </li>
        { % endfor % }
    </ul>
{% endhighlight %}

获取所有Blog列表时，用的是 `site.posts`，而这里用的是 `site.categories.column1`，它的作用是取 `column1` 类别的所有Blog。

**在 `for` 语句最后加上 `reversed` 是把循序反过来。**

最终效果是：
![效果](http://ww1.sinaimg.cn/large/71c50075jw1ebst4ilezuj20o50buwgz.jpg)