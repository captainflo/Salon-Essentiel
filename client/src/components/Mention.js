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
        <p>
          L'annonceur est l'éditeur de ce site. SoLocal Marketing Services est
          le prestataire technique. Nom ou Raison sociale : Salon L'Essentiel -
          Gradignan Adresse : 98 crs Gén de Gaulle - 33170 Gradignan Adresse
          électronique : salonlessentiel[a]gmail[.]com Téléphone : +33
          0556894881
        </p>
        <p>
          L'hébergement est assuré par SoLocal Marketing Services Adresse :
          Citylights - Tours Pont de Sèvres 204 Rond Point de Sèvres 92100
          Boulogne Billancourt France Capital social : Société anonyme au
          capital de 7 275 000 euros Mentions RCS : B 422 041 426 RCS Nanterre
          Numéro TVA Intracommunautaire : FR 714 422 04 1426 Téléphone :
          33(0)800 000 518 (Service & Appel Gratuit)
        </p>
      </div>
    </div>
  );
}

export default Mention;
