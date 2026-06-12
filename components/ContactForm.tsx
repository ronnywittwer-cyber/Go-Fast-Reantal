"use client";

import { useRef, useState } from "react";
import { cars, type CarId } from "@/lib/company";

interface ContactFormProps {
  selectedCar: CarId | null;
  onSelectCar: (id: CarId) => void;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  car?: string;
  dateFrom?: string;
  dateTo?: string;
  idDocument?: string;
}

const inputBase =
  "w-full rounded-xl border border-ink-border bg-ink px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-brand-blue focus:outline-none focus:ring-1 focus:ring-brand-blue";
const labelBase = "mb-1.5 block text-sm font-medium text-zinc-300";
const errorText = "mt-1 text-xs font-medium text-rose-400";

export default function ContactForm({
  selectedCar,
  onSelectCar,
}: ContactFormProps) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [idFileName, setIdFileName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function validate(formData: FormData): FormErrors {
    const next: FormErrors = {};
    const firstName = (formData.get("firstName") as string)?.trim();
    const lastName = (formData.get("lastName") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const car = formData.get("car") as string;
    const dateFrom = formData.get("dateFrom") as string;
    const dateTo = formData.get("dateTo") as string;
    const idFile = formData.get("idDocument") as File | null;

    if (!firstName) next.firstName = "Bitte Vornamen angeben.";
    if (!lastName) next.lastName = "Bitte Nachnamen angeben.";

    if (!email) {
      next.email = "Bitte E-Mail-Adresse angeben.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Bitte eine gültige E-Mail-Adresse eingeben.";
    }

    if (!phone) next.phone = "Bitte Telefonnummer angeben.";
    if (!car) next.car = "Bitte ein Fahrzeug auswählen.";

    if (!dateFrom) next.dateFrom = "Bitte Startdatum wählen.";
    if (!dateTo) {
      next.dateTo = "Bitte Enddatum wählen.";
    } else if (dateFrom && dateTo < dateFrom) {
      next.dateTo = "Das Enddatum muss nach dem Startdatum liegen.";
    }

    // Verpflichtender Ausweis-/Führerschein-Upload
    if (!idFile || idFile.size === 0) {
      next.idDocument =
        "Bitte laden Sie eine Kopie Ihres Ausweises/Führerscheins hoch.";
    }

    return next;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const validation = validate(formData);
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      // TODO: Hier die Daten an einen Backend-Endpunkt / API-Route senden
      // (z.B. /app/api/booking/route.ts) oder per E-Mail-Service verschicken.
      // Aktuell wird die Anfrage clientseitig validiert und bestätigt.
      setSubmitted(true);
      form.reset();
      setIdFileName("");
    } else {
      // Zum ersten Fehlerfeld scrollen
      document
        .querySelector("[data-error='true']")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-brand-sky/40 bg-ink-card p-10 text-center shadow-sky">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-sky/15 text-brand-sky">
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m5 12 5 5 9-9" />
          </svg>
        </div>
        <h3 className="mt-5 text-2xl font-black text-white">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="mt-3 text-zinc-400">
          Wir haben Ihre Buchungsanfrage erhalten und melden uns so schnell wie
          möglich bei Ihnen. Bei dringenden Fragen erreichen Sie uns telefonisch.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-ink-border bg-ink px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-sky hover:text-brand-sky"
        >
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto max-w-2xl rounded-2xl border border-ink-border bg-ink-card p-6 sm:p-8"
    >
      {/* Name */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div data-error={Boolean(errors.firstName)}>
          <label htmlFor="firstName" className={labelBase}>
            Vorname
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="Max"
            className={inputBase}
          />
          {errors.firstName && <p className={errorText}>{errors.firstName}</p>}
        </div>
        <div data-error={Boolean(errors.lastName)}>
          <label htmlFor="lastName" className={labelBase}>
            Nachname
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="Mustermann"
            className={inputBase}
          />
          {errors.lastName && <p className={errorText}>{errors.lastName}</p>}
        </div>
      </div>

      {/* Kontakt */}
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div data-error={Boolean(errors.email)}>
          <label htmlFor="email" className={labelBase}>
            E-Mail-Adresse
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="max@beispiel.ch"
            className={inputBase}
          />
          {errors.email && <p className={errorText}>{errors.email}</p>}
        </div>
        <div data-error={Boolean(errors.phone)}>
          <label htmlFor="phone" className={labelBase}>
            Telefonnummer
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="079 000 00 00"
            className={inputBase}
          />
          {errors.phone && <p className={errorText}>{errors.phone}</p>}
        </div>
      </div>

      {/* Gewünschtes Auto – synchron mit der Auswahl oben */}
      <div className="mt-5" data-error={Boolean(errors.car)}>
        <label htmlFor="car" className={labelBase}>
          Gewünschtes Fahrzeug
        </label>
        <select
          id="car"
          name="car"
          value={selectedCar ?? ""}
          onChange={(e) => onSelectCar(e.target.value as CarId)}
          className={`${inputBase} appearance-none`}
        >
          <option value="" disabled>
            Bitte Fahrzeug wählen …
          </option>
          {cars.map((car) => (
            <option key={car.id} value={car.id} disabled={!car.available}>
              {car.name}
              {car.available ? "" : " – nicht verfügbar"}
            </option>
          ))}
        </select>
        {errors.car && <p className={errorText}>{errors.car}</p>}
      </div>

      {/* Mietzeitraum */}
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div data-error={Boolean(errors.dateFrom)}>
          <label htmlFor="dateFrom" className={labelBase}>
            Mietbeginn (Von)
          </label>
          <input
            id="dateFrom"
            name="dateFrom"
            type="date"
            className={inputBase}
          />
          {errors.dateFrom && <p className={errorText}>{errors.dateFrom}</p>}
        </div>
        <div data-error={Boolean(errors.dateTo)}>
          <label htmlFor="dateTo" className={labelBase}>
            Mietende (Bis)
          </label>
          <input id="dateTo" name="dateTo" type="date" className={inputBase} />
          {errors.dateTo && <p className={errorText}>{errors.dateTo}</p>}
        </div>
      </div>

      {/* Ausweis-/Führerschein-Upload (verpflichtend) */}
      <div className="mt-5" data-error={Boolean(errors.idDocument)}>
        <label htmlFor="idDocument" className={labelBase}>
          Ausweis / Führerschein <span className="text-brand-sky">*</span>
        </label>
        <label
          htmlFor="idDocument"
          className={`flex cursor-pointer items-center gap-3 rounded-xl border border-dashed px-4 py-4 transition-colors ${
            errors.idDocument
              ? "border-rose-500 bg-rose-500/5"
              : "border-ink-border bg-ink hover:border-brand-sky"
          }`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-sky/10 text-brand-sky">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 16V4m0 0L8 8m4-4 4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
            </svg>
          </span>
          <span className="text-sm">
            <span className="font-semibold text-white">
              {idFileName || "Datei auswählen oder hierher ziehen"}
            </span>
            <span className="block text-xs text-zinc-500">
              JPG, PNG oder PDF
            </span>
          </span>
        </label>
        <input
          id="idDocument"
          name="idDocument"
          ref={fileInputRef}
          type="file"
          accept="image/*,application/pdf"
          className="sr-only"
          onChange={(e) => {
            const file = e.target.files?.[0];
            setIdFileName(file ? file.name : "");
            if (file) setErrors((prev) => ({ ...prev, idDocument: undefined }));
          }}
        />
        <p className="mt-2 text-xs leading-relaxed text-zinc-500">
          Bitte laden Sie eine Kopie Ihres Ausweises/Führerscheins hoch, damit
          wir prüfen können, ob Sie fahrberechtigt sind.
        </p>
        {errors.idDocument && <p className={errorText}>{errors.idDocument}</p>}
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-full bg-brand-blue px-6 py-4 text-base font-bold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-100"
      >
        Buchungsanfrage senden
      </button>

      <p className="mt-3 text-center text-xs text-zinc-500">
        Mit dem Absenden bestätigen Sie, dass Ihre Angaben korrekt sind. Die
        Kaution von 1’000.– CHF wird bei Abholung hinterlegt.
      </p>
    </form>
  );
}
