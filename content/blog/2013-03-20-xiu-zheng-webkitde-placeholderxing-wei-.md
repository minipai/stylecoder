---
title: 修正webkit的placeholder行為
slug: xiu-zheng-webkitde-placeholderxing-wei-
date: 2013-03-20T09:30:26.000Z
date_updated: 2016-04-14T02:18:43.802Z
---

Webkit的input placeholder不會在focus上去的時候就消失，而是在開始輸入的時候才消失。要修正成focus上去馬上消失的話，可以用這個CSS：

    [placeholder]:focus::-webkit-input-placeholder {
        color: transparent;
    }
    
