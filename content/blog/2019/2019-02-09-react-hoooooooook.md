---
title: React Hoooooooook!
slug: react-hoooooooook
date: 2019-02-09T00:11:51.100Z
date_updated: 2019-02-09T00:11:51.098Z
---

在期待已久的等待之下，有 React Hooks 的 16.8 終於正式發佈了（6/2/2019）！自從我第一次看到 ReactConf 上的 demo 之後，我就希望能馬上改用 Hooks 來寫 React 了，這段時間真是一直都很想不管了，直接上 alpha 版來用。

Hooks 不愧是 Facebook 出品的設計，再一次帶來打破傳統的寫法與觀念。每次打破傳統時，一開始會覺得新的 API 真是奇怪，但是稍微嘗試之後，就會發現這全新的寫法完全是切合需要的，一些舊觀念也就棄置了。

對我來說，Facebook 打破（前端領域裡）的舊觀念大概有三次吧。React 自己的出現就是打破了一次舊觀念，virtaul dom 運作的方式打破之前很單純的 「找出 data 有什麼變化然後更新 DOM」的想法，變成「不用管新舊 data 的差異 ，DOM 要改什麼問 vdom」。這個新觀念也讓原本前端界對 [Object.observe](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe) 的興趣消失，這個規格也不再開發。

雖然 JSX 技術上不是 HTML，但是 React 帶來的 JSX 也衝擊原本 HTML/JS 分離，HTML這邊不能有程式邏輯的軟工美學。在經歷過 React 的寫法之後，回頭看以前的規範比較像是技術不到位的產物，甚至有點自欺欺人，因為很多 HTML template 的自訂語法的功能其實相當強大，只是那「不是JavaScript」而已。

還有 Facebook 發明了 GraphQL ，讓前端存取 server 上的資料有了專門的描述語言，不必再使用 RESTful 這個沒什麼共識的共識。有了一個規格為基礎，很多工具才能往上做得更好。例如 [Apollo Client](https://www.apollographql.com/docs/react/) 的 caching 功能就做得很好，不像我自己之前有想嘗試在 ajax client 做 caching 的功能，但是受限於無法從傳統 RESTful api 知道資料的結構，所以成果有限。

那這次呢？雖然 Hooks 本身沒有什麼新觀念，但是我在alpha 版時試玩的心得是，以後寫 React 的感覺會很不一樣。未來 React 可能寫起來會更有整體感，更像一個 framework，而不是像現在還是很多人說 React 只是一個 view library。

其實一開始 React 有 mixin 這個 api 可以重複使用 state 的操作。但是因為技術上有缺陷，所以後來被拔掉了，請大家改用 design pattern 來解決。

這導致 React 重複使用「行為」部分的 code 其實是有難度的。而且你要了解這些 design pattern 以及其觀念，知道 React 生態圈裡發展出來的 `higher order component`、 `render props`、`smart/dumb component` 等等名詞。造成了 React 本身很好學，但是怎麼用 React 不好學的結果。

`smart/dumb component` 的區分我是覺得開始有 Separation of Technology 的味道了，不像當初 React 提倡了一個原則是「Separation of Concerns, not Separation of Technology」。

加上 React 將 Context Api 視為實驗性質 API，所以很少人挑戰自己寫，或是敢用非主流的 state management library，於是多數人跟選主流選擇 Redux。 Redux 自身又不處理 async 的 action，所以要用 `redux-saga` 等 library 專門處理 async 的部分。最終結果就是 「state 管理」，「aysc 資料」，「view 顯示」三塊的 code 是分離的，這些對我來說是 technology 而不是 concerns 的不同，React 生態圈一路發展下來，我們又再度得到好多「Separation of Technology」了。

我不知道 React team 跟我想的是不是一樣，但是 Hooks 的設計確實有解決掉這些我感覺到的困擾，加上 Context API 也早就已經正式定案，我可以再回到 React 提出的 Separation of Concerns 的初衷，把拉資料等 component 需要的功能透過 Hooks 放到 component 裡面了。非常期待之後整個 code base 的變化，我相信一定會變得更好，更美。
