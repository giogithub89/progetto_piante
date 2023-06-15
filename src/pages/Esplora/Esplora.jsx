import Button from '../../Component/Button/Button'
import DropDownMenu from '../../Component/DropDownMenu'
import './Esplora.css'
function Esplora() {
    const style = { "--i": 1, }
    const style2 = { "--i": 2, }
    const style3 = { "--i": 3, }
    const style4 = { "--i": 4, }
    const style5 = { "--i": 5, }
    const style6 = { "--i": 6, }
    const style7 = { "--i": 7, }
    const style8 = { "--i": 8, }



    return (
        <>
            <div className="esplora flx">
                <div>
                    <h1>Welcome to </h1>
                    <div className='waviy'>
                        <h1 style={style}>P</h1>
                        <h1 style={style2}>i</h1>
                        <h1 style={style3}>e</h1>
                        <h1 style={style4}>m</h1>
                        <h1 style={style5}>o</h1>
                        <h1 style={style6}>n</h1>
                        <h1 style={style7}>t</h1>
                        <h1 style={style8}>e</h1>
                    </div></div>


                <h4>
                    Inserisci il nome della città per
                    scoprire le bellezze architettoniche, la natura e gli animali che la popolano.</h4>

                <div className="search-box">
                    <button className="btn-search"><i className="fa fa-search"></i></button>
                    <input type="text" className="input-search" placeholder="Inserisci Città..." />
                </div>
            </div>
            <h2 className='p'>"Insieme, possiamo preservare la bellezza della natura e proteggere la preziosa fauna che la abita, garantendo così un futuro sostenibile per tutte le creature che condividono il nostro pianeta."</h2>
            <div className="sectionCartina flx">
                <div className="cartina">
                </div>

                <div className="formCitta flx">
                    <div className="step">
                        <h3> Step 1 : Seleziona una città </h3>
                        <h3> Step 2 : Seleziona una categoria</h3>
                        <h3>Step 3 : Seleziona la card e visualizza le sue informazioni</h3>
                    </div>
                    <div className='divSelect'>
                        <DropDownMenu />
                        <Button type="submit" value='CERCA'></Button>

                    </div>
                </div>
            </div >


        </>)
}
export default Esplora;