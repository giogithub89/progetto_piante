import Button from "../../Component/Button/Button";
import DropDownMenu from "../../Component/DropDownMenu";
import "./Esplora.css";
import Search from "../../Component/Search";

import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Avatar, Box } from "@mui/material";

function Esplora() {
  const style = { "--i": 1 };
  const style2 = { "--i": 2 };
  const style3 = { "--i": 3 };
  const style4 = { "--i": 4 };
  const style5 = { "--i": 5 };
  const style6 = { "--i": 6 };
  const style7 = { "--i": 7 };
  const style8 = { "--i": 8 };

  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [places, setPlaces] = useState([]);
  const [plants, setPlants] = useState([]);
  const regionsCollection = collection(db, "regions");
  const provincesCollection = collection(db, "provinces");
  const citiesCollection = collection(
    db,
    "regions",
    "HxI7dbXbKmCgdYeKy8TG",
    "provinces",
    "Qsxn8HKOl9BFxJfICl6x",
    "cities"
  );
  const [selectedCity, setSelectedCity] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const getCities = async () => {
      try {
        const results = await getDocs(citiesCollection);
        const data = results.docs.map((doc) => ({ ...doc.data(), id: doc.name }));
        //console.log(data);
        setCities(data);
        //data.map((city, index) => city.name === "Torino" && setAnimals(city.animals));
      } catch (err) {
        console.log(err);
      }
    };
    getCities();
  }, []);

  useEffect(() => {
    cities.map((city, index) => {
      if (city.name === selectedCity) {
        setAnimals(city.animals);
        setPlaces(city.places);
        setPlants(city.plants);
        //mostra le 3 card delle categorie
        setVisible(true);
      }
      return null;
    });
  }, [selectedCity]);

  const handleSelectedCity = (value) => {
    setSelectedCity(value);
  };

  return (
    <>
      <div className="esplora flx">
        <div>
          <h1>Welcome to </h1>
          <div className="waviy">
            <h1 style={style}>P</h1>
            <h1 style={style2}>i</h1>
            <h1 style={style3}>e</h1>
            <h1 style={style4}>m</h1>
            <h1 style={style5}>o</h1>
            <h1 style={style6}>n</h1>
            <h1 style={style7}>t</h1>
            <h1 style={style8}>e</h1>
          </div>
        </div>

        <h4>
          Inserisci il nome della città per scoprire le bellezze architettoniche, la natura e gli animali che la
          popolano.
        </h4>

        <Search></Search>
      </div>
      <h3 className="p">
        "Insieme, possiamo preservare la bellezza della natura e proteggere la preziosa fauna che la abita, garantendo
        così un futuro sostenibile per tutte le creature che condividono il nostro pianeta."
      </h3>
      <div className="sectionCartina flx">
        <div className="cartina"></div>

        <div className="formCitta flx">
          <div className="step">
            <h3> Step 1 : Seleziona una città </h3>
            <h3> Step 2 : Seleziona una categoria</h3>
            <h3>Step 3 : Seleziona la card e visualizza le sue informazioni</h3>
          </div>
          <div className="divSelect">
            <DropDownMenu cities={cities} selectedCity={handleSelectedCity} />
            <Button type="submit" value="CERCA"></Button>
          </div>
        </div>
      </div>

      {/* {visible === true && <Cards/>} */}

      <div>
        <label htmlFor="label">Label</label>

        {animals.map((item, index) => (
          <>
            <p>{item.name}</p>
            <Box width="70px" height="70px" s>
              <Avatar key={index} src={item.image} alt="eee" sx={{ width: "70px", height: "70px" }} />
            </Box>
          </>
        ))}
      </div>
    </>
  );
}
export default Esplora;
