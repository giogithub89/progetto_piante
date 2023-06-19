import "./Card.css";
function Card({ lista, clicca }) {
  return (
    <>
      {lista.map((element, index) => (
        <div key={index} className="card" onClick={clicca}>
          <img src={element.url} alt="" />
          <h3>{element.titolo}</h3>
        </div>
      ))}
    </>
  );
}
export default Card;
