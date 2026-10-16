// Page markup converted from https://realaestheticmedspa.com/ (404 page)
import css from "@/styles/pages/notfound.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";

export default function NotFoundEs() {
  return (
    <>
      <PageStyle css={css} />
      <nav className="top" id="topnav">
        {" "}
        <SiteLink href="/" className="brand">
          {" "}
          <img src="/img/logo.webp" alt="Real Aesthetic Medical Spa" />{" "}
        </SiteLink>{" "}
        <ul>
          <li>
            <SiteLink href="/">Inicio</SiteLink>
          </li>
          <li>
            <SiteLink href="/tratamientos/">Tratamientos</SiteLink>
          </li>
          <li>
            <SiteLink href="/sobre/">El practicante</SiteLink>
          </li>
          <li>
            <SiteLink href="/financiacion/" style={{ color: "inherit", textDecoration: "none" }}>
              Financiación
            </SiteLink>
          </li>
        </ul>{" "}
        <SiteLink href="/reservar/" className="nav-cta">
          Reservar
        </SiteLink>{" "}
      </nav>{" "}
      <main className="notfound">
        {" "}
        <p className="code">
          4<span>0</span>4
        </p>{" "}
        <p className="eyebrow">Página no encontrada</p>{" "}
        <h1>
          Esta página ya no está <em>aquí</em>.
        </h1>{" "}
        <p className="lede">
          Puede que la dirección haya cambiado o que el enlace esté anticuado. Nuestro catálogo
          completo de tratamientos sigue disponible, y si buscas algo concreto podemos ayudarte a
          encontrarlo.
        </p>{" "}
        <div className="actions">
          {" "}
          <SiteLink className="primary" href="/tratamientos/">
            Ver tratamientos
          </SiteLink>{" "}
          <SiteLink href="/">Inicio</SiteLink> <SiteLink href="/contacto/">Contacto</SiteLink>{" "}
        </div>{" "}
        <div className="rule" />{" "}
        <p className="en">
          This page could not be found. Browse our{" "}
          <SiteLink href="/procedures/">treatments</SiteLink>, return to the{" "}
          <SiteLink href="/en/">homepage</SiteLink>, or{" "}
          <SiteLink href="/contact/">get in touch</SiteLink>.
        </p>{" "}
      </main>
      <SiteChrome lang="es" />
    </>
  );
}
