---
title: 學習CSS的門檻
slug: css-is-hard
date: 2013-01-13T07:11:00.000Z
date_updated: 2016-04-14T02:21:21.357Z
---

Even Wu 在 [WebConf](http://www.webconf.tw) 的演講「[網頁技術濃縮咖啡](https://speakerdeck.com/evenwu/2012-web-technology-by-rgba-group)」裡提到，可以用padding的百分比是相對於父元素的寬度這個特性，用padding-top: %做出一個固定比例的div，然後在裡面裡面用position:absolute定一個div來放內容，特別是圖片。

這個方式不知道要怎麼說，「技巧」嗎？ 這種需要使用原本預設用途不是這個效果的宣告來達成想要的效果，我認為是學習CSS的一大門檻。CSS語法據說是要「設計給設計師用」的，語法要很簡單，所以CSS語法的樣式宣告設計成只有 property: value 這樣單純的組合。所以CSS語法才是

      font-size: 16px
    

而不是

      font: size(16px)
    

這種模式。

理想上，所有你需要的效果都有相對應的property，你只要修改value的設定就好了。但是現實就是CSS提供的總是不夠用。偏偏CSS不提供程式語言的函式，讓你打造你自己想要的功能，剩下唯一個方法從現有的property挖寶，看能不能變出想要的效果。這樣用現有property變出來的效果，需求越是複雜，用的property越是匪夷所思。例如：

1. 兩欄排版。這個好想，拿float來用，寬度都用百分比就好了。

2. 兩欄排版，右欄固定寬度，左欄用剩下的寬度。這個解法用到負margin，這我自己想是想不出來的。

沒錯，很神奇的，CSS居然沒有提供「排版」的語法，現在網頁排版都是用原本用處是文繞圖的float來達成的，所以排版成為寫CSS一個很高的門檻。這個問題可能要等到CSS3 flexbox能用以後才能解決。於是CSS的學習過程變成學完相當簡單的  property: value 組合後，直接跳到要用一堆不相干的  property結合變出需要的效果。像用負margin和「兩欄排版，右欄固定寬度，左欄用剩下的寬度」中間實在沒有什麼邏輯可以聯想在一起，通常你只能多看多學，吸收高手們試出來的解答。

還有一些property居然是要跟別的property組合才會有效果的，這我真是覺得從一開始的設計就有問題了吧。像是z-index要position設成static以外才會發生作用，像是float會變更display屬性，像是position:absolute是相對某個有position:relative的上層元素&hellip; 為何不是position-reference: parent？這也是CSS不夠簡單的地方。

最後分享一個最近寫的[responsive gallery](http://codepen.io/minipai/details/KIqty)。在學到padding:%技巧之前我也是用JS去改div的高度，真是悲劇啊。
