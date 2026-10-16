// Page markup converted from https://realaestheticmedspa.com/
import css from "@/styles/pages/home-es.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";
import { useHomePage } from "@/site/behaviors";

export default function HomeEs() {
  useHomePage();
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Idioma">
        <SiteLink href="/en/">EN</SiteLink>
        <span>·</span>
        <a href="" className="active">
          ES
        </a>
      </div>{" "}
      <nav className="top" id="topnav">
        {" "}
        <a href="#" className="brand">
          {" "}
          <picture>
            <source media="(max-width: 768px)" srcSet="/img/logo-horizontal.webp" />
            <img src="/img/logo.webp" alt="Real Aesthetic Medical Spa" />
          </picture>{" "}
        </a>{" "}
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
          Agendar
        </SiteLink>{" "}
      </nav>{" "}
      <div className="pager" id="pager">
        {" "}
        <span className="active" />
        <span />
        <span />
        <span />
        <span />{" "}
      </div>{" "}
      <div className="hint" id="hint">
        Scroll · ↓ · Swipe
      </div>{" "}
      {/* HERO */}{" "}
      <section className="hero">
        {" "}
        <div className="hero-bg" data-parallax="0.3" />{" "}
        <div className="hero-block">
          {" "}
          <span className="pretitle">Miami, Florida</span>{" "}
          <h1>
            Real Aesthetic <em>Medical Spa</em>
          </h1>{" "}
          <p className="doctor-line">
            Ronal Perdomo Lugo, APRN, FNP-C — Aesthetic Nurse Practitioner
          </p>{" "}
          <SiteLink className="cta" href="/reservar/">
            Agendar consulta
          </SiteLink>{" "}
        </div>{" "}
        <a href="#treatments" className="hero-scrollcue">
          Tratamientos
          <span className="line" />
        </a>{" "}
      </section>{" "}
      {/* PILLARS */}{" "}
      <section className="pillars" id="pillars">
        {" "}
        <div className="pillars-header">
          {" "}
          <span className="eyebrow">Qué nos diferencia</span>{" "}
          <h2>
            Cinco principios. <em>Un solo estándar.</em>
          </h2>{" "}
          <p className="lede">
            La arquitectura detrás de cada consulta, cada protocolo, cada resultado en Real
            Aesthetic.
          </p>{" "}
        </div>{" "}
        <div className="pillars-grid">
          {" "}
          <div className="pillar">
            {" "}
            <div className="icon" aria-hidden="true">
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L4 6v6c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V6l-8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>{" "}
            </div>{" "}
            <h3>Supervisión médica</h3>{" "}
            <p>
              Cada tratamiento es diseñado y supervisado por Ronal Perdomo Lugo, APRN, FNP-C — nunca
              delegado a técnicos.
            </p>{" "}
          </div>{" "}
          <div className="pillar">
            {" "}
            <div className="icon" aria-hidden="true">
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>{" "}
            </div>{" "}
            <h3>Tecnología premium</h3>{" "}
            <p>
              Fotona, endoláser, bioestimuladores y terapia con exosomas — herramientas médicas de
              última generación, calibradas por el especialista.
            </p>{" "}
          </div>{" "}
          <div className="pillar">
            {" "}
            <div className="icon" aria-hidden="true">
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 14c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z" />
                <path d="M5 21c1-3.5 4-5 7-5s6 1.5 7 5" />
              </svg>{" "}
            </div>{" "}
            <h3>Atención personalizada</h3>{" "}
            <p>
              Sin paquetes genéricos. Cada protocolo se construye en torno a tu anatomía, tu ritmo y
              tus objetivos.
            </p>{" "}
          </div>{" "}
          <div className="pillar">
            {" "}
            <div className="icon" aria-hidden="true">
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s-7-4.5-7-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-7 11-7 11h-4z" />
              </svg>{" "}
            </div>{" "}
            <h3>Resultados naturales</h3>{" "}
            <p>
              El paciente no se transforma; se revela. Sin firma visible, sin rostros predecibles.
            </p>{" "}
          </div>{" "}
          <div className="pillar">
            {" "}
            <div className="icon" aria-hidden="true">
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 1 1-3-6.7" />
                <polyline points="21 4 21 9 16 9" />
              </svg>{" "}
            </div>{" "}
            <h3>Seguimiento continuo</h3>{" "}
            <p>
              El resultado no termina en cabina. Visitas de control, ajustes y mantenimiento
              incluidos en cada plan.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* TREATMENTS */}{" "}
      <div className="treatments-pin" id="treatmentsPin">
        {" "}
        <div className="treatments">
          {" "}
          <div className="treatments-track" id="track">
            {" "}
            <section className="treatment t-endolaser" id="treatments">
              {" "}
              <div className="t-bg" /> <div className="t-megaword">ENDOLASER</div>{" "}
              <div className="t-caption">
                <span className="eyebrow">01 · Esculpido corporal</span>
                <h2>Endoláser</h2>
                <p className="tag">
                  Esculpido sin cirugía, supervisado por Ronal Perdomo Lugo, APRN, FNP-C
                </p>
                <SiteLink href="/tratamientos/endolaser-areas-pequenas/">
                  Conocer el protocolo
                </SiteLink>
              </div>{" "}
              <div className="t-index-num">01</div>{" "}
            </section>{" "}
            <section className="treatment t-fotona">
              {" "}
              <div className="t-bg" /> <div className="t-megaword">FOTONA</div>{" "}
              <div className="t-caption">
                <span className="eyebrow">02 · Tecnología láser</span>
                <h2>Fotona TightSculpting</h2>
                <p className="tag">Cuatro modalidades, una sola sesión, resultados visibles</p>
                <SiteLink href="/tratamientos/fotona-4d/">Conocer el protocolo</SiteLink>
              </div>{" "}
              <div className="t-index-num">02</div>{" "}
            </section>{" "}
            <section className="treatment t-sculptra">
              {" "}
              <div className="t-bg" /> <div className="t-megaword">SCULPTRA</div>{" "}
              <div className="t-caption">
                <span className="eyebrow">03 · Bioestimuladores</span>
                <h2>Sculptra</h2>
                <p className="tag">
                  Ácido poli-L-láctico — colágeno propio progresivo en dos a tres sesiones
                </p>
                <SiteLink href="/tratamientos/sculptra/">Conocer el protocolo</SiteLink>
              </div>{" "}
              <div className="t-index-num">03</div>{" "}
            </section>{" "}
            <section className="treatment t-radiesse">
              {" "}
              <div className="t-bg" /> <div className="t-megaword">RADIESSE</div>{" "}
              <div className="t-caption">
                <span className="eyebrow">04 · Bioestimuladores</span>
                <h2>Radiesse</h2>
                <p className="tag">
                  Hidroxiapatita cálcica — volumen inmediato y colágeno estructural duradero
                </p>
                <SiteLink href="/tratamientos/radiesse/">Conocer el protocolo</SiteLink>
              </div>{" "}
              <div className="t-index-num">04</div>{" "}
            </section>{" "}
            <section className="treatment t-pdrn">
              {" "}
              <div className="t-bg" /> <div className="t-megaword">PDRN</div>{" "}
              <div className="t-caption">
                <span className="eyebrow">05 · Mesoterapia avanzada</span>
                <h2>PDRN + Exosomas</h2>
                <p className="tag">Regeneración celular en su tier más premium</p>
                <SiteLink href="/tratamientos/regeneracion-piel-pdrn/">
                  Conocer el protocolo
                </SiteLink>
              </div>{" "}
              <div className="t-index-num">05</div>{" "}
            </section>{" "}
            <section className="treatment t-explora">
              {" "}
              <div className="t-bg" /> <div className="t-megaword">EXPLORA</div>{" "}
              <div className="t-caption">
                <span className="eyebrow">Catálogo completo</span>
                <h2>Más allá de los cinco esenciales</h2>
                <p className="tag">
                  Más de 50 protocolos curados por Ronal Perdomo Lugo, APRN, FNP-C
                </p>
                <SiteLink href="/tratamientos/">Ver todos los tratamientos</SiteLink>
              </div>{" "}
              <div className="t-index-num">06</div>{" "}
            </section>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* STATS */}{" "}
      <section className="stats">
        {" "}
        <div className="stats-grid">
          {" "}
          <div className="stat">
            {" "}
            <div className="num">10+</div> <div className="lbl">Años en medicina estética</div>{" "}
          </div>{" "}
          <div className="stat">
            {" "}
            <div className="num">2,000+</div> <div className="lbl">Pacientes tratados</div>{" "}
          </div>{" "}
          <div className="stat">
            {" "}
            <div className="num">50+</div> <div className="lbl">Protocolos curados</div>{" "}
          </div>{" "}
          <div className="stat">
            {" "}
            <div className="num">100%</div> <div className="lbl">Supervisión médica</div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* DOCTOR / PRACTITIONER */}{" "}
      <section className="doctor" id="doctor">
        {" "}
        <div className="doctor-grid">
          {" "}
          <div className="doctor-portrait">
            {" "}
            <img src="/img/doctor.webp" alt="Ronal Perdomo Lugo, APRN, FNP-C" loading="lazy" />{" "}
          </div>{" "}
          <div className="doctor-copy">
            {" "}
            <span className="eyebrow">El especialista</span>{" "}
            <h2>
              Ronal <em>Perdomo Lugo</em>
            </h2>{" "}
            <p className="role">APRN, FNP-C — Aesthetic Nurse Practitioner</p>{" "}
            <p className="bio">
              En Real Aesthetic Medical Spa, el cuidado del paciente se une con la precisión médica.
              Ronal es un Enfermero Practicante de Familia certificado con experiencia enfocada en
              estética y medicina láser — cada tratamiento personalizado para realzar la belleza
              natural manteniendo la armonía facial.
            </p>{" "}
            <div className="doctor-cta">
              {" "}
              <SiteLink className="primary" href="/sobre/">
                Conoce a Ronal
              </SiteLink>{" "}
              <SiteLink className="ghost" href="/reservar/">
                Agendar consulta
              </SiteLink>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* METHOD */}{" "}
      <section className="metodo" id="method">
        {" "}
        <div className="metodo-header">
          {" "}
          <span className="eyebrow">El protocolo</span>{" "}
          <h2>
            El Método <em>Real Aesthetic</em>
          </h2>{" "}
          <p className="lede">Cuatro pasos pensados para una sola decisión: la suya.</p>{" "}
        </div>{" "}
        <ol className="metodo-timeline">
          <li className="step">
            {" "}
            <div className="step-num">01</div>{" "}
            <div className="step-icon" aria-hidden="true">
              {" "}
              <svg
                viewBox="0 0 26 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
              >
                <circle cx="13" cy="13" r="11" />
                <circle cx="13" cy="13" r="6" />
                <circle cx="13" cy="13" r="1.4" fill="currentColor" stroke="none" />
              </svg>{" "}
            </div>{" "}
            <h3>Consulta privada</h3>{" "}
            <p>
              Una conversación íntima. Escuchamos antes de hablar — entendemos tus objetivos, tu
              tiempo, tu rostro.
            </p>{" "}
          </li>
          <li className="step">
            {" "}
            <div className="step-num">02</div>{" "}
            <div className="step-icon" aria-hidden="true">
              {" "}
              <svg
                viewBox="0 0 26 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
              >
                <line x1="13" y1="2" x2="13" y2="24" />
                <line x1="2" y1="13" x2="24" y2="13" />
                <circle cx="13" cy="2" r="1" fill="currentColor" stroke="none" />
                <circle cx="13" cy="24" r="1" fill="currentColor" stroke="none" />
                <circle cx="2" cy="13" r="1" fill="currentColor" stroke="none" />
                <circle cx="24" cy="13" r="1" fill="currentColor" stroke="none" />
                <circle cx="13" cy="13" r="3.5" />
              </svg>{" "}
            </div>{" "}
            <h3>Diagnóstico médico</h3>{" "}
            <p>
              Análisis facial y corporal con criterio quirúrgico. La evidencia guía cada decisión,
              no la moda del momento.
            </p>{" "}
          </li>
          <li className="step">
            {" "}
            <div className="step-num">03</div>{" "}
            <div className="step-icon" aria-hidden="true">
              {" "}
              <svg
                viewBox="0 0 26 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinejoin="round"
              >
                <polygon points="13,2 23,7.5 23,18.5 13,24 3,18.5 3,7.5" />
                <polygon points="13,7.5 18.5,10.5 18.5,15.5 13,18.5 7.5,15.5 7.5,10.5" />
              </svg>{" "}
            </div>{" "}
            <h3>Protocolo a medida</h3>{" "}
            <p>
              El especialista diseña el plan completo. Cada sesión, cada producto, cada intervalo —
              calculado para tu biología.
            </p>{" "}
          </li>
          <li className="step">
            {" "}
            <div className="step-num">04</div>{" "}
            <div className="step-icon" aria-hidden="true">
              {" "}
              <svg
                viewBox="0 0 26 26"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 13 m-1.4 0 a1.4 1.4 0 1 0 2.8 0 a1.4 1.4 0 1 0 -2.8 0" />
                <path d="M13 13 c0-3 3-4.5 5.8-1.5 s1 7.5-3 8.5 s-9.5-1.5-9.5-7.5 s7-9.5 12-7 s6.5 11 1.5 14.5" />
              </svg>{" "}
            </div>{" "}
            <h3>Seguimiento continuo</h3>{" "}
            <p>
              El resultado no termina en cabina. Visitas de control, ajustes y mantenimiento — tu
              rostro como un cuidado vivo.
            </p>{" "}
          </li>
        </ol>{" "}
      </section>{" "}
      {/* REVIEWS */}{" "}
      <section className="reviews" id="reviews">
        {" "}
        <div className="reviews-header">
          {" "}
          <span className="eyebrow">Pacientes</span>{" "}
          <h2>
            Voces que <em>nos importan</em>
          </h2>{" "}
          <p className="lede">
            Quienes han confiado su rostro y su tiempo al criterio de Ronal Perdomo Lugo.
          </p>{" "}
        </div>{" "}
        <div className="reviews-grid">
          {" "}
          <article className="review">
            {" "}
            <div className="quote-mark">“</div>{" "}
            <div className="stars" aria-label="5 sobre 5">
              ◆ ◆ ◆ ◆ ◆
            </div>{" "}
            <blockquote>
              El especialista escuchó antes de hablar. El resultado se nota — no se ve. Es
              exactamente la diferencia que buscaba.
            </blockquote>{" "}
            <footer>
              {" "}
              <cite>Andrea M.</cite> <span className="tag">Endoláser · 3 sesiones</span>{" "}
            </footer>{" "}
          </article>{" "}
          <article className="review">
            {" "}
            <div className="quote-mark">“</div>{" "}
            <div className="stars" aria-label="5 sobre 5">
              ◆ ◆ ◆ ◆ ◆
            </div>{" "}
            <blockquote>
              He probado varios spas en Miami. Real Aesthetic es el primero donde sentí que tomaban
              una decisión médica, no comercial.
            </blockquote>{" "}
            <footer>
              {" "}
              <cite>Carolina V.</cite> <span className="tag">Sculptra + PDRN</span>{" "}
            </footer>{" "}
          </article>{" "}
          <article className="review">
            {" "}
            <div className="quote-mark">“</div>{" "}
            <div className="stars" aria-label="5 sobre 5">
              ◆ ◆ ◆ ◆ ◆
            </div>{" "}
            <blockquote>
              Una atención impecable, un protocolo a la medida y un seguimiento que no termina al
              salir de la cabina. Volveré.
            </blockquote>{" "}
            <footer>
              {" "}
              <cite>Marisol G.</cite> <span className="tag">Fotona TightSculpting</span>{" "}
            </footer>{" "}
          </article>{" "}
        </div>{" "}
      </section>{" "}
      {/* CTA STRIP */}{" "}
      <section className="cta-strip">
        {" "}
        <div className="cta-strip-bg" data-parallax="0.4" />{" "}
        <div className="cta-strip-block">
          {" "}
          <span className="eyebrow">Empieza tu protocolo</span>{" "}
          <h2>
            ¿Lista para <em>empezar</em>?
          </h2>{" "}
          <p>
            Una consulta privada con Ronal Perdomo Lugo. Sin presión comercial, sin compromiso —
            solo una conversación sobre lo que es posible.
          </p>{" "}
          <SiteLink className="cta" href="/reservar/">
            Agendar consulta
          </SiteLink>{" "}
        </div>{" "}
      </section>{" "}
      {/* FOOTER */}{" "}
      <nav className="bottom-bar" aria-label="Navegación móvil">
        {" "}
        <a href="#" className="bb-item" aria-label="Inicio">
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
        </a>{" "}
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
          <span>Tratam.</span>{" "}
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
