import types from './types';
const reducer = (state,action) => {
  let {payload,type}=action;
  switch (type){
    /*case types.SHOW_POP:
      return Object.assign({},state,{
        bNav:true
      });
      break;
    case types.HIDE_POP:
      return Object.assign({},state,{
        bNav:false
      });
      break;
    case types.SHOW_LOADING:
      return Object.assign({},state,{
        bLoading:true
      });
      break;
    case types.HIDE_LOADING:
      return Object.assign({},state,{
        bLoading:false
      });
      break;*/
    case types.ADD_ITEM:
      return addItem(state,payload);
      break;
    case types.REMOVE_ITEM:
      console.log('REMOVE_ITEM');
      return removeItem(state,payload);
      break;
    case types.REMOVE_ALL:
      return Object.assign({},state,{
        buycar :[]
      });
      break;
    case types.UPDATE_LIST:
      console.log('UPDATE_LIST')
      return Object.assign({},state,{
        list:payload
      });
      break;
    default:
      return state
  }
};

//removeItem
const removeItem=(state,payload)=>{
  state.buycar.forEach((item,index)=>{
    if(item.id==payload){
      state.buycar.splice(index,1);
    }
  });
  // console.log(state.buycar);
  return Object.assign({},state,{
    buycar:[...state.buycar]
  })
};
//addItem
function addItem(state,payload){
  console.log('addItem')
  let find=false;
  state.buycar.forEach((item,index)=>{
    if(payload==item.id){
      find=true;
      item.count++;
    }
  });
  if(!find){
    state.list.forEach((item,index)=>{
      if(item.id==payload){
        state.buycar.push(item);
      }
    });
  }

  return Object.assign({},state,{
    buycar:[...state.buycar]
  })
}

export default reducer;