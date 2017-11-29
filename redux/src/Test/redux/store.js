import {createStore} from 'redux'

import reducer from './reducer'
//reduce为处理数据地方法，返回一个新的state

let initState = {
  a: '初始数据',
  b: '初始数据'
}

//使用createStore创建一个store
export default createStore(reducer, initState)
