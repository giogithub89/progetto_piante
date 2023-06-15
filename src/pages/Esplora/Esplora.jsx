import SectionCategory from "../../Component/SectionCategory";
import "./Esplora.css";
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
      <div className="esplora">
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

        <div class="search-box">
          <button class="btn-search">
            <i class="fa fa-search"></i>
          </button>
          <input type="text" class="input-search" placeholder="Inserisci Città..." />
        </div>
      </div>
      <h2>Scegli la categoria :</h2>

      <SectionCategory />
      <div>
        <label htmlFor="label">Label</label>
        {/* {cities.map((city, index) => (
          <p>{city.name}</p>
        ))} */}
        {animals.map((category, index) => (
          <p>{category.name}</p>
        ))}
      </div>
    </>
  );
}
export default Esplora;
