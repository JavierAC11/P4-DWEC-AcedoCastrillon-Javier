import { Link } from "react-router-dom"

const Login = () => {

// Aqui no veo necesario la validacion del formulario ya que el correo que se introduce puede que no este registrado
// ya se mostraria el mensaje de error al ver que el correo no esta registrado o la contraseña es incorrecta

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container mt-5">
          <h2>LogIn</h2>
          <form>


                  <label className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="ejemplo@ejemplo.com"/>
                  
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
