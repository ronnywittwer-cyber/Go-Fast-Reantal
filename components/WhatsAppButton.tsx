import { whatsappHref } from "@/lib/company";

// Schwebender WhatsApp-Button unten rechts – auf allen Seiten sichtbar.
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Per WhatsApp schreiben"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 active:scale-100 sm:bottom-6 sm:right-6 sm:px-5"
    >
      <svg
        className="h-7 w-7 shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.77.47 3.5 1.36 5.01L2 22l5.12-1.34A10.04 10.04 0 0 0 12.04 22C17.58 22 22 17.52 22 12S17.58 2 12.04 2Zm0 18.3c-1.53 0-3.03-.41-4.34-1.19l-.31-.18-3.04.8.81-2.96-.2-.31A8.26 8.26 0 0 1 3.73 12c0-4.57 3.73-8.29 8.31-8.29 4.57 0 8.24 3.72 8.24 8.29s-3.67 8.3-8.24 8.3Z" />
      </svg>
      <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
    </a>
  );
}
