// Page markup converted from https://realaestheticmedspa.com/about/
import css from "@/styles/pages/about.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";
import { useTopNavOnScroll } from "@/site/behaviors";

export default function AboutEn() {
  useTopNavOnScroll();
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Language">
        <a href="" className="active">
          EN
        </a>
        <span>·</span>
        <SiteLink href="/sobre/">ES</SiteLink>
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
          <span className="pretitle">The practitioner</span>{" "}
          <h1>
            Ronal <em>Perdomo Lugo</em>
          </h1>{" "}
          <p className="credentials">APRN, FNP-C</p>{" "}
          <p className="role">Aesthetic Nurse Practitioner — Laser &amp; Injectables Expert</p>{" "}
          <p className="tagline-line">
            Refined aesthetics. Natural results. Advanced technology.
          </p>{" "}
        </div>{" "}
      </section>{" "}
      {/* PHILOSOPHY */}{" "}
      <section className="philosophy">
        {" "}
        <div className="philosophy-inner">
          {" "}
          <span className="eyebrow">Philosophy</span>{" "}
          <h2>
            Beauty <em>tailored to you</em>.
          </h2>{" "}
          <p className="lede">
            Enhancing your natural features through precision injectables, advanced laser
            treatments, and minimally invasive procedures — tailored to deliver subtle, balanced,
            and long-lasting results.
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
            <span className="eyebrow">About Ronal</span>{" "}
            <h2>
              Where care meets <em>precision</em>.
            </h2>{" "}
            <p>
              At Real Aesthetic Medical Spa, patient care meets medical precision. Ronal Perdomo
              Lugo, APRN, FNP-C, is a board-certified Family Nurse Practitioner with focused
              expertise in aesthetic and laser medicine.
            </p>{" "}
            <p>
              With a commitment to safety, artistry, and innovation, every treatment is customized
              to enhance natural beauty while maintaining facial harmony.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* CREDENTIALS */}{" "}
      <section className="credentials">
        {" "}
        <div className="creds-inner">
          {" "}
          <span className="eyebrow">Credentials</span>{" "}
          <h2>
            Training and <em>certifications</em>
          </h2>{" "}
          <ul className="creds-list">
            <li>
              {" "}
              <strong>APRN, FNP-C</strong>{" "}
              <span>
                Advanced Practice Registered Nurse · Family Nurse Practitioner — Board-certified.
              </span>{" "}
            </li>
            <li>
              {" "}
              <strong>Aesthetic &amp; Laser Medicine</strong>{" "}
              <span>
                Focused expertise in injectables, lasers and minimally invasive aesthetic protocols.
              </span>{" "}
            </li>
            <li>
              {" "}
              <strong>Patient-first practice</strong>{" "}
              <span>
                Commitment to safety, artistry and outcomes that respect each patient's anatomy.
              </span>{" "}
            </li>
            <li>
              {" "}
              <strong>Practice in Miami, FL</strong>{" "}
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
          <span className="eyebrow">Begin</span>{" "}
          <h2>
            Ready to <em>begin</em>?
          </h2>{" "}
          <p>
            Schedule a private consultation. We listen first — every protocol is built around your
            anatomy, your time and your goals.
          </p>{" "}
          <div className="cta-row">
            {" "}
            <a
              className="primary"
              target="_blank"
              rel="noopener"
              href="https://be.realaestheticmedspa.com/booking/real-aesthetic-medical-spa"
            >
              Book consultation
            </a>{" "}
            <SiteLink className="ghost" href="/procedures/">
              Browse treatments
            </SiteLink>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* FOOTER */}{" "}
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
        <SiteLink href="/procedures/" className="bb-item" aria-label="Treatments">
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
