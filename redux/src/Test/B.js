import React, {Component} from 'react'
import {connect} from 'react-redux'

class B extends Component {
  render() {
    return (
      <div>
        <div>当前B值：{this.props.b}</div>
        <button onClick={this.props.setB}>点击设置B</button>
      </div>
    )
  }
}

//B注释与A相同
export default connect(
  (state) => {

    return {
      b: state.b
      
    }
  },

  (dispatch) => {	
    return {
      setB: () => {
        dispatch({
          type: 'setB',
          payload: 'bbbb'
        })
      }
    }
  }
)(B)

