// src/pages/Billets.jsx

function Reservation() {
return (
    <div className="bg-[#8BF56E]">
    <div className="max-w-xl mx-auto py-10 px-4  ">
<h2 className="text-3xl font-bold text-center text-primary mb-6 m-10">
Réserver un billet d'avion
</h2>

<form
action="https://formsubmit.co/banebachir596@gmail.com" // 🔁 Remplace par ton email
method="POST"
className="space-y-4 bg-[#d8efe5] p-6 rounded-box shadow-md"
>
{/* Réglages FormSubmit */}
<input type="hidden" name="_next" value="http://localhost:5173/hadj" />
{/* <input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_template" value="table" /> */}

{/* Identité */}
<input
type="text"
name="Nom "
placeholder="Nom "
className="input input-bordered w-full"
required
/>
<input
type="text"
name="prenom"
placeholder="Nom prenom"
className="input input-bordered w-full"
required
/>
<input
type="tel"
name="Numero Telephon "
placeholder="Numero Telephon"
className="input input-bordered w-full"
required
/>

<input
type="text"
name="Numéro de passeport"
placeholder="Numéro de passeport"
className="input input-bordered w-full"
required
/>


{/* Informations de voyage */}
<input
type="text"
name="Ville de départ"
placeholder="Ville de départ"
className="input input-bordered w-full"
required
/>
<input
type="text"
name="Ville d’arrivée"
placeholder="Ville d’arrivée"
className="input input-bordered w-full"
required
/>
<input
type="date"
name="Date de départ"
className="input input-bordered w-full"
required
/>
<input
type="date"
name="Date de retour"
className="input input-bordered w-full"
/>
<input
type="number"
placeholder="Nombre de passagers"
name="Nombre de passagers"
min="1"
className="input input-bordered w-full"
required
/>
<input
type="email"
name="Email du client"
placeholder="Votre email"
className="input input-bordered w-full"
required
/>

{/* Message libre */}
<textarea
name="Message"
placeholder="Hadj,Omra,fez ou Autre"
className="textarea textarea-bordered w-full"
></textarea>

{/* Bouton d'envoi */}
<button type="submit" className="btn btn-[#d8efe5] block mx-auto">
Envoyer la réservation
</button>
</form>
</div>
</div>
);

}

export default Reservation;
