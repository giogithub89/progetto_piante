import Button from "../../Component/Button/Button";
import DropDownMenu from "../../Component/DropDownMenu";
import "./Esplora.css";
import Search from "../../Component/Search";

import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const getCat = async () => {
      try {
        const results = await getDocs(citiesCollection);
        const data = results.docs.map((doc) => ({ ...doc.data(), id: doc.name }));
        //console.log(data);
        setCities(data);
        data.forEach((city, index) => {
          if (index === 2) {
            console.log(city.animals.mammiferi);
            setAnimals(city.animals.mammiferi);
            setPlaces(city.places);
            setPlaces(city.plants);
            //const mammiferiImages = city.animals.mammiferi.map((animal) => animal.image);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    getCat();
  }, []);

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
            <DropDownMenu cities={cities} />
            <Button type="submit" value="CERCA"></Button>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="label">Label</label>

        {/* {animals.map((category, index) => (
          <p>{category.name}</p>
        ))} */}
      </div>
    </>
  );
}
export default Esplora;
