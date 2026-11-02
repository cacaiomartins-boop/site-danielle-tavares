import { whatsappUrl } from "../data/clinic";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-150 ease-out hover:scale-105 motion-reduce:transition-none"
    >
      <WhatsAppIcon size={28} weight="fill" />
    </a>
  );
}
