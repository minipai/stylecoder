---
title: 玩玩  react.js
slug: play-with-reactjs
date: 2014-11-04T16:50:08.000Z
date_updated: 2016-04-19T16:17:59.329Z
---

因為前陣子看到不少人大力的讚美 React.js ，所以我也忍不住也來玩玩看了。之前只知道 React.js 的特別之處在於 virtual dom，速度非常的快，但是速度不是我的興趣之處，所以就沒有再接觸了。這次再研究後才知道，React.js 還有一個特點就是能同時在 server side 以及 client side render，而且這個 virtual dom 的能力對於從server side render 出來的 HTML 也是有效的。

所以你可以讓 react.js 在 server render 好 HTML 後，再轉成用 javascript 來換頁，這就讓我非常有興趣了。以前 Twitter 曾經把頁面的 render 全部交給 JavaScript ，下場就是第一頁的render非常的慢。因為你要等JavaScript + template + json 全部抓完後，再用 JavaScript 把 HTML render出來，怎樣都沒有server直接吐 HTML給你快。看起來 react.js 可以解決這個問題。

我又再使用 [http://bambooboard.net/](http://bambooboard.net/) 當練習對象。因為1. 這是個討論板，是種內容網站，一定要有 server side 的 HTML 讓 google爬。2. 前後文章瀏覽，按讚以及有留言回應等互動的功能，基本要走 ajax ，UX 才會好。所以不能不用 JavaScript，但也不能連內容全用 JavaScript 來生成。 所以原本是採用文章內容會 render HTML，互動功能用angularJS 加上去的做法，換句話說是一個折衷方案，所以每次換文章都是比較慢的整頁 refresh，我一直希望能更快再快。

經過**非常慘烈**的學習與嘗試之後，終於成功換成 React.js 了，而且成果非常的好。現在你到 bambooboard 第一次會是收到 server render的 HTML，接下來連結到不同頁變成是用 ajax 拉 json 資料回來，大大增進速度與 UX。你也可以把 JavaScript 關掉，就是傳統的網站，每個文章都可以用連結到達，整個網站還是能運作的，只是每頁都要全頁 refresh 而已。這可是個沒話說的 progressive enhancement 實作啊。

從一個有理想（ progressive enhancement ）的 web designer 的角度來看，React.js 達成了其他 JavaScript framework/lib 都達不到的成果，已經值得推廣了。至於像是減少架構的複雜度之類的議題，因為我的程式很簡單，所以就比較不能評斷了。

（**非常慘烈**：要讓 server 和 client 的 react 同步前提是兩個HTML「一模一樣」，要求有點高。）
