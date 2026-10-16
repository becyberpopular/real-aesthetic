// Page markup converted from https://realaestheticmedspa.com/contacto/
import css from "@/styles/pages/contact.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";

export default function ContactEs() {
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Idioma">
        <SiteLink href="/contact/">EN</SiteLink>
        <span>·</span>
        <SiteLink href="/contacto/" className="active">
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
            <SiteLink href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Inicio
            </SiteLink>
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
          <li>
            <SiteLink href="/financiacion/" style={{ color: "inherit", textDecoration: "none" }}>
              Financiación
            </SiteLink>
          </li>
          <li className="active">
            <SiteLink href="/contacto/">Contacto</SiteLink>
          </li>
        </ul>{" "}
        <SiteLink href="/contacto/#book" className="nav-cta">
          Reservar
        </SiteLink>{" "}
      </nav>{" "}
      <main>
        {" "}
        <section className="page-hero">
          {" "}
          <span className="pretitle">Contacto</span>{" "}
          <h1>
            Hablemos. <em>Estamos para escucharte.</em>
          </h1>{" "}
          <p className="lede">
            Tu transformación empieza con una conversación. Escríbenos, llámanos o agenda
            directamente una visita — respondemos personalmente en menos de 24 horas.
          </p>{" "}
        </section>{" "}
        <section className="contact-cards">
          {" "}
          <article className="c-card">
            {" "}
            <div className="ico">
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
            </div>{" "}
            <span className="label">WhatsApp</span>{" "}
            <p className="value">
              <a href="https://wa.me/17862443722" target="_blank" rel="noopener">
                +1 786-244-3722
              </a>
            </p>{" "}
            <p className="hint">Respuesta el mismo día en horario de clínica.</p>{" "}
          </article>{" "}
          <article className="c-card">
            {" "}
            <div className="ico">
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>{" "}
            </div>{" "}
            <span className="label">Correo</span>{" "}
            <p className="value">
              <a href="mailto:info@realaestheticmedspa.com">info@realaestheticmedspa.com</a>
            </p>{" "}
            <p className="hint">Te contestamos en menos de 24h.</p>{" "}
          </article>{" "}
          <article className="c-card">
            {" "}
            <div className="ico">
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>{" "}
            </div>{" "}
            <span className="label">Visítanos</span>{" "}
            <p className="value">
              8360 W Flagler St, Suite 108
              <br />
              Miami, FL 33144
            </p>{" "}
            <p className="hint">Con cita previa.</p>{" "}
          </article>{" "}
        </section>{" "}
        <section className="form-block" id="book">
          {" "}
          <div className="copy">
            {" "}
            <h2>
              Reserva tu <em>visita</em>
            </h2>{" "}
            <p className="lede">
              Escuchamos, exploramos y diseñamos un plan a la medida de tu piel y tus objetivos.
            </p>{" "}
            <ul>
              <li>Conversación inicial con nuestro equipo</li>
              <li>Evaluación de piel y contorno</li>
              <li>Plan personalizado con presupuesto claro</li>
              <li>Reagenda sin coste hasta 24h antes de la visita</li>
            </ul>{" "}
          </div>{" "}
          <div className="form-wrap">
            {" "}
            <iframe
              src="https://be.realaestheticmedspa.com/widget/form/CUjPYAeiwypGSnt7DLWC"
              style={{ width: "100%", minHeight: "1040px", border: "none", borderRadius: "8px" }}
              id="inline-CUjPYAeiwypGSnt7DLWC"
              data-layout={"{'id':'INLINE'}"}
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="pub_contact_es_v1"
              data-height="1028"
              data-layout-iframe-id="inline-CUjPYAeiwypGSnt7DLWC"
              data-form-id="CUjPYAeiwypGSnt7DLWC"
              title="pub_contact_es_v1"
            >
              {" "}
            </iframe>{" "}
            <script
              data-cfasync="false"
              src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
            />
            <script src="https://be.realaestheticmedspa.com/js/form_embed.js" defer />{" "}
          </div>{" "}
        </section>{" "}
        <section className="visit-block">
          {" "}
          <div>
            {" "}
            <h2>
              Nuestro <em>estudio</em>
            </h2>{" "}
            <p className="lede">
              En West Flagler Street, Miami. Acceso fácil desde Brickell, Coral Gables y Doral.
            </p>{" "}
            <p className="addr">
              8360 W Flagler St, Suite 108
              <br />
              Miami, FL 33144 · Estados Unidos
            </p>{" "}
            <a
              className="map-cta"
              href="https://maps.google.com/?q=8360+W+Flagler+St+Suite+108+Miami+FL+33144"
              target="_blank"
              rel="noopener"
            >
              Cómo llegar →
            </a>{" "}
          </div>{" "}
          <article className="hours-card">
            {" "}
            <span className="label">Horario</span> <h3>Con cita previa</h3>{" "}
            <p className="lede">
              Atendemos con cita previa para dedicarte el tiempo que mereces. Reagenda sin coste
              hasta 24h antes de tu visita.
            </p>{" "}
            <ul>
              <li>
                <span>Lunes – Viernes</span>
                <span>10:00 AM – 7:00 PM</span>
              </li>
              <li>
                <span>Sábado</span>
                <span>Solo miembros / Con cita previa</span>
              </li>
              <li className="closed">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>{" "}
          </article>{" "}
        </section>{" "}
        <aside className="map-card">
          {" "}
          <div className="map-frame">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4598!2d-80.3336256!3d25.7691441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9db51e8ba85%3A0x502bbb27de268ada!2sReal%20Aesthetic%20Medical%20Spa!5e0!3m2!1sen!2sus!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Real Aesthetic Medical Spa — mapa Miami"
            />{" "}
            <div className="map-overlay" aria-hidden="true" />{" "}
          </div>{" "}
          <div className="map-meta">
            {" "}
            <div>
              {" "}
              <span className="eyebrow">Visítanos</span>{" "}
              <p className="addr-name">Real Aesthetic Medical Spa</p>{" "}
              <p className="addr-line">
                8360 W Flagler St, Suite 108
                <br />
                Miami, FL 33144 · Estados Unidos
              </p>{" "}
            </div>{" "}
            <a
              className="map-cta-pill"
              href="https://maps.app.goo.gl/znjSbem6dVZXxbJLA"
              target="_blank"
              rel="noopener"
            >
              {" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="16"
                height="16"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>{" "}
              Abrir en Google Maps{" "}
            </a>{" "}
          </div>{" "}
        </aside>{" "}
        <section className="spacer" />{" "}
      </main>{" "}
      {/* FOOTER */}{" "}
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
        <SiteLink href="/contacto/#book" className="bb-cta" aria-label="Reservar">
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
