import Post from "./Post"
import {useState, useEffect} from 'react'

const PostsSection = () => {  
  const [posts, setPosts] = useState([])
  
  // Fetch Api Anfrage zum Backend für den Datensatz des Posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/posts')
        const data = await res.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    fetchPosts();
  }, [])
  
  return (
    <div className='flex flex-col justify-center items-center'>
        {/* Mapping through the Posts */}
        {posts.map(post => (
          <Post
            username={post.author}
            title={post.title}
            date={post.date}
            profile_picture="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            description={post.description}
          />
        ))}
    </div>
  )
}

export default PostsSection