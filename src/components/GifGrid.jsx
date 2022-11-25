import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category, onClickDelete }) => {

  const { images, isLoading } = useFetchGifs(category);
  const deleteCategory = () => {
    onClickDelete(category);
  }

  return (
    <>
      <div className="row">
        <h3>{ category }</h3>
        <button onClick={ deleteCategory } className="delete-btn">Eliminar</button>
      </div>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      
      <div className="card-grid">
        {
          images.map(img => (
            <GifItem
              key={ img.id }
              { ...img } // Esparcir las propiedades en el componente
            />
          ))
        }
      </div>
    </>
  )
}
