import React from 'react'
import classes from './MyInput.module.css'

const MyInput = /*React.forwardRef( (props, ref) */ (props) => {
    return (
        <input /*ref={ref}*/ {...props} className={classes.MyInput}>
            
        </input>
    )
}//)

export default MyInput;