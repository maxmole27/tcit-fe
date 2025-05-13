import { useEffect } from 'react'
import { getPosts } from '../services/post.service'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { setPosts } from '../store/store'

function useGetPosts() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const postList = useSelector((state) => state.post.postList)

  useEffect(() => {
    const retrievePosts = async () => {
      setLoading(true)
      const posts = await getPosts()
      console.log('aaaaaa', posts)
      setLoading(false)
      if (posts) {
        dispatch(setPosts(posts))
      } else {
        console.log('error!')
      }
    }
    retrievePosts()
  }, [dispatch])

  return {
    isLoading: loading,
    posts: postList,
  }
}

export default useGetPosts
