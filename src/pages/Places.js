import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import BoxGrid from "../Component/BoxGrid";
import CellGridCustom from "../Component/CellGridCustom";
import CustomCard from "../Component/CustomCard";
import { Info } from "@mui/icons-material";
import SourceIcon from "@mui/icons-material/Source";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useLocation } from "react-router-dom";

const TextItem = ({ text }) => {
  return (
    <Typography variant="h6" marginRight="10px" sx={{ color: "#ababab" }}>
      {text}
    </Typography>
  );
};

const Places = () => {
  const { state } = useLocation();
  const { data, location } = state || {};
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [description, setDesc] = useState();
  const [popolazione, setPopolazione] = useState();
  const [estensione, setEstensione] = useState();
  const [densità, setDensità] = useState();
  const [per_boschiva, setPerBoschiva] = useState();
  const [luoghi_storici, setLuoghi_storici] = useState();
  const [recensioni, setRecensioni] = useState();
  const [luoghi_naturali, setLuoghi_naturali] = useState();
  const [fiere, setFiere] = useState();
  const [animali, setAnimali] = useState();
  const [vegetali, setVegetali] = useState();

  useEffect(() => {
    const fetchData = () => {
      const {
        name,
        image,
        description,
        popolazione,
        densità,
        estensione,
        per_boschiva,
        luoghi_naturali,
        luoghi_storici,
        recensioni,
        fiere,
        animali,
        vegetali,
      } = data || {};
      setName(name);
      setImage(image);
      setDesc(description);
      setDensità(densità);
      setPopolazione(popolazione);
      setEstensione(estensione);
      setPerBoschiva(per_boschiva);
      setLuoghi_naturali(luoghi_naturali);
      setLuoghi_storici(luoghi_storici);
      setRecensioni(recensioni);
      setFiere(fiere);
      setAnimali(animali);
      setVegetali(vegetali);
    };
    fetchData();
  });

  const infoCard = [
    { text: "Nome comune:", desc: name },
    { text: "Popolazione:", desc: popolazione },
    { text: "Densità:", desc: densità },
    { text: "Estensione:", desc: estensione },
    { text: "Percentuale boschiva:", desc: per_boschiva },
    { text: "Luoghi storici:", desc: luoghi_storici },

    { text: "Luoghi naturali: ", desc: luoghi_naturali },
    // { text: "Recensioni su luoghi naturali: ", desc: alimentazione },
    { text: "Fiere/sagre/feste:", desc: fiere },
    { text: "Specie animali che puoi trovare:", desc: animali },
    { text: "Specie vegetali che puoi trovare::", desc: vegetali },
    // { text: "Recensioni delle persone residenti", desc: habitat },
    // { text: "Recensioni dei visitatori:", desc: habitat },
  ];

  const info2Card = [{ text: "Recensioni:", desc: recensioni }];

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

export default Places;
