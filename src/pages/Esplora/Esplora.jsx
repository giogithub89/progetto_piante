import "./Esplora.css";
import Search from "../../Component/Search";

// import { Avatar, Box, Card } from "@mui/material";
import SectionCategory from "../../Component/SectionCategory/SectionCategory";

function Esplora() {
  const style = { "--i": 1 };
  const style2 = { "--i": 2 };
  const style3 = { "--i": 3 };
  const style4 = { "--i": 4 };
  const style5 = { "--i": 5 };
  const style6 = { "--i": 6 };
  const style7 = { "--i": 7 };
  const style8 = { "--i": 8 };


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
        <div>
          <p>Benvenuti nella splendida regione del Piemonte! Situata nel nord-ovest dell'Italia, il Piemonte è un luogo ricco di storia, cultura,
            paesaggi mozzafiato e prelibatezze culinarie. Siamo lieti di invitarvi a scoprire le meraviglie di questa regione unica.
            Il Piemonte è noto per la sua capitale, Torino, una città che unisce tradizione e innovazione. Torino è famosa per essere stata la sede della casa automobilistica Fiat e per il suo legame con l'industria automobilistica italiana. Qui potrete visitare il Museo dell'Automobile, un vero paradiso per gli appassionati di motori. Inoltre, Torino è anche una
            città ricca di storia e cultura, con maestosi palazzi, musei e una vibrante scena artistica.
            Ma il Piemonte offre molto di più! La regione è circondata da imponenti catene montuose, tra cui le maestose Alpi. Queste montagne
            offrono scenari spettacolari e numerose opportunità per gli amanti degli sport all'aria aperta. Potrete praticare escursioni, sciare
            sulle piste perfettamente innevate o semplicemente godervi la bellezza della natura intorno a voi.
            Infine, il Piemonte è anche ricco di storia e cultura. Numerosi castelli, palazzi e siti archeologici testimoniano il passato
            glorioso della regione. Potrete visitare luoghi affascinanti come la Reggia di Venaria, un'imponente residenza reale,
            o il Sacro Monte di Varallo, un complesso di cappelle che rappresentano la Via Crucis.
            Siamo certi che il Piemonte saprà conquistarvi con la sua bellezza, la sua ospitalità e la sua
            autenticità. Che siate interessati a storia, cultura, enogastronomia o avventure all'aria aperta, questa regione avrà qualcosa di speciale da offrirvi. Venite a scoprire il Piemonte e lasciatevi incantare da tutto ciò che ha da offrire. Vi aspettiamo a braccia aperte!</p>
        </div>
      </div>
      <div className="istruzioni">
        <h3>Step 1 : Seleziona una città</h3><span>*</span>
        <h3>Step 2 : Seleziona una categoria</h3><span>*</span>
        <h3>Step 3 : Seleziona la card e visualizza le sue informazioni</h3>
      </div>
      <SectionCategory></SectionCategory>




      {/* {visible === true && <Cards/>} */}

      {/* <div>
        <label htmlFor="label">Label</label>

        {animals.map((item, index) => (
          <>
            <p>{item.name}</p>
            <Box width="70px" height="70px" s>
              <Avatar key={index} src={item.image} alt="eee" sx={{ width: "70px", height: "70px" }} />
            </Box>
          </>
        ))}
      </div> */}
    </>
  );
}
export default Esplora;
