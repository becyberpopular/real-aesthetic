// Page markup converted from https://realaestheticmedspa.com/financing/
import css from "@/styles/pages/financing-en.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";
import { useFinancingPage } from "@/site/behaviors";

export default function FinancingEn() {
  useFinancingPage("en");
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Language">
        <SiteLink href="/financing/" className="active">
          EN
        </SiteLink>
        <span>·</span>
        <SiteLink href="/financiacion/">ES</SiteLink>
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
            <SiteLink href="/en/">Home</SiteLink>
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
          <li className="active">
            <SiteLink href="/financing/">Financing</SiteLink>
          </li>
          <li>
            <SiteLink href="/contact/">Contact</SiteLink>
          </li>
        </ul>{" "}
        <SiteLink href="/book/" className="nav-cta">
          Book
        </SiteLink>{" "}
      </nav>{" "}
      <main>
        {" "}
        <section className="page-hero">
          {" "}
          <span className="pretitle">Financing</span>{" "}
          <h1>
            Your treatment, <em>on your terms</em>.
          </h1>{" "}
          <p className="lede">
            We chose Cherry as our financing partner because they share the way we approach care —
            clear, predictable and designed so you can decide with peace of mind.
          </p>{" "}
        </section>{" "}
        {/* CHERRY WIDGET BEGIN (Full Page · EN) */}{" "}
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
          customImage: '', imageCategory: 'medspa', language: 'en', &#125;, styles: &#123;
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
              Why <em>we chose Cherry</em>.
            </h2>{" "}
            <p className="lede">
              Three reasons Cherry fits the way we think about aesthetic medicine.
            </p>{" "}
          </header>{" "}
          <div className="promise-grid">
            {" "}
            <article className="promise-card">
              {" "}
              <span className="num">01</span> <h3>No surprises</h3>{" "}
              <p>
                Pre-qualify with no hard credit check. You'll know your options instantly without
                affecting your credit score.
              </p>{" "}
            </article>{" "}
            <article className="promise-card">
              {" "}
              <span className="num">02</span> <h3>Your treatment, your pace</h3>{" "}
              <p>
                Plans from six weeks up to sixty months. Pick the monthly payment that fits your
                life — not the one you're forced into.
              </p>{" "}
            </article>{" "}
            <article className="promise-card">
              {" "}
              <span className="num">03</span> <h3>Instant decision</h3>{" "}
              <p>
                Get an answer in seconds. No lengthy paperwork, no waiting and approvals of up to
                fifty thousand dollars.
              </p>{" "}
            </article>{" "}
          </div>{" "}
        </section>{" "}
        <section className="final-cta">
          {" "}
          <h2>
            Ready to begin? <em>Two paths forward</em>.
          </h2>{" "}
          <p className="lede">
            Pre-qualify with Cherry in sixty seconds, or book a consultation and we'll design your
            protocol and financing plan together.
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
              Pre-qualify with Cherry →
            </a>{" "}
            <SiteLink className="secondary" href="/book/">
              Book consultation
            </SiteLink>{" "}
          </div>{" "}
        </section>{" "}
        <div className="disclaimer">
          {" "}
          <p>
            Payment plans are offered by Cherry Technologies, Inc. and its lending partners.
            Approval, APR and terms depend on each applicant's credit profile. Real Aesthetic
            Medical Spa LLC is not a lender and does not extend credit. See the full terms and the
            list of lending partners at withcherry.com/lending-partners.
          </p>{" "}
        </div>{" "}
      </main>{" "}
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
          <span>Treat.</span>{" "}
        </SiteLink>{" "}
        <SiteLink href="/book/" className="bb-cta" aria-label="Book">
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
        <SiteLink href="/financing/" className="bb-item active" aria-label="Financing">
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
          <span>Pay</span>{" "}
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
