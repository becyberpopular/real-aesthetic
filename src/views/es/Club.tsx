// Page markup converted from https://realaestheticmedspa.com/el-club-real-aesthetic/
import css from "@/styles/pages/club.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";
import { useTopNavOnScroll } from "@/site/behaviors";

export default function ClubEs() {
  useTopNavOnScroll();
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Idioma">
        <SiteLink href="/the-real-aesthetic-club/">EN</SiteLink>
        <span>·</span>
        <SiteLink href="/el-club-real-aesthetic/" className="active">
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
          <li className="active">
            <SiteLink href="/el-club-real-aesthetic/">El Club</SiteLink>
          </li>
          <li>
            <SiteLink href="/financiacion/" style={{ color: "inherit", textDecoration: "none" }}>
              Financiación
            </SiteLink>
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
          <span className="pretitle">Socios</span>{" "}
          <h1>
            Bienvenida al <em>Club Real Aesthetic</em>.
          </h1>{" "}
          <p className="lede">
            Un solo plan, pensado para quienes ven en su piel un cuidado continuo: crédito
            acumulable, precios de socio y beneficios exclusivos.
          </p>{" "}
        </section>{" "}
        <section className="pillars">
          {" "}
          <header className="pillars-header">
            {" "}
            <h2>
              El espíritu del Club — tres principios que <em>protegen a quienes pertenecen</em>.
            </h2>{" "}
          </header>{" "}
          <div className="pillars-grid">
            {" "}
            <article className="pillar">
              {" "}
              <h3>Crédito que se acumula</h3>{" "}
              <p>Lo que no usas este mes, te espera el siguiente.</p>{" "}
            </article>{" "}
            <article className="pillar">
              {" "}
              <h3>Slots reservados</h3> <p>Disponibilidad garantizada en horarios premium.</p>{" "}
            </article>{" "}
            <article className="pillar">
              {" "}
              <h3>Precios miembro</h3> <p>Tarifas exclusivas en Botox, fillers y láser.</p>{" "}
            </article>{" "}
          </div>{" "}
        </section>{" "}
        <section className="plan">
          {" "}
          <article className="plan-card">
            {" "}
            <div className="img" role="img" aria-label="Real Aesthetic Club" />{" "}
            <div className="body">
              {" "}
              <span className="eyebrow">Real Aesthetic Club</span> <h3>Real Aesthetic Club</h3>{" "}
              <p className="price">
                $199 <em>/ mes</em>
              </p>{" "}
              <p className="desc">
                Un solo plan, pensado para consentirte todo el año: acumula crédito, ahorra en cada
                tratamiento y accede a beneficios exclusivos de socio.
              </p>{" "}
              <span className="perks-label">Cada mes</span>{" "}
              <ul>
                <li>
                  <strong>Beauty Bank de $100 cada mes</strong> — Crédito acumulable para tus
                  tratamientos favoritos: Fotona, depilación láser, faciales, inyectables, IV
                  therapy, tratamientos corporales y más.
                </li>
                <li>
                  <strong>15% de descuento</strong> — En todos los tratamientos estéticos y de
                  láser.
                </li>
                <li>
                  <strong>Upgrade de láser de cortesía cada mes</strong> — Una mejora de láser
                  incluida al mes.
                </li>
                <li>
                  <strong>Prioridad para reservar</strong> — Agenda preferente como socio.
                </li>
                <li>
                  <strong>Precios y eventos exclusivos</strong> — Solo para socios: Fotona Member
                  Days, Botox Days y eventos VIP.
                </li>
              </ul>{" "}
              <div className="ctas">
                {" "}
                <a
                  className="primary"
                  target="_blank"
                  rel="noopener"
                  href="https://be.realaestheticmedspa.com/payment-link/6a3fffdb9b12592b36824d9f"
                >
                  Unirme al Club →
                </a>{" "}
                <SiteLink className="secondary" href="/reservar/">
                  Reservar consulta
                </SiteLink>{" "}
              </div>{" "}
              <p className="fine">
                Compromiso mínimo de 3 meses. Se renueva automáticamente. No transferible.
                Beneficios válidos para socios activos.
              </p>{" "}
            </div>{" "}
          </article>{" "}
        </section>{" "}
        <section className="rules">
          {" "}
          <header className="rules-header">
            {" "}
            <h2>
              Las reglas del Club — acuerdos que <em>protegen el Club</em>.
            </h2>{" "}
            <p className="lede">
              Cuatro acuerdos que mantienen el Club exclusivo, los resultados consistentes y la
              agenda real.
            </p>{" "}
          </header>{" "}
          <div className="rules-grid">
            {" "}
            <article className="rule">
              {" "}
              <div className="num">01</div>{" "}
              <div className="body">
                {" "}
                <h3>Compromiso de tres meses</h3>{" "}
                <p>
                  Para que la transformación tenga tiempo de manifestarse y los beneficios acumulen
                  valor real.
                </p>{" "}
              </div>{" "}
            </article>{" "}
            <article className="rule">
              {" "}
              <div className="num">02</div>{" "}
              <div className="body">
                {" "}
                <h3>Crédito acumulable</h3>{" "}
                <p>Tu Beauty Bank suma cada mes y nunca pierdes por no usarlo a tiempo.</p>{" "}
              </div>{" "}
            </article>{" "}
            <article className="rule">
              {" "}
              <div className="num">03</div>{" "}
              <div className="body">
                {" "}
                <h3>Slots limitados</h3>{" "}
                <p>
                  Plazas reales y reservadas. La exclusividad existe porque cuidamos a quien ya está
                  dentro.
                </p>{" "}
              </div>{" "}
            </article>{" "}
            <article className="rule">
              {" "}
              <div className="num">04</div>{" "}
              <div className="body">
                {" "}
                <h3>Renovación automática</h3>{" "}
                <p>
                  Se renueva cada mes; puedes cancelar cuando quieras al terminar el compromiso.
                </p>{" "}
              </div>{" "}
            </article>{" "}
          </div>{" "}
        </section>{" "}
        <section className="final-cta">
          {" "}
          <h2>
            ¿Tienes dudas sobre el Club? <em>Conversemos</em>.
          </h2>{" "}
          <p className="lede">
            Una consulta gratuita de 45 minutos para entender tu piel, tus objetivos y cómo el Club
            puede acompañarte. Sin compromiso, con la mirada de nuestro equipo clínico.
          </p>{" "}
          <div className="ctas">
            {" "}
            <SiteLink className="primary" href="/reservar/">
              Reservar consulta gratuita →
            </SiteLink>{" "}
            <a
              className="secondary"
              href="https://wa.me/17862443722"
              target="_blank"
              rel="noopener"
            >
              Escribir por WhatsApp
            </a>{" "}
          </div>{" "}
        </section>{" "}
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
