//import { useState, useEffect } from "react";

const Home = () => {
  /*const url = "https://api.fuelapi.com/v1/json";
  const token = "daefd14b-9f2b-4968-9e4d-9d4bb4af01d1";

  const response = fetch(url + "/vehicles?api_key=" + token).then((response) => response.json()).then((data) => console.log(data));


/*  const getMakes = async () => {
    const response = await fetch(url + "/makes?api_key=" + token);
    const data = await response.json();
    return data.filter((item) => item.id < 6);
  };


  const getModels = async (make) => {
    const response = await fetch(`${url}/models?makeID=${make.id}&api_key=${token}`);
    const data = await response.json();
    return data.filter((item) => item.id < 50); 
  };

  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const makes = await getMakes(); 

      const modelsData = await Promise.all(
        makes.map(async (make) => {
          const models = await getModels(make); 
          return models.filter((model) => model.id > 0 && model.name !== "Unknown"); 
        })
      );

      setModels(modelsData.flat());
    };
    fetchData()}
    , []); 
*/
  return (
    <div className="container mt-5">
      {/*models.map((model) => (
        <div key={model.id}>
          <h1>{model.name}</h1>
        </div>
      ))*/}
    </div>
  );
};

export default Home;
