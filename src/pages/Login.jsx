import { Link } from "react-router-dom"
import MensajeError from "../components/MensajeError"
import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import Swal from 'sweetalert2'
import { loginFirebase } from "../config/firebase"


const Login = () => {

  const { login } = useContext(UserContext)


  const [datos, setDatos] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState({
    emailError: false,
    passwordError: false
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    login({email: datos.email, password: datos.password})
    try {
      await loginFirebase({email: datos.email, password: datos.password})
      
    }
    catch(error){
      if (error.code === "auth/invalid-credential"){
        showError("La contraseña o el correo es incorrecto")
      }
      else{
        showError(error.message)
      }
      
    }
  }

  // Prueba1*

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(e.target.value)){
        setDatos({
          ...datos,
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
    else if (e.target.name === "password") {
      if (e.target.value === ""){
        setError({
          ...error,
          [e.target.name + "Error"]: true
        })
      }
      else{
        setError({
          ...error,
          [e.target.name + "Error"]: false
        })
      setDatos({
        ...datos,
        [e.target.name]: e.target.value
      })
    }
}
}

const showError = (mensaje) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: mensaje,
    confirmButtonText: "Aceptar"
  });
}



  return (
    <div className="container mt-5">
          <h2>LogIn</h2>
          <form>


                  <label className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="ejemplo@ejemplo.com" onBlur={handleChange}/>
                  {error.emailError && <MensajeError error="Debe de ser un email"/>}  

                  
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" name="password" rows="4" placeholder="Introduce tu contraseña" onBlur={handleChange}/>
                  {error.passwordError && <MensajeError error="La contraseña no puede estar vacia"/>}  

                  ¿No tienes cuenta? <Link to="/signup">Registrate</Link>

              <p>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Enviar</button>
              </p>
          </form>
      </div>
  )
}

export default Login
