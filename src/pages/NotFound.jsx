import { Link, useRouteError } from "react-router-dom"

const NotFound = () => {
  
    const error = useRouteError()
  

    return (
    <div>
        <h1>{error.status}</h1>
        <h2>{error.statusText}</h2>
      <p>
      <Link to={"/"}>Volver al menu</Link>
      </p>
      
      
    </div>
  )
}

export default NotFound