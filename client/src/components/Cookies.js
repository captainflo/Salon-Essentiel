import React from "react";
import MetaTags from "react-meta-tags";

function Cookies() {
  return (
    <div>
      <MetaTags>
        <title>Notre politique de cookies - Salon l'essentiel</title>
        <meta
          name="description"
          content="Retrouvez toutes les informations concernant notre politique de cookies"
        />
        <meta
          property="og:title"
          content="Notre politique de cookies -  Salon l'essentiel"
        />
        <meta
          property="og:image"
          content={
            process.env.PUBLIC_URL + "/images/salon-essentiel--logo-black.png"
          }
        />
      </MetaTags>
      <div className="container">
        <h1>A quoi servent nos cookies ?</h1>
        <h2 style={{ fontSize: "40px" }}>
          Cookies strictement nécessaires à l'utilisation du service demandé
        </h2>
        <p>
          Ils permettent l’utilisation des principales fonctionnalités du site,
          comme le cas échéant l’accès à votre compte personnel, ou encore de
          mémoriser les préférences d'affichage de votre terminal (langue,
          paramètres d'affichage) et d'en tenir compte lors de vos visites,
          selon la charte graphique et les logiciels de visualisation ou de
          lecture de votre terminal. Ils nous permettent aussi de lier entre
          elles les différentes pages consultées pour vous assurer une
          navigation fluide ou encore d’afficher des cartes interactives.
        </p>
        <h4>Pour paramétrer :</h4>
        <p>
          Vous pouvez désactiver complètement les cookies dans votre navigateur.
          Dans ce cas notre site ne fonctionnera plus normalement mais vous
          pourrez quand même effectuer des actions basiques.
        </p>
        <h6>1/ si vous utilisez le navigateur Internet Explorer</h6>
        <p>
          - Dans Internet Explorer, cliquez sur le bouton « Outils », puis sur «
          Options Internet ».
        </p>
        <p>
          - Sous l’onglet Confidentialité déplacez le curseur vers le haut pour
          bloquer tous les cookies ou vers le bas pour autoriser tous les
          cookies, puis cliquez sur OK
        </p>
        <h6>2/ si vous utilisez le navigateur Firefox</h6>
        <p>
          - Allez dans le menu « Outils » du navigateur puis sélectionnez le
          menu « Options »
        </p>
        <p>
          - Cliquez sur l’onglet « vie privée », décochez la case « Accepter les
          cookies » puis cliquez sur OK.
        </p>
        <h6>3/ si vous utilisez le navigateur Safari</h6>
        <p>
          - Dans votre navigateur, choisissez le menu « Édition » puis
          sélectionnez « Préférences ».
        </p>
        <p>- Cliquez sur « Confidentialité ».</p>
        <p>
          - Positionner le réglage « Bloquer les cookies » sur « Toujours » puis
          cliquez sur OK.
        </p>
        <h6>4/ si vous utilisez le navigateur Google Chrome</h6>
        <p>
          - Cliquez sur le menu Chrome dans la barre d'outils du navigateur.
        </p>
        <p>- Sélectionnez « Paramètres ».</p>
        <p>- Cliquez sur « Afficher les paramètres avancés ».</p>
        <p>
          - Dans la section « Confidentialité », cliquez sur le bouton «
          Paramètres de contenu ».
        </p>
        <p>
          - Dans la section « Cookies », sélectionner « Interdire à tous les
          sites de stocker des données » et cochez la case « Bloquer les cookies
          et les données de site tiers », puis cliquez sur OK.
        </p>
        <h4>COOKIES DE MESURE D’AUDIENCE ET DE STATISTIQUES</h4>
        <p>
          Ils nous permettent de faire vivre le site et d’établir des
          statistiques et comptages de fréquentation et d'utilisation de ses
          rubriques et contenus, pour réaliser des études afin d’améliorer le
          contenu (mesure du nombre de visites, de pages vues ou encore de
          l'activité des visiteurs sur le site et de leur fréquence de retour).
          Ils nous permettent également d’analyser la navigation des internautes
          afin d’améliorer notre service ou de détecter des dysfonctionnements.
        </p>
        <h4>LES COOKIES TIERS</h4>
        <p>
          Lorsque vous accédez à notre site, un ou plusieurs cookies de sociétés
          partenaires (« cookies tiers ») sont susceptibles d’être placés dans
          votre terminal. Nous veillons à ce que les sociétés partenaires
          acceptent de traiter les informations collectées sur nos sites dans le
          respect de la réglementation applicable et s’engagent à mettre en
          œuvre des mesures appropriées de sécurisation et de protection de la
          confidentialité des données.
        </p>
        <h4>COOKIES LIÉS À LA VIDÉO</h4>
        <p>
          Pour le visionnage de vidéos, nous proposons sur ce site un lecteur
          dont l’utilisation entraîne le dépôt de cookies nécessaires à son bon
          fonctionnement.
        </p>
        <h4>COOKIES SOCIAUX</h4>
        <p>
          Nous sommes susceptibles d'inclure une application informatique tierce
          dans certaines des fonctionnalités de notre site, permettant le
          partage de contenus par les utilisateurs de notre site, tels que les
          boutons « Partager » ou « J'aime » de Facebook, ou les boutons «
          Twitter », « LinkedIn », etc. Le réseau social fournissant
          l’application est susceptible de vous identifier grâce à ses propres
          cookies, même si vous n’avez pas utilisé ses boutons lors de votre
          consultation de notre site, du seul fait que vous soyez connecté à
          votre compte utilisateur sur votre terminal auprès du réseau social
          concerné.
        </p>
        <h4>COOKIES PUBLICITAIRES DE SOCIÉTÉS PARTENAIRES</h4>
        <p>
          Ces cookies tiers ont pour finalité d’identifier vos centres d’intérêt
          au travers des produits consultés sur notre site et de collecter des
          données de navigation afin de personnaliser l’offre publicitaire qui
          vous est adressée en dehors de nos sites. Ils sont susceptibles d’être
          placés dans votre terminal, afin d’identifier vos centres d’intérêt au
          travers des produits consultés sur notre site et de collecter des
          données de navigation afin de personnaliser l’offre publicitaire qui
          vous est adressée sur et en dehors de nos sites.
        </p>
        <p>
          Vous pouvez vous opposer à l’usage de vos données de navigation par
          les partenaires suivants :
        </p>
        <ul>
          <li>
            <a
              href="https://frontend.adhslx.com/privacy.html?"
              rel="noopener noreferrer"
              target="_blank"
            >
              Digital to Store
            </a>{" "}
          </li>
          <li>
            <a
              href="https://www.appnexus.com/fr/corporate-privacy-policy#choices"
              rel="noopener noreferrer"
              target="_blank"
            >
              AppNexus
            </a>
          </li>
          <li>
            <a
              href="https://sites.nielsen.com/legal/privacy-statement/exelate-privacy-policy/opt-in-opt-out/"
              rel="noopener noreferrer"
              target="_blank"
            >
              EXelate
            </a>
          </li>
          <li>
            <a
              href="https://adavisator.net/optout.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Adadvisor
            </a>
          </li>
          <li>
            <a
              href="https://www.pagesjaunes.fr/infoslegales/vieprivee/navigation"
              rel="noopener noreferrer"
              target="_blank"
            >
              Xaxis
            </a>
          </li>
          <li>
            <a
              href="http://www.aggregateknowledge.com/privacy/ak-optout/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Aggregate Knowledge
            </a>{" "}
          </li>
          <li>
            <a
              href="https://www.adsrvr.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              The Trade Desk
            </a>{" "}
          </li>
          <li>
            <a
              href="https://site.adform.com/privacy-center/overview"
              rel="noopener noreferrer"
              target="_blank"
            >
              Adform
            </a>
          </li>
        </ul>
        <p>
          Vous pouvez également vous opposer à tous les cookies tiers depuis
          votre navigateur :
        </p>
        <h6>1/ si vous utilisez le navigateur Internet Explorer</h6>
        <p>
          - Dans Internet Explorer, cliquez sur le bouton « Outils », puis sur «
          Options Internet ».
        </p>
        <p>
          - Sous l’onglet Confidentialité, sous Cookies, activez l’option
          Bloquer tous les cookies tiers, puis cliquez sur OK.
        </p>
        <h6>2/ si vous utilisez le navigateur Firefox</h6>
        <p>
          - Allez dans le menu « Outils » du navigateur puis sélectionnez «
          Options »
        </p>
        <p>
          - Cliquez sur l’onglet « vie privée », passez le paramètre « Accepter
          les cookies tiers » à « jamais », puis cliquez sur OK.
        </p>
        <h6>3/ si vous utilisez le navigateur Safari</h6>
        <p>
          - Dans votre navigateur, choisissez le menu « Édition » puis
          sélectionnez « Préférences ».
        </p>
        <p>- Cliquez sur « Confidentialité ».</p>
        <p>
          - Positionner le réglage « Bloquer les cookies » sur « Des tierces
          parties et des annonceurs » puis cliquez sur OK.
        </p>
        <h6>4/ si vous utilisez le navigateur Google Chrome</h6>
        <p>
          - Cliquez sur le menu Chrome dans la barre d'outils du navigateur.
        </p>
        <p>- Sélectionnez « Paramètres ».</p>
        <p>- Cliquez sur « Afficher les paramètres avancés ».</p>
        <p>
          - Dans la section « Confidentialité », cliquez sur le bouton «
          Paramètres de contenu ».
        </p>
        <p>
          - Dans la section « Cookies », cochez la case « Bloquer les cookies et
          les données de site tiers », puis cliquez sur OK.
        </p>
        <br></br>
        <p>
          La CNIL propose par ailleurs sur son site à l’adresse
          http://www.cnil.fr/vos-droits/vos-traces/les-cookies/conseils-aux-internautes
          un large panel d’outils permettant de limiter la traçabilité de votre
          navigation sur Internet : extensions pour votre navigateur permettant
          de bloquer les traceurs, les boutons de partage sur les réseaux
          sociaux, le chargement de ressources en provenance d’autres sites…
        </p>
      </div>
    </div>
  );
}

export default Cookies;
