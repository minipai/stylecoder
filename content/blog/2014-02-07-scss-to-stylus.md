---
title: Scss to Stylus
slug: scss-to-stylus
date: 2014-02-06T23:32:17.000Z
date_updated: 2014-02-06T23:32:17.000Z
---

其實之前看到 Stylus 出來後，就還蠻想嘗試看看了。只是說 Stylus 和 Scss 的功能差異不像當初 LESS 和 Scss 的差異那麼大， Scss 已經用習慣了以後，要跳槽還真需要一點額外的動力。

在過年前幾年，工作夥伴提到開發環境裡 Sass 是唯一要用到 **Ruby** 的因素，要是沒有就好了。再加上 Sass compile 的速度還真是慢，我每次都要微等一下再 reload browser 才能看到結果。所以合起來就有充分的動力來換了。

然後公司網站也沒有用 Compass，要轉換的阻力就小很多了。於是我就利用今年過年有空的時候，把公司的 Scss 轉成 Stylus。 本來以為會很快，幾個 search & replace 就好了，沒想到枝節還蠻多的，再加上一些 Stylus 的錯誤訊息真是不知道在表達什麼，試很久才知道問題在哪裡。不過看不懂的錯誤訊息我覺得在直接寫 Stylus 時應該不會發生，所以才沒有被處理到。

Stylus 的 variable interpolation （用 {} 包起來）也比較弱，只支援在 selector 裡面使用，像是

    -webkit-{prop} : args
    -moz-{prop} : args
    {prop} : args
    

在其他地方就要改用最一般的字串相加（ + ）了。

還有一些小差異不會報錯，要自己看CSS的diff 抓出來。像是原本 Scss 的變數是用 $color: #fff 來表示，Stylus 是比較像程式語言的 color = #fff ，但是 Scss 的表示方式在 Stylus 也不是錯誤，而是當作普通的樣式直接放過去。

在轉成 Stylus 之後，我也順便引進了 [Autoprefixer](https://github.com/ai/autoprefixer) 幫我自動加 vendor prefix，這也是我聽到很久一直想用的東西。也再次令人感到前端的進步速度真的很快，前不久用 Compass 來幫忙處理 vendor prefix 還很潮，現在一下就過時了，改用 **postprocessor** 來處理會更好。

新年新語言新流程，感覺還蠻不錯的！
