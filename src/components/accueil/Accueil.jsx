import React, { useEffect } from "react";
import "./style.css";
import cours from "../../Assets/cours.jpg";
import examen from "../../Assets/examen.jpg";
import test from "../../Assets/test.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { handleScroll } from "./scrollVisibility.js";

function Accueil() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="animated-background">
      {/* Contenu de notre page d'accueil */}
      <div className="text-container">
        <h1>Bienvenue sur notre application AutoCompagnon!</h1>
        <p>Commencez votre parcours d'apprentissage dès aujourd'hui.</p>
        <p>Bonne chance</p>
      </div>
      {/* Ajout du bouton "Watch" en dessous du cadre de bienvenue */}
      <button className="watch-button">
        <Link to="/videos" style={{ color: "white", textDecoration: "none" }}>
          <span className="text">Watch more videos</span>{" "}
          <FontAwesomeIcon icon={faArrowRight} className="icon" />
        </Link>
      </button>

      <div className="content" id="content">
        <p>Code de la Route</p>
        <p className="para">PRÉPAREZ L'ÉPREUVE DU CODE</p>
        <p>
          AutoCompagnon est une application web qui vous aide à étudier et
          apprendre le code de la route en Tunisie totalement gratuit à votre
          rythme en ligne.
        </p>
        <p>
          Découvrez tous les nouveaux contenus pour réussir votre code de la
          route: nouveaux panneaux en ligne, nouveaux thèmes de l'examen du code
          de la route et enfin des séries de test composés de 30 questions
          chacune identique à l'examen officiel.
        </p>
        <p>
          Le Code de la Route en Tunisie: Cours gratuit Test Examen Permis de
          Conduire en Tunisie.
        </p>
        <p>
          Étudier le Code de la Route gratuitement et à votre rythme en ligne,
          voir les cours, test gratuit, examens et Auto école en Tunisie.
        </p>
        <p className="para">Tous les outils indispensables pour réussir</p>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={cours} alt="Cours" />
          </div>
          <div className="image-wrapper">
            <img src={examen} alt="Examen" />
          </div>
          <div className="image-wrapper">
            <img src={test} alt="Test" />
          </div>
        </div>

        <div class="word-spacing">
          <span class="blue">Cours</span>
          <span class="red">Examen</span>
          <span class="green">Test</span>
        </div>
      </div>
      <footer className="footer">{/* Contenu de votre footer */}</footer>
    </div>
  );
}

export default Accueil;
