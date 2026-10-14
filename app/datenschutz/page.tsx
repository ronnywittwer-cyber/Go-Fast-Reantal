import type { Metadata } from "next";
import { company } from "@/lib/company";
import {
  LegalList,
  LegalPage,
  LegalSection,
  legalLink,
} from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false },
};

export default function DatenschutzPage() {
  const contact = (
    <>
      {company.name}, {company.founder}, {company.address.street},{" "}
      {company.address.zip} {company.address.city}
      {company.email ? (
        <>
          , E-Mail:{" "}
          <a href={`mailto:${company.email}`} className={legalLink}>
            {company.email}
          </a>
        </>
      ) : (
        <>
          , Telefon:{" "}
          <a href={company.phoneHref} className={legalLink}>
            {company.phone}
          </a>
        </>
      )}
    </>
  );

  return (
    <LegalPage title="Datenschutzerklärung" updated="Oktober 2026">
      <p>
        Der Schutz Ihrer Personendaten ist uns wichtig. In dieser
        Datenschutzerklärung erfahren Sie, welche Daten wir bearbeiten, wenn
        Sie unsere Webseite besuchen oder eine Buchungsanfrage senden, und
        welche Rechte Sie haben. Massgebend ist das Schweizer
        Datenschutzgesetz (DSG).
      </p>

      <LegalSection title="1. Verantwortliche Stelle">
        <p>Verantwortlich für die Datenbearbeitung ist: {contact}.</p>
        <p>
          Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte können Sie
          sich jederzeit an diese Adresse wenden.
        </p>
      </LegalSection>

      <LegalSection title="2. Besuch der Webseite">
        <p>
          Beim Aufruf der Webseite werden durch unseren Hosting-Anbieter
          technisch notwendige Daten in Server-Logfiles erfasst, z.B.
          IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browser und
          Betriebssystem. Diese Daten dienen dem sicheren und stabilen Betrieb
          der Webseite und werden nach kurzer Zeit automatisch gelöscht.
        </p>
        <p>
          Wir verwenden <strong className="text-white">keine Cookies</strong>,
          keine Analyse- oder Tracking-Dienste und keine Werbe-Netzwerke.
        </p>
      </LegalSection>

      <LegalSection title="3. Buchungsanfrage über das Formular">
        <p>Wenn Sie eine Buchungsanfrage senden, bearbeiten wir:</p>
        <LegalList
          items={[
            "Vor- und Nachname",
            "E-Mail-Adresse und Telefonnummer",
            "gewünschtes Fahrzeug und Mietzeitraum",
            "Kopie Ihres Ausweises bzw. Führerscheins",
          ]}
        />
        <p>
          Wir verwenden diese Daten ausschliesslich, um Ihre Anfrage zu
          beantworten, die Miete vorzubereiten und abzuwickeln sowie um zu
          prüfen, ob Sie zum Führen des Fahrzeugs berechtigt sind. Ohne diese
          Angaben können wir Ihnen kein Fahrzeug vermieten.
        </p>
        <p>
          Die Anfrage wird per E-Mail an uns übermittelt. Die Ausweiskopie wird
          nicht auf der Webseite gespeichert, sondern nur als Anhang dieser
          E-Mail an uns weitergeleitet.
        </p>
      </LegalSection>

      <LegalSection title="4. Kontakt per Telefon oder E-Mail">
        <p>
          Wenn Sie uns telefonisch oder per E-Mail kontaktieren, bearbeiten
          wir die von Ihnen mitgeteilten Daten, um Ihr Anliegen zu
          beantworten.
        </p>
      </LegalSection>

      <LegalSection title="5. Weitergabe an Dritte und Dienstleister">
        <p>
          Wir verkaufen Ihre Daten nicht und geben sie nicht zu Werbezwecken
          weiter. Wir setzen folgende Dienstleister ein, die Daten in unserem
          Auftrag bearbeiten:
        </p>
        <LegalList
          items={[
            <>
              <strong className="text-white">Hosting:</strong> Vercel Inc.,
              USA – Betrieb der Webseite und Server-Logfiles.
            </>,
            <>
              <strong className="text-white">E-Mail-Versand:</strong> Resend
              (Plus Five Five, Inc.), USA – Übermittlung der Buchungsanfragen
              an uns.
            </>,
          ]}
        />
        <p>
          Darüber hinaus geben wir Daten nur weiter, wenn dies für die
          Abwicklung der Miete nötig ist (z.B. an unsere Versicherung im
          Schadenfall) oder wir gesetzlich dazu verpflichtet sind (z.B. an
          Behörden bei Verkehrsbussen).
        </p>
      </LegalSection>

      <LegalSection title="6. Datenbearbeitung im Ausland">
        <p>
          Die oben genannten Dienstleister können Daten in den USA bearbeiten.
          Soweit dort kein angemessenes Datenschutzniveau besteht, erfolgt die
          Übermittlung gestützt auf das Swiss-U.S. Data Privacy Framework oder
          die Standardvertragsklauseln der Europäischen Kommission, die vom
          Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB)
          anerkannt sind.
        </p>
      </LegalSection>

      <LegalSection title="7. Aufbewahrung">
        <p>
          Wir bewahren Ihre Daten nur so lange auf, wie es für die genannten
          Zwecke nötig ist. Anfragen, die nicht zu einer Miete führen, löschen
          wir, sobald sie erledigt sind. Die Ausweiskopie löschen wir nach
          Abschluss der Miete, sobald sie nicht mehr für die Abwicklung von
          Schäden oder Verkehrsbussen benötigt wird. Vertrags- und
          Buchhaltungsunterlagen bewahren wir gemäss den gesetzlichen Fristen
          (in der Regel 10 Jahre) auf.
        </p>
      </LegalSection>

      <LegalSection title="8. Datensicherheit">
        <p>
          Die Übertragung zwischen Ihrem Browser und unserer Webseite erfolgt
          verschlüsselt (HTTPS). Wir treffen angemessene technische und
          organisatorische Massnahmen, um Ihre Daten vor Verlust und
          unbefugtem Zugriff zu schützen.
        </p>
      </LegalSection>

      <LegalSection title="9. Ihre Rechte">
        <p>Im Rahmen des Datenschutzgesetzes haben Sie das Recht:</p>
        <LegalList
          items={[
            "Auskunft über die von uns bearbeiteten Personendaten zu verlangen,",
            "unrichtige Daten berichtigen zu lassen,",
            "die Löschung Ihrer Daten zu verlangen, soweit keine gesetzliche Aufbewahrungspflicht besteht,",
            "der Bearbeitung zu widersprechen und Ihre Daten herauszuverlangen.",
          ]}
        />
        <p>
          Wenden Sie sich dazu an die oben genannte Adresse. Zudem können Sie
          sich beim Eidgenössischen Datenschutz- und
          Öffentlichkeitsbeauftragten (
          <a
            href="https://www.edoeb.admin.ch"
            className={legalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            www.edoeb.admin.ch
          </a>
          ) beschweren.
        </p>
      </LegalSection>

      <LegalSection title="10. Änderungen">
        <p>
          Wir können diese Datenschutzerklärung jederzeit anpassen. Es gilt
          die auf dieser Webseite veröffentlichte aktuelle Fassung.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
