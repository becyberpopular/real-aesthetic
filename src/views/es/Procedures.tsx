// Page markup converted from https://realaestheticmedspa.com/tratamientos/
import css from "@/styles/pages/procedures.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";
import { useCatalogPage } from "@/site/behaviors";

export default function ProceduresEs() {
  useCatalogPage("es");
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Idioma">
        <SiteLink href="/procedures/">EN</SiteLink>
        <span>·</span>
        <SiteLink href="/tratamientos/" className="active">
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
      <section className="hero">
        {" "}
        <div className="hero-block">
          {" "}
          <span className="pretitle">Catálogo completo</span>{" "}
          <h1>
            Todos los <em>56 tratamientos</em>
          </h1>{" "}
          <p className="lede">
            Busca, filtra, elige. Cada protocolo abre en su propia página con la tecnología, los
            resultados esperados y los detalles de recuperación.
          </p>{" "}
        </div>{" "}
      </section>{" "}
      <div className="diagram-pin" id="diagramPin">
        {" "}
        <div className="diagram-stage">
          {" "}
          <div className="diagram-grid">
            {" "}
            <div className="diagram-figure" id="diagramFigure">
              {" "}
              <div className="body-figure-fade top" /> <div className="body-figure-fade bottom" />{" "}
              <div className="body-figure-wrap" id="bodyWrap">
                {" "}
                <img
                  className="body-figure-img"
                  src="/img/body-figure.webp"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />{" "}
                <div className="zone-pins">
                  {" "}
                  <span
                    className="zone-pin"
                    data-zone="1"
                    style={{ left: "50%", top: "8%" }}
                  />{" "}
                  <span className="zone-pin" data-zone="1" style={{ left: "42%", top: "10%" }} />{" "}
                  <span className="zone-pin" data-zone="1" style={{ left: "58%", top: "10%" }} />{" "}
                  <span className="zone-pin" data-zone="1" style={{ left: "50%", top: "14%" }} />{" "}
                  <span className="zone-pin" data-zone="2" style={{ left: "50%", top: "19%" }} />{" "}
                  <span className="zone-pin" data-zone="2" style={{ left: "32%", top: "55%" }} />{" "}
                  <span className="zone-pin" data-zone="2" style={{ left: "68%", top: "55%" }} />{" "}
                  <span className="zone-pin" data-zone="3" style={{ left: "50%", top: "38%" }} />{" "}
                  <span className="zone-pin" data-zone="3" style={{ left: "42%", top: "43%" }} />{" "}
                  <span className="zone-pin" data-zone="3" style={{ left: "58%", top: "43%" }} />{" "}
                  <span className="zone-pin" data-zone="3" style={{ left: "50%", top: "50%" }} />{" "}
                  <span className="zone-pin" data-zone="4" style={{ left: "46%", top: "65%" }} />{" "}
                  <span className="zone-pin" data-zone="4" style={{ left: "54%", top: "65%" }} />{" "}
                  <span className="zone-pin" data-zone="4" style={{ left: "46%", top: "80%" }} />{" "}
                  <span className="zone-pin" data-zone="4" style={{ left: "54%", top: "80%" }} />{" "}
                  <span className="zone-pin" data-zone="5" style={{ left: "18%", top: "25%" }} />{" "}
                  <span className="zone-pin" data-zone="5" style={{ left: "82%", top: "25%" }} />{" "}
                  <span className="zone-pin" data-zone="5" style={{ left: "18%", top: "75%" }} />{" "}
                  <span
                    className="zone-pin"
                    data-zone="5"
                    style={{ left: "82%", top: "75%" }}
                  />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="diagram-copy">
              {" "}
              <span className="progress" id="progressLabel">
                01 / 05 — Rostro y mirada
              </span>{" "}
              <article className="zone-panel active" data-zone="1">
                {" "}
                <h2>
                  El rostro <em>y la mirada</em>
                </h2>{" "}
                <p className="zone-lede">
                  Donde vive cada microexpresión. El terreno que define cómo te leen los demás —
                  mucho antes de que hables.
                </p>{" "}
                <ul className="zone-list">
                  <li>
                    <SiteLink href="/tratamientos/botox-completo-facial/">
                      Botox completo facial
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/armonizacion-facial/">
                      Armonización facial
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/rellenos-de-labios/">Rellenos de labios</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/aumento-de-menton/">Aumento de mentón</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/perfilado-mandibular/">
                      Contorno mandibular
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/sculptra/">Sculptra</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/radiesse/">Radiesse</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/rejuvenecimiento-ojeras/">
                      Rejuvenecimiento de ojeras
                    </SiteLink>
                  </li>
                </ul>{" "}
                <a className="zone-link-all" href="#catalog" data-filter="face">
                  Ver los 32 protocolos faciales →
                </a>{" "}
              </article>{" "}
              <article className="zone-panel" data-zone="2">
                {" "}
                <h2>
                  Cuello, escote <em>y manos</em>
                </h2>{" "}
                <p className="zone-lede">
                  Las primeras zonas que delatan el paso del tiempo. Las tratamos como el rostro —
                  con la misma precisión, la misma tecnología y la misma paciencia.
                </p>{" "}
                <ul className="zone-list">
                  <li>
                    <SiteLink href="/tratamientos/tensado-piel-enhancement/">
                      Tensado de piel del cuello
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/rejuvenecimiento-manos-fotona/">
                      Rejuvenecimiento de manos (Fotona)
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/rejuvenecimiento-manos-radiesse/">
                      Rejuvenecimiento de manos (Radiesse)
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/prp-rejuvenecimiento-manos/">
                      PRP en manos
                    </SiteLink>
                  </li>
                </ul>{" "}
                <a className="zone-link-all" href="#catalog" data-filter="neck-hands">
                  Ver cuello y manos →
                </a>{" "}
              </article>{" "}
              <article className="zone-panel" data-zone="3">
                {" "}
                <h2>
                  Cuerpo y <em>abdomen</em>
                </h2>{" "}
                <p className="zone-lede">
                  Esculpir sin cirugía. Endoláser, Fotona TightSculpting y mesoterapia trabajan la
                  silueta tratando grasa, piel y flujo linfático como un solo sistema.
                </p>{" "}
                <ul className="zone-list">
                  <li>
                    <SiteLink href="/tratamientos/endolaser-areas-grandes/">
                      Endoláser — Áreas grandes
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/endolaser-areas-medianas/">
                      Endoláser — Medio
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/endolaser-areas-pequenas/">
                      Endoláser — Pequeño
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/reduccion-grasa-localizada/">
                      Reducción de grasa localizada
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/contorno-corporal-mesoterapia/">
                      Contorno corporal
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/paquete-body-sculpt/">
                      Paquete escultor corporal
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/estrias-laser/">Estrías con láser</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/masaje-linfatico-corporal/">
                      Drenaje linfático corporal
                    </SiteLink>
                  </li>
                </ul>{" "}
                <a className="zone-link-all" href="#catalog" data-filter="body">
                  Ver los 11 protocolos corporales →
                </a>{" "}
              </article>{" "}
              <article className="zone-panel" data-zone="4">
                {" "}
                <h2>
                  Piernas <em>y zonas íntimas</em>
                </h2>{" "}
                <p className="zone-lede">
                  Várices, aclarado, depilación — protocolos discretos, pensados para victorias
                  silenciosas.
                </p>{" "}
                <ul className="zone-list">
                  <li>
                    <SiteLink href="/tratamientos/varices-piernas-laser/">
                      Várices en piernas
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/telangiectasias-laser/">
                      Telangiectasias faciales
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/aclarado-zona-intima/">
                      Aclarado de zona íntima
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/aclarado-axilas-ingles/">
                      Aclarado de axilas y entrepiernas
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/depilacion-laser/">Depilación láser</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/hongos-unas-laser/">
                      Hongos de uñas con láser
                    </SiteLink>
                  </li>
                </ul>{" "}
                <a className="zone-link-all" href="#catalog" data-filter="legs-intimate">
                  Ver piernas e íntimas →
                </a>{" "}
              </article>{" "}
              <article className="zone-panel" data-zone="5">
                {" "}
                <h2>
                  Bienestar y <em>equilibrio interno</em>
                </h2>{" "}
                <p className="zone-lede">
                  La belleza que empieza bajo la piel. Control médico de peso, péptidos y
                  optimización biológica.
                </p>{" "}
                <ul className="zone-list">
                  <li>
                    <SiteLink href="/tratamientos/semaglutida-perdida-peso/">Semaglutida</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/tirzepatida-perdida-peso/">Tirzepatida</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/tratamientos/programas-peptidos/">
                      Programas de péptidos
                    </SiteLink>
                  </li>
                </ul>{" "}
                <a className="zone-link-all" href="#catalog" data-filter="wellness">
                  Ver bienestar →
                </a>{" "}
              </article>{" "}
            </div>{" "}
            <div className="zone-progress">
              {" "}
              <span className="active" data-zone="1" /> <span data-zone="2" />{" "}
              <span data-zone="3" /> <span data-zone="4" /> <span data-zone="5" />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <section className="catalog" id="catalog">
        {" "}
        <div className="catalog-header">
          {" "}
          <span className="eyebrow">Catálogo completo</span>{" "}
          <h2>
            Los <em>56 tratamientos</em>
          </h2>{" "}
          <p className="lede">
            Busca, filtra, elige. Cada protocolo abre en su propia página con la tecnología, los
            resultados esperados y los detalles de recuperación.
          </p>{" "}
        </div>{" "}
        <div className="catalog-search">
          {" "}
          <input
            type="search"
            id="catalogSearch"
            placeholder="Busca tratamientos — ej. 'Fotona', 'labios', 'mesoterapia'…"
            autoComplete="off"
          />{" "}
        </div>{" "}
        <div className="catalog-filters" id="catalogFilters">
          {" "}
          <button className="filter-pill active" data-filter="all">
            Todos · 56
          </button>{" "}
          <button className="filter-pill" data-filter="face">
            Rostro y mirada
          </button>{" "}
          <button className="filter-pill" data-filter="neck-hands">
            Cuello y manos
          </button>{" "}
          <button className="filter-pill" data-filter="body">
            Cuerpo
          </button>{" "}
          <button className="filter-pill" data-filter="legs-intimate">
            Piernas e íntimas
          </button>{" "}
          <button className="filter-pill" data-filter="wellness">
            Bienestar
          </button>{" "}
        </div>{" "}
        <div className="catalog-grid" id="catalogGrid" />{" "}
      </section>{" "}
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
        <SiteLink href="/tratamientos/" className="bb-item active" aria-label="Tratamientos">
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
