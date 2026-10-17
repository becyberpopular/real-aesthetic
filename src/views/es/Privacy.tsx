// Page markup converted from https://realaestheticmedspa.com/privacidad/
import css from "@/styles/pages/privacy.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";

export default function PrivacyEs() {
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Idioma">
        <SiteLink href="/privacy/">EN</SiteLink>
        <span>·</span>
        <SiteLink href="/privacidad/" className="active">
          ES
        </SiteLink>
      </div>{" "}
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
      <main className="legal-wrap">
        {" "}
        <span className="last-updated">Última actualización · 2026-04-29</span>{" "}
        <h1>
          Política de <em>Privacidad</em>
        </h1>{" "}
        <h2>1. Quiénes somos</h2>{" "}
        <p>
          Real Aesthetic Medical Spa LLC ("Real Aesthetic Medical Spa", "nosotros" o "nuestro/a") es
          una compañía de responsabilidad limitada de Florida que opera una práctica de medicina
          estética en 8360 W Flagler St, Suite 108, Miami, FL 33144. Esta Política de Privacidad
          explica cómo recopilamos, usamos, compartimos y protegemos la información personal de los
          visitantes de <SiteLink href="/">realaestheticmedspa.com</SiteLink> (el "Sitio") y de los
          pacientes que reciben nuestros servicios médicos y cosméticos (los "Servicios").
        </p>{" "}
        <p>
          Esta Política aplica tanto a la información que recibimos online a través del Sitio como a
          la que recibimos de forma presencial en nuestras instalaciones. No aplica a sitios o
          servicios de terceros que enlacen o se integren con nuestro Sitio, los cuales se rigen por
          sus propias políticas de privacidad.
        </p>{" "}
        <h2>2. Información que recopilamos</h2>{" "}
        <h3>2.1 Información que usted nos facilita directamente</h3>{" "}
        <ul>
          <li>
            <strong>Datos de identificación y contacto:</strong> nombre, correo electrónico,
            teléfono, fecha de nacimiento, dirección postal.
          </li>
          <li>
            <strong>Datos de cita y de cuenta:</strong> tratamientos solicitados, fechas preferidas,
            preferencias de comunicación, notas de agendamiento.
          </li>
          <li>
            <strong>Información médica y clínica:</strong> historial médico, alergias, medicación,
            procedimientos cosméticos previos, fotografías de antes y después, y consentimientos
            informados firmados — recopilados durante la consulta presencial o mediante formularios
            de admisión seguros.
          </li>
          <li>
            <strong>Datos de pago:</strong> los pagos se procesan a través de procesadores de pago
            externos; no almacenamos números completos de tarjeta en nuestros sistemas.
          </li>
          <li>
            <strong>Comunicaciones:</strong> mensajes que nos envía por email, formulario web,
            WhatsApp u otros canales.
          </li>
        </ul>{" "}
        <h3>2.2 Información que recopilamos automáticamente</h3>{" "}
        <ul>
          <li>
            <strong>Datos de dispositivo y uso:</strong> dirección IP, tipo de navegador, sistema
            operativo, URL de procedencia, páginas visitadas, tiempo en página, identificadores de
            dispositivo.
          </li>
          <li>
            <strong>Cookies y tecnologías similares:</strong> cookies de sesión, cookies de
            preferencias y cookies de analítica limitadas. Véase el apartado "Cookies".
          </li>
        </ul>{" "}
        <h3>2.3 Información de terceros</h3>{" "}
        <p>
          Podemos recibir información de socios que nos refieren pacientes, de plataformas de redes
          sociales cuando interactúa con nuestros perfiles o anuncios, y de proveedores de analítica
          o publicidad, siempre dentro de los términos aplicables de esos proveedores.
        </p>{" "}
        <h2>3. Para qué usamos la información</h2> <p>Utilizamos la información recopilada para:</p>{" "}
        <ul>
          <li>agendar, prestar y dar seguimiento a los Servicios estéticos y médicos;</li>
          <li>evaluar la elegibilidad médica y personalizar los planes de tratamiento;</li>
          <li>procesar pagos y mantener registros contables;</li>
          <li>responder a consultas y prestar atención al cliente;</li>
          <li>enviar recordatorios de cita e instrucciones de cuidado posterior;</li>
          <li>
            enviar comunicaciones de marketing sobre nuestros servicios, únicamente cuando usted lo
            haya consentido o la ley lo permita (con opción de baja en cada mensaje);
          </li>
          <li>mejorar el Sitio, los contenidos y la experiencia del paciente;</li>
          <li>cumplir con obligaciones legales, regulatorias y de licencia profesional;</li>
          <li>prevenir fraude, abuso e incidentes de seguridad.</li>
        </ul>{" "}
        <h2>4. Información médica y confidencialidad</h2>{" "}
        <p>
          Tratamos la información médica y clínica con el más alto nivel de confidencialidad. Aunque
          muchos servicios estéticos prestados en un medspa quedan fuera del ámbito estricto de
          "Información Médica Protegida" bajo HIPAA, gestionamos voluntariamente las historias
          clínicas, fotografías y consentimientos con salvaguardas alineadas con HIPAA, como buena
          práctica y conforme a la legislación de Florida en materia de privacidad sanitaria
          aplicable.
        </p>{" "}
        <p>Esto significa que:</p>{" "}
        <ul>
          <li>
            el acceso a las historias clínicas se limita al Practicante y al personal clínico
            autorizado;
          </li>
          <li>
            los archivos físicos se conservan en almacenamiento bajo llave y los registros digitales
            en sistemas con control de acceso;
          </li>
          <li>
            las fotografías de antes y después se almacenan separadas de la información
            identificativa y solo se usan externamente con su autorización expresa firmada;
          </li>
          <li>
            no vendemos, alquilamos ni compartimos información médica con fines de marketing o
            publicidad.
          </li>
        </ul>{" "}
        <p>
          Cuando algún servicio que prestemos califique como Información Médica Protegida bajo HIPAA
          (45 C.F.R. Partes 160 y 164), nuestro Aviso escrito de Prácticas de Privacidad (Notice of
          Privacy Practices) será aplicable de forma adicional a esta Política.
        </p>{" "}
        <h2>5. Cómo compartimos la información</h2>{" "}
        <p>No vendemos información personal. Solo la compartimos con:</p>{" "}
        <ul>
          <li>
            <strong>Proveedores de servicio</strong> que actúan siguiendo nuestras instrucciones y
            bajo deberes de confidencialidad, como plataformas de agendamiento y CRM, procesadores
            de pago, proveedores de hosting, proveedores de email y SMS, y herramientas de
            analítica;
          </li>
          <li>
            <strong>Socios sanitarios,</strong> incluidos médicos remitentes o especialistas,
            únicamente con su autorización o cuando sea necesario para su atención;
          </li>
          <li>
            <strong>Autoridades</strong> cuando lo exija la ley aplicable, una orden judicial o
            citación, o para proteger derechos, propiedad o la seguridad;
          </li>
          <li>
            <strong>Operaciones corporativas:</strong> en caso de fusión, adquisición o venta de
            activos, supuesto en el que se exigirá al adquirente continuidad con esta Política.
          </li>
        </ul>{" "}
        <h2>6. Cookies y rastreo</h2>{" "}
        <p>
          El Sitio utiliza cookies y tecnologías similares para garantizar su funcionamiento,
          recordar preferencias y medir el tráfico de manera agregada. Puede configurar su navegador
          para bloquear o eliminar cookies; algunas funciones del Sitio podrían no operar
          correctamente si lo hace.
        </p>{" "}
        <p>
          En la medida aplicable, atendemos las señales "Do Not Track" y Global Privacy Control
          (GPC) como solicitudes de exclusión de la venta o cesión de información personal con fines
          de publicidad comportamental cruzada.
        </p>{" "}
        <h2>7. Conservación de los datos</h2>{" "}
        <p>
          Conservamos la información personal el tiempo necesario para cumplir con las finalidades
          para las que fue recopilada, incluyendo el plazo exigido por la normativa de Florida sobre
          conservación de historias clínicas y por las obligaciones fiscales, aseguradoras y
          contractuales aplicables. Cuando la información deja de ser necesaria, se elimina,
          anonimiza o destruye de forma segura.
        </p>{" "}
        <h2>8. Seguridad</h2>{" "}
        <p>
          Aplicamos salvaguardas administrativas, técnicas y físicas razonables para proteger la
          información personal frente a accesos no autorizados, alteración, divulgación o
          destrucción. Estas incluyen controles de acceso, cifrado en tránsito, copias de seguridad
          protegidas, acuerdos de confidencialidad con el personal y revisión continua de las
          prácticas de seguridad de los proveedores. Ningún método de transmisión o almacenamiento
          es 100% seguro y no podemos garantizar una seguridad absoluta.
        </p>{" "}
        <h2>9. Sus derechos</h2>{" "}
        <p>
          Según el lugar donde resida, puede tener los siguientes derechos sobre su información
          personal:
        </p>{" "}
        <ul>
          <li>
            <strong>Acceso</strong> a la información que tenemos sobre usted;
          </li>
          <li>
            <strong>Rectificación</strong> de información inexacta o incompleta;
          </li>
          <li>
            <strong>Supresión</strong> de su información, sujeta a las obligaciones legales de
            conservación aplicables a registros médicos;
          </li>
          <li>
            <strong>Baja</strong> de las comunicaciones de marketing en cualquier momento;
          </li>
          <li>
            <strong>Revocación del consentimiento</strong> para el uso de su imagen o testimonio,
            con efectos hacia el futuro;
          </li>
          <li>
            <strong>No discriminación</strong> por ejercer cualquiera de estos derechos.
          </li>
        </ul>{" "}
        <p>
          Los residentes en Florida pueden contar con derechos adicionales conforme a la legislación
          de Florida aplicable. Para ejercer cualquier derecho, puede escribirnos a{" "}
          <a href="mailto:info@realaestheticmedspa.com">info@realaestheticmedspa.com</a>. Es posible
          que necesitemos verificar su identidad antes de responder.
        </p>{" "}
        <h2>10. Privacidad de menores</h2>{" "}
        <p>
          El Sitio no se dirige a menores de 13 años y no recopilamos a sabiendas información
          personal de menores de 13 años. Los tratamientos en menores solo se realizan con el
          consentimiento del padre, madre o tutor legal y cuando la legislación de Florida lo
          permita. Si cree que hemos recopilado información de un menor sin el consentimiento
          adecuado, contáctenos para eliminarla cuanto antes.
        </p>{" "}
        <h2>11. Visitantes internacionales</h2>{" "}
        <p>
          El Sitio se opera desde los Estados Unidos. Si accede al Sitio desde fuera de EE. UU., su
          información será transferida y tratada en los Estados Unidos, donde la normativa de
          protección de datos puede diferir de la de su país.
        </p>{" "}
        <h2>12. Cambios en esta Política</h2>{" "}
        <p>
          Podemos actualizar esta Política periódicamente. La versión vigente se identifica por la
          fecha de "Última actualización" en la parte superior. Los cambios sustanciales se
          comunicarán a través del Sitio. Le recomendamos revisarla con regularidad.
        </p>{" "}
        <h2>13. Contacto</h2>{" "}
        <p>
          Para consultas, solicitudes o reclamaciones sobre esta Política de Privacidad, contacte
          con:
        </p>{" "}
        <div className="contact-block">
          {" "}
          <p>
            <strong>Real Aesthetic Medical Spa LLC</strong> — Oficina de Privacidad
          </p>{" "}
          <p>8360 W Flagler St, Suite 108</p> <p>Miami, FL 33144</p>{" "}
          <p>
            Teléfono: <a href="tel:+17865805702">+1 786-580-5702</a>
          </p>{" "}
          <p>
            Email: <a href="mailto:info@realaestheticmedspa.com">info@realaestheticmedspa.com</a>
          </p>{" "}
        </div>{" "}
      </main>
      <SiteChrome lang="es" />
    </>
  );
}
