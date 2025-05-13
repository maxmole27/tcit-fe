import { useSelector } from 'react-redux'

import Header from '../components/header/header'
import PostsList from '../components/post-list/post-list'
import PostFilter from '../components/post-filter/post-filter'
import PostAdd from '../components/post-add/post-add'
import useGetPosts from '../hooks/useGetPosts'

function PostManager() {
  useGetPosts()

  const posts = useSelector((state) => state.post.postList)
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <h1>Administrador de Posts</h1>
          <div>
            <PostFilter />
          </div>
          <div>
            <PostsList posts={posts} />
          </div>
          <div>
            <PostAdd />
          </div>
        </div>
      </main>
    </>
  )
}

export default PostManager
