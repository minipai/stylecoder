---
title: ;
slug: bootstrap-dropdownjs-clearmenus-needs-at-the
date: 2012-04-16T23:42:00.000Z
date_updated: 2016-04-14T02:53:55.194Z
---

[bootstrap-dropdown.js clearMenus() needs ; at the end](https://github.com/twitter/bootstrap/issues/3057) 這個bootstrap的issue可能是因為Douglas Crockford 跑來說：

> That is insanely stupid code. I am not going to dumb down JSMin for this case.

引來多人圍觀（？），結果有了上百個回應在論戰要不要加分號。

不過最終Douglas Crockford 還是有修正 JSMin的bug：

[JSMin/commit/5ca277ea452beae1c25db3bc0ef5c81309a3daf4#jsmin.c](https://github.com/douglascrockford/JSMin/commit/5ca277ea452beae1c25db3bc0ef5c81309a3daf4#jsmin.c)

bootstrap則是早在issue貼出之前就用改變寫法（沒加分號）的方式，所以是皆大歡喜吧，可喜可賀。

我是覺得bootsrtap很明顯的是用npm的[coding-style](http://npmjs.org/doc/coding-style.html)，不是隨便不加分號的，要來要求作者加分號實在沒什麼意思。
