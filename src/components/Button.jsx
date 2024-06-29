import React from 'react'
import { useContext } from 'react'
import { myContext } from '../context/store'
function Button({item}) {
    const myCont = useContext(myContext)
    const {addInput} = myCont
  return (
    <button onClick={()=>{addInput(item)}}>{item}</button>
  )
}

export default Button