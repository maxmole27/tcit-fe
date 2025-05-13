import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addPost } from '../../store/store'
import { addPost as addPostService } from '../../services/post.service'

import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'

import './post-add.css'

function PostAdd() {
  const toast = useRef(null)
  const [errors, setErrors] = useState([])
  const dispatch = useDispatch()

  const show = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Post Agregado',
      detail: 'El post fue agregado correctamente',
    })
  }

  const onSubmit = async (e) => {
    setErrors([])
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    const formValues = Object.fromEntries(formData.entries())
    if (!formValues.name) {
      setErrors((prev) => [...prev, 'El campo nombre es obligatorio'])
      return
    }
    if (!formValues.description) {
      setErrors((prev) => [...prev, 'El campo descripción es obligatorio'])
      return
    }

    const addRes = await addPostService(formValues)
    if (addRes) {
      console.log('Post agregado correctamente', addRes)
      dispatch(addPost(addRes))
      show()
      form.reset()
      console.log('formValues', formValues)
    } else {
      setErrors((prev) => [...prev, 'Error al agregar el post'])
      return
    }
  }

  return (
    <div className="post-add">
      <h2>Agregar Nuevo Post</h2>
      <form onSubmit={onSubmit}>
        <section className="post-add__form">
          <div className="post-add__inputtitle">
            <InputText placeholder="Ingrese un título" name="name" />
          </div>
          <div className="post-add__inputcontent">
            <InputText
              placeholder="Ingrese una descripción"
              name="description"
            />
          </div>
          <div className="post-add__btn">
            <Button label="Agregar" />
          </div>
        </section>
      </form>
      {errors && errors.length > 0 && (
        <div className="post-add__error-list">
          {errors.map((error, index) => (
            <div key={index} className="post-add__error">
              {error}
            </div>
          ))}
        </div>
      )}
      <Toast ref={toast} />
    </div>
  )
}

export default PostAdd
