// src/components/Header.jsx
import { Link } from 'react-router-dom'

function Header() {

return (
    
<div className="navbar bg-[#f0fdf4] shadow-md  ">
<div className="flex-1">
<div className="text-xl font-bold text-primary">
Safina Voyage
</div>
</div>
<div className="flex-none">
<ul className="menu menu-horizontal px-1 text-primary ">
<li><Link to="/">Accueil</Link></li>
<li><Link to="/destination">Destination </Link></li>
{/* <li><Link to="/omra">Omra</Link></li> */}
<li><Link to="/hadj">Hadj & Oumra</Link></li>
<li><Link to="/contact">Contact</Link></li>
<li><Link to="/reservation">Reservation</Link></li>
{/* <li><Link to="/histoir du kaaba">Kaaba</Link></li> */}
</ul>
</div>
</div>
)
}

export default Header