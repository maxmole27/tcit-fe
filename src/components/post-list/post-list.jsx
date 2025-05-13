import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'

import './post-list.css'
import PostDelete from '../post-delete/post-delete'
import { useState } from 'react'

function PostsList({ posts }) {
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [postToDelete, setPostToDelete] = useState(null)

  const deleteTemplate = (post) => {
    return (
      <div>
        <Button
          severity="danger"
          onClick={() => {
            setPostToDelete(post)
            setShowModalDelete(true)
          }}
          label="Eliminar"
        ></Button>
      </div>
    )
  }

  return (
    <div className="post-list">
      <DataTable value={posts} tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Nombre"></Column>
        <Column field="description" header="Descripción"></Column>
        <Column field="actions" header="Acción" body={deleteTemplate}></Column>
      </DataTable>
      <PostDelete
        visible={showModalDelete}
        onHide={() => setShowModalDelete(false)}
        post={postToDelete}
      />
    </div>
  )
}

export default PostsList
