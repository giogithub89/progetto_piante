import "./SectionCategory.css";
import Button from "../../Component/Button/Button";
import DropDownMenu from "../../Component/DropDownMenu";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import Card from "../../Component/Card/Card"
import { useHref } from "react-router-dom";

function SectionCategory({ flora, fauna, luoghi }) {
  //costante display sezione categorie
  // const [display, setDisplay] = useState(["none"]);
  // function setCategory() {
  //   setDisplay("SectionCategory");
  //   console.log({ cities })

  // }
  const [regions, setRegions] = useState([]);
  const [tutto, setTutto] = useState([]);
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
  const [visible, setVisible] = useState();
  function ShowCard1() {
    setVisible(plants)
  }
  function ShowCard2() {
    setVisible(animals)
  }
  function ShowCard3() {
    setVisible(places)
  }
  function ShowAll() {
    setVisible(tutto)

  }


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
        // funzione che mi permette di creare la const tutto
        let tutto = []
        if (city.plants) {
          tutto.push(...city.plants)
        }

        if (city.animals) {
          tutto.push(...city.animals)
        }

        if (city.places) {
          tutto.push(...city.places)

        }

        setTutto(tutto)
      }
      return null;
    });
  }, [selectedCity]);

  const handleSelectedCity = (value) => {
    setSelectedCity(value);
  };


  function downFunction() {
    if (window.innerWidth < 600) {
      window.scroll(0, 2000);

    } else {
      document.body.scrollTop = 1250; // For Safari
      document.documentElement.scrollTop = 1050; // For Chrome, Firefox, IE and Opera
    }


  }
  return (
    <>
      <div className="SectionCategory">

        <div className="divSelect">
          <DropDownMenu cities={cities} selectedCity={handleSelectedCity} nome={'Città'} />
          <a href="#001">  <Button type="submit" value="CERCA" miafunzione={() => { downFunction(); ShowAll() }}></Button></a>
        </div>
        <span>Categoria:</span>
        <li onClick={ShowCard1}>FLORA</li>
        <li onClick={ShowCard2}>FAUNA</li>
        <li onClick={ShowCard3}>LUOGHI</li>
      </div>
      <div className="SectionCard">
        <Card lista={visible}></Card>

      </div>
    </>
  )
}
export default SectionCategory;
