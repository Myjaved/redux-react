import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'

function Shop() {
  const dispatch=useDispatch()
  const actions=bindActionCreators(actionCreators,dispatch)
  return (
    <>    
    <h2>Deposit / Withdraw Money</h2>
    <button className="btn btn-primary my-3 mx-3" onClick={()=>  {actions.withdrawtMoney(500)}}>-</button>
    Update Balance

    <button className="btn btn-primary mx-3" onClick={()=>  {actions.despositMoney(500)}}>+</button>
</>
  )
}

export default Shop