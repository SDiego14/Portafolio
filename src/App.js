import React, { useState } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';

// IMPORTANTE: Asegúrate de que los archivos existan en tu carpeta src/assets/
import fotoPerfil from './assets/perfil.jpg'; 
import Titulo from './assets/Solís Diego_Titulo.jpg';
import Diplomatura from './assets/Solis_Diego_Diplomatura.jpg';
import Curso from './assets/Solis_Diego_TD.jpg';
import { QRCodeSVG } from 'qrcode.react';

// --- COMPONENTE: NAVBAR ---
const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <span style={{ color: '#2a5298' }}>&lt;</span>
      DS
      <span style={{ color: '#2a5298' }}> /&gt;</span>
    </div>
    <ul>
      <li><a href="#sobre-mi">Sobre mí</a></li>
      <li><a href="#trayectoria">Trayectoria</a></li>
      <li><a href="#formacion">Formación</a></li>
      <li><a href="#habilidades">Habilidades</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>
);

// --- COMPONENTE: HERO ---
const Hero = () => (
  <header id="sobre-mi" className="hero-container">
    <div className="hero-content">
      <div className="hero-image-wrapper">
        <img src={fotoPerfil} alt="Diego Fernando Solís Rojas" className="hero-photo" />
      </div>
      <div className="hero-text">
        <span className="badge">Desarrollador Full Stack</span>
        <h1>Diego Fernando Solís Rojas</h1>
        <h2>Desarrollador Full Stack & Especialista en Infraestructura Tecnológica.</h2>
        <p className="hero-description">
          Estudiante avanzado de Sistemas en la UNNE con experiencia sólida en administración de servidores Linux y
          virtualización. Me especializo en crear soluciones escalables uniendo el desarrollo de software con la infraestructura crítica.
        </p>
        
        {/* BOTONES DE REDES SOCIALES */}
        <div className="hero-social-buttons">
          <a 
            href="https://github.com/SDiego14" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-social github"
          >
            GitHub 💻
          </a>
          <a 
            href="https://www.linkedin.com/in/diego-solis-9977a2277/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-social linkedin"
          >
            LinkedIn 👔
          </a>
          {/* Botón de Descarga del Currículum */}
          <a 
            href="/CV-Solis Diego_2026.pdf" 
            className="btn-social cv-download" 
            download
          >
            Descargar CV 📄
          </a>
        </div>
      </div>
    </div>
  </header>
);

