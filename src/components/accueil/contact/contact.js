import React from "react";
import "./contact.css";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function contact() {
  return (
    <div className="contact-container">
      <div className="form-container">
        <h1>Contactez-nous</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Sujet :</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <button type="submit">Envoyer</button>
          <br />
          <p>* Tous les champs sont obligatoires.</p>
        </form>
      </div>
      <div className="contact-info">
        <h2>Informations de contact</h2>
        <br />
        <p>
          N'hésitez pas de nous contacter si vous avez des suggestions ou des
          questions.
        </p>
        <br />

        <p>
          <strong>
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
            Email :
          </strong>{" "}
          islembaldi044@gmail.com "ou" araysimohamedali@gmail.com
        </p>
        <br />
        <p>
          <strong>
            <FontAwesomeIcon icon={faPhone} />
            Téléphone :
          </strong>{" "}
          +1234567890
        </p>
      </div>
    </div>
  );
}

export default contact;
