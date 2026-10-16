// Page markup converted from https://realaestheticmedspa.com/en/
import css from "@/styles/pages/home-en.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";
import { useHomePage } from "@/site/behaviors";

export default function HomeEn() {
  useHomePage();
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Language">
        <a href="" className="active">
          EN
        </a>
        <span>·</span>
        <SiteLink href="/en/">ES</SiteLink>
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
        <SiteLink href="/book/" className="nav-cta">
          Book
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
          <SiteLink className="cta" href="/book/">
            Book consultation
          </SiteLink>{" "}
        </div>{" "}
        <a href="#treatments" className="hero-scrollcue">
          Treatments
          <span className="line" />
        </a>{" "}
      </section>{" "}
      {/* PILLARS */}{" "}
      <section className="pillars" id="pillars">
        {" "}
        <div className="pillars-header">
          {" "}
          <span className="eyebrow">What sets us apart</span>{" "}
          <h2>
            Five principles. <em>One standard.</em>
          </h2>{" "}
          <p className="lede">
            The architecture behind every consultation, every protocol, every outcome at Real
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
            <h3>Medical supervision</h3>{" "}
            <p>
              Every treatment is designed and overseen by Ronal Perdomo Lugo, APRN, FNP-C — never
              delegated to technicians.
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
            <h3>Premium technology</h3>{" "}
            <p>
              Fotona, endolaser, biostimulators and exosome therapy — the latest medical-grade
              tools, calibrated by the practitioner.
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
            <h3>Personalized care</h3>{" "}
            <p>
              No off-the-shelf packages. Each protocol is built around your anatomy, your timing and
              your goals.
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
            <h3>Natural results</h3>{" "}
            <p>
              The patient is not transformed; they are revealed. No visible signature, no
              predictable face.
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
            <h3>Continuous follow-up</h3>{" "}
            <p>
              The result does not end at the chair. Check-ins, adjustments and maintenance built
              into every plan.
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
                <span className="eyebrow">01 · Body sculpting</span>
                <h2>Endolaser</h2>
                <p className="tag">
                  Non-surgical sculpting, supervised by Ronal Perdomo Lugo, APRN, FNP-C
                </p>
                <SiteLink href="/procedures/endolaser-small-areas/">Discover the protocol</SiteLink>
              </div>{" "}
              <div className="t-index-num">01</div>{" "}
            </section>{" "}
            <section className="treatment t-fotona">
              {" "}
              <div className="t-bg" /> <div className="t-megaword">FOTONA</div>{" "}
              <div className="t-caption">
                <span className="eyebrow">02 · Laser technology</span>
                <h2>Fotona TightSculpting</h2>
                <p className="tag">Four modalities, one session, visible results</p>
                <SiteLink href="/procedures/fotona-4d/">Discover the protocol</SiteLink>
              </div>{" "}
              <div className="t-index-num">02</div>{" "}
            </section>{" "}
            <section className="treatment t-sculptra">
              {" "}
              <div className="t-bg" /> <div className="t-megaword">SCULPTRA</div>{" "}
              <div className="t-caption">
                <span className="eyebrow">03 · Biostimulators</span>
                <h2>Sculptra</h2>
                <p className="tag">
                  Poly-L-lactic acid — gradual collagen stimulation across two to three sessions
                </p>
                <SiteLink href="/procedures/sculptra/">Discover the protocol</SiteLink>
              </div>{" "}
              <div className="t-index-num">03</div>{" "}
            </section>{" "}
            <section className="treatment t-radiesse">
              {" "}
              <div className="t-bg" /> <div className="t-megaword">RADIESSE</div>{" "}
              <div className="t-caption">
                <span className="eyebrow">04 · Biostimulators</span>
                <h2>Radiesse</h2>
                <p className="tag">
                  Calcium hydroxylapatite — immediate volume plus deeper structural collagen
                </p>
                <SiteLink href="/procedures/radiesse/">Discover the protocol</SiteLink>
              </div>{" "}
              <div className="t-index-num">04</div>{" "}
            </section>{" "}
            <section className="treatment t-pdrn">
              {" "}
              <div className="t-bg" /> <div className="t-megaword">PDRN</div>{" "}
              <div className="t-caption">
                <span className="eyebrow">05 · Advanced mesotherapy</span>
                <h2>PDRN + Exosomes</h2>
                <p className="tag">Cellular regeneration at its most premium tier</p>
                <SiteLink href="/procedures/pdrn-skin-regeneration/">
                  Discover the protocol
                </SiteLink>
              </div>{" "}
              <div className="t-index-num">05</div>{" "}
            </section>{" "}
            <section className="treatment t-explora">
              {" "}
              <div className="t-bg" /> <div className="t-megaword">EXPLORA</div>{" "}
              <div className="t-caption">
                <span className="eyebrow">Full catalog</span>
                <h2>Beyond the five essentials</h2>
                <p className="tag">Over 50 protocols curated by Ronal Perdomo Lugo, APRN, FNP-C</p>
                <SiteLink href="/procedures/">View all treatments</SiteLink>
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
            <div className="num">10+</div>{" "}
            <div className="lbl">Years in aesthetic medicine</div>{" "}
          </div>{" "}
          <div className="stat">
            {" "}
            <div className="num">2,000+</div> <div className="lbl">Patients treated</div>{" "}
          </div>{" "}
          <div className="stat">
            {" "}
            <div className="num">50+</div> <div className="lbl">Curated protocols</div>{" "}
          </div>{" "}
          <div className="stat">
            {" "}
            <div className="num">100%</div> <div className="lbl">Medical supervision</div>{" "}
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
            <span className="eyebrow">About the practitioner</span>{" "}
            <h2>
              Ronal <em>Perdomo Lugo</em>
            </h2>{" "}
            <p className="role">APRN, FNP-C — Aesthetic Nurse Practitioner</p>{" "}
            <p className="bio">
              At Real Aesthetic Medical Spa, patient care meets medical precision. Ronal is a
              board-certified Family Nurse Practitioner with focused expertise in aesthetic and
              laser medicine — every treatment customized to enhance natural beauty while
              maintaining facial harmony.
            </p>{" "}
            <div className="doctor-cta">
              {" "}
              <SiteLink className="primary" href="/about/">
                Meet Ronal
              </SiteLink>{" "}
              <SiteLink className="ghost" href="/book/">
                Book consultation
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
          <span className="eyebrow">The protocol</span>{" "}
          <h2>
            The <em>Real Aesthetic</em> Method
          </h2>{" "}
          <p className="lede">Four steps designed around one decision: yours.</p>{" "}
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
            <h3>Private consultation</h3>{" "}
            <p>
              An intimate conversation. We listen before we speak — we understand your goals, your
              time, your face.
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
            <h3>Medical diagnosis</h3>{" "}
            <p>
              Facial and body analysis with surgical judgment. Evidence guides every decision — not
              the trend of the moment.
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
            <h3>Tailored protocol</h3>{" "}
            <p>
              The practitioner designs the complete plan. Every session, every product, every
              interval — calculated for your biology.
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
            <h3>Continuous follow-up</h3>{" "}
            <p>
              The result does not end in the chair. Check-ins, adjustments and maintenance — your
              face as a living practice of care.
            </p>{" "}
          </li>
        </ol>{" "}
      </section>{" "}
      {/* REVIEWS */}{" "}
      <section className="reviews" id="reviews">
        {" "}
        <div className="reviews-header">
          {" "}
          <span className="eyebrow">Patients</span>{" "}
          <h2>
            Voices that <em>matter</em>
          </h2>{" "}
          <p className="lede">
            Those who have trusted their face and their time to Ronal Perdomo Lugo's judgment.
          </p>{" "}
        </div>{" "}
        <div className="reviews-grid">
          {" "}
          <article className="review">
            {" "}
            <div className="quote-mark">“</div>{" "}
            <div className="stars" aria-label="5 of 5">
              ◆ ◆ ◆ ◆ ◆
            </div>{" "}
            <blockquote>
              The practitioner listened before he spoke. The result is felt — not seen. That is
              exactly the difference I was looking for.
            </blockquote>{" "}
            <footer>
              {" "}
              <cite>Andrea M.</cite> <span className="tag">Endolaser · 3 sessions</span>{" "}
            </footer>{" "}
          </article>{" "}
          <article className="review">
            {" "}
            <div className="quote-mark">“</div>{" "}
            <div className="stars" aria-label="5 of 5">
              ◆ ◆ ◆ ◆ ◆
            </div>{" "}
            <blockquote>
              I have tried several spas in Miami. Real Aesthetic is the first one where I felt the
              decision was medical, not commercial.
            </blockquote>{" "}
            <footer>
              {" "}
              <cite>Carolina V.</cite> <span className="tag">Sculptra + PDRN</span>{" "}
            </footer>{" "}
          </article>{" "}
          <article className="review">
            {" "}
            <div className="quote-mark">“</div>{" "}
            <div className="stars" aria-label="5 of 5">
              ◆ ◆ ◆ ◆ ◆
            </div>{" "}
            <blockquote>
              Impeccable care, a tailored protocol, and follow-up that does not end when you leave
              the chair. I will be back.
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
          <span className="eyebrow">Begin your protocol</span>{" "}
          <h2>
            Ready to <em>begin</em>?
          </h2>{" "}
          <p>
            A private consultation with Ronal Perdomo Lugo. No commercial pressure, no commitment —
            just a conversation about what's possible.
          </p>{" "}
          <SiteLink className="cta" href="/book/">
            Book consultation
          </SiteLink>{" "}
        </div>{" "}
      </section>{" "}
      {/* FOOTER */}{" "}
      <nav className="bottom-bar" aria-label="Mobile navigation">
        {" "}
        <a href="#" className="bb-item" aria-label="Home">
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
        </a>{" "}
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
        <SiteLink href="/book/" className="bb-cta" aria-label="Book">
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
