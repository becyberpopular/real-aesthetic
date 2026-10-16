// Page markup converted from https://realaestheticmedspa.com/sobre/
import css from "@/styles/pages/about.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";
import { useTopNavOnScroll } from "@/site/behaviors";

export default function AboutEs() {
  useTopNavOnScroll();
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Idioma">
        <SiteLink href="/about/">EN</SiteLink>
        <span>·</span>
        <SiteLink href="/sobre/" className="active">
          ES
        </SiteLink>
      </div>{" "}
      <nav className="top" id="topnav">
        {" "}
        <SiteLink href="/" className="brand">
          {" "}
          <picture>
            <source media="(max-width: 768px)" srcSet="/img/logo-horizontal.webp" />
            <img src="/img/logo.webp" alt="Real Aesthetic Medical Spa" />
          </picture>{" "}
        </SiteLink>{" "}
        <ul>
          <li>
            <SiteLink href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Inicio
            </SiteLink>
          </li>
          <li>
            <SiteLink href="/tratamientos/" style={{ color: "inherit", textDecoration: "none" }}>
              Tratamientos
            </SiteLink>
          </li>
          <li>
            <SiteLink href="/sobre/" style={{ color: "inherit", textDecoration: "none" }}>
              Especialista
            </SiteLink>
          </li>
          <li>
            <SiteLink
              href="/el-club-real-aesthetic/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              El Club
            </SiteLink>
          </li>
          <li>
            <SiteLink href="/financiacion/" style={{ color: "inherit", textDecoration: "none" }}>
              Financiación
            </SiteLink>
          </li>
          <li>
            <SiteLink href="/contacto/" style={{ color: "inherit", textDecoration: "none" }}>
              Contacto
            </SiteLink>
          </li>
        </ul>{" "}
        <SiteLink href="/reservar/" className="nav-cta">
          Reservar
        </SiteLink>{" "}
      </nav>{" "}
      {/* HERO */}{" "}
      <section className="about-hero">
        {" "}
        <div className="about-hero-photo">
          {" "}
          <img
            src="/img/doctor.webp"
            alt="Ronal Perdomo Lugo, APRN, FNP-C"
            loading="eager"
            fetchPriority="high"
          />{" "}
        </div>{" "}
        <div className="about-hero-text">
          {" "}
          <span className="pretitle">El practicante</span>{" "}
          <h1>
            Ronal <em>Perdomo Lugo</em>
          </h1>{" "}
          <p className="credentials">APRN, FNP-C</p>{" "}
          <p className="role">Aesthetic Nurse Practitioner — Experto en láser e inyectables</p>{" "}
          <p className="tagline-line">
            Estética refinada. Resultados naturales. Tecnología de vanguardia.
          </p>{" "}
        </div>{" "}
      </section>{" "}
      {/* PHILOSOPHY */}{" "}
      <section className="philosophy">
        {" "}
        <div className="philosophy-inner">
          {" "}
          <span className="eyebrow">Filosofía</span>{" "}
          <h2>
            Belleza <em>hecha a tu medida</em>.
          </h2>{" "}
          <p className="lede">
            Realzar tus rasgos naturales con inyectables de precisión, tecnología láser avanzada y
            procedimientos mínimamente invasivos — diseñados para entregar resultados sutiles,
            equilibrados y duraderos.
          </p>{" "}
        </div>{" "}
      </section>{" "}
      {/* BIO BLOCK */}{" "}
      <section className="bio-block">
        {" "}
        <div className="bio-grid">
          {" "}
          <div className="bio-photo">
            {" "}
            <img src="/img/doctor-linen.webp" alt="Ronal Perdomo Lugo" loading="lazy" />{" "}
          </div>{" "}
          <div className="bio-copy">
            {" "}
            <span className="eyebrow">Sobre Ronal</span>{" "}
            <h2>
              Donde el cuidado se cruza con la <em>precisión</em>.
            </h2>{" "}
            <p>
              En Real Aesthetic Medical Spa, la atención al paciente se une a la precisión médica.
              Ronal Perdomo Lugo, APRN, FNP-C, es Practicante de Enfermería Familiar certificado,
              con dedicación específica a la medicina estética y láser.
            </p>{" "}
            <p>
              Con un compromiso firme con la seguridad, la artesanía y la innovación, cada
              tratamiento se personaliza para realzar la belleza natural conservando la armonía
              facial.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* CREDENTIALS */}{" "}
      <section className="credentials">
        {" "}
        <div className="creds-inner">
          {" "}
          <span className="eyebrow">Credenciales</span>{" "}
          <h2>
            Formación y <em>certificaciones</em>
          </h2>{" "}
          <ul className="creds-list">
            <li>
              {" "}
              <strong>APRN, FNP-C</strong>{" "}
              <span>
                Enfermera/o de Práctica Avanzada · Practicante de Enfermería Familiar —
                Certificación oficial vigente.
              </span>{" "}
            </li>
            <li>
              {" "}
              <strong>Medicina estética y láser</strong>{" "}
              <span>
                Especialización en inyectables, tecnología láser y protocolos estéticos mínimamente
                invasivos.
              </span>{" "}
            </li>
            <li>
              {" "}
              <strong>Atención centrada en el paciente</strong>{" "}
              <span>
                Compromiso con la seguridad, la artesanía y resultados que respetan la anatomía de
                cada persona.
              </span>{" "}
            </li>
            <li>
              {" "}
              <strong>Práctica en Miami, FL</strong>{" "}
              <span>
                Real Aesthetic Medical Spa · 8360 W Flagler St, Suite 108 · Miami, FL.
              </span>{" "}
            </li>
          </ul>{" "}
        </div>{" "}
      </section>{" "}
      {/* FINAL CTA */}{" "}
      <section className="cta-final">
        {" "}
        <div className="cta-final-inner">
          {" "}
          <span className="eyebrow">Empieza</span>{" "}
          <h2>
            ¿Lista/o para <em>empezar</em>?
          </h2>{" "}
          <p>
            Reserva una consulta privada. Escuchamos primero — cada protocolo se construye en torno
            a tu anatomía, tu tiempo y tus objetivos.
          </p>{" "}
          <div className="cta-row">
            {" "}
            <SiteLink className="primary" href="/reservar/">
              Reservar consulta
            </SiteLink>{" "}
            <SiteLink className="ghost" href="/tratamientos/">
              Ver tratamientos
            </SiteLink>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* FOOTER */}{" "}
      <nav className="bottom-bar" aria-label="Navegación móvil">
        {" "}
        <SiteLink href="/" className="bb-item" aria-label="Inicio">
          {" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 11l9-8 9 8" />
            <path d="M5 10v10h14V10" />
            <path d="M10 20v-6h4v6" />
          </svg>{" "}
          <span>Inicio</span>{" "}
        </SiteLink>{" "}
        <SiteLink href="/tratamientos/" className="bb-item" aria-label="Tratamientos">
          {" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3l1.6 4.8L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.2z" />
            <path d="M19 16l.9 2.4L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.6z" />
          </svg>{" "}
          <span>Tratamientos</span>{" "}
        </SiteLink>{" "}
        <SiteLink href="/reservar/" className="bb-cta" aria-label="Reservar">
          {" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="6" width="16" height="14" rx="2" />
            <path d="M4 10h16" />
            <path d="M8 4v4" />
            <path d="M16 4v4" />
            <path d="M9 15l2 2 4-4" />
          </svg>{" "}
        </SiteLink>{" "}
        <SiteLink href="/el-club-real-aesthetic/" className="bb-item" aria-label="El Club">
          {" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l2.39 4.84L20 8l-4 3.9.94 5.5L12 14.77 7.06 17.4 8 11.9 4 8l5.61-1.16L12 2z" />
          </svg>{" "}
          <span>Club</span>{" "}
        </SiteLink>{" "}
        <a
          href="https://wa.me/17862443722"
          target="_blank"
          rel="noopener"
          className="bb-item"
          aria-label="WhatsApp"
        >
          {" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-3.5-7.1L21 4l-1 3.4A9 9 0 0 1 21 12z" />
            <path d="M8 10c0-1 1-2 2-2 .5 0 1 .3 1.2.8L12 11l-1.5 1.5a8 8 0 0 0 3 3L15 14l2.2.8c.5.2.8.7.8 1.2 0 1-1 2-2 2-3.5 0-8-4.5-8-8z" />
          </svg>{" "}
          <span>WhatsApp</span>{" "}
        </a>{" "}
      </nav>
      <SiteChrome lang="es" />
    </>
  );
}
