// Page markup converted from https://realaestheticmedspa.com/terminos/
import css from "@/styles/pages/terms.css?raw";
import { PageStyle } from "@/site/PageStyle";
import { SiteChrome } from "@/site/SiteChrome";
import { SiteLink } from "@/site/SiteLink";

export default function TermsEs() {
  return (
    <>
      <PageStyle css={css} />
      <div className="lang-switcher" aria-label="Idioma">
        <SiteLink href="/terms/">EN</SiteLink>
        <span>·</span>
        <SiteLink href="/terminos/" className="active">
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
          Términos de <em>Servicio</em>
        </h1>{" "}
        <h2>1. Introducción y aceptación</h2>{" "}
        <p>
          Los presentes Términos de Servicio (los "Términos") regulan el acceso y uso del sitio web{" "}
          <SiteLink href="/">realaestheticmedspa.com</SiteLink> (el "Sitio") y de los servicios
          médicos estéticos, cosméticos y de bienestar (en conjunto, los "Servicios") que presta
          Real Aesthetic Medical Spa LLC ("Real Aesthetic Medical Spa", "nosotros" o "nuestro/a"),
          una compañía de responsabilidad limitada constituida bajo las leyes del Estado de Florida,
          con domicilio en 8360 W Flagler St, Suite 108, Miami, FL 33144.
        </p>{" "}
        <p>
          Al acceder al Sitio, agendar una cita, asistir a una consulta o recibir cualquier
          tratamiento, usted ("usted", "Cliente" o "Paciente") reconoce haber leído, comprendido y
          aceptado estos Términos. Si no está de acuerdo, debe abstenerse de utilizar el Sitio o los
          Servicios.
        </p>{" "}
        <h2>2. Definiciones</h2>{" "}
        <ul>
          <li>
            <strong>"Servicios"</strong>: procedimientos estéticos, cosméticos y de bienestar
            realizados en nuestras instalaciones, incluidos, entre otros, neuromoduladores, rellenos
            dérmicos, tratamientos láser, terapias dermatológicas y consultas.
          </li>
          <li>
            <strong>"Practicante"</strong>: la enfermera/o de práctica avanzada (APRN) con licencia
            o el personal clínico cualificado que ejecuta los Servicios.
          </li>
          <li>
            <strong>"Contenido"</strong>: todo texto, imagen, video, gráfico, logo y demás material
            publicado en el Sitio.
          </li>
          <li>
            <strong>"Cita"</strong>: consulta, tratamiento o seguimiento agendado en nuestras
            instalaciones.
          </li>
        </ul>{" "}
        <h2>3. Elegibilidad</h2>{" "}
        <p>
          Debe tener al menos 18 años cumplidos para agendar, consentir o recibir Servicios, salvo
          en los casos en que un padre, madre o tutor legal otorgue el consentimiento y la
          legislación de Florida lo permita para menores de edad. Al usar el Sitio o solicitar una
          Cita, usted manifiesta cumplir con este requisito y que toda la información que nos
          facilita es veraz y completa.
        </p>{" "}
        <h2>4. Naturaleza de los Servicios y consentimiento informado</h2>{" "}
        <p>
          Nuestros Servicios implican procedimientos médicos y cosméticos que conllevan riesgos
          inherentes, entre los que se incluyen, sin limitación, hematomas, inflamación, infección,
          reacciones alérgicas, asimetrías y resultados estéticos no esperados. Antes de cualquier
          tratamiento, recibirá una consulta personalizada y deberá firmar un consentimiento
          informado por escrito específico para el procedimiento.
        </p>{" "}
        <p>
          El Sitio, incluyendo fotografías de antes y después, testimonios y descripciones de
          procedimientos, se ofrece únicamente con fines informativos generales. No constituye
          asesoramiento médico, diagnóstico ni plan de tratamiento, y los resultados varían según
          cada persona. No se garantiza ningún resultado.
        </p>{" "}
        <h3>4.1 Honestidad del paciente</h3>{" "}
        <p>
          Usted se compromete a divulgar de forma veraz y completa su historial médico, medicación,
          alergias y procedimientos cosméticos previos. La omisión de información relevante puede
          comprometer su seguridad y, a criterio exclusivo del Practicante, derivar en la negativa o
          suspensión del tratamiento.
        </p>{" "}
        <h2>5. Citas, depósitos y cancelaciones</h2>{" "}
        <p>
          Las Citas pueden solicitarse a través del Sitio, por teléfono o por los canales de
          mensajería autorizados. Podemos requerir un depósito de reserva no reembolsable para
          confirmar su horario, que se aplicará al coste del Servicio efectivamente realizado.
        </p>{" "}
        <ul>
          <li>
            Cancelaciones con al menos 48 horas de antelación: el depósito puede transferirse a una
            próxima Cita dentro de los siguientes 90 días.
          </li>
          <li>
            Cancelaciones con menos de 48 horas, ausencias o llegadas con más de 15 minutos de
            retraso: el depósito se pierde y la Cita podrá reprogramarse sujeta a un nuevo depósito.
          </li>
          <li>
            Nos reservamos el derecho de rechazar, posponer o suspender una Cita si, a juicio del
            Practicante, el procedimiento no resulta seguro o adecuado para usted ese día.
          </li>
        </ul>{" "}
        <h2>6. Precios, pago y reembolsos</h2>{" "}
        <p>
          Los precios de los Servicios se publican en el Sitio o se cotizan durante la consulta y no
          incluyen los impuestos sobre ventas aplicables en Florida cuando correspondan. Aceptamos
          los medios de pago que se exhiben públicamente en nuestras instalaciones. El pago debe
          efectuarse en el momento en que se presta el Servicio, salvo que se acuerde algo distinto
          por escrito.
        </p>{" "}
        <p>
          Dado que los Servicios estéticos son personalizados y se consumen al momento de su
          prestación, los importes pagados por Servicios ya realizados no son reembolsables. Los
          paquetes prepagados y series de tratamientos podrán ser transferibles o convertibles en
          crédito a nuestra discreción, conforme a las condiciones específicas comunicadas en el
          momento de la compra.
        </p>{" "}
        <h2>7. Propiedad intelectual</h2>{" "}
        <p>
          Todo el Contenido del Sitio, incluyendo el nombre comercial "Real Aesthetic Medical Spa",
          logos, paleta cromática, fotografía, textos, video, elementos de diseño y la apariencia
          general, es propiedad de Real Aesthetic Medical Spa LLC o se utiliza bajo licencia, y se
          encuentra protegido por las leyes de propiedad intelectual, marcas y derecho de autor de
          los Estados Unidos e internacionales.
        </p>{" "}
        <p>
          Se le concede una licencia limitada, revocable y no exclusiva para visualizar el Sitio con
          fines personales y no comerciales. Queda prohibido reproducir, distribuir, modificar,
          scrapear, enmarcar, replicar, crear obras derivadas o explotar comercialmente cualquier
          Contenido sin nuestro consentimiento previo por escrito.
        </p>{" "}
        <h2>8. Uso de imágenes y testimonios de pacientes</h2>{" "}
        <p>
          Las fotografías de antes y después y cualquier otra imagen personal solo se publican
          previa autorización expresa firmada por usted. Puede revocar dicha autorización en
          cualquier momento por escrito para usos futuros; los materiales ya difundidos podrán
          continuar en circulación. Los testimonios son voluntarios, reflejan la experiencia
          individual del paciente y no constituyen garantía de resultado.
        </p>{" "}
        <h2>9. Uso aceptable del Sitio</h2> <p>Usted se compromete a no:</p>{" "}
        <ul>
          <li>
            utilizar el Sitio de forma que infrinja la legislación federal, estatal o local
            aplicable;
          </li>
          <li>cargar o transmitir código malicioso, virus o contenido dañino;</li>
          <li>intentar acceder sin autorización a cualquier sistema o cuenta;</li>
          <li>scrapear, recolectar o extraer datos de forma sistemática;</li>
          <li>suplantar a otra persona o tergiversar su relación con un tercero;</li>
          <li>interferir con el funcionamiento, integridad o seguridad del Sitio.</li>
        </ul>{" "}
        <h2>10. Servicios y enlaces de terceros</h2>{" "}
        <p>
          El Sitio puede contener enlaces a sitios de terceros o integrar herramientas externas (por
          ejemplo, agendamiento online, mensajería, analítica o redes sociales). No controlamos a
          estos terceros y no nos hacemos responsables de su contenido, prácticas o políticas. Sus
          interacciones con cualquier servicio de terceros se rigen por los términos y la política
          de privacidad de ese tercero.
        </p>{" "}
        <h2>11. Exenciones de garantía</h2>{" "}
        <p>
          EL SITIO Y LOS SERVICIOS SE PRESTAN "TAL CUAL" Y "SEGÚN DISPONIBILIDAD". HASTA EL MÁXIMO
          PERMITIDO POR LA LEY APLICABLE, REAL AESTHETIC MEDICAL SPA LLC RECHAZA TODA GARANTÍA,
          EXPRESA O IMPLÍCITA, INCLUIDAS LAS DE COMERCIABILIDAD, IDONEIDAD PARA UN FIN PARTICULAR,
          NO INFRACCIÓN Y AQUELLAS RELATIVAS A QUE EL SITIO SEA ININTERRUMPIDO, ESTÉ LIBRE DE
          ERRORES O SEA SEGURO. NINGUNA AFIRMACIÓN PRESENTE EN EL SITIO CONSTITUYE UNA GARANTÍA DE
          RESULTADO ESTÉTICO ESPECÍFICO.
        </p>{" "}
        <h2>12. Limitación de responsabilidad</h2>{" "}
        <p>
          HASTA EL MÁXIMO PERMITIDO POR LA LEGISLACIÓN DE FLORIDA, EN NINGÚN CASO REAL AESTHETIC
          MEDICAL SPA LLC, SUS SOCIOS, DIRECTIVOS, EMPLEADOS, CONTRATISTAS O AGENTES SERÁN
          RESPONSABLES POR DAÑOS INDIRECTOS, INCIDENTALES, ESPECIALES, CONSECUENTES O PUNITIVOS, NI
          POR LUCRO CESANTE, PÉRDIDA DE DATOS O DE FONDO DE COMERCIO, DERIVADOS O RELACIONADOS CON
          EL USO DEL SITIO O DE LOS SERVICIOS, AÚN CUANDO SE HUBIERA ADVERTIDO LA POSIBILIDAD DE
          TALES DAÑOS.
        </p>{" "}
        <p>
          Nuestra responsabilidad agregada derivada de o relacionada con estos Términos o el Sitio
          (excluyendo reclamaciones por mala práctica profesional, regidas por el consentimiento
          informado firmado por separado y por la normativa aplicable de Florida en materia de mala
          praxis médica) no excederá la mayor de (a) las cantidades efectivamente abonadas por usted
          en los doce (12) meses anteriores al hecho que dé origen a la responsabilidad, o (b) cien
          dólares estadounidenses (USD 100).
        </p>{" "}
        <h2>13. Indemnización</h2>{" "}
        <p>
          Usted se compromete a defender, indemnizar y mantener indemne a Real Aesthetic Medical Spa
          LLC y a su personal frente a cualquier reclamación, demanda, pérdida o gasto (incluidos
          honorarios razonables de abogados) derivada de (i) el incumplimiento de estos Términos,
          (ii) el uso indebido del Sitio, (iii) la infracción de cualquier ley aplicable, o (iv) la
          información incompleta o inexacta facilitada durante el cribado médico.
        </p>{" "}
        <h2>14. Terminación</h2>{" "}
        <p>
          Podemos suspender o terminar su acceso al Sitio o negarnos a prestar Servicios adicionales
          en cualquier momento, con o sin previo aviso, si entendemos de buena fe que ha incumplido
          estos Términos, ha mantenido un comportamiento abusivo con nuestro personal o que
          continuar el tratamiento no resulta conveniente desde el punto de vista médico o estético.
          Las cláusulas relativas a propiedad intelectual, exenciones de garantía, limitación de
          responsabilidad, indemnización y ley aplicable sobreviven a la terminación.
        </p>{" "}
        <h2>15. Ley aplicable y resolución de disputas</h2>{" "}
        <p>
          Estos Términos se rigen por las leyes del Estado de Florida, sin atender a sus principios
          de conflicto de leyes. Toda controversia que se suscite en relación con los Términos o con
          el Sitio, salvo las reclamaciones por mala práctica médica profesional, se resolverá
          exclusivamente ante los tribunales estatales o federales con sede en el condado de
          Miami-Dade, Florida, sometiéndose usted expresamente a su jurisdicción personal.
        </p>{" "}
        <p>
          En la medida permitida por la ley, las partes acuerdan intentar de buena fe una resolución
          informal antes de iniciar cualquier acción judicial, así como renunciar al juicio por
          jurado y a participar en cualquier procedimiento colectivo o representativo.
        </p>{" "}
        <h2>16. Modificaciones de los Términos</h2>{" "}
        <p>
          Podemos actualizar estos Términos cada cierto tiempo. La versión vigente se identifica por
          la fecha de "Última actualización" en la parte superior de esta página. Los cambios
          sustanciales se comunicarán a través del Sitio. El uso continuado del Sitio o de los
          Servicios tras la entrada en vigor de los cambios implica la aceptación de los Términos
          revisados.
        </p>{" "}
        <h2>17. Contacto</h2> <p>Cualquier consulta sobre estos Términos puede dirigirse a:</p>{" "}
        <div className="contact-block">
          {" "}
          <p>
            <strong>Real Aesthetic Medical Spa LLC</strong>
          </p>{" "}
          <p>8360 W Flagler St, Suite 108</p> <p>Miami, FL 33144</p>{" "}
          <p>
            Teléfono: <a href="tel:+17862443722">+1 786-244-3722</a>
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
