import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/config/site";

export default function WhatsAppChatButton() {
  const phone = siteConfig.phone.replace(/\D/g, "");
  const waPhone = phone.startsWith("1") ? phone : `1${phone}`;
  const message = encodeURIComponent("Hi, I want to know more about your services.");

  return (
    <a
      href={`https://wa.me/${waPhone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-white shadow-lg transition hover:scale-105"
    >
      <FaWhatsapp className="h-6 w-6" />
      <span className="hidden sm:inline">Let's talk!</span>
    </a>
  );
}
