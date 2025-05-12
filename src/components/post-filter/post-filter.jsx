import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext"

import "./post-filter.css"

function PostFilter() {
  return (
    <div className="post-filter">
      <InputText placeholder="Ingresa un valor para filtrar" />
      <Button label="Buscar" />
    </div>
  );
}

export default PostFilter;
