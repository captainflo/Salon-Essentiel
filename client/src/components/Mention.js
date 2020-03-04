import React from "react";
import MetaTags from "react-meta-tags";

function Mention() {
  return (
    <div>
      <MetaTags>
        <title>Mentions légales - Salon l'essentiel</title>
        <meta
          name="description"
          content="Retrouvez toutes nos informations sur les mentions légales"
        />
      </MetaTags>
      <div className="container">
        <h1>Mentions légales</h1>
        <div className="mention">
          <p>L'hébergement est assuré par Heroku</p>
          <p>Nom ou Raison sociale : Salon L'Essentiel - Gradignan</p>
          <p>Adresse : 98 crs Gén de Gaulle - 33170 Gradignan </p>
          <p>Adresse électronique : salonlessentiel[a]gmail[.]com </p>
          <p>Téléphone : +33 0556894881</p>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default Mention;
