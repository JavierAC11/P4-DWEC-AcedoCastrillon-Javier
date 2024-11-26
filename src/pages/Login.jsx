import { Link } from "react-router-dom"
import MensajeError from "../components/MensajeError"
import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"


const Login = () => {

// Aqui no veo necesario la validacion del formulario ya que el correo que se introduce puede que no este registrado
// ya se mostraria el mensaje de error al ver que el correo no esta registrado o la contraseña es incorrecta

  const { login } = useContext(UserContext)


  const [datos, setDatos] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState({
    emailError: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(datos.email, datos.password)
    login({email: datos.email, password: datos.password})
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
      setDatos({
        ...datos,
        [e.target.name]: e.target.value
      })
    }
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

                  ¿No tienes cuenta? <Link to="/signup">Registrate</Link>

              <p>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Enviar</button>
              </p>
          </form>
      </div>
  )
}

export default Login
