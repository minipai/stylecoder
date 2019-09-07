---
title: Design with AngularJS
slug: design-with-angularjs
date: 2013-09-26T16:40:03.000Z
date_updated: 2013-09-26T16:40:03.000Z
---

今天在 [HappyDesigner Mini 分享會 #4](http://registrano.com/events/happydesigner-mini-4) 分享了這陣子用AngularJS的心得（[投影片](https://speakerdeck.com/minipai/design-with-angularjs)）。

簡單來說就是我覺得 AngularJS 幫我，作為一個網頁設計師，解決了設計網頁 UI 在實作時的兩大難題，一個是 JavaScript 很難，另一個是 animation 很難。

JavaScript 很難指的是用 JavaScript 去直接操控 DOM，真的是繁瑣又困難的工作。相對於 jQuery 對「DOM API」的包裝，AngularJS 則是對「DOM manipulate」的包裝，所以又更高階了一層。

舉例來說，我想要讓網頁上某個區塊只有在某個狀況顯示時，我只要寫

    <div ng-show="hasWhatever"> ... </a>
    

當 hasWhatever 是true 時，這個 div 就會顯示，反之就不會顯示。幾乎是我想要什麼就寫什麼，很直覺。如果只有 jQuery，就要自己偵測狀況，根據狀況來下 .show() 跟 .hide() 。所以用 AngularJS（的directive）來寫 UI 真是輕鬆許多。

Animation很難的意思則是因為 CSS 除了:hover以外是沒有辦法對 transition/animation 進行觸發的，所以要讓一個 DOM 「動」起來的話，要用JavaScript 幫 DOM 加上css class。要怎麼在適當的時機新增／移除css class 又是一個難處了。而 AngularJS 的 ngAnimate 會幫你處理這件事情，在需要的時機加上css class。（.ng-enter, .ng-enter-active, ng-leave, ng-leave-active 等等）

因為 AngularJS 做 animation 真的很簡單，所以我也做了的一個CSS library，[ng-trans.css](http://minipai.github.io/ng-trans.css/)。只要加入 ng-trans.css，就可以很輕鬆的在 DOM 被 AngularJS 加入或是移除的時刻加上動畫過場效果了，歡迎試用！
