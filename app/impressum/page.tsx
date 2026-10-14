import type { Metadata } from "next";
import { company } from "@/lib/company";
import { LegalPage, LegalSection, legalLink } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum – Go Fast Rental",
  robots: { index: false },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <LegalSection title="Verantwortlich für den Inhalt">
        <p>
          <strong className="text-white">{company.name}</strong>
          {company.legalForm && <> ({company.legalForm})</>}
          <br />
          Inhaber: {company.founder}
          <br />
          {company.address.street}
          <br />
          {company.address.zip} {company.address.city}
          <br />
          {company.address.country}
        </p>
      </LegalSection>

      <LegalSection title="Kontakt">
        <p>
          Telefon:{" "}
          <a href={company.phoneHref} className={legalLink}>
            {company.phone}
          </a>
          {company.email && (
            <>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${company.email}`} className={legalLink}>
                {company.email}
              </a>
            </>
          )}
        </p>
      </LegalSection>

      {company.uid && (
        <LegalSection title="Unternehmens-Identifikationsnummer">
          <p>UID: {company.uid}</p>
        </LegalSection>
      )}

      <LegalSection title="Haftungsausschluss">
        <p>
          Wir prüfen die Inhalte dieser Webseite sorgfältig. Dennoch übernehmen
          wir keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität
          der Informationen. Angaben zu Fahrzeugen, Preisen und Verfügbarkeit
          sind unverbindlich; massgebend ist die Bestätigung Ihrer
          Buchungsanfrage durch uns.
        </p>
        <p>
          Haftungsansprüche wegen Schäden materieller oder immaterieller Art,
          die aus dem Zugriff auf oder der Nutzung bzw. Nichtnutzung der
          veröffentlichten Informationen entstehen, werden ausgeschlossen,
          soweit gesetzlich zulässig.
        </p>
      </LegalSection>

      <LegalSection title="Haftung für Links">
        <p>
          Verweise auf Webseiten Dritter liegen ausserhalb unseres
          Verantwortungsbereichs. Für deren Inhalte sind ausschliesslich die
          jeweiligen Betreiber verantwortlich.
        </p>
      </LegalSection>

      <LegalSection title="Urheberrechte">
        <p>
          Texte, Bilder, Logos und weitere Inhalte dieser Webseite gehören{" "}
          {company.name} oder den jeweiligen Rechteinhabern. Für die
          Verwendung ist eine vorherige schriftliche Zustimmung erforderlich.
        </p>
      </LegalSection>

      <LegalSection title="Datenschutz">
        <p>
          Informationen zur Bearbeitung Ihrer Personendaten finden Sie in
          unserer{" "}
          <a href="/datenschutz" className={legalLink}>
            Datenschutzerklärung
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
