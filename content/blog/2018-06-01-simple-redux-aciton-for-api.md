---
title: 輕鬆寫存取 api 的 Redux action
slug: simple-redux-aciton-for-api
date: 2018-05-31T14:20:50.781Z
date_updated: 2018-06-01T04:05:02.665Z
---

在初學使用 Redux 的疑惑中，一個是不知道要怎麼處理 async 的情形，尤其是 api call 的 action。要寫很多 code 是一個（所謂 boilerplate），是另外一個。

這個可能跟 Redux 官方的教學有關。例如 Redux 官方的 「[real word example](https://github.com/reduxjs/redux/tree/master/examples/real-world)」裡面的 action.js 就有很多對 api call 相關的 code。

    export const USER_REQUEST = 'USER_REQUEST'  
    export const USER_SUCCESS = 'USER_SUCCESS'  
    export const USER_FAILURE = 'USER_FAILURE'
    
    // Fetches a single user from Github API.
    // Relies on the custom API middleware defined in ../middleware/api.js.
    const fetchUser = login => ({  
      [CALL_API]: {
        types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ],
        endpoint: `users/${login}`,
        schema: Schemas.USER
      }
    })
    
    export const REPO_REQUEST = 'REPO_REQUEST'  
    export const REPO_SUCCESS = 'REPO_SUCCESS'  
    export const REPO_FAILURE = 'REPO_FAILURE'
    
    // Fetches a single repository from Github API.
    // Relies on the custom API middleware defined in ../middleware/api.js.
    const fetchRepo = fullName => ({  
      [CALL_API]: {
        types: [ REPO_REQUEST, REPO_SUCCESS, REPO_FAILURE ],
        endpoint: `repos/${fullName}`,
        schema: Schemas.REPO
      }
    })
    
    export const STARRED_REQUEST = 'STARRED_REQUEST'  
    export const STARRED_SUCCESS = 'STARRED_SUCCESS'  
    export const STARRED_FAILURE = 'STARRED_FAILURE'
    
    // Fetches a page of starred repos by a particular user.
    // Relies on the custom API middleware defined in ../middleware/api.js.
    const fetchStarred = (login, nextPageUrl) => ({  
      login,
      [CALL_API]: {
        types: [ STARRED_REQUEST, STARRED_SUCCESS, STARRED_FAILURE ],
        endpoint: nextPageUrl,
        schema: Schemas.REPO_ARRAY
      }
    })
    
    export const STARGAZERS_REQUEST = 'STARGAZERS_REQUEST'  
    export const STARGAZERS_SUCCESS = 'STARGAZERS_SUCCESS'  
    export const STARGAZERS_FAILURE = 'STARGAZERS_FAILURE'
    
    // Fetches a page of stargazers for a particular repo.
    // Relies on the custom API middleware defined in ../middleware/api.js.
    const fetchStargazers = (fullName, nextPageUrl) => ({  
      fullName,
      [CALL_API]: {
        types: [ STARGAZERS_REQUEST, STARGAZERS_SUCCESS, STARGAZERS_FAILURE ],
        endpoint: nextPageUrl,
        schema: Schemas.USER_ARRAY
      }
    })
    

明明都是一樣的 3 個 state（REQUEST、SUCCESS、FAILURE），為什麼要一直重複呢？一個真正 production 的產品，可能有幾十個API要call啊。更何況這個 example 用了 middleware 讓 reducer 只要寫一個，如果是遇到像我這樣傻傻的人，reducer 也跟著各寫一個，這真是會寫到厭世啊。

所以該怎麼辦呢？為什麼不把 api 要取用的資源（resource） 的名稱也當作參數之一呢，這樣需要的 action type 就只需要 3 個了。

    export const FETCH_START = "fetch start";  
    export const FETCH_SUCCESS = "fetch success";  
    export const FETCH_ERROR = "fetch error";  
    

然後 action creator 這邊接受 resource 名稱，跟實際要發的 request 為參數。 

    export const fetchData = (resource, request) => dispatch => {  
      dispatch({
        type: FETCH_START,
        resource: resource,
      });
      request().then(res => {
        dispatch({
          type: FETCH_SUCCESS,
          response: res,
          resource: resource,
        });
      });
      // error 處理就些跳過了
    };
    

這樣我們就可以針對 `FETCH_SUCCESS` 寫 reducer，把 api 拉回來的資源放到該放的地方。

    import { FETCH_SUCCESS } from "actions";
    
    const resourceState = {  
      user: {},
      posts: [],
    };
    
    function resourceReducer(state = resourceState, action) {  
      const { resource, response, type } = action;
      switch (type) {
        case FETCH_SUCCESS:
          if (response.data && response.data.id) {
            return {
              ...state,
              [resource]: {
                ...state[resource],
                [response.data.id]: response.data,
              },
            };
          } else {
            return { ...state, [resource]: response.data };
          }
    
        default:
          return state;
      }
    }
    export {resourceReducer}
    

還可以利用 `FETCH_START` 跟 `FETCH_SUCCESS` 對 loading 的 state 做 reducer。

    import { FETCH_START, FETCH_SUCCESS } from "actions";
    
    const resourceState = {  
      user: 0,
      posts: 0,
    };
    
    function stateReducer(state = resourceState, action) {  
      const { resource, type } = action;
      switch (type) {
        case FETCH_START:
          return {
            ...state,
            [resource]: state[resource] + 1,
          };
    
        case FETCH_SUCCESS:
          return {
            ...state,
            [resource]: state[resource] - 1,
          };
    
        default:
          return state;
      }
    }
    
    export {stateReducer};  
    

這是一個要送進 action 的 request 的範例。

    export const getPost = id => () => {  
      return fetch(`${BASE}/post/${id}`, {
        headers: {
          "content-type": "application/json",
        },
      }).then(res => res.json()).then(res => {
        // 因為每個api回來的資料可能需要清理一下，所以才一個api寫一隻function。
        return res;
      });
    };
    

ＯＫ，最後組合起來使用的方式如下。

    import { fetchData } from "actions";  
    import { getPost, getUser, getWhatever } from "service/post";
    
    dispatch(fetchData("deals", getPost(id));  
    dispatch(fetchData("user", getUser());  
    dispatch(fetchData("whatever", getWhatever(wtf));
    

這樣是不是就少很多code了，三個 api call 就該寫三行就好啦。而且這個寫法不用寫 middleware，應該好入門許多。如果要改進的話，可以把 redux-thunk 換成 redux-saga/redux-observable。還有，reducer 那邊也可以做 data 的 normalize。

我想大部分的開發者應該都很快的去用厲害的 middleware 像是 [redux-api-middleware](https://github.com/agraboso/redux-api-middleware) 來解決這種問題了。但是你一開始還不想導入太多 library 時，可以試試這個寫法。

---

> 感謝你認真的讀完這篇文章，你的支持會是我持續寫作的動力
> 
> 如果你喜歡這篇文章，請幫我拍拍手
