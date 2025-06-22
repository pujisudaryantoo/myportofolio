import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kazee from "../../Assets/Projects/kazee.png";
import voma from "../../Assets/Projects/voma.png";
import keuangan from "../../Assets/Projects/keuangan.png";
import desamind from "../../Assets/Projects/desamind.png";
import sinau from "../../Assets/Projects/sinau.png";
import inventaris from "../../Assets/Projects/inventaris.png";
import kazee1 from "../../Assets/Projects/kazee1.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Proyek </strong> Terakhir Saya
        </h1>
        <p style={{ color: "white" }}>
        Berikut adalah beberapa proyek yang saya kerjakan baru -baru ini.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={desamind}
              isBlog={false}
              title="Organisasi Profil Desamind Chapter Bandung"
              description="Sebagai bagian dari kontribusi saya dalam pengembangan web, saya pernah merancang dan membangun landing page untuk organisasi Desamind Chapter Bandung.
              Saya mengembangkan landing page untuk Desamind Chapter Bandung sebagai media informasi sekaligus representasi digital organisasi. Proyek ini saya kerjakan secara mandiri dengan menggunakan Bootstrap dan JavaScript untuk memastikan tampilan yang responsif, dinamis, dan user-friendly.

🔧 Teknologi yang digunakan

HTML5

CSS3

JavaScript

Bootstrap 5
"
              ghLink="https://github.com/pujisudaryantoo/desamindbandung.github.io"
              demoLink="https://pujisudaryantoo.github.io/desamindbandung.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventaris}
              isBlog={false}
              title="APLIKASI INVENTARIS BUKU BERBASIS WEB CV SENTOSA MANDIRI INDONESIA"
              description="Saya mengembangkan aplikasi inventaris berbasis web untuk CV Sentosa Mandiri Indonesia dengan tujuan membantu digitalisasi proses pencatatan barang dan pelaporan penjualan secara efisien. Aplikasi ini dibangun menggunakan framework Laravel, dengan pendekatan role-based access untuk memisahkan hak akses antara Admin, Supervisor, dan Pegawai. Teknologi yang digunakan:

Laravel (PHP Framework)

Blade Template

MySQL

HTML, CSS, JavaScript

Bootstrap"
              // ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keuangan}
              isBlog={false}
              title="App Manajemen Keuangan Pribadi"
              description="Saya mengembangkan sebuah aplikasi mobile Android berbasis Java untuk membantu pengguna dalam mengelola keuangan pribadi secara praktis dan terorganisir. Aplikasi ini dirancang dengan antarmuka yang user-friendly dan responsif untuk memberikan pengalaman pengguna yang nyaman.

Teknologi yang digunakan:

Android Studio

Java (Native Android)

SQLite untuk penyimpanan data lokal

XML untuk desain antarmuka

Material Design Components"
              ghLink="https://github.com/pujisudaryantoo/apk-keuangan"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kazee}
              isBlog={false}
              title="App Mobile PT KAZEE DIGITAL INDONESIA"
              description="Saya mengembangkan aplikasi berbasis web untuk PT KAZEE DIGITAL INDONESIA sebagai bagian dari solusi digital untuk mempermudah pengelolaan dan analisis data strategis. Aplikasi ini dirancang agar dapat diakses dengan mudah melalui browser, memiliki sistem user-role yang jelas, serta mampu menampilkan data secara real-time dan interaktif.

Teknologi yang digunakan:

Laravel (PHP Framework)

HTML5, CSS3, JavaScript

Tailwind untuk tampilan responsif

MySQL (Database)

REST API Integration (jika terhubung ke data eksternal)

"
              // ghLink="https://github.com/pujisudaryantoo/kazee.github.io"
              demoLink="https://pujisudaryantoo.github.io/kazee.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sinau}
              isBlog={true}
              title="UI/UX APLIKASI AKSINAU"
              description="Saya bertanggung jawab dalam merancang antarmuka (UI) dan pengalaman pengguna (UX) untuk Aplikasi AKSINAU, sebuah platform edukasi yang ditujukan untuk membantu pengguna dalam proses belajar secara digital dan interaktif. Proyek ini difokuskan pada menciptakan desain yang intuitif, ramah pengguna, dan sesuai dengan target pengguna yaitu pelajar dan mahasiswa.

Tujuan Desain:

Menyederhanakan navigasi agar pengguna dapat fokus pada materi pembelajaran

Menciptakan suasana visual yang edukatif dan menyenangkan

Memastikan pengalaman pengguna yang konsisten di berbagai perangkat

Tools & Metodologi:

Figma untuk wireframing dan prototyping

Adobe XD untuk tampilan visual dan desain interaktif

User Flow dan Persona Mapping

Pengujian desain dengan pendekatan usability testing dan iterasi berdasarkan feedback"
              ghLink="https://www.figma.com/community/file/1128627150222120813/e-learning-mobile"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voma}
              isBlog={true}
              title="UI/UX – Website E-Commerce VomaHijab.co"
              description="Saya merancang UI/UX untuk website e-commerce VomaHijab.co, sebuah toko online yang menjual produk fashion muslim khususnya hijab dan aksesorinya. Fokus desain adalah menghadirkan tampilan yang elegan, modern, dan mudah digunakan, agar dapat meningkatkan pengalaman belanja pengguna dan mendorong konversi penjualan.

Tujuan Desain:

Menampilkan produk secara menarik dan informatif

Mempermudah proses pencarian dan pembelian produk

Meningkatkan kepercayaan pengguna terhadap brand melalui tampilan profesional dan navigasi yang jelas

Tools & Proses:

Figma untuk wireframe dan high-fidelity prototyping

User Flow untuk memetakan perjalanan pengguna dari homepage ke checkout

Konsistensi desain dengan identitas brand (warna, font, ikonografi)"
              ghLink="https://www.figma.com/community/file/1517625184420770739"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kazee1}
              isBlog={true}
              title="UI/UX – Mobile PT Kazee Digital Indonesia"
              description="Saya bertanggung jawab dalam merancang tampilan antarmuka (UI) dan pengalaman pengguna (UX) untuk aplikasi internal PT Kazee Digital Indonesia. Proses desain dilakukan secara menyeluruh mulai dari riset kebutuhan pengguna, pembuatan user flow, wireframe, hingga high-fidelity design menggunakan Figma.
Fokus utama desain ini adalah menciptakan tampilan yang modern, intuitif, dan mudah digunakan oleh berbagai level pengguna, sekaligus mendukung efisiensi kerja tim internal perusahaan.
Kolaborasi dilakukan secara agile bersama tim developer dan stakeholder untuk memastikan hasil desain sesuai kebutuhan bisnis."
              ghLink="https://www.figma.com/design/iA8zvIpnv97GHPgmWidSae/Kazee?node-id=0-1&m=dev&t=S1WwRZ80R16TtnNV-1"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
