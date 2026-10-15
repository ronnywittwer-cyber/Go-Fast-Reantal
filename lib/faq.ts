// Häufige Fragen – hier Fragen/Antworten anpassen oder ergänzen.
// Zahlen kommen aus lib/company.ts, damit überall dasselbe steht.
import {
  company,
  formatChf,
  kmExtraPrice,
  kmPerMonth,
  rentalTerms,
} from "./company";

export interface FaqItem {
  question: string;
  answer: string;
}

const deposit = formatChf(rentalTerms.depositChf);
const deductible = formatChf(rentalTerms.deductibleChf);

export const faq: FaqItem[] = [
  {
    question: "Wie alt muss ich sein, um ein Auto zu mieten?",
    answer: `Sie können ab ${rentalTerms.minAge} Jahren bei uns mieten. Eine Mindestdauer für den Führerschein gibt es nicht – auch Neulenkerinnen und Neulenker mit Führerschein auf Probe sind willkommen.`,
  },
  {
    question: "Was muss ich zur Abholung mitbringen?",
    answer: `Ihren gültigen Führerschein, einen amtlichen Ausweis (ID oder Pass) und die Kaution von ${deposit}.`,
  },
  {
    question: "Wie läuft eine Buchung ab?",
    answer: `Wählen Sie Ihr Fahrzeug und schicken Sie uns das Buchungsformular. Wir prüfen die Verfügbarkeit und melden uns zur Bestätigung bei Ihnen. Natürlich können Sie auch anrufen oder per WhatsApp schreiben: ${company.phone}.`,
  },
  {
    question: "Wo hole ich das Auto ab?",
    answer: `Bei uns an der ${company.address.street} in ${company.address.zip} ${company.address.city}. Wir sind täglich von 09:00 bis 22:00 Uhr für Sie da.`,
  },
  {
    question: "Wie viele Kilometer sind inklusive?",
    answer: `${kmPerMonth} sind im Preis inbegriffen. Jeder weitere Kilometer kostet ${kmExtraPrice}.`,
  },
  {
    question: "Darf ich mit dem Auto ins Ausland fahren?",
    answer: "Ja. Fahrten innerhalb der Schweiz und ins Ausland sind ausdrücklich erlaubt.",
  },
  {
    question: "Ist das Auto versichert? Was passiert bei einem Schaden?",
    answer: `Alle Fahrzeuge sind voll versichert. Im Schadenfall beträgt Ihr Selbstbehalt ${deductible}. Melden Sie uns einen Schaden bitte sofort.`,
  },
  {
    question: "Wann bekomme ich die Kaution zurück?",
    answer: `Sofort bei der Rückgabe – sofern das Auto ohne neue Schäden und vollgetankt zurückkommt.`,
  },
  {
    question: "Muss ich das Auto vollgetankt zurückgeben?",
    answer: "Ja. Sie erhalten das Auto vollgetankt und geben es bitte ebenso vollgetankt zurück.",
  },
  {
    question: "Wie kann ich bezahlen?",
    answer: "Bar, mit TWINT oder per Banküberweisung – ganz wie es Ihnen passt.",
  },
];
