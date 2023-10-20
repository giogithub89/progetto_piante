import "./Button.css";

function Button({ type, value = "", onClick }) {
  return (
    <>
      <input className="btn" type={type} value={value} onClick={onClick} />
    </>
  );
}
export default Button;
