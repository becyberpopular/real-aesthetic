// Page markup converted from https://realaestheticmedspa.com/financiacion/
import css from "@/styles/pages/financing-es.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";
import { useFinancingPage } from "@/site/behaviors";

export default function FinancingEs() {
  useFinancingPage("es");
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Idioma">
        <SiteLink href="/financing/">EN</SiteLink>
        <span>·</span>
        <SiteLink href="/financiacion/" className="active">
          ES
        </SiteLink>
      </div>{" "}
      <nav className="top">
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
            <SiteLink href="/">Inicio</SiteLink>
          </li>
          <li>
            <SiteLink href="/tratamientos/">Tratamientos</SiteLink>
          </li>
          <li>
            <SiteLink href="/sobre/">Especialista</SiteLink>
          </li>
          <li>
            <SiteLink href="/el-club-real-aesthetic/">El Club</SiteLink>
          </li>
          <li className="active">
            <SiteLink href="/financiacion/">Financiación</SiteLink>
          </li>
          <li>
            <SiteLink href="/contacto/">Contacto</SiteLink>
          </li>
        </ul>{" "}
        <SiteLink href="/reservar/" className="nav-cta">
          Reservar
        </SiteLink>{" "}
      </nav>{" "}
      <main>
        {" "}
        <section className="page-hero">
          {" "}
          <span className="pretitle">Financiación</span>{" "}
          <h1>
            Tu tratamiento, <em>a tu ritmo</em>.
          </h1>{" "}
          <p className="lede">
            Hemos elegido a Cherry como partner de financiación porque comparte nuestra forma de
            entender el cuidado: claro, sin sorpresas y diseñado para que decidas con tranquilidad.
          </p>{" "}
        </section>{" "}
        {/* CHERRY WIDGET BEGIN (Full Page · ES) */}{" "}
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@200..900&family=Slabo+27px:wght@200..900&family=Lato:wght@200..900&family=Raleway:wght@200..900&family=Montserrat:wght@200..900&family=Oswald:wght@200..900&family=Poppins:wght@200..900&family=Source+Sans+Pro:wght@200..900&family=PT+Sans:wght@200..900&family=Open+Sans:wght@200..900&display=swap"
          }
          rel="stylesheet"
        />{" "}
        <script>
          {" "}
          (function (w, d, s, o, f, js, fjs) &#123; w[o] = w[o] || function () &#123; (w[o].q =
          w[o].q || []).push(arguments); &#125;; (js = d.createElement(s)), (fjs =
          d.getElementsByTagName(s)[0]); js.id = o; js.src = f; js.async = 1;
          fjs.parentNode.insertBefore(js, fjs); &#125;)(window, document, "script", "_hw",
          "https://files.withcherry.com/widgets/widget.js"); _hw("init", &#123; debug: false,
          variables: &#123; slug: 'real-aesthetic-medical-spa-llc', name: 'Real Aesthetic Medical
          Spa LLC', images: [24], customLogo:
          'https://realaestheticmedspa.com/img/logo-horizontal.webp', defaultPurchaseAmount: 750,
          customImage: '', imageCategory: 'medspa', language: 'es', &#125;, styles: &#123;
          primaryColor: '#0e3a2c', secondaryColor: '#d4a857', fontFamily: 'Montserrat',
          headerFontFamily: 'Montserrat', &#125; &#125;,
          ['hero','calculator','howitworks','faq']);{" "}
        </script>{" "}
        <section className="cherry-wrap">
          {" "}
          <div id="all" /> <div id="hero" /> <div id="calculator" /> <div id="howitworks" />{" "}
          <div id="testimony" /> <div id="faq" />{" "}
        </section>{" "}
        {/* CHERRY WIDGET END */}{" "}
        <section className="promise">
          {" "}
          <header className="promise-header">
            {" "}
            <h2>
              Por qué <em>elegimos Cherry</em>.
            </h2>{" "}
            <p className="lede">
              Tres razones por las que Cherry encaja con la forma en que entendemos la medicina
              estética.
            </p>{" "}
          </header>{" "}
          <div className="promise-grid">
            {" "}
            <article className="promise-card">
              {" "}
              <span className="num">01</span> <h3>Sin sorpresas</h3>{" "}
              <p>
                Pre-calificación sin verificación dura de crédito. Sabrás de inmediato qué opciones
                tienes, sin afectar tu puntaje.
              </p>{" "}
            </article>{" "}
            <article className="promise-card">
              {" "}
              <span className="num">02</span> <h3>Tu tratamiento, tu cadencia</h3>{" "}
              <p>
                Planes desde seis semanas hasta sesenta meses. Eliges la cuota que encaja con tu
                mes, no la que te obligan a aceptar.
              </p>{" "}
            </article>{" "}
            <article className="promise-card">
              {" "}
              <span className="num">03</span> <h3>Decisión en segundos</h3>{" "}
              <p>
                Respuesta inmediata. Sin papeleos extensos, sin esperas y con aprobaciones de hasta
                cincuenta mil dólares.
              </p>{" "}
            </article>{" "}
          </div>{" "}
        </section>{" "}
        <section className="final-cta">
          {" "}
          <h2>
            ¿Lista para empezar? <em>Tienes dos caminos</em>.
          </h2>{" "}
          <p className="lede">
            Pre-califica con Cherry en sesenta segundos, o reserva una consulta y diseñamos juntos
            tu protocolo y la financiación que mejor te acompañe.
          </p>{" "}
          <div className="ctas">
            {" "}
            <a
              className="primary"
              target="_blank"
              rel="noopener"
              href={
                "https://pay.withcherry.com/real-aesthetic-medical-spa-llc?utm_source=merchant&utm_medium=website"
              }
            >
              Pre-calificar con Cherry →
            </a>{" "}
            <SiteLink className="secondary" href="/reservar/">
              Reservar consulta
            </SiteLink>{" "}
          </div>{" "}
        </section>{" "}
        <div className="disclaimer">
          {" "}
          <p>
            Las opciones de pago a plazos son ofrecidas por Cherry Technologies, Inc. y sus
            prestamistas asociados. La aprobación, las tasas (APR) y los plazos dependen del perfil
            crediticio de cada solicitante. Real Aesthetic Medical Spa LLC no es prestamista y no
            concede crédito. Consulta los términos completos y la lista de prestamistas en
            withcherry.com/lending-partners.
          </p>{" "}
        </div>{" "}
      </main>{" "}
      <nav className="bottom-bar" aria-label="Mobile navigation">
        {" "}
        <SiteLink href="/" className="bb-item" aria-label="Inicio">
          {" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V11z" />
          </svg>{" "}
          <span>Inicio</span>{" "}
        </SiteLink>{" "}
        <SiteLink href="/tratamientos/" className="bb-item" aria-label="Tratamientos">
          {" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>{" "}
          <span>Tratam.</span>{" "}
        </SiteLink>{" "}
        <SiteLink href="/reservar/" className="bb-cta" aria-label="Reservar">
          {" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
            <polyline points="9 16 11 18 15 14" />
          </svg>{" "}
        </SiteLink>{" "}
        <SiteLink href="/financiacion/" className="bb-item active" aria-label="Financiación">
          {" "}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <line x1="2" y1="10" x2="22" y2="10" />
            <line x1="6" y1="14" x2="10" y2="14" />
          </svg>{" "}
          <span>Pago</span>{" "}
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
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>{" "}
          <span>WhatsApp</span>{" "}
        </a>{" "}
      </nav>
      <SiteChrome lang="es" />
    </>
  );
}
