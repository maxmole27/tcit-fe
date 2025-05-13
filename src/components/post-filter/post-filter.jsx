import { useSelector, useDispatch } from 'react-redux'
import { setFilterText, setPosts } from '../../store/store'

import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

import './post-filter.css'

function PostFilter() {
  const dispatch = useDispatch()
  const originalPostList = useSelector((state) => state.post.originalPostList)

  const onSearch = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const formValues = Object.fromEntries(formData.entries())
    const filterText = formValues.filterText
    if (!filterText) {
      dispatch(setPosts(originalPostList))
      return
    }

    dispatch(setFilterText(filterText))
  }
  return (
    <form onSubmit={onSearch}>
      <div className="post-filter">
        <InputText
          placeholder="Ingresa un valor para filtrar"
          name="filterText"
        />
        <Button label="Buscar" type="submit" />
      </div>
    </form>
  )
}

export default PostFilter
