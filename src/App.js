import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import CreatePost from './components/Posts/CreatePost';
import PostList from './components/Posts/PostList';
import TextChange from './components/TextChange';
import './styles/App.css'

export default function App() {
  const [posts1, setPosts1] = useState([
    {id: 1, title: "Javascript", body: "Javascript is a high-level programming language."},
    {id: 2, title: "Python", body: "Python is a high-level programming language."}
  ])
  const [posts2, setPosts2] = useState([
    {id: 1, title: "Assembly", body: "Assembly is a low-level programming language."},
    {id: 2, title: "Fortran", body: "Fortran is a low-level programming language."}
  ])

  const [myPosts, setMyPosts] = useState([])
  const createPost = (newPost) => {
    setMyPosts([...myPosts, newPost])
  }
  const removePost = (posts, setPosts) => {
    const remove = (post) => setPosts(posts.filter(p => p.id !== post.id))
    return remove
  }
  const removePost1 = removePost(posts1, setPosts1)
  const removePost2 = removePost(posts2, setPosts2)
  const removeMyPost = removePost(myPosts, setMyPosts)
  
  return (
    <div className="App">
      <Counter/>
      <ClassCounter/>
      <TextChange/>
      <div className='posts'>
        <PostList posts={posts1} title={"High-level languages"} remove={removePost1}/>
        <PostList posts={posts2} title={"Low-level languages"} remove={removePost2}/>
        <hr/>
      </div>
      <CreatePost posts={myPosts} create={createPost} remove={removeMyPost}/>
    </div>
  )
}