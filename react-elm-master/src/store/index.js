import {createStore, applyMiddleware} from 'redux'
import userReducer from './reducer'
import thunk from 'redux-thunk'
// ，dispatch是同步执行reducers生成新状态的，对于页面的操作没有问题；但是如果点击事件是请求了某个结果，需要等待结果响应后再更新视图呢？应该如何处理？

// 因而redux引入了thunk中间件，对action进行了扩展
// ##thunk中间件解决了什么问题？
// 引入thunk插件后，我们可以在actionCreators内部编写逻辑，处理请求结果。而不只是单纯的返回一个action对象。
let store = createStore(
  userReducer,
  applyMiddleware(thunk)
)

export default store