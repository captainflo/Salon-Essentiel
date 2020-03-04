import React from "react";
import { Slider, Caption, Slide } from "react-materialize";
import MetaTags from "react-meta-tags";

function Tarif() {
  return (
    <div>
      <MetaTags>
        <title>Tarif coiffeur dans notre salon de coiffeur l'essentiel</title>
        <meta
          name="description"
          content="Retrouvez l'ensemble des prestations et surtout les tarifs pratiqués dans votre salon de coiffure, le Salon l'Essentiel, situé à Gradignan."
        />
        <meta
          property="og:title"
          content="Tarif coiffeur dans notre salon de coiffeur l'essentiel"
        />
        <meta
          property="og:image"
          content={
            process.env.PUBLIC_URL + "/images/salon-essentiel--logo-black.png"
          }
        />
      </MetaTags>
      <div style={{ height: "auto !important" }}>
        <Slider style={{ height: "auto !important" }}>
          <Slide
            image={
              <img
                src={process.env.PUBLIC_URL + "/images/salon-essentiel4.jpg"}
                alt="background"
                className="responsive-img"
              />
            }
          >
            <Caption placement="right">
              <h1>Tarifs de notre salon de coiffure à Gradignan</h1>
              <h5 className="light grey-text text-lighten-3 back-none">
                Originalité, qualité et convivialité
                <br /> sont au rendez-vous
              </h5>
            </Caption>
          </Slide>
        </Slider>
      </div>
      <div className="container">
        <h2 className="font-title">Prestations de coiffure à la carte</h2>
        <div className="row">
          <div className="col m12 s12">
            <table>
              <thead>
                <tr>
                  <th>
                    <b>Forfait au féminin</b>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Shampoing / Coupe / Brushing / Mise en plis</td>
                  <td />
                  <td className="right">36 €</td>
                </tr>
                <tr>
                  <td>Shampoing / Coiffage (cheveux courts)</td>
                  <td />
                  <td className="right">19.50 €</td>
                </tr>
                <tr>
                  <td>Shampoing / Coupe / Coiffage (cheveux longs)</td>
                  <td />
                  <td className="right">40 €</td>
                </tr>
                <tr>
                  <td>Shampoing / Coiffage (cheveux longs)</td>
                  <td />
                  <td className="right">25 €</td>
                </tr>
                <tr>
                  <td>Chicas (selon âge)</td>
                  <td />
                  <td className="right long-td">10 / 17 / 22 / 25 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col m12 s12">
            <table>
              <thead>
                <tr>
                  <th>
                    <b>Les soins des cheveux</b>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Masque</td>
                  <td />
                  <td className="right">10 €</td>
                </tr>
                <tr>
                  <td>Soins profonds</td>
                  <td />
                  <td className="right">15 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col m12 s12">
            <table>
              <thead>
                <tr>
                  <th>
                    <b>Couleurs</b>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Vernis : effet gloss, apport brillance</td>
                  <td />
                  <td className="right">26 €</td>
                </tr>
                <tr>
                  <td>Couleurs</td>
                  <td />
                  <td className="right">26 €</td>
                </tr>
                <tr>
                  <td>Refresher : redonnez de l'éclat à votre couleur</td>
                  <td />
                  <td className="right long-td">33,50 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col m12 s12">
            <table>
              <thead>
                <tr>
                  <th>
                    <b>Les mèches et balayages</b>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Flash</td>
                  <td />
                  <td className="right">27 €</td>
                </tr>
                <tr>
                  <td>Demi-tête</td>
                  <td />
                  <td className="right">32 €</td>
                </tr>
                <tr>
                  <td>Tête entière</td>
                  <td />
                  <td className="right">42 €</td>
                </tr>
                <tr>
                  <td>Cheveux longs</td>
                  <td />
                  <td className="right">58 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col m12 s12">
            <table>
              <thead>
                <tr>
                  <th>
                    <b>La forme</b>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    Permanente, ondulation, mini-vague, décollement de racine
                  </td>
                  <td />
                  <td className="right">24 à 55 €</td>
                </tr>
                <tr>
                  <td>
                    LISSAGE BRÉSILIEN : lissage soin longue durée à base de
                    kératine, améliorant la qualité du cheveux
                  </td>
                  <td />
                  <td className="right">Sur devis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col m12 s12">
            <table>
              <thead>
                <tr>
                  <th>
                    <b>Forfait coiffure mariage</b>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>2 essais + jour J</td>
                  <td />
                  <td className="right">120 €</td>
                </tr>
                <tr>
                  <td>Coiffure / Ongles / Maquillage</td>
                  <td />
                  <td className="right">199 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row">
          <div className="col m12 s12">
            <table>
              <thead>
                <tr>
                  <th>
                    <b>Forfait coiffure masculine</b>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Shampoing / Coupe / Coiffage</td>
                  <td />
                  <td className="right">22 €</td>
                </tr>
                <tr>
                  <td>Chicos (selon âge)</td>
                  <td />
                  <td className="right long-td">10 / 14 / 16 €</td>
                </tr>
                <tr>
                  <td>Barbe</td>
                  <td />
                  <td className="right">5 €</td>
                </tr>
                <tr>
                  <td>COVER 5 : 5 minutes...5 ans de moins</td>
                  <td />
                  <td className="right">12 €</td>
                </tr>
                <tr>
                  <td>Coupe tondeuse</td>
                  <td />
                  <td className="right">15 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarif;
