
import {InputText} from 'primereact/inputtext'

import './post-add.css'
import { Button } from 'primereact/button'

function PostAdd() {
  return (
    <div className="post-add">
      <h2>Agregar Nuevo Post</h2>
      <form>
        <section className='post-add__form'>
          <div className='post-add__inputtitle'>
            <InputText placeholder="Ingrese un título" />
          </div>
          <div className='post-add__inputcontent'>
            <InputText placeholder="Ingrese una descripción" />
          </div>
          <div className='post-add__btn'>
            <Button label="Agregar" />
          </div>
        </section>
      </form>
    </div>
  )
}

export default PostAdd