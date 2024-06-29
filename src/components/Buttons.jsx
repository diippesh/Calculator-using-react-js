import React from 'react'
import styles from './Buttons.module.css'
import Button from './Button';
function Buttons() {
    const btn = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "=","exp"],
    ];
    return (
        <div className={styles.btnDiv}>
            {
                btn.map((item) =>
                    item.map((subItem) =>
                        <Button item= {subItem} key={subItem}/>
                    )
                )
            }
        </div>
    )
}

export default Buttons