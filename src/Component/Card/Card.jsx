import "./Card.css";
function Card({ lista, clicca }) {
  if (lista) {
    return (
      <>
        {lista.map((element, index) => (
          <div key={index} className="card" onClick={() => clicca(index)}>
            <img src={element.image} alt="" />
            <h3>{element.name}</h3>
          </div>
        ))}
      </>
    );
  }
}
export default Card;
