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
          <p>
            L'annonceur est l'éditeur de ce site. SoLocal Marketing Services est
            le prestataire technique.
          </p>
          <p>Nom ou Raison sociale : Salon L'Essentiel - Gradignan</p>
          <p>Adresse : 98 crs Gén de Gaulle - 33170 Gradignan </p>
          <p>Adresse électronique : salonlessentiel[a]gmail[.]com </p>
          <p>Téléphone : +33 0556894881</p>
        </div>
        <br></br>
        <div className="mention">
          <p>L'hébergement est assuré par SoLocal Marketing Services</p>
          <p>
            Adresse : Citylights - Tours Pont de Sèvres 204 Rond Point de Sèvres
          </p>
          <p>204 Rond Point de Sèvres</p>
          <p>92100 Boulogne Billancourt France</p>
          <p>Capital social : Société anonyme au capital de 7 275 000 euros</p>
          <p>Mentions RCS : B 422 041 426 RCS Nanterre</p>
          <p>Numéro TVA Intracommunautaire : FR 714 422 04 1426</p>
          <p>Téléphone : 33(0)800 000 518 (Service & Appel Gratuit)</p>
        </div>
      </div>
    </div>
  );
}

export default Mention;
