// src/pages/Home.jsx


import { useNavigate } from 'react-router-dom'

function Home() {

    const  navigate = useNavigate ()
return (
   

<>
<section className="text-center py-16 px-4 ">
<h1 className="text-4xl font-bold text-primary mb-6">Bienvenue chez Safina Voyage</h1>
<p className="text-lg mb-8 font-bold">Voyagez vers toutes les destinations,  Hajj Omra et Fez avec confiance et sérénité.</p>
<div className="flex flex-col md:flex-row gap-4 justify-center">
    
<button className="btn btn-accent "onClick={() => navigate ('/destination')}>Destination</button>
{/* <button className="btn btn-secondary"onClick={()=> navigate ('/kaaba')}>Omra</button> */}
<button className="btn btn-accent"onClick={()=> navigate('/hadj')}>Hadj & Oumra</button>
</div>
</section>
     <h3 className="text-center">Suivre en direct</h3>
 <div className="flex justify-center ">

  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/KBTOLMOYMFA?autoplay=1&mute=1"
    title="video youtube"
    
    allow="autoplay; encrypted-media"
    allowFullScreen
    className="rounded-lg shadow-lg m-3"
  ></iframe>
</div>

  </>
)
}

export default Home