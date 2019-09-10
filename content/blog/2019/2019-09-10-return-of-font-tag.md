---
title: <FONT>也回來了
slug: return-of-font-tag
date: 2019-09-10T10:38:27.666Z
---

寫網頁久一點的人都知道，原本有個 `<FONT>` 標籤可以調整文字的字體和大小和顏色，但是後來在 HTML 4.01 就被停用了。之後，HTML 和 CSS 「內容與形式分離」的原則，在經過多年的倡導之下，有一段時間不只是**技術**上的分離，更成為寫網頁時設計**架構**的唯一正確思維。

這裡所說的「形式與內容分離的架構」舉個例子，大概是像這樣：

```
// HTML
<article class="blog-post">
  <h1>Title N/A</h1>
</article>


// CSS
.blog-post h1 {
  font-size: 3rem;
}

```

在這個例子中，HTML 裡面只有「內容」的資訊，連 `blog-post` 都是對於「內容」的描述，一點關於形式的資訊都沒有，形式只存在CSS中。這個架構好一段時間是唯一「正確」的，導致 960.gs 的官方介紹 slide 有好多內容在說明 `grid_2` 這種 class name 一點都不邪惡。 ([Speaker Deck](https://speakerdeck.com/nathansmith/960-grid-system?slide=11))

在傳統內容網頁，grid 是少數跟內容無法掛鉤的形式，但是隨著 web 技術的進步，網頁不再只是一篇一篇的文章，web 慢慢變成一種應用程式的開發平台了。Button、Modal、Card 這些 UI 元件裡面裝什麼內容都可以，所以已經沒有人堅持 HTML 裡面不能寫 `btn btn-primary` 這種 class name 了。([沒有人](https://alistapart.com/article/meaningful-css-style-like-you-mean-it/))

不過 `btn btn-primary` 這種 class name 跟 css 怎麼寫還是沒有直接的關係，[Tailwind](https://tailwindcss.com/) 這種 css framework 就更過份了，class name 變成跟 css 完全對應，已經把分界完全拆掉：


```
<div class="md:flex bg-white rounded-lg p-6">
    <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="avatar.jpg">
    <div class="text-center md:text-left">
      <h2 class="text-lg">Erin Lindford</h2>
      <div class="text-purple-500">Customer Support</div>
      <div class="text-gray-600">erinlindford@example.com</div>
      <div class="text-gray-600">(555) 765-4321</div>
    </div>
</div>
```

到這個地步，我覺得這跟 `<FONT>` 沒什麼區別了。`<font size="8" color="red">` 和 `<div class="text-lg text-red">` 的差別只是一個寫在 class name，一個寫在 attribute，已經無所謂形式與內容分離了。開發者終於體認到   HTML 與 CSS 的分離的限制其實對於開發 Web App 來說相當麻煩，乾脆在 class name 裡寫 css。

而對於 React 開發者來說，我們有更好的選擇。例如 [Styled System](https://styled-system.com/)，他是一套 helper function，可以搭配 CSS-in-JS library 產生能高度客製樣式的 React Component。看看官網範例：

```
import styled from 'styled-components'
import { color } from 'styled-system'

const Box = styled('div')(
  typography,
  space,
  color
)

<Box
  fontSize={4}
  fontWeight='bold'
  p={3}
  mb={[ 4, 5 ]}
  color='white'
  bg='primary'>
  Hello
</Box>
```

 `<FONT>` 回來了。變潮，也變強了。
 
 我的預測是重新發明`<FONT>`只是一個開始。當我們換個角度從 JavaScript 端控制CSS，可以基於 JavaScript 開發更多靈活的應用，相比傳統靜態的CSS檔案有更多想像的空間，未來的發展真是相當值得期待。