// Page markup converted from https://realaestheticmedspa.com/the-real-aesthetic-club/
import css from "@/styles/pages/club.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";
import { useTopNavOnScroll } from "@/site/behaviors";

export default function ClubEn() {
  useTopNavOnScroll();
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Language">
        <SiteLink href="/the-real-aesthetic-club/" className="active">
          EN
        </SiteLink>
        <span>·</span>
        <SiteLink href="/el-club-real-aesthetic/">ES</SiteLink>
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
          <li className="active">
            <SiteLink href="/the-real-aesthetic-club/">The Club</SiteLink>
          </li>
          <li>
            <SiteLink href="/financing/" style={{ color: "inherit", textDecoration: "none" }}>
              Financing
            </SiteLink>
          </li>
          <li>
            <SiteLink href="/contact/">Contact</SiteLink>
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
      <main>
        {" "}
        <section className="page-hero">
          {" "}
          <span className="pretitle">Membership</span>{" "}
          <h1>
            Welcome to <em>The Real Aesthetic Club</em>.
          </h1>{" "}
          <p className="lede">
            One single plan, designed for those who see continuous care in their skin: accumulating
            credit, member pricing and exclusive benefits.
          </p>{" "}
        </section>{" "}
        <section className="pillars">
          {" "}
          <header className="pillars-header">
            {" "}
            <h2>
              The spirit of the Club — three principles that <em>protect those who belong</em>.
            </h2>{" "}
          </header>{" "}
          <div className="pillars-grid">
            {" "}
            <article className="pillar">
              {" "}
              <h3>Credit that stacks</h3>{" "}
              <p>What you don't use this month waits for you next month.</p>{" "}
            </article>{" "}
            <article className="pillar">
              {" "}
              <h3>Reserved slots</h3> <p>Guaranteed availability in premium time slots.</p>{" "}
            </article>{" "}
            <article className="pillar">
              {" "}
              <h3>Member pricing</h3> <p>Exclusive rates on Botox, fillers and laser.</p>{" "}
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
                $199 <em>/ month</em>
              </p>{" "}
              <p className="desc">
                One simple plan to treat yourself all year long: earn credit, save on every
                treatment, and unlock exclusive member perks.
              </p>{" "}
              <span className="perks-label">Every month</span>{" "}
              <ul>
                <li>
                  <strong>$100 Beauty Bank every month</strong> — Accumulating credit toward your
                  favorite treatments: Fotona, laser hair removal, facials, injectables, IV therapy,
                  body treatments, and more.
                </li>
                <li>
                  <strong>15% off</strong> — On all aesthetic and laser treatments.
                </li>
                <li>
                  <strong>A complimentary laser upgrade every month</strong> — One included laser
                  upgrade monthly.
                </li>
                <li>
                  <strong>Priority scheduling</strong> — Preferred booking as a member.
                </li>
                <li>
                  <strong>Member-only pricing &amp; events</strong> — Fotona Member Days, Botox
                  Days, and VIP events.
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
                  Join the Club →
                </a>{" "}
                <a
                  className="secondary"
                  target="_blank"
                  rel="noopener"
                  href="https://be.realaestheticmedspa.com/booking/real-aesthetic-medical-spa"
                >
                  Book a consultation
                </a>{" "}
              </div>{" "}
              <p className="fine">
                3-month minimum commitment. Auto-renews. Non-transferable. Benefits valid for active
                members.
              </p>{" "}
            </div>{" "}
          </article>{" "}
        </section>{" "}
        <section className="rules">
          {" "}
          <header className="rules-header">
            {" "}
            <h2>
              The rules of the Club — agreements that <em>protect the Club</em>.
            </h2>{" "}
            <p className="lede">
              Four agreements that keep the Club exclusive, results consistent and the calendar
              real.
            </p>{" "}
          </header>{" "}
          <div className="rules-grid">
            {" "}
            <article className="rule">
              {" "}
              <div className="num">01</div>{" "}
              <div className="body">
                {" "}
                <h3>Three-month commitment</h3>{" "}
                <p>
                  So transformation has time to manifest and benefits accumulate real value.
                </p>{" "}
              </div>{" "}
            </article>{" "}
            <article className="rule">
              {" "}
              <div className="num">02</div>{" "}
              <div className="body">
                {" "}
                <h3>Accumulating credit</h3>{" "}
                <p>
                  Your Beauty Bank grows every month and you never lose it for not using it in time.
                </p>{" "}
              </div>{" "}
            </article>{" "}
            <article className="rule">
              {" "}
              <div className="num">03</div>{" "}
              <div className="body">
                {" "}
                <h3>Limited slots</h3>{" "}
                <p>
                  Real, reserved seats. Exclusivity exists because we look after those already
                  inside.
                </p>{" "}
              </div>{" "}
            </article>{" "}
            <article className="rule">
              {" "}
              <div className="num">04</div>{" "}
              <div className="body">
                {" "}
                <h3>Auto-renewal</h3>{" "}
                <p>
                  It renews every month; you can cancel any time once the commitment is complete.
                </p>{" "}
              </div>{" "}
            </article>{" "}
          </div>{" "}
        </section>{" "}
        <section className="final-cta">
          {" "}
          <h2>
            Questions about the Club? <em>Let's talk</em>.
          </h2>{" "}
          <p className="lede">
            A free 45-minute consultation to understand your skin, your goals and how the Club can
            support you. No obligation, with the eye of our clinical team.
          </p>{" "}
          <div className="ctas">
            {" "}
            <a
              className="primary"
              target="_blank"
              rel="noopener"
              href="https://be.realaestheticmedspa.com/booking/real-aesthetic-medical-spa"
            >
              Book a free consultation →
            </a>{" "}
            <a
              className="secondary"
              href="https://wa.me/17862443722"
              target="_blank"
              rel="noopener"
            >
              Write on WhatsApp
            </a>{" "}
          </div>{" "}
        </section>{" "}
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
