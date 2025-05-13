const base = import.meta.env.VITE_API_BASE_URL

export const getPosts = async () => {
  const res = await fetch(`${base}/posts`)
  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }
  return res.json()
}

export const addPost = async (post) => {
  const res = await fetch(`${base}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
  if (!res.ok) {
    throw new Error('Error al agregar!')
  }
  return res.json()
}

export const deletePost = async (id) => {
  const res = await fetch(`${base}/posts/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) {
    throw new Error('Error al eliminar!')
  }
  return res.json()
}
