---
layout: post
title: "用技术乱炖Jekyll之六：If和高级Include"
date: 2013-12-22 14:00:00
category: column1
summary: "本篇主要讲一下Jekyll中的If和Include。"
---

先上图：

![图](http://ww1.sinaimg.cn/large/71c50075jw1ebp9hh99t6j20lq05tq3d.jpg)

两排图标，看得不怎么爽，所以在文章页想把个人链接去掉。

此步：`git checkout -f step_8`

`post.html` 代码，不再使用 `layout`，而是使用纯HTML代码。

在 `post.html` 和 `default.html` 里都引入了 `header.html`。

在 `post.html` 中：`{  % include header.html home="false" % }`

在 `default.html` 中：`{  % include header.html home="true" % }`

在引入了同时，设置了**变量** `home`，值是 `true` 和 `false`。

而在 `header.html` 里有：

{% highlight html %}
    { % if include.home == "true" % }

    { % endif % }
{% endhighlight %}

这是一个简单的 `if` 语句，最后 `endif` 结尾，判断 `include.home` 是不是 `true`，来决定引不引入个人链接的四个图标。

最后的效果：

![单列](http://ww2.sinaimg.cn/large/71c50075jw1ebp9ptg0fdj20nj07owf9.jpg)