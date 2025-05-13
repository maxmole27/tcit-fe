import { useRef } from 'react'

import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'

import { deletePost } from '../../services/post.service'
import { useDispatch } from 'react-redux'
import { deleteFromPosts } from '../../store/store'

import './post-delete.css'

function PostDelete({ visible, onHide, post }) {
  const dispatch = useDispatch()
  const toast = useRef(null)

  const show = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Post Eliminado',
      detail: 'El post fue eliminado correctamente',
    })
  }

  const deleteAction = async () => {
    onHide()
    const deleteRes = await deletePost(post?.id ?? -1)
    if (deleteRes) {
      dispatch(deleteFromPosts(post?.id ?? -1))
      show()
    } else {
      alert('Error al eliminar el post')
    }
  }

  return (
    <>
      <Dialog
        header={'Confirmar Eliminación'}
        visible={visible}
        onHide={onHide}
      >
        <p>¿Está seguro que desea eliminar el post?</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button severity="danger" label="Eliminar" onClick={deleteAction} />
        </div>
      </Dialog>
      <Toast ref={toast} />
    </>
  )
}

export default PostDelete
