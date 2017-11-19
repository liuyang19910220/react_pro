import types from './types';
export const asyncAction=(dispatch,url,type,isMounted)=>{
  fetch(url).then((res)=>{
    if(res.ok){
      res.json().then((data)=>{
        setTimeout(()=>{
          dispatch({type:types.HIDE_LOADING});
          if(!isMounted) return;
          dispatch({type:type,payload:data})
        },2000);
      })
    }
  }).catch(()=>{
    console.log('compoennt data load error')
  });
  return {type:types.SHOW_LOADING};
};

//
//


