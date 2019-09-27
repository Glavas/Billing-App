import React from "react";
import Item from "../Item";
import ContactForm from "../ContactForm";
import "../styles/ContentContainer.css";
import "../styles/GridLayout.css";
import "../styles/Item.css";

const ImpressumPage = props => {
  return (
    <div>
      <div className="ImpressumContent">
        <Item className="col-4" header="Unser Standort:" content="">
          <p>Treskowallee 8, 10318 Berlin</p>
          <iframe
            className="responsiveFrame"
            title="frame"
            width="400"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=treskowallee%208%20berlin&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </Item>
        <Item className="col-4" header="Über uns:" content="Webtech Projekt">
          <p>
            Nico Teichert <br />
            Antoine Ma
            <br />
            Kemal Solapgir
            <br />
            Perica Glavas
            <br />
          </p>
        </Item>
        <Item
          className="col-4"
          header="Rechtliche Hinweise:"
          content="Die Inhalte unserer Internetseite werden mit größter Sorgfalt
          recherchiert. Dennoch kann der Anbieter keine Haftung für die
          Richtigkeit, Vollständigkeit und Aktualität der bereit gestellten
          Informationen übernehmen. Die Informationen sind insbesondere auch
          allgemeiner Art und stellen keine Rechtsberatung im Einzelfall dar.
          Zur Lösung von konkreten Rechtsfällen konsultieren Sie bitte unbedingt
          vorher einen Rechtsanwalt. Die Benutzung erfolgt ausschließlich auf
          eigenes Risiko."
        />
      </div>
      <ContactForm />
    </div>
  );
};

export default ImpressumPage;
