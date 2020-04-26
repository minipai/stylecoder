---
title: 更少的API - Crank.js
slug: less-api-crankjs
date: 2020-04-25T14:22:32.558Z
---



這週有一個新的 UI framework —— [Crank.js](https://crank.js.org/) 受到了前端開發者們的注意。這年頭前端 framework 已經發展得相當成熟了，市場已經 React, Angualr 跟 Vue 瓜分，新 framework 如果不是有過人之處，不會受到太大的關注了。這個 framework 不但 Dan Abramov 注意到了，在 reddit 有[發文祝賀](https://www.reddit.com/r/javascript/comments/g1zj87/crankjs_an_alternative_to_reactjs_with_built_in/fnkkgg3/)，處在資訊鍊的下游的我都收到訊息，更證明這個新東西不簡單。

## Async!

這個 Crank.js 是什麼特別之處受到大家的注意呢？因為他直接使用 async / generator function 來處理各種狀況。例如一個典型的前端工作：拉後端資料顯示是這樣的：

```
async function IPAddress () {
  const res = await fetch("https://api.ipify.org");
  const address = await res.text();
  return <div>Your IP Address: {address}</div>;
}
```
而用 React 做一樣的事情，要麻煩很多

```
function IPAddress() {
  const [address, setAddress] = useState('');

  useEffect(
    () => {
      fetch("https://api.ipify.org").then(res => res.text()).then(address => {
        setAddress(address)
      });
    },
    []
  );

  return <div>address</div>;
}
```

當然你可以把這邊用到的 React Hooks 用一個 function包起來，讓自己以後不用那麼麻煩。但是 Crank 這邊的寫法真是讓人耳目一新，我自己就是因為這個範例而讓我想嘗試這個 Library。

## Generator!

另外一個 Crank.js 主打的是用 generator 來寫 stateful component。一個簡單的範例：

```
function* Clicker() {
  let count = 0;
  const handleClick = () => {
    count++;
    this.refresh();
  };

  while (true) {
    yield (
      <div>
        <button onclick={handleClick}>Clicked {count} times</button>
      </div>
    );
  }
}
```

Crank.js 的寫法要比 React 的寫法多出一些 code。這是相當於 React：


```
function Clicker() {
  const [count, setCount] = useState(0);
  const handleClick = ev => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Clicked {count} times</button>
    </div>
  );
}

```

兩邊乍看之下差不多，都要呼叫一個 framework 的 api —— `this.refresh` vs `useState`，但是概念卻完全不一樣了。在 React，state 其實是來自 component **外面** 的，雖然看起來像是個 local 變數。React 的 setState 做的事是改變一個在 componnet之外，React 系統之內的 state 變數，然後 React 知道這個 state 改變後，重新 render 相對應的 component。

也就是說 React 的 render 永遠是資料的改變驅動UI重畫，但是 Crank.js 的作法卻是由 component 通知核心自己要 refresh，方向可以說是相反的。

## Async Generator!!
 
如果你想要 concurrent update 你的 UI，那就要用 async generator 了。你說你不到 concurrent update？其實如果你想要在 component 抓資料的同時顯示 loading，就是一種 concurrent update 了：
 
```
async function Loader({ wait }) {
  await new Promise(resolve => setTimeout(resolve, wait));
  return <div>loading...</div>;
}

async function Data({ wait }) {
  await new Promise(resolve => setTimeout(resolve, wait));
  return <div>Data loaded</div>;
}

async function* DataLoader(_) {
  const dataDelay = 5000;

  for await (_ of this) {
    yield <Loader wait={1000} />;
    yield <Data wait={dataDelay} />;
  }
}
```
在這個範例中，如果 `dataDelay` 是小於 1000 的數值 Crank.js 會跳過 `Loader` 直接 render `Data`，是不是很方便。如果有在跟 React 消息的人會知道，這個讓 concurrent render 的能力 Suspense 想要做的，但是 Suspense 在 JSConf Iceland 2018 發表後，已經難產到現在還沒正式推出...。


## 總而言之

Crank.js 的的 component 寫法真的非常有意思。相比 React，你要會 JavaScript generator，但是要學的 framework api 少很多。使用 generator 的著名 library/framework，好像只有 redux-saga 跟 koa，能再看到一個用 generator 的 framework 受到注目也是蠻令人高興的。

從設計理念上來說，這是把更多的事情搬到 component 來處理。這讓我回想起 React + Redux 的時代，當時大家瘋狂追求純粹，結果是 React component 很 pure，Redux reducer/action 很 pure，拉資料等等不乾淨的工作一路推推推推到 redux 的 middleware，像是 redux-saga 去。最終造成該做的工作沒有少，反而更麻煩了。當然現在把事情搬到 component 裡面，造成的影響也還是要長期實作才能知道了，如果有機會的話。

最後還是大力推薦一下大家玩一下這個 framework，它的 [introduction](https://crank.js.org/blog/introducing-crank) 也值得一讀，寫得非常感人肺腑呀。