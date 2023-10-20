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

const Plants = () => {
  const { state } = useLocation();
  const { data } = state || {};

  const [description, setDesc] = useState();
  const [varietà, setVarietà] = useState();
  const [ordine, setOrdine] = useState();
  const [specie, setSpecie] = useState();
  const [dimensioni, setDimensioni] = useState();
  const [durataVita, setDurataVita] = useState();
  const [famiglia, setFamiglia] = useState();
  const [genere, setGenere] = useState();
  const [habitat, setHabitat] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [commestibile, setCommestibile] = useState();
  const [velenosa, setVelenosa] = useState();
  const [officinale, setOfficinale] = useState();
  const [coltivazione, setColtivazione] = useState();
  const [conservazione, setConservazione] = useState();

  useEffect(() => {
    const fetchData = () => {
      const {
        varietà,
        description,
        dimensioni,
        durata_vita,
        famiglia,
        genere,
        commestibile,
        habitat,
        image,
        name,
        ordine,
        velenosa,
        officinale,
        coltivazione,
        conservazione,
        specie,
      } = data || {};
      setVarietà(varietà);
      setDesc(description);
      setCommestibile(commestibile);
      setOrdine(ordine);
      setDimensioni(dimensioni);
      setDurataVita(durata_vita);
      setFamiglia(famiglia);
      setGenere(genere);
      setHabitat(habitat);
      setImage(image);
      setName(name);
      setVelenosa(velenosa);
      setCommestibile(commestibile);
      setSpecie(specie);
      setOfficinale(officinale);
      setColtivazione(coltivazione);
      setConservazione(conservazione);
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

    { text: "Duarata vita media:", desc: durataVita },
    { text: "Dimensioni - Peso: ", desc: dimensioni },
    { text: "Coltivazione: ", desc: coltivazione },
    { text: "Habitat:", desc: habitat },
    { text: "Può vivere in cattività:", desc: commestibile === true ? "Si" : "No" },
  ];

  const info2Card = [
    { text: "Varietà:", desc: varietà },
    { text: "Vita solitria:", desc: velenosa },
    { text: "Stato di conservazione:", desc: officinale },
    { text: "Enti - Associazioni:", desc: "0" },
    { text: "Come posso aiutare la Conservazione:", desc: conservazione },
    { text: "Pagine social:", desc: "" },
    // { text: "Comuni in cui si trova:", desc: "" },
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
              <Typography>{""}</Typography>
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

export default Plants;
