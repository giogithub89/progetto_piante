import './InsertNewCard.css'
import DropDownMenu from "../../Component/DropDownMenu";
import { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useHref } from "react-router-dom";


function InsertNewCard() {
    const [title, setTitle] = useState("");
    const [citta, setCitta] = useState("");
    const [tipologia, setTipologia] = useState("");
    const [descrizione, setDescrizione] = useState("");
    const [maps, setMaps] = useState("");

    // let categoria=document.getElementById('categoria').value;
    // let descrizione=document.getElementById('descrizione').value;
    // let url=document.getElementById('url').value;
    // let file=document.getElementById('file').value;

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
                //console.log(data);
                setCities(data);
                //data.map((city, index) => city.name === "Torino" && setAnimals(city.animals));
            } catch (err) {
                console.log(err);
            }
        };
        getCities();
    }, []);

    const [selectedCity, setSelectedCity] = useState();


    const handleSelectedCity = (value) => {
        setSelectedCity(value);
    };
    let category = ["animals", "places", "plants"];



    function submit(e){
        e.preventDefault();
        console.log(title)

    }

    return (
        <>
            <div className="InsertNewCard">

                <form action=""onSubmit={submit}>
                    <DropDownMenu cities={cities} selectedCity={handleSelectedCity} nome={'città'} />
                    <DropDownMenu cities={category} selectedCity={handleSelectedCity} nome={"categoria"} />

                    <label htmlFor='titolo'>titolo</label>
                    <input type='text' id='titolo' name='titolo' onChange={(e) => setTitle(e.target.value)} />

                    <label htmlFor='citta'>nuova città</label>
                    <input type='text' id='citta' name='citta'  onChange={(e) => setCitta(e.target.value)}/>

                    <label htmlFor='tipologia'>tipologia</label>
                    <input type='text' id='tipologia' name='tipologia'  onChange={(e) => setTipologia(e.target.value)} />

                    <label htmlFor='descrizione'>descrizione</label>
                    <textarea id="descrizione" name="descrizione" rows="4" cols="20" onChange={(e) => setDescrizione(e.target.value)}></textarea>

                    <label htmlFor='url'>url maps</label>
                    <input type='url' id='url' name='url' onChange={(e) => setMaps(e.target.value)} />

                    <label htmlFor='file'>immagine</label>
                    <input type='file' id='file' name='file' />

                    <input type="submit" value="invia" />




                </form>
            </div>

        </>
    )
}
export default InsertNewCard;