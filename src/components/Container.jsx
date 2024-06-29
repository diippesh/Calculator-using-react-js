import React from 'react'
import styles from './Container.module.css'
import { MyProvider } from '../context/store'
function Container({ children }) {
    return (
        <MyProvider>
            <div className={styles.container} >
                {children}
            </div>
        </MyProvider>
    )
}

export default Container