import SectionCategory from '../../Component/SectionCategory';
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
            <div className="esplora">
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

                <div class="search-box">
                    <button class="btn-search"><i class="fa fa-search"></i></button>
                    <input type="text" class="input-search" placeholder="Inserisci Città..." />
                </div>
            </div>

            <h2>Scegli la categoria :</h2>
            <SectionCategory />
        </>)
}
export default Esplora;