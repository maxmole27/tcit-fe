
import './post-add.css'

function PostAdd() {
  return (
    <div className="post-add">
      <h2>Agregar Nuevo Post</h2>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Contenido"></textarea>
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default PostAdd