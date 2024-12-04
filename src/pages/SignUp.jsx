import { useState } from "react"
import MensajeError from "../components/MensajeError"
import Swal from 'sweetalert2'
import { addElement, loginFirebase, registro } from "../config/firebase"

const SignUp = () => {

  const [error, setError] = useState({
    nombreError: false,
    emailError: false,
    numeroError: false,
    fechaError: false,
    passwordError: false,
    terminosError: false
  })

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    numero: "",
    fecha: "",
    password: "",
    terminos: false
  })

  const handleChange = (e) => {
    e.preventDefault()
    console.log("Tab")
    if(e.target.type === "checkbox"){
      if(e.target.checked === false){
        setError({
          ...error,
          terminosError: true
        })
        setForm({
          ...form,
          terminos: false
        })
      }
      else{
        setError({
          ...error,
          terminosError: false
        })
        setForm({
          ...form,
          terminos: true
        })
      }
  }
  else if(e.target.name === "edad"){
    const fecha = new Date(e.target.value)
    const fechaActual = new Date()
    console.log(fecha)
    const edad = (fechaActual - fecha) / (1000 * 60 * 60 * 24 * 365.25);
    if(edad < 18 || isNaN(edad)){
      setError({
        ...error,
        fechaError: true
      })
      setForm({
        ...form,
        fecha: e.target.value
      })
    }
    else{
      setError({
        ...error,
        fechaError: false
      })
      setForm({
        ...form,
        fecha: e.target.value
      })
    }
  }
  else if(e.target.value === ""){
    setError({
      ...error,
      [e.target.name + "Error"]: true
    })
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  else if(e.target.name === "email"){
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (regexEmail.test(e.target.value)) {
      setError({
        ...error,
        emailError: false
      })
      setForm({
        ...form,
        email: e.target.value
      })
    }else{
      setError({
        ...error,
        emailError: true
      })
      setForm({
        ...form,
        email: e.target.value
      })
    }
  }
  else if(e.target.name === "numero"){
    const regexNumero = /^[0-9]{9}$/
    if (regexNumero.test(e.target.value)) {
      setError({
        ...error,
        numeroError: false
      })
      setForm({
        ...form,
        numero: e.target.value
      })
    }else{
      setError({
        ...error,
        numeroError: true
      })
      setForm({
        ...form,
        numero: e.target.value
      })
    }
  }
  else if(e.target.name === "password"){
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regexPassword.test(e.target.value)){
      setError({
        ...error,
        passwordError: false
      })
      setForm({
        ...form,
        password: e.target.value
      })
    }
    else{ 
      setError({
        ...error,
        passwordError: true
      })
      setForm({
        ...form,
        password: e.target.value
      })
    }
  }
  else{
    setError({
      ...error,
      [e.target.name + "Error"]: false
    })
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
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


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(form.nombre === "" || form.email === "" || form.numero === "" || form.fecha === "" || form.password === "" || form.terminos === false){
      showError("Todos los campos son obligatorios")
    }
    else{
      try {
        await registro({email: form.email, password: form.password})
        const user = await loginFirebase({email: form.email, password: form.password})
        addElement({nombre: form.nombre, correo: form.email, telefono: form.numero}, user.user.uid)
        setForm({
          nombre: "",
          email: "",
          numero: "",
          fecha: "",
          password: "",
          terminos: false
        })
        setError({
          nombreError: false,
          emailError: false,
          numeroError: false,
          fechaError: false,
          passwordError: false,
          terminosError: false
        })
        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("numero").value = "";
        document.getElementById("edad").value = "";
        document.getElementById("password").value = "";
        document.getElementById("terminos").checked = false;
      }
      catch(error){
        if(error.code === "auth/email-already-in-use"){
          showError("El correo ya esta en uso")
        }
        else{
          showError(error.message)
        }
        
      }
      
    }
}

  return (
    <div className="container mt-5">
          <h2>Sing Up</h2>
          <form>
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingresa tu nombre" onBlur={handleChange}/> 
                {error.nombreError && <MensajeError error="El campo de nombre no puede estar vacio"/>}

                <label className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="ejemplo@ejemplo.com" onBlur={handleChange}/>
                {error.emailError && <MensajeError error="Debe de ser un email"/>}

                <label className="form-label">Número</label>
                <input type="number" className="form-control" id="numero" name="numero" placeholder="123456789" onBlur={handleChange}/>
                {error.numeroError && <MensajeError error="Debe de ser un numero valido"/>}

                <label htmlFor="edad" className="form-label">Fecha de nacimiento</label>
                <input type="date" className="form-control" id="edad" name="edad" rows="4" onBlur={handleChange}/>
                {error.fechaError && <MensajeError error="Debes de ser mayor de edad"/>}

                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" name="password" rows="4" placeholder="Introduce tu contraseña" onBlur={handleChange}/>
                {error.passwordError && <MensajeError error="La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula, un número y un caracter especial."/>}
                

                <label className="form-check-label">
                <input className="form-check-input" type="checkbox" id="terminos" name="terminos" required onBlur={handleChange}/>
                Acepto los <a href="#" target="_blank">términos y condiciones</a>
                </label>
                {error.terminosError && <MensajeError error="Tienes que aceptar los terminos"/>}

                <p>
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Enviar</button>
              </p>
          </form>
      </div>
  )
}

export default SignUp