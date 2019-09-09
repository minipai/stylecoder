---
title: 那些在 Redux 裡的 MobX 模式
slug: mobx-in-redux
date: 2018-03-08T06:31:30.058Z
date_updated: 2018-03-08T06:33:56.385Z
---

自從 Redux 發表以後，因為酷炫（？）的 time machine 功能以及簡單的API而大受歡迎，成為 React 世界裡最受歡迎的狀態（state）管理工具。雖然 time machine 功能我自己從來沒有用過，不知道實際上到底實不實用。

不過雖然 Redux 跟 React 的搭配相當普及，可是好像很多人在用 Redux 的時候沒有一併接受 Redux 設計 reducer 跟 action 分離的哲學，像是 [FAQ](https://redux.js.org/faq/actions#is-there-always-a-one-to-one-mapping-between-reducers-and-actions) 裡有說： 

> A given action could be handled by all, some, or none of them. This keeps components decoupled from the actual data changes, as one action may affect different parts of the state tree, and there is no need for the component to be aware of this. Some users do choose to bind them more tightly together, such as the “ducks” file structure, but there is definitely no one-to-one mapping by default, and you should break out of such a paradigm any time you feel you want to handle an action in many reducers.

以及作者本人推文也有提到：

> [@tomkisw](https://twitter.com/tomkisw?ref_src=twsrc%5Etfw) The point of having reducers is that actions aren&#39;t coupled to reducers. Otherwise you could just use a single cursor like Om.
> &mdash; Dan Abramov (@dan_abramov) [2016年1月25日](https://twitter.com/dan_abramov/status/691608868628119552?ref_src=twsrc%5Etfw)

---

反之，有不少 pattern/library 試圖把 action 跟 reducer 綁在一起。

[https://github.com/erikras/ducks-modular-redux](https://github.com/erikras/ducks-modular-redux)

這個 ducks pattern 在 Redux 剛開始流行時就出現了，只是把 action 跟 reducer 寫在同一個檔案。

[https://github.com/madetheforcebewithyou/redux-knife-manager](https://github.com/madetheforcebewithyou/redux-knife-manager)

最近在臉書社團看到，台灣人的作品。

    import reduxKnifeManager from 'redux-knife-manager';
    
    // 1. Initialize Redux Knife Manager
    reduxKnifeManager.initialize();
    
    // 2. Add a knife to Redux Knife Manager
    reduxKnifeManager.addKnife('counter', {  
      actionMap: ['increase', 'decrease'],
      reducerMap: ({ increase, decrease }) => ({
        [increase]: (state, action) => ({
          num: state.num + action.value,
        }),
    
        [decrease]: (state, action) => ({
          num: state.num - action.value,
        }),
      }),
      defaultState: {
        num: 0,
      },
    });
    

[https://github.com/rematch/rematch](https://github.com/rematch/rematch)

最新看到，宣稱這是 **Redux best practices** 我就不太能接受了。

    import { init } from '@rematch/core'
    
    // State
    
    const count = {  
      state: 0, // initial state
      reducers: {
        // handle state changes with pure functions
        increment(state, payload) {
          return state + payload
        }
      },
      effects: {
        // handle state changes with impure functions.
        // use async/await for async actions
        async incrementAsync(payload, rootState) {
          await new Promise(resolve => setTimeout(resolve, 1000))
          this.increment(payload)
        }
      }
    }
    
    const store = init({  
      models: {
        count
      }
    })
    

老實說，把 reducer 跟 action 這樣一對一對應， action 就跟一個 object 的 setter 沒什麼兩樣了。何必呢？看一下 MobX 怎麼寫的，這是不是就是你要的？你可以用 [Mobx](https://mobx.js.org/) 就好啦，用 MobX 就不用重新發明輪子囉。

    import {observable, action} from 'mobx';
    
    const ticker = observable({  
        tick: 1,
        increment: action.bound(function() {
            this.tick++ // bound 'this'
        })
    })
    
