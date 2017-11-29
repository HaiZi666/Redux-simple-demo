import React from 'react'

import A from './A'
import B from './B'
import C from './C'

class Box extends React.Component {
  render(){
    return (
      <div>
        <A></A>
        <B></B>
        <C></C>
      </div>
    )
  }
}

export default Box
