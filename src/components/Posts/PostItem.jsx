import React from 'react'
import MyButton from '../UI/button/MyButton'

export default function PostItem (props){
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div> {props.post.body} </div>
            </div>
            <div onClick={() => props.remove(props.post)} className='post__btns'>
                    <MyButton>Delete</MyButton>
            </div>
        </div>
    )
}