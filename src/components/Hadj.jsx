import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hadj() {
    const navigate =useNavigate ()
  return (
    
<>
<div className="card bg-base-100 image-full w-96 shadow-sm flex ">
  <figure>
    <img
      src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    {/* <h2 className="card-title">Plerinage</h2> */}
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary"onClick={()=> navigate('/kaaba')}>lire histoir de la kaaba</button>
    </div>
  </div>

  
</div>

    <div className="card bg-base-100 image-full w-90 shadow-sm float-end  ">
        
<figure >
    <img 
      src="https://images.unsplash.com/photo-1627728734379-a5f8c099763e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    {/* <h2 className="card-title">kaaba</h2> */}
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary"onClick={()=> navigate('/kaaba')}> voirHistoire de la kaaba</button>


    </div>
    
</div>

</div>
<div className='card bg-base-100 image-full w-90 shadow-sm m-5 '>
<img src="https://lirp.cdn-website.com/2506b12d/dms3rep/multi/opt/cheikh-ahmed-tidiane-zawiya-1920w.jpeg" alt="" />



</div>





    </>
  )
}

export default Hadj