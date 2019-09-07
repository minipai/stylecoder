---
title: 你以為的CSS最佳寫法是錯的
slug: ni-yi-wei-de-csszui-jia-xie-fa-shi-cuo-de-
date: 2013-05-13T18:41:00.000Z
date_updated: 2016-04-14T02:18:01.574Z
---

非常聳動的標題！讓我們來看看以下哪一個 CSS/HTML 的寫法是比較對的。

[https://gist.github.com/minipai/5569802](https://gist.github.com/minipai/5569802)

是A還是B？

其實沒有絕對的對錯，但是如果你的答案和某個*CSS教學*的投影片的內容一樣，覺得B才是正確版本，因為A沒有寫「有語義」的HTML，那你的觀念需要更新了，很可能比起B，A才是更好的寫法。

不信的話去看一下twitter bootstrap的原始碼，正是A的寫法。

B的寫法很接近所謂「最佳實踐」的寫法，如果把.box換成#box就更接近了。簡潔，富有語義的HTML，沒有多餘的class。唯一有問題的是&hellip; 這是十年前的「最佳實踐」。為什麼說是十年前？因為十年前正大約是網頁設計圈在推展semantic html的年代。

十年之前是什麼樣的環境？那是傳說中table layout的時代，HTML/CSS甚至多是Photoshop/Dreamweaver生產的。HTML和CSS混在一起，一同用來排版，上樣式。也就是說，那時要改網頁，要HTML和CSS一起改，有時改HTML有時改CSS。為了改善這個情形，HTML和CSS的功能要分離，HTML不可以包含任何改變樣式的能力，全部交給CSS，而HTML要「有語義」的寫，如此才方便用CSS來實作設計。

在完成HTML與CSS語義／樣式的分離運動之後，有好一段時間人們都用很簡潔的HTML來寫網頁。但是慢慢的有人發現這樣寫法還是有不足之處，那就是CSS的 code 沒有辦法重複利用。於是Nicole Sullivan在2011年發表了著名的演說Our Best Practices Are Killing US（[slide](http://www.slideshare.net/stubbornella/our-best-practices-are-killing-us?ref=http://www.stubbornella.org/content/2011/04/28/our-best-practices-are-killing-us/)），並發表了[CSS Lint](http://csslint.net/)以及OOCSS的觀念，讓CSS的code reuse有個方針。

回頭看A和B兩個寫法，OOCSS會比較傾向A，但是只要沒有影響到可重複利用性，也不會絕對的說B的寫法是錯的。但是一般而論，另外一個要用到.box樣式的區塊，標題除了是h2，也可能是h3, h4，內容除了p也可能有li，所以要我選的話，我會用A的寫法。（h2, p, li 這些語義標籤放在div裡面）

OOCSS之後，還有另外一套[SMACSS](http://smacss.com/)，觀念雷同，但是教學寫得比較清晰，有興趣的話也很推薦。我個人認為bootstrap的css class命名是走SMACSS的方式的，相當值得參考。
