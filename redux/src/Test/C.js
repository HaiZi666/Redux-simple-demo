import React, {Component} from 'react'
import {connect} from 'react-redux'

class C extends Component {
  render() {
    return (
      <div>
        <div>当前C值：{this.props.c}</div>
      </div>
    )
  }
}
//C只需要监听store,当state发生改变,就重新渲染组件
export default connect(
  (state) => {
    return {
      c: state.a + '/' + state.b
    }
  }
)(C)
