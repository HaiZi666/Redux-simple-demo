import React, {Component} from 'react'
import {connect} from 'react-redux'

class A extends Component {
  render() {
    return (
      <div>
        <div>当前A值：{this.props.a}</div>
        <button onClick={this.props.setA}>点击设置A</button>
      </div>
    )
  }
}

//使用connect()方法将展示组件与容器组件相连接,通过传入参数,获取store里面地state,
//挂载到子组件地props上面,再通过传入参数,调用dispatch()发出action（去修改数据地愿望)

export default connect(
  (state) => {
    return {
      a: state.a
    }
  },
// 将state的数据映射到展示组件的this.props,会订阅store，state更新后，就会触发展示组件重绘 
// 不过在connect( )函数中，我们可以省略mapStateToProps 
// 如果这么做的话，store更新就不会触发展示组件重绘了

  (dispatch) => {
    return {
      setA: () => {
        dispatch({
          type: 'setA',
          payload: 'aaaa'
        })
      }
    }
//  定义发送action的函数映射到展示组件的this.props,
  }
)(A)



