// Page markup converted from https://realaestheticmedspa.com/procedures/
import css from "@/styles/pages/procedures.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";
import { useCatalogPage } from "@/site/behaviors";

export default function ProceduresEn() {
  useCatalogPage("en");
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Language">
        <SiteLink href="/procedures/" className="active">
          EN
        </SiteLink>
        <span>·</span>
        <SiteLink href="/tratamientos/">ES</SiteLink>
      </div>{" "}
      <nav className="top" id="topnav">
        {" "}
        <SiteLink href="/en/" className="brand">
          {" "}
          <picture>
            <source media="(max-width: 768px)" srcSet="/img/logo-horizontal.webp" />
            <img src="/img/logo.webp" alt="Real Aesthetic Medical Spa" />
          </picture>{" "}
        </SiteLink>{" "}
        <ul>
          <li>
            <SiteLink href="/en/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </SiteLink>
          </li>
          <li>
            <SiteLink href="/procedures/" style={{ color: "inherit", textDecoration: "none" }}>
              Treatments
            </SiteLink>
          </li>
          <li>
            <SiteLink href="/about/" style={{ color: "inherit", textDecoration: "none" }}>
              Practitioner
            </SiteLink>
          </li>
          <li>
            <SiteLink
              href="/the-real-aesthetic-club/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              The Club
            </SiteLink>
          </li>
          <li>
            <SiteLink href="/financing/" style={{ color: "inherit", textDecoration: "none" }}>
              Financing
            </SiteLink>
          </li>
          <li>
            <SiteLink href="/contact/" style={{ color: "inherit", textDecoration: "none" }}>
              Contact
            </SiteLink>
          </li>
        </ul>{" "}
        <a
          target="_blank"
          rel="noopener"
          href="https://be.realaestheticmedspa.com/booking/real-aesthetic-medical-spa"
          className="nav-cta"
        >
          Book
        </a>{" "}
      </nav>{" "}
      <section className="hero">
        {" "}
        <div className="hero-block">
          {" "}
          <span className="pretitle">The catalog</span>{" "}
          <h1>
            Every protocol is <em>a conversation</em>.
          </h1>{" "}
          <p className="lede">
            56 treatments curated by Ronal Perdomo Lugo, APRN, FNP-C — designed around the body, not
            around technology.
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
                {/* Pins overlaid on the figure photo, anchored to body zones in % of image height */}{" "}
                <div className="zone-pins">
                  {" "}
                  {/* Zone 1 — Face (image y ~6-14%) */}{" "}
                  <span className="zone-pin" data-zone="1" style={{ left: "50%", top: "8%" }} />{" "}
                  <span className="zone-pin" data-zone="1" style={{ left: "42%", top: "10%" }} />{" "}
                  <span className="zone-pin" data-zone="1" style={{ left: "58%", top: "10%" }} />{" "}
                  <span className="zone-pin" data-zone="1" style={{ left: "50%", top: "14%" }} />{" "}
                  {/* Zone 2 — Neck/decolletage/hands (image y ~17-26% + sides ~50-60%) */}{" "}
                  <span className="zone-pin" data-zone="2" style={{ left: "50%", top: "19%" }} />{" "}
                  <span className="zone-pin" data-zone="2" style={{ left: "32%", top: "55%" }} />{" "}
                  <span className="zone-pin" data-zone="2" style={{ left: "68%", top: "55%" }} />{" "}
                  {/* Zone 3 — Body / abdomen (image y ~36-50%) */}{" "}
                  <span className="zone-pin" data-zone="3" style={{ left: "50%", top: "38%" }} />{" "}
                  <span className="zone-pin" data-zone="3" style={{ left: "42%", top: "43%" }} />{" "}
                  <span className="zone-pin" data-zone="3" style={{ left: "58%", top: "43%" }} />{" "}
                  <span className="zone-pin" data-zone="3" style={{ left: "50%", top: "50%" }} />{" "}
                  {/* Zone 4 — Thighs / legs / intimate (image y ~62-82%) */}{" "}
                  <span className="zone-pin" data-zone="4" style={{ left: "46%", top: "65%" }} />{" "}
                  <span className="zone-pin" data-zone="4" style={{ left: "54%", top: "65%" }} />{" "}
                  <span className="zone-pin" data-zone="4" style={{ left: "46%", top: "80%" }} />{" "}
                  <span className="zone-pin" data-zone="4" style={{ left: "54%", top: "80%" }} />{" "}
                  {/* Zone 5 — Wellness / systemic — halo around the figure */}{" "}
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
                01 / 05 — Face &amp; gaze
              </span>{" "}
              <article className="zone-panel active" data-zone="1">
                {" "}
                <h2>
                  The face <em>and the gaze</em>
                </h2>{" "}
                <p className="zone-lede">
                  Where every micro-expression lives. The terrain that defines how others read you —
                  long before you speak.
                </p>{" "}
                <ul className="zone-list">
                  <li>
                    <SiteLink href="/procedures/full-face-botox/">Full Face Botox</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/facial-harmonization/">
                      Facial Harmonization
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/lip-fillers/">Lip Fillers</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/chin-augmentation/">Chin Augmentation</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/jawline-contouring/">Jawline Contouring</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/sculptra/">Sculptra</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/radiesse/">Radiesse</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/under-eye-rejuvenation/">
                      Under-Eye Rejuvenation
                    </SiteLink>
                  </li>
                </ul>{" "}
                <a className="zone-link-all" href="#catalog" data-filter="face">
                  See all 32 face protocols →
                </a>{" "}
              </article>{" "}
              <article className="zone-panel" data-zone="2">
                {" "}
                <h2>
                  Neck, décolleté <em>and hands</em>
                </h2>{" "}
                <p className="zone-lede">
                  The first zones that betray time. We treat them like the face — with the same
                  precision, technology and patience.
                </p>{" "}
                <ul className="zone-list">
                  <li>
                    <SiteLink href="/procedures/skin-tightening-enhancement/">
                      Neck Skin Tightening
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/hand-rejuvenation-fotona/">
                      Hand Rejuvenation (Fotona)
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/hand-rejuvenation-radiesse/">
                      Hand Rejuvenation (Radiesse)
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/prp-hand-rejuvenation/">
                      PRP Hand Rejuvenation
                    </SiteLink>
                  </li>
                </ul>{" "}
                <a className="zone-link-all" href="#catalog" data-filter="neck-hands">
                  See all neck &amp; hands →
                </a>{" "}
              </article>{" "}
              <article className="zone-panel" data-zone="3">
                {" "}
                <h2>
                  Body and <em>abdomen</em>
                </h2>{" "}
                <p className="zone-lede">
                  Sculpting without surgery. Endolaser, Fotona TightSculpting and mesotherapy work
                  the silhouette by addressing fat, skin and lymphatic flow as one system.
                </p>{" "}
                <ul className="zone-list">
                  <li>
                    <SiteLink href="/procedures/endolaser-large-areas/">
                      Endolaser — Large Areas
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/endolaser-medium-areas/">
                      Endolaser — Medium
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/endolaser-small-areas/">Endolaser — Small</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/localized-fat-reduction/">
                      Localized Fat Reduction
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/body-contouring-mesotherapy/">
                      Body Contouring
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/body-sculpt-package/">Body Sculpt Package</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/stretch-marks-laser/">Stretch Marks Laser</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/lymphatic-body-massage/">
                      Lymphatic Body Massage
                    </SiteLink>
                  </li>
                </ul>{" "}
                <a className="zone-link-all" href="#catalog" data-filter="body">
                  See all 11 body protocols →
                </a>{" "}
              </article>{" "}
              <article className="zone-panel" data-zone="4">
                {" "}
                <h2>
                  Legs and <em>intimate areas</em>
                </h2>{" "}
                <p className="zone-lede">
                  Veins, brightening, hair removal — discreet protocols, designed to be quiet wins.
                </p>{" "}
                <ul className="zone-list">
                  <li>
                    <SiteLink href="/procedures/leg-vein-treatment/">
                      Leg &amp; Varicose Veins
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/telangiectasia-laser/">
                      Facial Telangiectasia
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/intimate-area-brightening/">
                      Intimate Area Brightening
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/underarm-thigh-brightening/">
                      Underarm &amp; Thigh Brightening
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/laser-hair-removal/">Laser Hair Removal</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/nail-fungus-laser/">Nail Fungus Laser</SiteLink>
                  </li>
                </ul>{" "}
                <a className="zone-link-all" href="#catalog" data-filter="legs-intimate">
                  See all legs &amp; intimate →
                </a>{" "}
              </article>{" "}
              <article className="zone-panel" data-zone="5">
                {" "}
                <h2>
                  Wellness and <em>internal balance</em>
                </h2>{" "}
                <p className="zone-lede">
                  Beauty that begins below the surface. Medical weight management, peptides and
                  biological optimization.
                </p>{" "}
                <ul className="zone-list">
                  <li>
                    <SiteLink href="/procedures/semaglutide-weight-loss/">Semaglutide</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/tirzepatide-weight-loss/">Tirzepatide</SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/procedures/peptide-programs/">Peptide Programs</SiteLink>
                  </li>
                </ul>{" "}
                <a className="zone-link-all" href="#catalog" data-filter="wellness">
                  See all wellness →
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
          <span className="eyebrow">Full catalog</span>{" "}
          <h2>
            All <em>56 treatments</em>
          </h2>{" "}
          <p className="lede">
            Search, filter, choose. Each protocol opens to its own page with technology, expected
            outcomes and recovery details.
          </p>{" "}
        </div>{" "}
        <div className="catalog-search">
          {" "}
          <input
            type="search"
            id="catalogSearch"
            placeholder="Search treatments — e.g. 'Fotona', 'lip', 'mesotherapy'…"
            autoComplete="off"
          />{" "}
        </div>{" "}
        <div className="catalog-filters" id="catalogFilters">
          {" "}
          <button className="filter-pill active" data-filter="all">
            All · 56
          </button>{" "}
          <button className="filter-pill" data-filter="face">
            Face &amp; Gaze
          </button>{" "}
          <button className="filter-pill" data-filter="neck-hands">
            Neck &amp; Hands
          </button>{" "}
          <button className="filter-pill" data-filter="body">
            Body
          </button>{" "}
          <button className="filter-pill" data-filter="legs-intimate">
            Legs &amp; Intimate
          </button>{" "}
          <button className="filter-pill" data-filter="wellness">
            Wellness
          </button>{" "}
        </div>{" "}
        <div className="catalog-grid" id="catalogGrid" />{" "}
      </section>{" "}
      <nav className="bottom-bar" aria-label="Mobile navigation">
        {" "}
        <SiteLink href="/en/" className="bb-item" aria-label="Home">
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
          <span>Home</span>{" "}
        </SiteLink>{" "}
        <SiteLink href="/procedures/" className="bb-item active" aria-label="Treatments">
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
          <span>Treatments</span>{" "}
        </SiteLink>{" "}
        <a
          target="_blank"
          rel="noopener"
          href="https://be.realaestheticmedspa.com/booking/real-aesthetic-medical-spa"
          className="bb-cta"
          aria-label="Book"
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
            <rect x="4" y="6" width="16" height="14" rx="2" />
            <path d="M4 10h16" />
            <path d="M8 4v4" />
            <path d="M16 4v4" />
            <path d="M9 15l2 2 4-4" />
          </svg>{" "}
        </a>{" "}
        <SiteLink href="/the-real-aesthetic-club/" className="bb-item" aria-label="The Club">
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
      <SiteChrome lang="en" />
    </>
  );
}
