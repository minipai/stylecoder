---
title: 自學（好的）CSS 是可能的嗎？
slug: self-learn-css
date: 2015-02-11T03:23:05.000Z
date_updated: 2016-04-19T16:17:39.143Z
---

TonyQ 又開[新戰場](https://www.facebook.com/tonylovejava/posts/10206200964208754)了。發源是抱怨拿到寫得很爛的CSS。

> 最厲害的就是 0 height 就算了，下一個區塊往上遞補的時候，不是回頭 clearfix ，竟然是補 margin-top 硬算。要這樣你怎麼不乾脆都用 position:absolute 算了，至少還不用在那邊玩俄羅斯方塊。
> 
> 不然就是到處都把 width / height 寫死，明明可以倚賴父元素的寬度(100%)，硬要寫死是怎樣，而且從最外層 container 寫死到最內層（超過四層）。

之後開啟了對於**自學CSS**的討論。

> 只是該怎麼說呢，大概是前端完全都找不到什麼人教，所以我們也就習慣野外求生了。而設計至少設計專業還有人教，所以有些人也就只倚賴人教。
> 
> [&ndash;TonyQ](https://www.facebook.com/tonylovejava/posts/10206204736183051)
> 
> 自學努力的設計師非常多人，但寫出來的Html、Css 沒被認為邪魔歪道的有多少？我說希望找個指導者，是為了矯正錯誤糾正觀念，避免出現像你前文提到的那種「怎麼會這麼搞」
> 
> [&ndash;Akane Lee](https://www.facebook.com/tonylovejava/posts/10206204736183051?comment_id=10206204802504709&amp;offset=150&amp;total_comments=163)

CSS能自學嗎？這邊所謂得自學CSS不只是學會語法，做出網頁而已。而是要滿足前端工程上的各種需求，能有彈性的適應變化。像是在template 要重複利用，文字長度可能不固定，甚至跟用戶互動等狀況。

我想了一下，要自學 **好的CSS寫法** 還真的想不到什麼資源。

請教一下 Even 有沒有地方學，Even 翻出了這本書 ：  [無懈可擊的Web設計](https://blog.othree.net/log/2006/12/24/bullet-proof-web-design-zh/)。不過問題是這本書2006，快10年前的，而且還是簡體書，會去買是真是超級有心。也就是說，並沒有一個比較普及的資源來教你這些事情。

Google 其實也幫不了你。要學好的JavaScript寫法你可以 Google &ldquo;javascript design pattern&rdquo; &ldquo;maintainable javascript"，但是你找 "css design patter&rdquo; 出來的結果是視覺上的pattern，找 &ldquo;flexible css&rdquo; 出來的 是關於 flexbox 規格（囧），找 &ldquo;maintainable CSS&rdquo; 出來的是 OOCSS, SMACSS, BEM 等整理 CSS code 的方法。

那「會寫 CSS 的人」到底是如何自學的？

> 我才不是什麼天生融合好的，我練了很久吃過各種錯誤，就跟你幹的設計師一樣，後來害死自己，做不下去，才認真把這些東西學好。
> 
> [&ndash;Even Wu](https://www.facebook.com/tonylovejava/posts/10206204736183051?comment_id=10206205395079523&amp;offset=50&amp;total_comments=163)

簡單來講就是踩地雷，被炸幾次就知道要怎樣寫比較好了。靠踩雷來學的話，最好的方法還是自己的 CSS 自己維護了。寫出沒有彈性的 CSS 來搞到自己，下次才會想是不是換個寫法比較好。不過看起來 TonyQ 那邊的流程是設計師生出HTML/CSS交給 TonyQ 之後就不用理了，這樣怎麼會碰到的CSS造成的問題，然後透過解決問題來學習呢？

所以我的想法是，你想要有 CSS 厲害的設計師，就要給他踩雷練習的機會，自己的 CSS 自己修。就像工程師就算唸過 design pattern，還是經過許多練習與經驗才能真的得心應手。在分工上拆成前端工程師跟設計師，就從職位上就減少了設計師的鍛鍊機會，扼殺未來的希望，然後我們稱之為專業分工。
