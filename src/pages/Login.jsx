import { Link } from "react-router-dom"
import MensajeError from "../components/MensajeError"
import { useState } from "react"

const Login = () => {

// Aqui no veo necesario la validacion del formulario ya que el correo que se introduce puede que no este registrado
// ya se mostraria el mensaje de error al ver que el correo no esta registrado o la contraseña es incorrecta


  const [login, setLogin] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState({
    emailError: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailRegex.test(e.target.value)){
        setLogin({
          ...login,
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
}


  return (
    <div className="container mt-5">
          <h2>LogIn</h2>
          <form>


                  <label className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="ejemplo@ejemplo.com" onBlur={handleChange}/>
                  {error.emailError && <MensajeError error="Debe de ser un email"/>}  

                  
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="password" name="password" rows="4" placeholder="Introduce tu contraseña"/>

                  ¿No tienes cuenta? <Link to="/signup">Registrate</Link>

              <p>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Enviar</button>
              </p>
          </form>
      </div>
  )
}

export default Login
