---
title: Bootstrap V4
slug: bootstrap-v4
date: 2015-08-22T00:53:53.000Z
date_updated: 2015-08-22T00:53:53.000Z
---

[http://v4-alpha.getbootstrap.com/components/utilities/](http://v4-alpha.getbootstrap.com/components/utilities/)

經過一年的開發，Bootstrap V4 發佈了。UI 外觀上沒有什麼變化主要是程式碼的進步，引進新的技術 ———— 主要是 flexbox 和 ES6。

對於 flexbox ，bootstrap 文件是這樣說：

> In a nutshell, flexbox provides simpler and more flexible layout options in CSS

所以，其實我對於有種說法「前端技術越來越難」，我的感覺是剛好相反的。

Class 的命名也有所進步，不再使用child selector，以前令人抓狂的 `.nav > li > a` 也都沒了。還以一個很棒的地方是 Utility classes 裡面多了一整套的 spacing style，像是

    .m-a-0 { margin:        0 !important; }
    .m-t-0 { margin-top:    0 !important; }
    .m-r-0 { margin-right:  0 !important; }
    .m-b-0 { margin-bottom: 0 !important; }
    .m-l-0 { margin-left:   0 !important; }
    .m-x-0 { margin-right:  0 !important; margin-left:   0 !important; }
    .m-y-0 { margin-top:    0 !important; margin-bottom: 0 !important; }
    

當我以前說過我會寫這類的 helper style 來加速開發時（但是是有用到的才寫，不用寫全套），還被視為邪魔歪道呢。

雖然還有一些同類型的 CSS library，不過 bootstrap 都是我的第一選擇，這次也沒讓我失望。
