import React from 'react'
import styles from './Input.module.css'
import { useContext } from 'react'
import { myContext } from '../context/store'
function Input() {
    const {eq} = useContext(myContext)
    
  return (
    <input type="text" readOnly value={eq} className={styles.myInput}  />
  )
}

export default Input