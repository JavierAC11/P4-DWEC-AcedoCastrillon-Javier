import { useState } from "react";
import MensajeError from "../components/MensajeError";




const Contact = () => {

  const [error, setError] = useState({
    nombreError: false,
    emailError: false,
    mensajeError: false
  })

  const [contacto, setContacto] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  })
  

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(e.target.value)){
        setContacto({
          ...contacto,
          [e.target.name]: e.target.value
        })
        setError({
          ...error,
          [e.target.name + "Error"]: false
        })
      }
      else{
        setError({
          ...error,
          [e.target.name + "Error"]: true
        })
    }
  }
    else{
    if (e.target.value.trim().length === 0) {
      setError({
        ...error,
        [e.target.name + "Error"]: true
      })
    } else {
      setContacto({
        ...contacto,
        [e.target.name]: e.target.value
      })
      setError({
        ...error,
        [e.target.name + "Error"]: false
      })
    
  }}

  } 
  
    return (
      <div className="container mt-5">
          <h2>Formulario de Contacto</h2>
          <form>
                  <label className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingresa tu nombre" onBlur={handleChange}/> 
                  {error.nombreError && <MensajeError error="El campo de nombre no puede estar vacio"/>}

                  <label className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="ejemplo@ejemplo.com" onBlur={handleChange}/>
                  {error.emailError && <MensajeError error="Debe de ser un email"/>}
                  
                  <label htmlFor="mensaje" className="form-label">Mensaje</label>
                  <textarea className="form-control" id="mensaje" name="mensaje" rows="4" placeholder="Escribe tu mensaje" onBlur={handleChange}></textarea>
                  {error.mensajeError && <MensajeError error="El mensaje es obligatorio"/>}

              <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
      </div>
  );
}


export default Contact
