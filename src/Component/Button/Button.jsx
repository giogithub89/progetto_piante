import './Button.css'
function Button({ type, value = "", miafunzione }) {


    return (<>
        <input className="btn" type={type} value={value} onClick={miafunzione} />

    </>)
}
export default Button;