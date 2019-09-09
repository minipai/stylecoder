---
title: AngularJS 2 的 directive
slug: angularjs-2-directive
date: 2014-10-31T09:21:00.000Z
date_updated: 2016-04-19T16:19:14.250Z
---

AngularJS 團隊最近在 ng-europe 研討會上公佈了 AngularJS 2 的設計。原本只有投影片出來，有非常多的變更，讓很多人都嚇到了。尤其是 directive 的語法跟現在完全不一樣了。真的要升級的話，要改寫每個 directive… 應該是沒有人有時間吧。

不過看過影片後，因為每個更動在發表中都說明了理由，所以基本上每個更動都能接受了。其中 directive 的更動，也讓我又更了解 HTML 一點了。

以一個現在的 directive 寫法來對照：

    <button ng-click="foo(bar)">&times;</button>
    

到 AngularJS 2 的版本會是：

    <button (click)="foo(bar)">&times;</button>  
    

我看到這個變更時，第一時間的反應是：「這也改太大了吧，而且 html attribute name 可以有括號嗎？這樣算是在寫 HTML 嗎？」後來我查了一下，在 stackoverflow 找到的答案：

[http://stackoverflow.com/questions/925994/what-characters-are-allowed-in-an-html-attribute-name](http://stackoverflow.com/questions/925994/what-characters-are-allowed-in-an-html-attribute-name)

原來對於 HTML5 的「parser spec」來說，括號是沒問題的。當然送 W3C 的 HTML validator 不會過，但是這點對於 ng-* 系列也是一樣的。

所以 AngularJS 2 的 directive 還是 HTML。

AngularJS 2 的 directive 語法解決了一個問題，就是從 HTML 這邊看不出這個 directive 是在接「值」還是「字面」進去。

現在如果我寫一個 directive 如下：

    <tab name="myname" content="mycontent"></tab>
    

我可以在 directive 的 設定寫

    scope: {
         name: '@',
         content: '='
    }
    

這樣directive 這邊， scope.name 會接到的值是「字串」"myname" ，但是scope.content 接到的會是 mycontent 這個「變數」，兩個完全不一樣。但是在HTML上卻完全看不出來。

在 AngularJS 2 就是（應該）寫成

     <tab name="myname" [content]="mycontent"></tab>
    

這樣區別很明顯，在 JavaScript 這邊不用再寫設定了。

其實 ReactJS 也有類似的概念，在 JSX 是寫成

     <Tab name="myname" content={mycontent}></Tab>
    

在學 ReactJS時覺得這種區別相當不錯，所以對於 AngularJS 2 的改變我也覺得蠻好的了。

---

影片網址：[https://www.youtube.com/watch?v=gNmWybAyBHI](https://www.youtube.com/watch?v=gNmWybAyBHI)
