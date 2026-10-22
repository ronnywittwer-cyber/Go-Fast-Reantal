import { cars, company } from "@/lib/company";
import { siteDescription, siteUrl } from "@/lib/site";

// Strukturierte Daten für Google (Unternehmensprofil in den Suchergebnissen).
export default function BusinessJsonLd() {
  const prices = cars.filter((c) => c.available).map((c) => c.prices.day);

  const data = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: company.name,
    legalName: company.legalName,
    description: siteDescription,
    url: siteUrl,
    logo: `${siteUrl}/logo-go-fast.png`,
    image: `${siteUrl}/opengraph-image`,
    telephone: company.phoneHref.replace("tel:", ""),
    ...(company.email ? { email: company.email } : {}),
    foundingDate: String(company.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.zip,
      addressLocality: company.address.city,
      addressRegion: "BE",
      addressCountry: "CH",
    },
    areaServed: ["Spiez", "Thun", "Berner Oberland"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "22:00",
    },
    paymentAccepted: "Cash, TWINT, Bank Transfer",
    currenciesAccepted: "CHF",
    ...(prices.length > 0
      ? {
          priceRange: `CHF ${Math.min(...prices)}–${Math.max(...prices)} pro Tag`,
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
