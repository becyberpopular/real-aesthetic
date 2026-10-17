// Page markup converted from https://realaestheticmedspa.com/contact/
import css from "@/styles/pages/contact.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";
import { useContactPage } from "@/site/behaviors";

export default function ContactEn() {
  useContactPage();
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Language">
        <SiteLink href="/contact/" className="active">
          EN
        </SiteLink>
        <span>·</span>
        <SiteLink href="/contacto/">ES</SiteLink>
      </div>{" "}
      <nav className="top">
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
            <SiteLink href="/procedures/">Treatments</SiteLink>
          </li>
          <li>
            <SiteLink href="/about/">Practitioner</SiteLink>
          </li>
          <li>
            <SiteLink href="/the-real-aesthetic-club/">The Club</SiteLink>
          </li>
          <li>
            <SiteLink href="/financing/" style={{ color: "inherit", textDecoration: "none" }}>
              Financing
            </SiteLink>
          </li>
          <li className="active">
            <SiteLink href="/contact/">Contact</SiteLink>
          </li>
        </ul>{" "}
        <SiteLink href="/contact/#book" className="nav-cta">
          Book
        </SiteLink>{" "}
      </nav>{" "}
      <main>
        {" "}
        <section className="page-hero">
          {" "}
          <span className="pretitle">Contact</span>{" "}
          <h1>
            Let's <em>talk</em>.
          </h1>{" "}
          <p className="lede">
            Your transformation starts with a conversation. Write, call or book a visit — we reply
            personally within 24 hours.
          </p>{" "}
        </section>{" "}
        <section className="contact-cards ra-x-four">
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
            <p className="hint">Same-day reply during clinic hours.</p>{" "}
          </article>
          <article className="c-card">
            <div className="ico">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span className="label">Phone</span>
            <p className="value">
              <a href="tel:+17865805702">+1 786-580-5702</a>
            </p>
            <p className="hint">Call us during clinic hours.</p>
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
            <span className="label">Email</span>{" "}
            <p className="value">
              <a href="mailto:info@realaestheticmedspa.com">info@realaestheticmedspa.com</a>
            </p>{" "}
            <p className="hint">We answer within 24 hours.</p>{" "}
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
            <span className="label">Visit us</span>{" "}
            <p className="value">
              8360 W Flagler St, Suite 108
              <br />
              Miami, FL 33144
            </p>{" "}
            <p className="hint">By appointment.</p>{" "}
          </article>{" "}
        </section>{" "}
        <section className="form-block" id="book">
          {" "}
          <div className="copy">
            {" "}
            <h2>
              Book your <em>visit</em>
            </h2>{" "}
            <p className="lede">
              We listen, we explore, and we design a plan tailored to your skin and goals.
            </p>{" "}
            <ul>
              <li>Initial conversation with our team</li>
              <li>Skin and contour assessment</li>
              <li>Personalised plan and pricing</li>
              <li>Free reschedule up to 24h before your visit</li>
            </ul>{" "}
          </div>{" "}
          <div className="form-wrap">
            {" "}
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/RMABBGh0oSdJkNXeLiHI?language=en"
              id="RMABBGh0oSdJkNXeLiHI_contact"
              className="ra-x-cal-embed"
              title="Book an initial consultation"
            />{" "}
          </div>{" "}
        </section>{" "}
        <section className="visit-block">
          {" "}
          <div>
            {" "}
            <h2>
              Our <em>studio</em>
            </h2>{" "}
            <p className="lede">
              Located on West Flagler Street in Miami, easy access from Brickell, Coral Gables and
              Doral.
            </p>{" "}
            <p className="addr">
              8360 W Flagler St, Suite 108
              <br />
              Miami, FL 33144 · United States
            </p>{" "}
            <a
              className="map-cta"
              href="https://maps.google.com/?q=8360+W+Flagler+St+Suite+108+Miami+FL+33144"
              target="_blank"
              rel="noopener"
            >
              Get directions →
            </a>{" "}
          </div>{" "}
          <article className="hours-card">
            {" "}
            <span className="label">Hours</span> <h3>By appointment</h3>{" "}
            <p className="lede">
              We see patients by appointment so we can give you the time you deserve. Free
              reschedule up to 24h before your visit.
            </p>{" "}
            <ul>
              <li>
                <span>Monday – Friday</span>
                <span>10:00 AM – 7:00 PM</span>
              </li>
              <li>
                <span>Saturday</span>
                <span>Members Only / Appointment only</span>
              </li>
              <li className="closed">
                <span>Sunday</span>
                <span>Closed</span>
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
              title="Real Aesthetic Medical Spa — Miami map"
            />{" "}
            <div className="map-overlay" aria-hidden="true" />{" "}
          </div>{" "}
          <div className="map-meta">
            {" "}
            <div>
              {" "}
              <span className="eyebrow">Find us</span>{" "}
              <p className="addr-name">Real Aesthetic Medical Spa</p>{" "}
              <p className="addr-line">
                8360 W Flagler St, Suite 108
                <br />
                Miami, FL 33144 · United States
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
              Open in Google Maps{" "}
            </a>{" "}
          </div>{" "}
        </aside>{" "}
        <section className="spacer" />{" "}
      </main>{" "}
      {/* FOOTER */}{" "}
      <nav className="bottom-bar" aria-label="Mobile navigation">
        {" "}
        <SiteLink href="/en/" className="bb-item" aria-label="Home">
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
          <span>Home</span>{" "}
        </SiteLink>{" "}
        <SiteLink href="/procedures/" className="bb-item" aria-label="Treatments">
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
          <span>Treatments</span>{" "}
        </SiteLink>{" "}
        <SiteLink href="/contact/#book" className="bb-cta" aria-label="Book">
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
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>{" "}
          <span>WhatsApp</span>{" "}
        </a>{" "}
      </nav>
      <SiteChrome lang="en" />
    </>
  );
}
