import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profil_me.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.0em" }}>
              IZINKAN SAYA <span className="purple"> MEMPERKENALKAN </span> DIRI
            </h1>
            <p className="home-about-body">
              <br />Hi, saya <b className="purple">Puji Sudaryanto</b>. Saya adalah seorang{" "}
              <b className="purple">Front-End Developer</b> sekaligus{" "}
              <b className="purple">Database & System Administrator</b>.
              <br />
              <br />
              Saya juga memiliki kemampuan sebagai{" "}
              <b className="purple">Full-Stack Developer</b> dengan berbagai framework modern.
              <br />
              <br />
              Selain itu, saya memiliki pengalaman dalam{" "}
              <b className="purple">UI/UX Design</b>, menjembatani kebutuhan{" "}
              <b className="purple">Teknis</b> dan <b className="purple">Estetika</b>{" "}
              untuk menciptakan solusi digital yang fungsional, efisien, dan menarik.
              <br />
              <br />
              Saya senang membangun produk digital yang tidak hanya optimal secara performa,
              tetapi juga menyenangkan bagi pengguna.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid profile-circle" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
  <Col md={12} className="home-about-description">
    <h2 className="purple" style={{ marginTop: "", marginBottom: "20px" }}>
      KETERAMPILAN SAYA
    </h2>
    <p className="home-about-social">
    <b /> Saya profesional dan memiliki tanggung jawab dalam menyelesaikan masalah.
    Adapun beberapa keahlian saya dalam dunia kerja sebagai berikut.
    </p>
    <Row>
      {/* Kolom Kiri */}
      <Col md={6} className="home-about-social">
        <p>Framework & Native PHP</p>
        <ProgressBar now={57}  striped animated className="custom-progress" />

        <p className="mt-3">Framework & Native CSS</p>
        <ProgressBar now={64}  striped animated className="custom-progress" />

        <p className="mt-3">Framework & Native JavaScript</p>
        <ProgressBar now={55}  striped animated className="custom-progress" />

        <p className="mt-3">Mobile Programming (Java & Kotlin)</p>
        <ProgressBar now={25} striped animated className="custom-progress" />
      </Col>

      {/* Kolom Kanan */}
      <Col md={6} className="home-about-social">
        <p>ReactJs</p>
        <ProgressBar now={50}  striped animated className="custom-progress" />

        <p className="mt-3">Database & System</p>
        <ProgressBar now={63}  striped animated className="custom-progress" />

        <p className="mt-3">UI/UX Design</p>
        <ProgressBar now={60}  striped animated className="custom-progress" />

        <p className="mt-3">Sistem Operation</p>
        <ProgressBar now={55}  striped animated className="custom-progress" />
      </Col>
    </Row>
  </Col>
</Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>TEMUKAN SAYA DI</h1>
            <p>
              Jangan ragu untuk <span className="purple">menghubungi</span> saya
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://api.whatsapp.com/send?phone=6281239002632&text=Halo%20Puji%2C%20Saya%20tertarik%20dengan%20anda%20melalui%20website%20portofolio%20milik%20anda" // GANTI DENGAN USERNAME ANDA
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/pujisudaryantoo" // GANTI DENGAN USERNAME ANDA
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/pujisudaryanto_/" // GANTI DENGAN LINK INSTAGRAM ANDA
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/puji.sudaryanto" // GANTI DENGAN LINK INSTAGRAM ANDA
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
