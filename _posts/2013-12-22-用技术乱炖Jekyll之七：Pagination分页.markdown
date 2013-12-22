---
layout: post
title: "用技术乱炖Jekyll之七：Pagination分页"
date: 2013-12-22 17:30:00
categories: blog
summary: "本篇主要介绍分页功能"
---

为了搞分页，速度写了七步Blog，这样一共有8篇博文，可以尽情分页了。

*为了美观，随便改了改图片和代码的样式，可以看一下CSS*

下面开始分页，此步骤代码为：`git checkout -f step_9`。

## Pagination

Jekyll的分页功能称为 `Pagination` ，只需要简单的配置就能实现分页的功能。

首先，`_config.yml`：

{% highlight yaml %}
    paginate: 5
    paginate_path: "page:num"
{% endhighlight %}

* `paginate`：是每页的博客条数。
* `paginate_path`：页面的路径，如第二页的实际路径将是 `page2/index.html`。

这里要注意的是，第一页不是 `page1/index.html`，而是 `index.html`，原因我想我不用说明了。

*这时，重新执行`serve`或`build`，在`_site`里会发现`page*`目录。*

既然分好页了，那么怎么读取当前页需要显示Blog呢。

原来 `index.html` 中 `for` 循环中的是 `site.posts`，是取全部的Blog，这里改成 `paginator.posts`，就是读当前页的Blog了。

然后对于分页按钮，上一页，下一页，也非常容易。

{% highlight html %}
    <div class="pagination">
        { % if paginator.previous_page % }
        <a href="{ { paginator.previous_page_path } }" class="previous">Previous</a>
        { % else % }
        <span class="previous">Previous</span>
        { % endif % }
        <span class="page_number">
            Page: { { paginator.page } } of { { paginator.total_pages } }
        </span>
        { % if paginator.next_page % }
        <a href="{ { paginator.next_page_path } }" class="next">Next</a>
        { % else % }
        <span class="next ">Next</span>
        { % endif % }
    </div>
{% endhighlight %}

* `previous_page`：前一页的页码
* `previous_page_path`：前一页的路径
* `next_page`：后一页的页码
* `next_page_path`：后一页的路径
* `page`：当前页
* `total_pages`：总页数

*更多配置和参数可以查看 [http://jekyllrb.com/docs/pagination/](http://jekyllrb.com/docs/pagination/) 官方文档。*

这里的逻辑是判断，前后页有没有，有则显示连接，否则只显示文字不显示链接。

效果如下：

![效果](http://ww1.sinaimg.cn/large/71c50075jw1ebslkckn8lj207o01ajr8.jpg)

调整一下CSS，然后把上一页，下一页的文字换成图标，最终效果如下：

![效果](http://ww3.sinaimg.cn/large/71c50075jw1ebsm79kxswj20mm0c0mz7.jpg)

