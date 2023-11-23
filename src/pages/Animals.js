import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CellGridCustom from "../Component/CellGridCustom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CustomCard from "../Component/CustomCard";
import { Info } from "@mui/icons-material";
import SourceIcon from "@mui/icons-material/Source";
import BoxGrid from "../Component/BoxGrid";
import { useLocation } from "react-router-dom";

const TextItem = ({ text }) => {
  return (
    <Typography variant="h6" marginRight="10px" sx={{ color: "#ababab" }}>
      {text}
    </Typography>
  );
};

const Animals = () => {
  const { state } = useLocation();
  const { data, location } = state || {};
  const [alimentazione, setAlimentazione] = useState();
  const [description, setDesc] = useState();
  const [cattività, setCattività] = useState();
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

  useEffect(() => {
    const fetchData = () => {
      const {
        alimentazione,
        description,
        dimensioni,
        durata_vita,
        famiglia,
        genere,
        cattività,
        habitat,
        image,
        name,
        ordine,
        riproduzione,
        sottospecie,
        specie,
      } = data || {};
      setAlimentazione(alimentazione);
      setDesc(description);
      setCattività(cattività);
      setOrdine(ordine);
      setDimensioni(dimensioni);
      setDurataVita(durata_vita);
      setFamiglia(famiglia);
      setGenere(genere);
      setHabitat(habitat);
      setImage(image);
      setName(name);
      setRiproduzione(riproduzione);
      setSottoSpecie(sottospecie);
      setSpecie(specie);
    };
    fetchData();
  }, []);

  const infoCard = [
    { text: "Nome comune:", desc: name },
    { text: "Classe:", desc: "" },
    { text: "Ordine:", desc: ordine },
    { text: "Famiglia:", desc: famiglia },
    { text: "Genere:", desc: genere },
    { text: "Specie:", desc: specie },
    { text: "Sottospecie:", desc: sottospecie },
    { text: "Duarata media vita:", desc: durataVita },
    { text: "Dimensioni - Peso: ", desc: dimensioni },
    { text: "Alimentazione: ", desc: alimentazione },
    { text: "Periodo riproduzione:", desc: riproduzione },
    { text: "Habitat:", desc: habitat },
    { text: "Può vivere in cattività:", desc: cattività === true ? "Si" : "No" },
  ];

  const info2Card = [
    { text: "Stima esemplari:", desc: "200" },
    { text: "Vita solitria:", desc: "no" },
    { text: "Stato di conservazione:", desc: "" },
    { text: "Enti - Associazioni:", desc: "0" },
    { text: "Esperti:", desc: "" },
    { text: "Pagine social:", desc: "" },
    { text: "Comuni in cui si trova:", desc: "" },
    { text: "Come comportarsi in caso di incontro: ", desc: "" },
    { text: "Come posso aiutare questa specie?:", desc: "" },
  ];

  return (
    <Box paddingX={18} paddingY={10}>
      <BoxGrid rowGap="20px">
        <CellGridCustom gridColumn="span 12">
          <Typography variant="h2">{name}</Typography>
        </CellGridCustom>
        <CellGridCustom gridColumn="span 6">
          <img
            src={image}
            alt=""
            height={300}
            width={500}
            //loading="lazy"
          />
          <CustomCard flexDirection="column" p="20px" marginY="30px" marginRight="20px">
            <Box display="flex" alignItems={"center"}>
              <LocationOnIcon sx={{ marginRight: "10px" }}></LocationOnIcon>
              <Typography variant="h6" fontWeight="bold">
                Location
              </Typography>
            </Box>
            <Box display="flex" p="5px 0" alignItems={"center"}>
              <Typography>{location}</Typography>
            </Box>
          </CustomCard>
        </CellGridCustom>

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

        {/* Descrizione */}
        <CellGridCustom gridColumn={"span 12"}>
          <Typography variant="h4" fontWeight="bold" marginBottom="10px">
            Descrizione
          </Typography>
        </CellGridCustom>
        <CellGridCustom gridColumn={"span 12"}>
          <Typography marginBottom="10px">{description}</Typography>
        </CellGridCustom>

        <CellGridCustom gridColumn="span 12">
          <Divider sx={{ m: "10px" }} />
        </CellGridCustom>

        {/* Bottom card */}
        <CellGridCustom gridColumn="span 6">
          <CustomCard flexDirection="column" p="20px" marginY="20px" marginRight="20px">
            <Box display="flex" alignItems={"center"}>
              <Info sx={{ marginRight: "10px" }}></Info>
              <Typography variant="h6" fontWeight="bold">
                Altre info utili
              </Typography>
            </Box>
            {info2Card.map((item) => (
              <Box display="flex" p="5px 0" alignItems={"center"}>
                <TextItem text={item.text} />
                <Typography>{item.desc}</Typography>
              </Box>
            ))}
          </CustomCard>
        </CellGridCustom>

        <CellGridCustom gridColumn="span 6">
          <CustomCard flexDirection="column" p="20px" marginY="20px" marginRight="20px">
            <Box display="flex" alignItems={"center"}>
              <SourceIcon sx={{ marginRight: "10px" }}></SourceIcon>
              <Typography variant="h6" fontWeight="bold">
                Progetti a riguardo
              </Typography>
            </Box>
            <Box display="flex" p="5px 0" alignItems={"center"}>
              <Typography>{"process"}</Typography>
            </Box>
          </CustomCard>
        </CellGridCustom>
      </BoxGrid>
    </Box>
  );
};

export default Animals;
