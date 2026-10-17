// Page markup converted from https://realaestheticmedspa.com/terms/
import css from "@/styles/pages/terms.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";

export default function TermsEn() {
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Language">
        <SiteLink href="/terms/" className="active">
          EN
        </SiteLink>
        <span>·</span>
        <SiteLink href="/terminos/">ES</SiteLink>
      </div>{" "}
      <nav className="top" id="topnav">
        {" "}
        <SiteLink href="/en/" className="brand">
          {" "}
          <img src="/img/logo.webp" alt="Real Aesthetic Medical Spa" />{" "}
        </SiteLink>{" "}
        <ul>
          <li>
            <SiteLink href="/en/">Home</SiteLink>
          </li>
          <li>
            <SiteLink href="/procedures/">Procedures</SiteLink>
          </li>
          <li>
            <SiteLink href="/about/">The practitioner</SiteLink>
          </li>
          <li>
            <SiteLink href="/financing/" style={{ color: "inherit", textDecoration: "none" }}>
              Financing
            </SiteLink>
          </li>
        </ul>{" "}
        <SiteLink href="/book/" className="nav-cta">
          Book
        </SiteLink>{" "}
      </nav>{" "}
      <main className="legal-wrap">
        {" "}
        <span className="last-updated">Last updated · 2026-04-29</span>{" "}
        <h1>
          Terms of <em>Service</em>
        </h1>{" "}
        <h2>1. Introduction and acceptance</h2>{" "}
        <p>
          These Terms of Service (the "Terms") govern the access to and use of the website located
          at <SiteLink href="/">realaestheticmedspa.com</SiteLink> (the "Site") and the aesthetic
          medical, cosmetic and wellness services (collectively, the "Services") offered by Real
          Aesthetic Medical Spa LLC ("Real Aesthetic Medical Spa," "we," "us" or "our"), a limited
          liability company organized under the laws of the State of Florida and operating at 8360 W
          Flagler St, Suite 108, Miami, FL 33144.
        </p>{" "}
        <p>
          By accessing the Site, scheduling an appointment, undergoing a consultation or receiving
          any treatment from us, you ("you," "Client" or "Patient") acknowledge that you have read,
          understood and agreed to be bound by these Terms. If you do not agree, you must not use
          the Site or our Services.
        </p>{" "}
        <h2>2. Definitions</h2>{" "}
        <ul>
          <li>
            <strong>"Services"</strong> means aesthetic, cosmetic and wellness procedures performed
            at our facility, including but not limited to neuromodulators, dermal fillers, laser
            treatments, skin therapies and consultations.
          </li>
          <li>
            <strong>"Practitioner"</strong> means the licensed Advanced Practice Registered Nurse
            (APRN) or other qualified clinical staff who performs the Services.
          </li>
          <li>
            <strong>"Content"</strong> means all text, images, video, graphics, logos and other
            materials displayed on the Site.
          </li>
          <li>
            <strong>"Appointment"</strong> means a scheduled consultation, treatment or follow-up at
            our facility.
          </li>
        </ul>{" "}
        <h2>3. Eligibility</h2>{" "}
        <p>
          You must be at least 18 years of age to schedule, consent to or receive Services, except
          where a parent or legal guardian provides consent and where such treatment is permitted by
          Florida law for minors. By using the Site or requesting an Appointment, you represent that
          you meet this requirement and that all information you provide is truthful and complete.
        </p>{" "}
        <h2>4. Nature of the Services and informed consent</h2>{" "}
        <p>
          Our Services involve medical and cosmetic procedures that carry inherent risks, including
          but not limited to bruising, swelling, infection, allergic reaction, asymmetry, and
          unexpected aesthetic outcomes. Before any treatment, you will receive a personalized
          consultation and will be required to sign a written informed consent form specific to the
          procedure.
        </p>{" "}
        <p>
          The Site, including before-and-after photographs, testimonials and procedure descriptions,
          is provided for general informational purposes only. It does not constitute medical
          advice, diagnosis or a treatment plan, and individual results vary. No outcome is
          guaranteed.
        </p>{" "}
        <h3>4.1 Patient honesty</h3>{" "}
        <p>
          You agree to disclose accurate and complete medical history, medications, allergies and
          prior cosmetic procedures. Withholding relevant information may compromise your safety and
          may, at the Practitioner's sole discretion, result in refusal or termination of treatment.
        </p>{" "}
        <h2>5. Appointments, deposits and cancellations</h2>{" "}
        <p>
          Appointments may be requested through the Site, by phone or via approved messaging
          channels. We may require a non-refundable booking deposit to secure your slot, which will
          be applied toward the cost of the Service rendered.
        </p>{" "}
        <ul>
          <li>
            Cancellations made at least 48 hours in advance: deposit may be transferred to a future
            Appointment within 90 days.
          </li>
          <li>
            Cancellations made less than 48 hours in advance, no-shows or arrivals more than 15
            minutes late: deposit is forfeited and the Appointment may be rescheduled subject to a
            new deposit.
          </li>
          <li>
            We reserve the right to refuse, postpone or terminate an Appointment if, in the
            Practitioner's judgment, the procedure is not safe or appropriate for you on that day.
          </li>
        </ul>{" "}
        <h2>6. Pricing, payment and refunds</h2>{" "}
        <p>
          Prices for Services are displayed on the Site or quoted at the time of consultation and
          are exclusive of applicable Florida sales tax where required. We accept the payment
          methods publicly listed at our facility. Payment is due at the time the Service is
          rendered, unless otherwise expressly agreed in writing.
        </p>{" "}
        <p>
          Because aesthetic Services are personalized and consumed at the time of delivery, fees
          paid for completed Services are non-refundable. Pre-paid packages and treatment series may
          be transferable or eligible for credit at our discretion, subject to the specific package
          terms disclosed at purchase.
        </p>{" "}
        <h2>7. Intellectual property</h2>{" "}
        <p>
          All Content on the Site, including the brand name "Real Aesthetic Medical Spa," logos,
          color schemes, photography, written copy, video, design elements and the overall look and
          feel, is owned by or licensed to Real Aesthetic Medical Spa LLC and is protected by United
          States and international copyright, trademark and other intellectual property laws.
        </p>{" "}
        <p>
          You are granted a limited, revocable, non-exclusive license to view the Site for personal,
          non-commercial purposes. You may not reproduce, distribute, modify, scrape, frame, mirror,
          create derivative works from, or commercially exploit any Content without our prior
          written consent.
        </p>{" "}
        <h2>8. Use of patient images and testimonials</h2>{" "}
        <p>
          Before-and-after photographs and any other personal images are only published with your
          separate, signed photo release. You may revoke this release at any time in writing for
          future use; previously distributed materials may remain in circulation. Testimonials are
          voluntary, reflect the experience of the individual patient, and are not a guarantee of
          outcome.
        </p>{" "}
        <h2>9. Acceptable use of the Site</h2> <p>You agree not to:</p>{" "}
        <ul>
          <li>use the Site in any manner that violates applicable federal, state or local law;</li>
          <li>upload or transmit malicious code, viruses or harmful content;</li>
          <li>attempt to gain unauthorized access to any system or account;</li>
          <li>scrape, harvest or systematically extract data from the Site;</li>
          <li>impersonate any person or misrepresent your relationship with anyone;</li>
          <li>interfere with the operation, integrity or security of the Site.</li>
        </ul>{" "}
        <h2>10. Third-party services and links</h2>{" "}
        <p>
          The Site may contain links to third-party websites or integrate third-party tools (for
          example, online booking, messaging, analytics or social platforms). We do not control
          these third parties and are not responsible for their content, practices or policies. Your
          interactions with any third-party service are governed by that service's own terms and
          privacy policy.
        </p>{" "}
        <h2>11. Disclaimers</h2>{" "}
        <p>
          THE SITE AND THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. TO THE
          MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, REAL AESTHETIC MEDICAL SPA LLC DISCLAIMS ALL
          WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ANY WARRANTY THAT THE SITE WILL BE
          UNINTERRUPTED, ERROR-FREE OR SECURE. NO STATEMENT ON THE SITE CONSTITUTES A GUARANTEE OF
          ANY SPECIFIC AESTHETIC OUTCOME.
        </p>{" "}
        <h2>12. Limitation of liability</h2>{" "}
        <p>
          TO THE FULLEST EXTENT PERMITTED BY FLORIDA LAW, IN NO EVENT SHALL REAL AESTHETIC MEDICAL
          SPA LLC, ITS OWNERS, OFFICERS, EMPLOYEES, CONTRACTORS OR AGENTS BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS,
          DATA OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OR THE SERVICES, EVEN
          IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>{" "}
        <p>
          Our aggregate liability arising out of or relating to these Terms or the Site (excluding
          professional malpractice claims, which are governed by separate written informed consent
          and applicable Florida medical malpractice law) shall not exceed the greater of (a) the
          amounts paid by you to us in the twelve (12) months preceding the event giving rise to
          liability, or (b) one hundred U.S. dollars (USD 100).
        </p>{" "}
        <h2>13. Indemnification</h2>{" "}
        <p>
          You agree to defend, indemnify and hold harmless Real Aesthetic Medical Spa LLC and its
          personnel from and against any claim, demand, loss or expense (including reasonable
          attorneys' fees) arising out of (i) your breach of these Terms, (ii) your misuse of the
          Site, (iii) your violation of any applicable law, or (iv) your inaccurate or incomplete
          disclosures during medical intake.
        </p>{" "}
        <h2>14. Termination</h2>{" "}
        <p>
          We may suspend or terminate your access to the Site or refuse to provide further Services
          at any time, with or without notice, if we believe in good faith that you have violated
          these Terms, behaved abusively toward our staff, or that continued treatment is not in
          your medical or aesthetic interest. Sections related to intellectual property,
          disclaimers, limitation of liability, indemnification and governing law survive
          termination.
        </p>{" "}
        <h2>15. Governing law and dispute resolution</h2>{" "}
        <p>
          These Terms are governed by the laws of the State of Florida, without regard to
          conflict-of-law principles. Any dispute arising from or related to these Terms or the
          Site, except for claims of professional medical malpractice, shall be resolved exclusively
          in the state or federal courts located in Miami-Dade County, Florida, and you consent to
          the personal jurisdiction of those courts.
        </p>{" "}
        <p>
          Where permitted by law, the parties agree to attempt good-faith informal resolution before
          initiating litigation, and to waive any right to a jury trial and to participate in any
          class or representative proceeding.
        </p>{" "}
        <h2>16. Changes to these Terms</h2>{" "}
        <p>
          We may update these Terms from time to time. The current version is identified by the
          "Last updated" date at the top of this page. Material changes will be communicated through
          the Site. Continued use of the Site or the Services after changes take effect constitutes
          acceptance of the revised Terms.
        </p>{" "}
        <h2>17. Contact</h2> <p>Questions about these Terms should be directed to:</p>{" "}
        <div className="contact-block">
          {" "}
          <p>
            <strong>Real Aesthetic Medical Spa LLC</strong>
          </p>{" "}
          <p>8360 W Flagler St, Suite 108</p> <p>Miami, FL 33144</p>{" "}
          <p>
            Phone: <a href="tel:+17865805702">+1 786-580-5702</a>
          </p>{" "}
          <p>
            Email: <a href="mailto:info@realaestheticmedspa.com">info@realaestheticmedspa.com</a>
          </p>{" "}
        </div>{" "}
      </main>
      <SiteChrome lang="en" />
    </>
  );
}
