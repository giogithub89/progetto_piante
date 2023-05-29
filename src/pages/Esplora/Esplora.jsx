import './Esplora.css'
function Esplora() {


    return (
        <>
            <div className="esplora">
                <h1>Welcome to Piemonte</h1>
          

                <div class="search-box">
                    <button class="btn-search"><i class="fa fa-search"></i></button>
                    <input type="text" class="input-search" placeholder="Type to Search..." />
                </div>
            </div>


            <div className='sezioneCategorie'></div>
        </>)
}
export default Esplora;