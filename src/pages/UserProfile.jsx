import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { getFavorites } from "../config/firebase";
import { useState } from "react";
import { removeFavourite } from "../config/firebase";

const UserProfile = () => {
  // Accediendo tanto al usuario como a los favoritos del contexto
  const { user } = useContext(UserContext);

  const [favoritos, setFavoritos ] = useState()

  useEffect(() => {
    getFavorites(user.id).then((data) => {
      setFavoritos(data)
    }
    );
  }, [favoritos])

  const handleRemoveFavorite = (car) => {
    console.log("Eliminando favorito:", car);
    removeFavourite(user.id, car);
    setFavoritos()
  };


  if (favoritos){
  favoritos.cars.map((car) => 
  console.log(car))
  }


  return (
    <div className="user-profile">
      {/* Información del Usuario */}
      <h1>{user.nombre}</h1>
      <h3>{user.correo}</h3>
      <h3>{user.telefono}</h3>

      {/* Lista de Favoritos */}
      <div >
        <h2>Mis Favoritos</h2>
        

        {favoritos ? (
        <div className="makes-grid">
          {favoritos.cars.map((car, index) => (
            <div key={index} className="make-item">
              <h2>{car.model_name} {car.trim}</h2>
              <p><strong>Año:</strong> {car.year}</p>
              <p><strong>Tracción:</strong> {car.drivetrain}</p>
              <p><strong>Puertas:</strong> {car.num_doors}</p>
              <button
              onClick={() => handleRemoveFavorite(car)}>Eliminar</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No tienes favoritos aún.</p>
      )}
      </div>
      </div>
    
  );
};

export default UserProfile;
