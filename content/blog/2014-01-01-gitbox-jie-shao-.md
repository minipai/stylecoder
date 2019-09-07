---
title: Gitbox 介紹
slug: gitbox-jie-shao-
date: 2013-12-31T18:47:00.000Z
date_updated: 2016-04-14T02:12:46.823Z
---

今天看到朋友討論 Git ，發現我用的 GUI - Gitbox 還真是不怎麼有名。所以來寫一點介紹推薦一下。為什麼我要使用以及推薦 Gitbox呢？最重要的原因是在 Gitbox 的界面之下，Git 的概念一點都不困難。

有朋友表示「實際去教人，有的人連add/commit/push 都搞不清楚在幹嘛」。其實我也是覺得 add/commit/push 的概念在CLI下非常抽象，但是在 Gitbox的畫面下就很清楚了：

![](https://dl.dropboxusercontent.com/u/1319704/tumblr/post-71770097439/gitbox-1.png)

中間的欄位是一個「歷史記錄」，右邊欄位裡面的檔案則是全部有更動的檔案。因為是全新的資料夾，所以兩個檔案都是新檔案（new file）。在 Git 你要選擇你要「加（add）」哪些更動到這次的「提交（commit）」，而不一定要提交全部的更動。例如這次我就只想要 commit 新增了README而已，我只要簡單打勾，然後寫個訊息：

![](https://dl.dropboxusercontent.com/u/1319704/tumblr/post-71770097439/gitbox-2.png)

然後，按下「commit」我們就多了一個 commit 記錄了：

![](https://dl.dropboxusercontent.com/u/1319704/tumblr/post-71770097439/gitbox-3.png)

簡單吧，就算你不知道 git add 是什麼鬼，**打勾的東西**才會存進去是看得懂的吧。

---

如果你不知道為什麼要 commit 的話，這邊有一個例子。我覺得新增README不是我要的 ，我就在「歷史記錄」的 init commit 上右鍵， 執行  reset branch ，意思就是把歷史倒退到這個 commit 上。結果就變成這樣：

![](https://dl.dropboxusercontent.com/u/1319704/tumblr/post-71770097439/gitbox-4.png)

哇！之前的修改通通不見了。這就是做設計用 Git 的好處，你東西寫錯了，可以反悔回到前幾步。

---

Git 比起單純的 history，最大的差別就是 Git 不只有一條線，Git 有   branch/merge/rebase 的能力。要用這些功能在 Gitbox 也很簡單。

![](https://dl.dropboxusercontent.com/u/1319704/tumblr/post-71770097439/gitbox-5.png)

要branch很簡單，就在下拉選單上而已。我們來做一個叫 prototype 的 branch，然後做一些事情：

![](https://dl.dropboxusercontent.com/u/1319704/tumblr/post-71770097439/gitbox-6.png)

在prototype上的事情做完以後，我們再到 master branch 上做一點事情，畫面會像這樣：

![](https://dl.dropboxusercontent.com/u/1319704/tumblr/post-71770097439/gitbox-7.png)

在上方 master ( merge) prototype 的意思是你在比較兩個 master 和 prototype 這兩個branch 的差異，中間的 merge 是你可以執行的動作。在 history 裡面&hellip;

- 綠色圓點代表左邊（也就是工作中）的 branch（master）上存在的 但是不存在右邊的branch（prototype） 上的 commit。

- 藍色圓點代表右邊的 branch上存在的，但是不存在左邊（也就是工作中）的 branch 上的 commit。

我想要把 prototype 上的 commit 「融合（merge）」到 master 上，只要按中間那個按鈕就行了，相信你看到UI畫面也早就知道了。看，藍色圓點消失了，多了一個 commit。

![](https://dl.dropboxusercontent.com/u/1319704/tumblr/post-71770097439/gitbox-8.png)

如果你按下 command + shift，merge 會變成rebase，那結果又不一樣了。

![](https://dl.dropboxusercontent.com/u/1319704/tumblr/post-71770097439/gitbox-9.png)

在藍綠色點的對比之下，branch/merge/rebase 也不是很難懂的觀念了吧。我個人是覺得比其他 Git GUI裡會看到的「鐵道圖」還好理解。

---

在 SourceTree，fetch/pull/push/branch/merge 都在 toolbar上，在我看來這是很爛的UI，完全沒有經過設計。

![](https://dl.dropboxusercontent.com/u/1319704/tumblr/post-71770097439/gitbox-10.png)

但是在 Gitbox 就不一樣了：

![](https://dl.dropboxusercontent.com/u/1319704/tumblr/post-71770097439/gitbox-11.png)

你能做什麼事情，一目瞭然。雖然Gitbox 的UI一個圖示都沒有，但是在UX上可以說是大勝其他 Git GUI。

在 Gitbox 的幫助下，我在使用 Git 上是相當愉快而沒有感覺什麼難度的。雖然老實說我沒有真的很深入了解到 Git 的精華，就像使用 jQuery 而沒有很了解 JavaScript。但是在與 developer 的團隊合作上已經沒有什麼問題了。所以如果你真的搞不懂 Git 的話，我推薦你先用 Gitbox 看看。

[http://gitboxapp.com/](http://gitboxapp.com/)
