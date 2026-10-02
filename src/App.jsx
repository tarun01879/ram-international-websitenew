import { useEffect, useState } from "react";
import "./App.css";

const activities = [
  ["Karate", "karate.jpg"],
  ["Cricket", "cricket.jpg"],
  ["Computer Lab", "computer-lab.jpg"],
  ["Sports", "sports.jpg"],
  ["Cultural Activities", "cultural.jpg"],
  ["Classroom Activities", "classroom.jpg"],
  ["Science Activities", "science.jpg"],
  ["School Events", "events.jpg"],
];

const development = [
  ["Creative Development", "creative.jpg"],
  ["Personal & Social Development", "personal-social.jpg"],
  ["Physical Development", "physical.jpg"],
  ["Language & Literacy", "language-literacy.jpg"],
  ["General Awareness", "awareness.jpg"],
  ["Mathematics", "mathematics.jpg"],
];

const academics = [
  ["Pre Primary", "Nursery • LKG • UKG", "pre-primary.jpg"],
  ["Class 1 to 8", "Primary & Middle Classes", "class-1-8.jpg"],
  ["Class 9 to 12", "Senior Classes", "class-9-12.jpg"],
];

const leadership = [
  ["Chairman", "chairman.jpg", "chairman"],
  ["Principal", "principal.jpg", "principal"],
  ["Vice Principal", "vice-principal.jpg", "vice-principal"],
];

