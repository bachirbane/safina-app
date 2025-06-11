// src/components/Footer.jsx
function Footer() {
return (
<footer className="footer p-10 bg-[#002c22] text-neutral-content mt-10 ">
<div>
<span className="footer-title">Safina Voyage</span>
<p>Adresse : Scat-Urbam Dakar Senegal<br />Téléphone : +221 33 827 96 96<br />Email : contact@safina.com</p>
</div>

 <div className="map-container w-full">
    <p>Zawiya-E.O.T</p>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.8232501251886!2d-17.454706285698474!3d14.737014776515079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1729f1a7c4799%3A0xb03c5cbfdb26a3f1!2sScat%20Urbam%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1717580000000!5m2!1sfr!2ssn"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    frameBorder="0"
    className="w-full " 
  ></iframe>
</div>


<div>
<span className="footer-title">Suivez-nous</span>
{/* <a className="link link-hover">Facebook</a>
<a className="link link-hover">Instagram</a> */}
<a  className="link link-hover" 
  href="https://wa.me/+15512835150" 
  target="_blank" 
  rel="noopener noreferrer"
>WhatsApp</a>
</div>
</footer>
)
}

export default Footer
