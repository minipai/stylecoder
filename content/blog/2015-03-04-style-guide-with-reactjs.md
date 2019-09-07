---
title: 連寫 style guide 也是用 reactjs 最方便
slug: style-guide-with-reactjs
date: 2015-03-04T10:21:12.000Z
date_updated: 2016-04-19T16:17:12.952Z
---

ReactJS 用一陣子後，真是覺得越用越喜歡。現在還發現一個 ReactJS 的妙用，那就是建 Style Guide。我們都知道 CSS 也應該寫文件，最好寫得像 Bootstrap 的一樣方便好用。不過寫文件大家也知道是一件麻煩事，所以就有一些工具來幫忙。

一種工具是讓你在 CSS 上寫註解，然後再 parse 這個註解，像是你寫的 HTML 範例，幫你轉成文件。不過這個方式有個問題，就是在註解內寫文件還蠻痛苦的，。一來註解的顏色通常都比較淡，看得很辛苦。

再來就是 CSS 註解內，編輯器關於寫HTML的輔助功能都沒了。最大的問題是，萬一你網站template那邊的HTML+CSS要改，註解內的HTML範例你是要自己手動同步的，這個工具幫不上你。

最後一個問題就是自動轉出來的文件，HTML就是工具轉出來那樣了，要怎麼調整，我不會，而且成果也只是大致能接受而已，沒辦法隨心所欲的修改。

仔細想一下我需要工具幫我做的事情，最核心其實就是幫我把一段HTML code，要在文件頁上要看到「成果範例」以及「原始碼」方便對照以及 copy&paste 的。這不就是 ReactJS 剛好擅長的嗎？

比方說，我有一個 React Component 叫 Element，那我只要用 React.renderToStaticMarkup() 就可以秀出原始碼了。

[詳細一點的gist](https://gist.github.com/minipai/e815775079d294c14251)

用 ReactJS 寫 styleguide 真是方便多了，你不用多學一個工具，也不用到 CSS 的註解裡多寫一次 HTML，styleguide 的版面還可以完全照自己的需求設計。

![](https://dl.dropboxusercontent.com/u/1319704/tumblr/post-112684988122/styleguide.png)
