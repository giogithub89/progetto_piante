import SectionCategory from '../../Component/SectionCategory';
import './Esplora.css'
function Esplora() {


    return (
        <>
            <div className="esplora">
                <h1  className='lineUp'>Welcome to Piemonte</h1>
                
                <h4>
                    Inserisci il nome della città per
                    scoprire le bellezze architettoniche, la natura e gli animali che la popolano.</h4>

                <div class="search-box">
                    <button class="btn-search"><i class="fa fa-search"></i></button>
                    <input type="text" class="input-search" placeholder="Inserisci Città..." />
                </div>
            </div>


            <SectionCategory />
        </>)
}
export default Esplora;