function App() {
  const [openLeader, setOpenLeader] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const heroImages = ["school-main.jpg", "school-main-2.jpg", "school-main-3.jpg"];

  useEffect(() => {
    const timer = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const gallery = Array.from({ length: 12 }, (_, i) => `${String(i + 1).padStart(2, "0")}.jpg`);

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const className = form.get("className");
    const message = form.get("message");
    const text = `School Enquiry%0AName: ${name}%0APhone: ${phone}%0AClass: ${className}%0AMessage: ${message}`;
    window.open(`https://wa.me/918445800003?text=${text}`, "_blank");
  };

  return (
    <>
      <div className="topbar">
        <div>English Medium • Pre-Nursery to Class XII</div>
        <a href="https://wa.me/918445800003" target="_blank" rel="noreferrer">WhatsApp: 8445800003</a>
      </div>

      <header className="header">
        <a className="brand" href="#home">
          <div className="logo-box">RIPS</div>
          <div>
            <strong>RAM INTERNATIONAL SCHOOL</strong>
            <span>English Medium • Pre-Nursery to Class XII</span>
          </div>
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#leadership">Leadership</a>
          <a href="#academics">Classes</a>
          <a href="#development">Development</a>
          <a href="#activities">Activities</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          {heroImages.map((file, i) => (
            <img key={file} className={i === heroIndex ? "hero-photo active" : "hero-photo"} src={`/images/hero/${file}`} alt="RAM International School campus" />
          ))}
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-title">
              <span>RAM INTERNATIONAL SCHOOL</span>
              <h1>Learn • Grow • Lead</h1>
            </div>
            <p>English Medium School | Pre-Nursery to Class XII</p>
          </div>
          <div className="hero-dots">
            {heroImages.map((_, i) => <button key={i} className={i === heroIndex ? "dot active" : "dot"} onClick={() => setHeroIndex(i)} aria-label={`Slide ${i + 1}`} />)}
          </div>
        </section>

        <section id="admission" className="admission">
          <div>
            <small>NOW OPEN</small>
            <h2>Admission Open 2027–28</h2>
            <p>Inquiry Now for admission details and school information.</p>
          </div>
          <a className="btn light" href="https://wa.me/918445800003?text=Hello%20RAM%20International%20School%2C%20I%20want%20admission%20information." target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <span>ABOUT OUR SCHOOL</span>
            <h2>Learning with Purpose, Growing with Confidence</h2>
          </div>
          <div className="about-grid">
            <div className="about-image"><img src="/images/hero/school-main.jpg" alt="School campus" /></div>
            <div className="about-text">
              <p>RAM INTERNATIONAL SCHOOL is committed to providing a supportive and enriching learning environment where students develop knowledge, confidence, discipline and creativity.</p>
              <p>Our approach combines academics, activities, sports, technology and personal development to help students grow into responsible and confident individuals.</p>
              <div className="stats">
                <div><b>3</b><span>Academic Stages</span></div>
                <div><b>8+</b><span>Activities</span></div>
                <div><b>6</b><span>Development Areas</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className="section soft">

  <div className="section-heading">
    <span>OUR LEADERSHIP</span>
    <h2>Guidance & Leadership</h2>
  </div>

  <div className="leadership-grid">

    {/* ================= CHAIRMAN ================= */}
    <article className="leader-card">

      <div className="leader-photo">
        <img
          src="/images/leadership/chairman.jpg"
          alt="Chairman"
        />
      </div>

      <div className="leader-info">

        <h3>Chairman's Message</h3>

        <p className={openLeader === "chairman" ? "expanded" : ""}>
          We believe education is the foundation for a responsible,
          confident and successful future. Our aim is to provide every
          child with a positive learning environment where they can
          discover their abilities, develop strong values and grow with
          confidence. We are committed to creating a school culture
          that encourages discipline, knowledge, creativity and respect
          for others.
        </p>

        <button
          onClick={() =>
            setOpenLeader(
              openLeader === "chairman" ? null : "chairman"
            )
          }
        >
          {openLeader === "chairman" ? "Read Less" : "Read More"}
        </button>

      </div>

    </article>


    {/* ================= PRINCIPAL ================= */}
    <article className="leader-card">

      <div className="leader-photo">
        <img
          src="/images/leadership/principal.jpg"
          alt="Principal"
        />
      </div>

      <div className="leader-info">

        <h3>Principal's Message</h3>

        <p className={openLeader === "principal" ? "expanded" : ""}>
          Our school strives to make learning meaningful, engaging and
          purposeful. We encourage students to think creatively, work
          hard and develop a strong sense of discipline and
          responsibility. Our focus is not only on academic growth but
          also on developing communication skills, confidence, good
          character and the ability to face future challenges.
        </p>

        <button
          onClick={() =>
            setOpenLeader(
              openLeader === "principal" ? null : "principal"
            )
          }
        >
          {openLeader === "principal" ? "Read Less" : "Read More"}
        </button>

      </div>

    </article>


    {/* ================= VICE PRINCIPAL ================= */}
    <article className="leader-card">

      <div className="leader-photo">
        <img
          src="/images/leadership/vice-principal.jpg"
          alt="Vice Principal"
        />
      </div>

      <div className="leader-info">

        <h3>Vice Principal's Message</h3>

        <p className={openLeader === "vice-principal" ? "expanded" : ""}>
          Every child has unique abilities, interests and potential.
          We aim to provide a safe, positive and encouraging
          environment where students feel confident to explore their
          interests and develop good habits. Through proper guidance,
          care and meaningful activities, we encourage every student
          to become responsible, confident and well-rounded.
        </p>

        <button
          onClick={() =>
            setOpenLeader(
              openLeader === "vice-principal" ? null : "vice-principal"
            )
          }
        >
          {openLeader === "vice-principal"
            ? "Read Less"
            : "Read More"}
        </button>

      </div>

    </article>

  </div>

</section>

        <section id="academics" className="section">
          <div className="section-heading">
            <span>ACADEMICS</span>
            <h2>Our Classes</h2>
          </div>
          <div className="academic-grid">
            {academics.map(([title, sub, image]) => (
              <article className="academic-card" key={title}>
                <img src={`/images/academics/${image}`} alt={title} />
                <div><h3>{title}</h3><p>{sub}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="development" className="section soft">
          <div className="section-heading">
            <span>KEY DEVELOPMENT AREAS</span>
            <h2>Complete Child Development</h2>
          </div>
          <div className="development-grid">
            {development.map(([title, image], i) => (
              <article className="development-card" key={title}>
                <img src={`/images/development/${image}`} alt={title} />
                <div><b>0{i + 1}</b><h3>{title}</h3></div>
              </article>
            ))}
          </div>
        </section>

        <section id="activities" className="section">
          <div className="section-heading">
            <span>ACTIVITIES & AMENITIES</span>
            <h2>Learning Beyond the Classroom</h2>
          </div>
          <div className="activity-grid">
            {activities.map(([title, image]) => (
              <article className="activity-card" key={title}>
                <img src={`/images/activities/${image}`} alt={title} />
                <div><h3>{title}</h3><p>Explore, participate and grow through practical experiences.</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="section soft">
          <div className="section-heading">
            <span>PHOTO GALLERY</span>
            <h2>Moments at RAM International School</h2>
          </div>
          <div className="gallery-grid">
            {gallery.map((file) => (
              <button className="gallery-item" key={file} onClick={() => setLightbox(`/images/gallery/${file}`)}>
                <img src={`/images/gallery/${file}`} alt={`School gallery ${file}`} />
              </button>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <span>CONTACT US</span>
            <h2>Admission & Enquiry</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>RAM INTERNATIONAL SCHOOL</h3>
              <p>Phulwari Colony, Near 150 Feet Ring Road<br />Garh Road, Meerut</p>
              <p><b>WhatsApp:</b> 8445800003</p>
              <p><b>Phone:</b> 8279937015</p>
              <p><b>Email:</b> ramintarnationalpublicschool.com</p>
            </div>
            <form onSubmit={sendWhatsApp} className="enquiry-form">
              <input name="name" placeholder="Student / Parent Name" required />
              <input name="phone" placeholder="Mobile Number" required />
              <input name="className" placeholder="Class / Admission For" />
              <textarea name="message" placeholder="Your enquiry"></textarea>
              <button className="btn primary" type="submit">Send Enquiry on WhatsApp</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <strong>RAM INTERNATIONAL SCHOOL</strong>
        <span>© 2026 RAM International School. All Rights Reserved.</span>
      </footer>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)}>×</button>
          <img src={lightbox} alt="Large gallery view" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}

export default App;
