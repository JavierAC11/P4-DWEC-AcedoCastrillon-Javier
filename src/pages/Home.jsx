import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../config/firebase";

//API Diferente
//RapidAPI Car Database with images

//Mostrar todos lod vehiculos de marca y modelo
//https://api.fuelapi.com/v1/json/vehicles?make=BMW&api_key=daefd14b-9f2b-4968-9e4d-9d4bb4af01d1

//Foto del coche
//https://api.fuelapi.com/v1/json/vehicle/26461?productID=1&productFormatIDs=1,11&shotCode=037&api_key=daefd14b-9f2b-4968-9e4d-9d4bb4af01d1
//
//Esta vista me hista mas 
//shotCode=159

const Home = () => {
  const url = "https://api.fuelapi.com/v1/json";
  const token = "daefd14b-9f2b-4968-9e4d-9d4bb4af01d1";

  const getMakes = async () => {
    getData();

    const response = await fetch(url + "/makes?api_key=" + token);
    const data = await response.json();
    return data;
  };

  const [makes, setMakes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getMakes().then((data) => setMakes(data));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMakes = makes.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(makes.length / itemsPerPage);

  return (
    <div className="container mt-5">
      <h1>Lista de Marcas</h1>
      <div className="makes-grid">

      {currentMakes.map((make) => (
          <div key={make.id} className="make-item">
            <Link to={`/models/${make.name}`}>
              <h2>{make.name}</h2>
            </Link>
          </div>
        ))}

      </div>
      {/* Controles de paginación */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span style={{ margin: "0 10px" }}>Página {currentPage} de {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Home;
