export const despositMoney=(amount)=>{
    return(dispatch)=>{
         dispatch({
            type:'deposit',
            payload: amount
         })
    }

}


export const withdrawtMoney=(amount)=>{
    return(dispatch)=>{
        dispatch({
           type:'withdraw',
           payload: amount
        })
   }
    
}

