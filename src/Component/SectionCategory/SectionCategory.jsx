import "./SectionCategory.css";
//import Button from "../../Component/Button/Button";
import DropDownMenu from "../../Component/DropDownMenu";
import { db } from "../../config/firebase";
import { collection, getDoc, getDocs, doc, documentId } from "firebase/firestore";
import { useState, useEffect } from "react";
import Card from "../../Component/Card/Card";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function SectionCategory() {
  const [collections, setCollection] = useState("animals");
  const [docId, setDocId] = useState(null);
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
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  const ShowCard1 = () => {
    setVisible(plants);
    setCollection("plants");
    console.log(collections);
  };
  const ShowCard2 = () => {
    setVisible(animals);
    setCollection("animals");
    console.log(collections);
  };
  const ShowCard3 = () => {
    setVisible(places);
    setCollection("place");
    console.log(collections);
  };

  useEffect(() => {
    const getCities = async () => {
      try {
        const results = await getDocs(citiesCollection);
        const data = results.docs.map((doc) => ({ ...doc.data(), id: doc.name }));

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
      }
      return null;
    });
  }, [selectedCity]);

  const handleSelectedCity = (value) => {
    setSelectedCity(value);
  };

  const handleInputValue = (inputValue) => {
    //console.log(inputValue);
    getDocId(inputValue);
  };

  function downFunction() {
    if (window.innerWidth < 600) {
      window.scroll(0, 2000);
    } else {
      document.body.scrollTop = 1250; // For Safari
      document.documentElement.scrollTop = 1050; // For Chrome, Firefox, IE and Opera
    }
  }

  const setIndex = (index) => {
    if (collections === "animals") {
      const itemData = animals[index];
      navigate(`/product/${index}`, { state: { data: itemData } });
    }
    if (collections === "place") {
      const itemData = places[index];
      navigate(`/places/${index}`, { state: { data: itemData } });
    }
    if (collections === "plants") {
      const itemData = plants[index];
      navigate(`/plants/${index}`, { state: { data: itemData } });
    }
  };

  const getDocId = async (index) => {
    const citiesQuerySnapshot = await getDocs(citiesCollection);

    // Check if there are any documents in the collection
    if (!citiesQuerySnapshot.empty) {
      // Get the first document ID
      const firstCityId = citiesQuerySnapshot.docs[index].id;
      setDocId(firstCityId);
    }
  };

  return (
    <>
      <div className="SectionCategory">
        <div className="divSelect">
          <DropDownMenu cities={cities} selectedCity={handleSelectedCity} cityId={handleInputValue} nome={"Città"} />
          <a href="#001">
            {" "}
            <Button
              type="submit"
              value="CERCA"
              onClick={() => {
                downFunction();
                setVisible(animals);
              }}></Button>
          </a>
        </div>
        <span>Categoria:</span>

        <Button variant="text" onClick={ShowCard1}>
          FLORA
        </Button>
        <li onClick={ShowCard2}>FAUNA</li>
        <li onClick={ShowCard3}>LUOGHI</li>
      </div>
      <div className="SectionCard">
        {/* {message === true ? (
          <Typography>Nessun dato da visualizzare</Typography>
        ) : (
          )} */}
        <Card lista={visible} clicca={setIndex}></Card>
      </div>
    </>
  );
}
export default SectionCategory;
