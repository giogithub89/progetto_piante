import './Search.css'
function Search() {
    return (
    <>
        <div className="search-box">
            <button className="btn-search"><i className="fa fa-search"></i></button>
            <input type="text" className="input-search" placeholder="Inserisci Città..."/>
        </div>
    </>

    )
}
export default Search;