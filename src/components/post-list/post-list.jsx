
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import './post-list.css'

function PostsList({ posts }) {
  return (
    <div className="post-list">
        <DataTable value={posts} tableStyle={{ minWidth: '50rem' }}>
            <Column field="name" header="Nombre"></Column>
            <Column field="description" header="Descripción"></Column>
            <Column field="actions" header="Acción"></Column>
        </DataTable>
    </div>
  )
}

export default PostsList