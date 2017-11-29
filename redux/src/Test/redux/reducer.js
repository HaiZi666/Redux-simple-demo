export default (state, action) => {
	
  switch(action.type) {
    case 'setA' :
      return {...state, a: action.payload}
    case 'setB' :
      return {...state, b: action.payload}
    default :
      return state
  }
}

//处理dispatch（action）的方法，返回新数据state
