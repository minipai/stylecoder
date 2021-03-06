---
title: 每24個月，前端都會簡單一倍
slug: front-end-is-getting-easier
date: 2017-07-16T10:02:17.613Z
date_updated: 2017-07-16T10:02:17.612Z
---

之前看到「每18至24个月，前端都会难一倍」這句話時（2015）的反應，是覺得其實應該是反過來的，前端是越來越簡單的才對。過了兩年，還是依舊覺得...

因為現在的這份的工作有不少legacy code（第一份有legacy code的工作！），在遇到在維護legacy code的部分時，會發現跟現在類似互動程度的前端UI，以前用jQuery實現的程式碼超級長，而且我總是看不懂是在寫什麼，所以在維護legacy code時總覺得工作非常困難。跟現在的程式碼兩相對比之下讓我更深刻的體驗了寫前端真是越來越簡單。

### 更新UI越來越簡單

更新UI越來越簡單應該是前端人都有體會。(2010) jQuery是直接對DOM做操作，而(2012) AngularJS/KnockoutJS的data binding 你只要在HTML上標示要綁定的變數名稱，到了(2016) React整個component都是函數對於變數的計算結果。

越來越好寫除了是從程式碼的角度，也是從效能的角度。AngularJS 實作檢查資料變動的方式十分消耗資源，所以官方還建議不要綁超過2000個點。到React你已經不太需要太花心思在注意自己的寫法的效能上了，如果真的有需要才要在react component上加上資料有沒有變動的判斷。

### 要費心命名的接點越來越少

以前強調 HTML/CSS/JavaScript 的寫法要非常分離。但是最後要有效果，總是需要指定CSS/JavaScript要對哪個DOM作用。這樣做的結果就是有非常多的地方需要命名，不論是 class 還是 id。我們知道命名是寫程式最困難的兩件事之一，尤其是CSS這邊，還衍伸出各種針對css class命名的方法論，甚至還複雜（？）到可以出書，開班教學。

現在，在 React component底下，JavaScript跟HTML的介接回歸到最原始的 onClick ，不需要再命名一個class/id 讓jQuery來query。而CSS這邊可以使用CSS module規格，你可以用最簡短的名字命名，跟其他地方重複也沒關係，把BEM, SMACSS等方法忘記。

### Browser越來越遵守標準

這個可能每個人體會的就不同了，可能有的人的需求仍然要支援十年前的IE，那現在的browser更支援標準也幫不了他。我現在工作主要做的是後台admin，請客戶使用最新的browser工作不成問題，而客戶要用Chrome或是Firefox或是Edge都沒有相容性的問題。

### JavaScript越來越進步

這個也不用多說太多了。對於ES6之後加的新語法，都是一直以來前端人想要的。新語法沒有什麼困難的地方，都是解決原本的困擾或是麻煩。我個人覺得這都要感謝CoffeeScript的成功，讓開發JavaScript的大大認識的 compile to JavaScript 這件事是大家能接受的，用這招就可以解決相容性的問題了。

## ...

這篇文章距離上一篇文章已經超過一年了，可能也跟前端越來越簡單有關係。很多原本的難題一直有新的library出來解決，得來得太容易，沒有深刻的體會，不好意思寫呀。

老實說我的能力跟6年前沒有大差異，很多能力像是對付IE bug還流失了，但是現在卻在做複雜3倍以上的前端UI，都要感謝這麼多高人免費開源他們的解決方法，還做得非常簡單易用呀。
