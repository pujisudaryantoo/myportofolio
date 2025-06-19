import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Selain coding, beberapa kegiatan lain yang saya suka lakukan!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bermain game
            </li>
            <li className="about-activity">
              <ImPointRight /> Mendaki gunung
            </li>
            <li className="about-activity">
              <ImPointRight /> Aktifitas luar ruangan
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Balancing life between bugs and backpacks."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