// --- COMPONENTE: TRAYECTORIA ---
const Experience = () => {
  const empleos = [
    {
      puesto: "freelancer",
      lugar: "Desarrollo de Software y Consultoría IT",
      periodo: "2025 - Actualidad",
      descripcion: "Diagnóstico y mantenimiento de equipos informáticos.- Instalación y configuración de sistemas operativos.- Conexión a redes, control de drivers y gestión de software.",
      logro: "Soluciones Digitalización y de Infraestrutura."
    },
    {
      puesto: "Técnico Administrativo",
      lugar: "Administración Pública - Recursos Humanos - Ministerio de Industria",
      periodo: "2023 - 2025",
      descripcion: "Gestión de expedientes y optimización de procesos internos. Aplicación de normativas y organización del estado.",
      logro: "Digitalización de flujos de trabajo institucionales."
    },
    {
      puesto: "Técnico Administrativo",
      lugar: "Administración Pública - Direccion de Administracion - Ministerio de Industria",
      periodo: "2021 - 2023",
      descripcion: "Gestión de expedientes y optimización de procesos internos. Aplicación de normativas y organización del estado.",
      logro: "Digitalización de flujos de trabajo institucionales."
    },
    {
      puesto: "Becario Administrativo - Soporte IT",
      lugar: "Administración Pública - Direccion de Administracion - Ministerio de Industria",
      periodo: "2018 - 2020",
      descripcion: "Actualización de Programas, Drivers. Conexiones de internet, redes e impresoras. Recuperación de datos.",
      logro: "Implemantacion de Drive documentacion compartida y digitalizada."
    }
  ];

  return (
    <section id="trayectoria" className="section">
      <h2>Trayectoria Profesional</h2>
      <div className="timeline">
        {empleos.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="time-tag">{exp.periodo}</span>
              <h3>{exp.puesto}</h3>
              <h4>{exp.lugar}</h4>
              <p>{exp.descripcion}</p>
              <div className="logro-box"><strong>✨ Logro:</strong> {exp.logro}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- COMPONENTE: EDUCACIÓN ---
const Education = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="formacion" className="section bg-light">
      <h2>Formación Académica</h2>
      <div className="education-container">
        
        {/* CARD 1 */}
        <div className="card academic-card gold-border">
          <div className="card-header">
            <span className="institution">UNNE - Facultad de Derecho</span>
            <span className="year-badge">2023</span>
          </div>
          <h3>Técnico en Gestión de la Administración Central</h3>
          <p>
            <b>La Tecnicatura en Gestión de la Administración Central</b> ofrece una formación integral que combina un sólido marco teórico e innovador sobre la administración pública con un enfoque práctico directo en el entorno profesional. 
            Sus graduados adquieren capacidades analíticas y de gestión para la planificación y formulación de proyectos, políticas públicas, dictámenes y actos administrativos. Asimismo, el plan de estudios consolida un profundo conocimiento del cuerpo legal, la administración financiera, las estructuras de control y el funcionamiento de los organismos del Estado moderno bajo enfoques de gobernanza. 
            Todo esto se complementa con una visión ética, jurídica y de responsabilidad social, orientada a la mejora continua y al compromiso proactivo con la calidad de vida de los ciudadanos.
          </p>
          <div className="academic-footer">
            <div className="academic-highlight">Finalizado</div>
            <button className="btn-view-diploma" onClick={() => setSelectedImage(Titulo)}>
              Ver Título 📜
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card academic-card gold-border">
          <div className="card-header">
            <span className="institution">UNNE - FaCENA</span>
            <span className="year-badge">2024</span>
          </div>
          <h3>Talentos Digitales</h3>
          <p><b>Desarrollador Full Stack</b> Con conocimientos para construir aplicaciones web completas y modernas. Desde el diseño y la interactividad en el frontend utilizando HTML, CSS, JavaScript y React, hasta la creación de la lógica del servidor y APIs REST en el backend con Node.js, junto con la gestión y persistencia de datos en bases de datos relacionales mediante ORMs. Además, consolida el uso profesional de Git/GitHub para el control de versiones y la adopción de metodologías ágiles de trabajo, para integrarse de forma eficiente en equipos de la industria tecnológica actual.</p>
          <div className="academic-footer">
            <div className="academic-highlight">Finalizado</div>
            <button className="btn-view-diploma" onClick={() => setSelectedImage(Curso)}>
              Ver Título 📜
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="card academic-card gold-border">
          <div className="card-header">
            <span className="institution">UNNE - FaCENA</span>
            <span className="year-badge">2025</span>
          </div>
          <h3>Diplomatura Universitaria en Infraestructura Tecnológica basada en Software Libre</h3>
          <p><b>La Diplomatura Universitaria en Infraestructura Tecnológica basada en Software Libre</b> es un trayecto formativo de la UNNE con una carga de 200 horas reloj y seis meses de duración, diseñado para responder a la demanda de gestión de sistemas de información independientes de licencias pagas. 
             El perfil habilita al técnico para diseñar, implementar, monitorear y asegurar redes e infraestructuras informáticas a diferentes escalas tanto en servidores físicos propios como en entornos de nube pública. 
             Entre sus competencias específicas clave se consolidan la instalación y configuración de sistemas operativos Linux, la administración de sistemas y usuarios, el despliegue de redes, servicios esenciales, seguridad informática básica y la gestión de entornos de prueba mediante tecnologías de virtualización.</p>
          <div className="academic-footer">
            <div className="academic-highlight">Finalizado</div>
            <button className="btn-view-diploma" onClick={() => setSelectedImage(Diplomatura)}>
              Ver Título 📜
            </button>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="card academic-card blue-border">
          <div className="card-header">
            <span className="institution">UNNE - FaCENA</span>
            <span className="year-badge">5to Año</span>
          </div>
          <h3>Licenciatura en Sistemas de Información</h3>
          <p>En curso - Tesis en Desarrollo. Enfoque en arquitectura de software y gestión de datos.</p>
        </div>
      </div>

      {/* MODAL DINÁMICO */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Título UNNE" />
            <button className="close-btn" onClick={() => setSelectedImage(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

// --- COMPONENTE: HABILIDADES INTERACTIVAS ---
const SkillCard = ({ title, skills, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className={`skill-card-interactive ${isHovered ? 'active' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <ul className={isHovered ? 'show' : 'hide'}>
        {skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
      {!isHovered && <p className="hint">Pasar el mouse</p>}
    </div>
  );
};

const Skills = () => (
  <section id="habilidades" className="section">
    <h2>Especialidades Técnicas</h2>
    <div className="skills-interactive-grid">
      <SkillCard title="Sistemas de backend y bases de datos" icon="🗄️" skills={["Node.js y Express", ".NET Core y PHP", "MySQL, MariaDB y SQL Server", "Java (Spring Boot)"]} />
      <SkillCard title="Desarrollo Web" icon="💻" skills={["React & JS", "PHP & MySQL", "HTML5 & CSS3", "Tailwind CSS y diseño responsivo"]} />
      <SkillCard title="Infraestructura y DevOps" icon="⚙️" skills={["Linux (Software Libre)", "Redes", "Soporte", "Docker y Virtualización"]} />
    </div>
  </section>
);

// --- COMPONENTE: PROYECTOS ---
const Projects = () => {
  const projectList = [
    {
      title: "Sistema PHP/MySQL",
      description: "Administración de datos relacionales para gestión interna.",
      tag: "Full Stack",
      link: "#"
    },
    {
      title: "Dashboard Adm.",
      description: "Visualización de indicadores institucionales.",
      tag: "Responsive",
      link: "#"
    },
    {
      title: "Portafolio Personal",
      description: "Diseño y desarrollo de mi espacio web profesional para dar a conocer mis proyectos y habilidades.",
      tag: "React",
      link: "https://diego-solis-dev.vercel.app/"
    }
  ];

  return (
    <section id="proyectos" className="section bg-light">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="project-footer">
              <span className="tag">{project.tag}</span>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                Ver proyecto →
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

// --- COMPONENTE: CONTACTO (Formulario y QR Lado a Lado) ---
const Contact = () => {
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setCargando(true);

    emailjs.sendForm(
      'service_98tc8qc', 
      'template_y6g6fys', 
      e.target, 
      'YEyiGeLP-rfo9vWy2'
    )
    .then((result) => {
        setEnviado(true);
        setCargando(false);
        e.target.reset();
        setTimeout(() => setEnviado(false), 5000);
    }, (error) => {
        console.error(error.text);
        setCargando(false);
        alert("Ocurrió un error al enviar el mensaje, por favor intenta de nuevo.");
    });
  };

  return (
    <section id="contacto" className="section contact-section">
      <h2>Contacto</h2>
      
      {/* Contenedor flexible en paralelo */}
      <div className="contact-container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        
        {/* Formulario a la izquierda */}
        <form className="contact-form" onSubmit={sendEmail} style={{ flex: '1 1 350px', margin: 0 }}>
          <input type="text" name="user_name" placeholder="Tu Nombre" required />
          <input type="email" name="user_email" placeholder="Tu Email" required />
          <textarea name="message" placeholder="¿En qué puedo ayudarte?" rows="5" required></textarea>
          
          <button 
            type="submit" 
            className="btn-primary" 
            disabled={cargando}
            style={{ opacity: cargando ? 0.7 : 1, cursor: cargando ? 'not-allowed' : 'pointer', width: '100%' }}
          >
            {cargando ? "Enviando..." : enviado ? "¡Mensaje Enviado! ✅" : "Enviar Mensaje"}
          </button>
        </form>

        {/* Tarjeta con QR en formato SVG (100% Escaneable) a la derecha */}
        <div style={{
          flex: '0 1 220px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          backgroundColor: '#1b365d',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}>
          <p style={{ color: '#ffffff', marginBottom: '15px', fontSize: '0.9rem', textAlign: 'center', fontWeight: '500' }}>
            📱 Escanea para abrir en tu celular
          </p>
          
          <div style={{ padding: '8px', backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <QRCodeSVG 
              value="https://solis-diego.vercel.app/" 
              size={130}
              bgColor={"#ffffff"}
              fgColor={"#1b365d"}
              level={"M"}
              includeMargin={false}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

// --- APP PRINCIPAL ---
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2026 Diego Fernando Solís Rojas - Corrientes, Argentina</p>
      </footer>
    </div>
  );
}

export default App;