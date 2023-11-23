import "./InsertNewCard.css";
import DropDownMenu from "../../Component/DropDownMenu";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Box, Checkbox, FormControlLabel } from "@mui/material";
import CellGridCustom from "../CellGridCustom";
import { LoadingButton } from "@mui/lab";
import BoxGrid from "../BoxGrid";
import Header from "../Header";

function InsertNewCard() {
  const [citta, setCitta] = useState("");
  const [category, setSelectedCategory] = useState();
  const [descrizione, setDescrizione] = useState("");
  const [maps, setMaps] = useState("");
  const [alimentazione, setAlimentazione] = useState();
  const [cattività, setCattività] = useState(true);
  const [ordine, setOrdine] = useState();
  const [dimensioni, setDimensioni] = useState();
  const [durataVita, setDurataVita] = useState();
  const [famiglia, setFamiglia] = useState();
  const [genere, setGenere] = useState();
  const [habitat, setHabitat] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [riproduzione, setRiproduzione] = useState();
  const [sottospecie, setSottoSpecie] = useState();
  const [specie, setSpecie] = useState();
  let categoryList = ["animals", "places", "plants"];
  const [varietà, setVarietà] = useState();
  const [commestibile, setCommestibile] = useState();
  const [velenosa, setVelenosa] = useState();
  const [officinale, setOfficinale] = useState();
  const [coltivazione, setColtivazione] = useState();
  const [conservazione, setConservazione] = useState();
  const [selectedCity, setSelectedCity] = useState();
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
    const getCities = async () => {
      try {
        const results = await getDocs(citiesCollection);
        const data = results.docs.map((doc) => ({ ...doc.data(), id: doc.name }));
        setCities(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCities();
  }, []);

  const handleSelectedCity = (value) => {
    setSelectedCity(value);
  };
  const handleSelectedCategory = (value) => {
    setSelectedCategory(value);
  };

  const handleInputValue = (inputValue) => {
    //console.log(inputValue);
  };

  const handleCheckbox = (event) => {
    setCattività(event.target.checked);
  };
  const handleVelenosa = (event) => {
    setVelenosa(event.target.checked);
  };

  function submit(e) {
    e.preventDefault();
    if (category === "animals") {
      const data = {
        name,
        descrizione,
        famiglia,
        ordine,
        genere,
        specie,
        sottospecie,
        riproduzione,
      };
      console.log(data);
    } else if (category === "plants") {
      const data = {
        name,
        descrizione,
        famiglia,
        ordine,
        genere,
        specie,
        sottospecie,
        varietà,
      };
      console.log(data);
    } else {
      const data = {
        name,
        descrizione,
      };
      console.log(data);
    }

    //clearForm();
  }

  const clearForm = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <Box m="20px">
      <Header title={"NUOVO CONTENUTO"} subtitle="Crea un nuovo contenuto" />
      <form onSubmit={submit}>
        <BoxGrid rowGap="30px">
          {/* ROW 1 */}
          <CellGridCustom gridColumn="span 4" width="70%">
            <DropDownMenu cities={cities} selectedCity={handleSelectedCity} nome={"città"} cityId={handleInputValue} />
          </CellGridCustom>
          <CellGridCustom gridColumn="span 4" width="70%">
            <DropDownMenu
              cities={categoryList}
              selectedCity={handleSelectedCategory}
              nome={"categoria"}
              cityId={handleInputValue}
            />
          </CellGridCustom>
          <CellGridCustom gridColumn="span 4" width="70%">
            <label htmlFor="titolo">Nome</label>
            <input type="text" id="titolo" name="titolo" onChange={(e) => setName(e.target.value)} />
          </CellGridCustom>

          {/* ROW 2 */}
          <CellGridCustom gridColumn="span 4" width="70%">
            <label htmlFor="famiglia">Famiglia</label>
            <input type="text" id="famiglia" name="famiglia" onChange={(e) => setFamiglia(e.target.value)} required />
          </CellGridCustom>
          <CellGridCustom gridColumn="span 4" width="70%">
            <label htmlFor="Genere">Genere</label>
            <input type="text" id="Genere" name="Genere" onChange={(e) => setGenere(e.target.value)} required />
          </CellGridCustom>
          <CellGridCustom gridColumn="span 4" width="70%">
            <label htmlFor="ordine">Ordine</label>
            <input type="text" id="ordine" name="ordine" onChange={(e) => setOrdine(e.target.value)} required />
          </CellGridCustom>

          {/* ROW 3 */}
          <CellGridCustom gridColumn="span 12" width="70%">
            <label htmlFor="descrizione">Descrizione</label>
            <textarea
              id="descrizione"
              name="descrizione"
              rows="4"
              cols="20"
              onChange={(e) => setDescrizione(e.target.value)}></textarea>
          </CellGridCustom>

          {/* ROW 4 */}
          <CellGridCustom gridColumn="span 4" width="70%">
            <label htmlFor="specie">Specie</label>
            <input type="text" id="specie" name="specie" onChange={(e) => setSpecie(e.target.value)} required />
          </CellGridCustom>
          <CellGridCustom gridColumn="span 4" width="70%">
            <label htmlFor="sottospecie">Sottospecie</label>
            <input
              type="text"
              id="sottospecie"
              name="sottospecie"
              onChange={(e) => setSottoSpecie(e.target.value)}
              required
            />
          </CellGridCustom>
          {category === "animals" && (
            <CellGridCustom gridColumn="span 4" width="70%">
              <label htmlFor="riproduzione">Riproduzione</label>
              <input
                type="text"
                id="riproduzione"
                name="riproduzione"
                onChange={(e) => setRiproduzione(e.target.value)}
                required
              />
            </CellGridCustom>
          )}
          {category === "plants" && (
            <CellGridCustom gridColumn="span 4" width="70%">
              <label htmlFor="varietà">Varietà</label>
              <input type="text" id="varietà" name="varietà" onChange={(e) => setVarietà(e.target.value)} required />
            </CellGridCustom>
          )}

          {/* ROW 5 */}
          <CellGridCustom gridColumn="span 9" width="70%">
            <label htmlFor="file">immagine</label>
            <input type="file" id="file" name="file" />
          </CellGridCustom>
          {category === "animals" && (
            <CellGridCustom gridColumn="span 2" width="90%" alignItems="center" justifyContent="center">
              <FormControlLabel
                control={<Checkbox onChange={handleCheckbox} checked={cattività} />}
                label="Cattività?"
              />
            </CellGridCustom>
          )}
          {category === "plants" && (
            <CellGridCustom gridColumn="span 2" width="90%" alignItems="center" justifyContent="center">
              <FormControlLabel control={<Checkbox onChange={handleVelenosa} checked={velenosa} />} label="Velenosa?" />
            </CellGridCustom>
          )}

          {/* ROW 6 */}
          <CellGridCustom gridColumn="span 4" width="70%">
            <label htmlFor="alimentazione">Alimentazione</label>
            <input
              type="text"
              id="alimentazione"
              name="alimentazione"
              onChange={(e) => setAlimentazione(e.target.value)}
              required
            />
          </CellGridCustom>
          <CellGridCustom gridColumn="span 4" width="70%">
            <label htmlFor="dimensioni">Dimensioni</label>
            <input
              type="text"
              id="dimensioni"
              name="dimensioni"
              onChange={(e) => setDimensioni(e.target.value)}
              required
            />
          </CellGridCustom>
          {category === "animals" && (
            <CellGridCustom gridColumn="span 4" width="70%">
              <label htmlFor="durata_vita">Durata Vita</label>
              <input
                type="text"
                id="durata_vita"
                name="durata_vita"
                onChange={(e) => setDurataVita(e.target.value)}
                required
              />
            </CellGridCustom>
          )}
          {category === "plants" && (
            <CellGridCustom gridColumn="span 4" width="70%">
              <label htmlFor="commestibile">Commestibile</label>
              <input
                type="text"
                id="commestibile"
                name="commestibile"
                onChange={(e) => setCommestibile(e.target.value)}
                required
              />
            </CellGridCustom>
          )}
        </BoxGrid>

        {/* <label htmlFor="citta">nuova città</label>
        <input type="text" id="citta" name="citta" onChange={(e) => setCitta(e.target.value)} />

        <label htmlFor="url">url maps</label>
        <input type="url" id="url" name="url" onChange={(e) => setMaps(e.target.value)} /> */}

        {/* ROW 7 */}
        <Box gridColumn="span 10"></Box>
        <Box gridColumn="span 2" display="flex" alignItems="center" justifyContent="center" marginTop="20px">
          <LoadingButton
            //loading={loading}
            variant="contained"
            color="success"
            type="submit"
            sx={{ borderRadius: 2 }}>
            Pubblica
          </LoadingButton>
        </Box>
      </form>
    </Box>
  );
}
export default InsertNewCard;
