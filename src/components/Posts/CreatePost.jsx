import React, {useRef, useState} from 'react'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'
import PostList from './PostList'
import classes from './CreatePost.module.css'

export default function CreatePost({posts, create, remove}) {

    /*
    const [title, setTitle] = useState('') 
    const [body, setBody] = useState('')
    */
    //const inputRef = useRef() // not recommended
    const [post, setPost] = useState({title: '', body: ''}) 
    const addNewPost = (e) => {
        e.preventDefault()
        /*const newPost = {
            id: Date.now(),
            title,
            body
        }*/
        create({ id:Date.now(), ...post})
        setPost({title: '', body: ''})
        /*setTitle('')
        setBody('')*/
    }

    return (
        <div>
            <MyInput 
                value={post.title} 
                onChange = {e => setPost({...post, title: e.target.value})} 
                type="text" 
                placeholder="Post name"
            />
            <MyInput
                //ref = {inputRef}
                value={post.body}
                onChange = {e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder="Post description"
            />
            <MyButton onClick={addNewPost}>Create post</MyButton>
            {
            posts.length !== 0
                ? <PostList posts={posts} title="My posts" remove={remove}/>
                : <h1 className={classes.noPosts}>No posts yet!</h1>
            }
            <hr/>
        </div>
    )
}
