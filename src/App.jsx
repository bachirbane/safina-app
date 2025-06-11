// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Destination from './components/Destination'
import Reservation from './components/Reservation'
import Hadj from './components/Hadj'
import Kaaba from './components/Kaaba'

function App() {
return (

 <>
 {/* <div className='bg-[#008236]'> */}
<div className="bg-[#016630]">
<Header />


<Routes>
<Route path="/" element={<Home />} />
<Route path="/destination" element={ <Destination />} />
<Route path="/reservation" element ={<Reservation />} />
<Route path="/hadj" element ={<Hadj />} />
<Route path="/kaaba" element ={<Kaaba />} />

{/* Autres routes à ajouter plus tard */}
</Routes>
</div>
<Footer />

</>
)
}

export default App