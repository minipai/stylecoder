---
title: 痛苦太多 收穫太少
slug: too-much-pain-not-enough-profit
date: 2016-05-09T00:00:00.000Z
date_updated: 2016-05-08T23:51:04.154Z
---

在 A List Apart 最新發表的一篇關於 CSS 寫法的文章 [Meaningful CSS: Style Like You Mean It](http://alistapart.com/article/meaningful-css-style-like-you-mean-it) 裡，作者重新推廣所謂的 semantic, meaningful CSS。我蠻驚訝 A List Apart 會上架這篇文章，因為 A List Apart 向來發表的是關於最新或是實驗性的觀念與技術文章。而這篇文章只是重提美好的老派寫法，不一樣的地方只是我們有更多 aria role 可以用了。

以按鈕為例，作者主張我們可以用 role 來代替 class。

    button,  
    [role=button] {
        … 
    }
    

但是這狀況實在設想得太單純了。以 bootstrap 已經設想到的來說，除了各種狀態（success、warning、danger），平常就有重要性不同的兩個按鈕樣式（primary、secondary），而且這是非常常用的。

所以你只是省略了一個 `.btn`而已。所以實際上你的 CSS 是：

    button,  
    [role=button] {
        … 
    }
    .btn-primary { … }
    .btn-secondary { … }
    .btn-success { … }
    .btn-warning { … }
    .btn-danger { … }
    

所以 role 只能取代一個 class `.btn`，在我們的 CSS 裡面還是有更多的 class，反而讓 CSS 難以管理。如果再探究怎樣才是「semantic, meaningful 」，我還能質疑 button 就真的 meaningful 了嗎？我們是不是應該把這個 button 的目的寫在 class 上，例如 `.submit-new-article`，這樣才夠？

---

其實，OOCSS的寫法不是隨便冒出來的。因為我們寫網頁是先 HTML，後 CSS。在人性「懶」的束縛之下，只針對現在網頁上的 HTML 標籤寫 CSS，不想多寫 class 是很正常的，如果不是有意識地避免最輕鬆的路，作者主張的寫法反而是最自然而然的。OOCSS 會出現是因為有軟體工程的問題，以及發明人 Nicole Sullivan 用了突破框架的巧思來解決才誕生的。OOCSS 突破了先 HTML 後 CSS 的思維慣性，我覺得是一個相當了不起的發明。

在 OOCSS 發明之前的時間，是 CSS preprocessor 最夯的年代。人們認為 CSS 的功能太不足了，我們需要種種程式語言的功能來幫助我們維護 CSS。有樣式要重複使用嗎？我們應該還是依照「語意」寫 class，然後把重複的 CSS 寫個 `@mixin` 再 `@include`。有時候單純的 `@mixin` 還不夠，因為總是有微小差異的地方，例如前面 ｀.btn-success.btn-warning`的例子，其實只是換顏色而已。那我們就讓`@mixin` 可以用參數吧。

但是即使有 Sass，在 HTML 不斷思考根據「語意」該怎麼命名 class 仍舊十分痛苦，而且沒有收穫。僅僅是因為 W3C 的告訴你要這樣做，是沒有人會堅持下去的。很快的，人們發現 selector 都用 class 就是比用 HTML 好維護。從 bootstrap 2 到 bootstrap 3 的變化就是很明顯的例子。

---

最後，作者在文後的討論重提了 CSS Zen Garden。

> The CSS Zen Garden showed us years ago how to style in different ways while keeping the same semantic markup.

但是現在這不是開發者，尤其是 Web App 開發者在做的事了。Web App 開發者的需求是在不同的 HTML 結構還能重複使用 CSS 樣式。實務上會有「相同HTML，不同樣式」的需求只有為數不多的 blog 版型設計師了吧。
