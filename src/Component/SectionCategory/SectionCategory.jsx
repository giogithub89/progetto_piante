import "./SectionCategory.css";
//import Button from "../../Component/Button/Button";
import DropDownMenu from "../../Component/DropDownMenu";
import { db } from "../../config/firebase";
import { collection, getDoc, getDocs, doc, documentId } from "firebase/firestore";
import { useState, useEffect } from "react";
import Card from "../../Component/Card/Card";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import CellGridCustom from "../CellGridCustom";
import CustomCard from "../CustomCard";
import { Info } from "@mui/icons-material";
import BoxGrid from "../BoxGrid";

const TextItem = ({ text }) => {
  return (
    <Typography variant="h6" marginRight="10px" sx={{ color: "#ababab" }}>
      {text}
    </Typography>
  );
};

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
  const [popolazione, setPopolazione] = useState();
  const [estensione, setEstensione] = useState();
  const [densità, setDensità] = useState();
  const [per_boschiva, setPerBoschiva] = useState();
  const [luoghi_storici, setLuoghi_storici] = useState([]);
  const [recensioni, setRecensioni] = useState();
  const [luoghi_naturali, setLuoghi_naturali] = useState([]);
  const [fiere, setFiere] = useState([]);
  const [animali, setAnimali] = useState();
  const [vegetali, setVegetali] = useState();

  const navigate = useNavigate();

  const ShowCard = (value) => {
    if (value === "animals") {
      setVisible(animals);
      setCollection("animals");
    } else if (value === "plants") {
      setVisible(plants);
      setCollection("plants");
    } else if (value === "places") {
      setVisible(places);
      setCollection("place");
    } else {
      setVisible("info");
    }
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
        setPopolazione(city.popolazione);
        setDensità(city.densità);
        setEstensione(city.estensione);
        setPerBoschiva(city.perc_boschiva);
        setLuoghi_naturali(city.luoghi_naturali);
        setLuoghi_storici(city.luoghi_storici);
        setRecensioni(city.recensioni);
        setFiere(city.fiere);
        setAnimali(city.animali);
        setVegetali(city.vegetali);

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

  const setIndex = (index) => {
    if (collections === "animals") {
      const itemData = animals[index];
      navigate(`/animals/${index}`, { state: { data: itemData, location: selectedCity } });
    }
    if (collections === "place") {
      const itemData = places[index];
      navigate(`/places/${index}`, { state: { data: itemData, location: selectedCity } });
    }
    if (collections === "plants") {
      const itemData = plants[index];
      navigate(`/plants/${index}`, { state: { data: itemData, location: selectedCity } });
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

  const infoCard = [
    { text: "Popolazione:", desc: popolazione },
    { text: "Densità:", desc: densità },
    { text: "Estensione:", desc: estensione },
    { text: "Percentuale boschiva:", desc: per_boschiva },
    { text: "Luoghi storici:", desc: luoghi_storici },

    { text: "Luoghi naturali: ", desc: luoghi_naturali },

    { text: "Fiere/sagre/feste:", desc: fiere },
    { text: "Specie animali che puoi trovare:", desc: animali },
    { text: "Specie vegetali che puoi trovare:", desc: vegetali },
    // { text: "Recensioni delle persone residenti", desc: habitat },
    // { text: "Recensioni dei visitatori:", desc: habitat },
  ];

  return (
    <>
      <div className="SectionCategory">
        <div className="divSelect">
          <DropDownMenu cities={cities} selectedCity={handleSelectedCity} cityId={handleInputValue} nome={"Città"} />

          <Button
            sx={{ height: "40px" }}
            variant="contained"
            color="success"
            size="medium"
            onClick={() => {
              ShowCard("animals");
            }}>
            CERCA
          </Button>
        </div>
        <span>Categoria:</span>

        <Button variant="text" onClick={() => ShowCard("plants")}>
          FLORA
        </Button>
        <Button variant="text" onClick={() => ShowCard("animals")}>
          FAUNA
        </Button>
        <Button variant="text" onClick={() => ShowCard("places")}>
          LUOGHI
        </Button>
        <Button variant="text" onClick={() => ShowCard("info")}>
          INFO
        </Button>
      </div>
      <div className="SectionCard">
        {/* {message === true ? (
          <Typography>Nessun dato da visualizzare</Typography>
        ) : (
          )} */}
        {visible === "info" ? (
          <BoxGrid rowGap="20px">
            <CellGridCustom gridColumn="span 6">
              <CustomCard flexDirection="column" p="20px" marginX="20px">
                <Box display="flex" alignItems={"center"}>
                  <Info sx={{ marginRight: "10px" }}></Info>
                  <Typography variant="h6" fontWeight="bold">
                    Info
                  </Typography>
                </Box>
                {infoCard.map((item) => (
                  <Box display="flex" p="5px 0" alignItems={"center"}>
                    <TextItem text={item.text} />
                    <Typography>{item.desc}</Typography>
                  </Box>
                ))}
              </CustomCard>
            </CellGridCustom>
            <CellGridCustom gridColumn="span 6">
              <CustomCard flexDirection="column" p="20px" marginX="20px">
                <Box display="flex" alignItems={"center"}>
                  <Info sx={{ marginRight: "10px" }}></Info>
                  <Typography variant="h6" fontWeight="bold">
                    Recensioni
                  </Typography>
                </Box>
              </CustomCard>
            </CellGridCustom>
          </BoxGrid>
        ) : (
          <Card lista={visible} clicca={setIndex}></Card>
        )}
      </div>
    </>
  );
}
export default SectionCategory;
