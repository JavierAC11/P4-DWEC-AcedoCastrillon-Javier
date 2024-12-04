import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Models = () => {
  const { id } = useParams();
  const [models, setModels] = useState([]);
  
// TODO Filtrado por traccion
  const [filteredModels, setFilteredModels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const [filterDoors, setFilteredDoors] = useState("");
  const [filterModel, setFilterModel] = useState('');
 const [filterDrivetrain, setFilterDrivetrain] = useState('')
  const [filterYear, setFilterYear] = useState('');

  const handleFilter = () => {
    let filteredData = models;

    console.log(filterDrivetrain)

    if (filterModel) {
      filteredData = filteredData.filter(model =>
        model.model_name.toLowerCase().includes(filterModel.toLowerCase())
      );
    }

    if (filterDoors) {

      filteredData = filteredData.filter(model =>
        model.num_doors === filterDoors
      );
    }

    if (filterYear) {
      filteredData = filteredData.filter(model =>
        model.year.toString() === filterYear
      );
    }

    if (filterDrivetrain) {
      console.log(filterDrivetrain)
      filteredData = filteredData.filter(model =>
        model.drivetrain === filterDrivetrain
      )
      console.log(filteredData)

    }

    if (!filterModel && !filterDrivetrain && !filterYear && !filterDoors) {
      filteredData = models
    }

    setCurrentPage(1);
    setFilteredModels(filteredData);
  };

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const url = `https://api.fuelapi.com/v1/json/vehicles?make=${id}&api_key=daefd14b-9f2b-4968-9e4d-9d4bb4af01d1`;
        const response = await fetch(url);
        const data = await response.json();
        setModels(data);
        setFilteredModels(data);
      } catch (error) {
        console.log(error);
        setModels([{ model_name: "No hay modelos", trim: "", id: 1 }]);
        setFilteredModels([{ model_name: "No hay modelos", trim: "", id: 1 }]);
      }
    }
    
    ;

    fetchModels();
  }, [id]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentModels = filteredModels.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredModels.length / itemsPerPage);

  return (
    <div className="container mt-5">
      <div className="filter-container">
        <input
          type="text"
          className="form-control"
          placeholder="Modelo"
          value={filterModel}
          onChange={(e) => setFilterModel(e.target.value)}
        />
        <select
          className="form-control"
          value={filterDrivetrain}
          onChange={(e) => setFilterDrivetrain(e.target.value)}
        >
          <option value="">Eje de traccion</option>
              <option value={"RWD"}>
                RWD
              </option>
              <option value={"AWD"}>
                AWD
              </option>
              <option value={"FWD"}>
                FWD
              </option>
              <option value={"4x4"}>
                4x4
              </option>
              <option value={"4x2"}>
                4x2
              </option>
        </select>

        <select
          className="form-control"
          value={filterDoors}
          onChange={(e) => setFilteredDoors(e.target.value)}
        >
          <option value="">Numero de puertas</option>
              <option value={"2"}>
                2
              </option>
              <option value={"3"}>
                3
              </option>
              <option value={"4"}>
                4
              </option>
              <option value={"5"}>
                5
              </option>
              <option value={"6"}>
                6
              </option>
        </select>

        <select
          className="form-control"
          value={filterYear}
          onChange={(e) => setFilterYear(e.target.value)}
        >
          <option value="">Año</option>
          {Array.from({ length: 30 }, (_, index) => {
            const year = new Date().getFullYear() - index;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
        <button
          className="btn btn-primary"
          onClick={handleFilter} 
        >
          Filtrar
        </button>
      </div>

      <h1>Modelos de la Marca {id}</h1>

      <div className="makes-grid">
        {currentModels.map((model) => (
          <div key={model.id} className="make-item">
            <h2>{`${model.model_name} ${model.trim}`}</h2>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span style={{ margin: "0 10px" }}>
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => (!filteredModels || prev + 1 > totalPages ? prev : prev + 1))
          }
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Models;
