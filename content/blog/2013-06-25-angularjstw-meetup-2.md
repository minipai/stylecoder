---
title: AngularJS.tw Meetup #2
slug: angularjstw-meetup-2
date: 2013-06-24T17:28:08.000Z
date_updated: 2013-06-24T17:28:08.000Z
---

今天參加了 [AngularJS.tw 第二次社群聚會](http://registrano.com/events/angularjstw2) ，講師 GskLee 講得非常精彩。我很喜歡他前面講解的AngularJS的觀念，或是說「理念」。就像當年 PPK 在《PPK on JavaScript》也是先花了一章講解歷史，再花了一章解釋HTML/CSS/JS的結構／表現／行為要分離的觀念，接下來才開始講JavaScript一樣，觀念的建立對於使用AngularJS非常重要。

在跟一些朋友聊過之後，我發現很多人（包含我自己，曾經）對於對於使用 AngularJS 有個心理上的障礙，簡單來說就是「HTML不乾淨了」。關於這點StackoverFlow 也有不少討論，解釋為什麼「HTML不乾淨沒關係」，但是我覺得今天 GskLee 的解釋最精闢：對於Web App來說，HTML/CSS/JS的責任分離要改成「界面／表現／邏輯」才恰當。

簡單來說，「結構／表現／行為」是當你的網頁本質還是一份「document」時才適用，當你這個網頁是一個「application」時就不適合了，要用「界面／表現／邏輯」來重新安排HTML/CSS/JS的工作，才是適合寫一個「application」的架構。

換句話說，在AngularJS的架構下，HTML不再是HTML，而是MVC裡的V，不像其他JavaScript MV* framework的V還是純粹的JavaScript，反而比較像&hellip; Rails的View！看看Rails的View不就包含一些ruby的helper以及loop，經過render後才變成HTML的嗎？AngularJS也是像這樣，只是因為這是在client-side，所以AngularJS可以隨時render來反應model的變化。既然我們不會介意Rails的View上寫each-do，那我們也不需要介意在AngularJS的View上寫ng-repeat。

所以HTML乾不乾淨不是問題，問題在怎麼寫HTML才能幫助你開發。在你寫的是document時，也許HTML越乾淨越好，但是如果你寫的是web app，那就不見得了。

我覺得很慶幸能聽到這場 GskLee 的演講，因為目前我找到的教學包含 AngularJS 官網都沒有把這個觀念的轉變解釋得這麼清楚。我也覺得很高興能處在這個「典範轉移」的時刻，重新提醒我現在網頁設計／開發上的一些原則，都是因為真的有很實務的需要而被整理出來的，而不是因為純粹理念的追求。如果是的話，我們現在應該用的是XHTML2而不是HTML5了。
