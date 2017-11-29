import React from 'react'
import ReactDOM from 'react-dom'

import store from './Test/redux/store'
//引入store
import Box from './Test/Box'

import {Provider} from 'react-redux'
//我们在根组件外部嵌套一层Provider，传入store 
//（使用全局的store有风险） 
//这样所以的子组件都可以开心地拿到state了 

ReactDOM.render(
  <Provider store={store}>
    <Box />
  </Provider>,
  document.getElementById('root')
)
