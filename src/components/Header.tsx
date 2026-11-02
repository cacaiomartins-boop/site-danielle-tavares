import { useState } from "react";
import { clinic, nav, whatsappUrl } from "../data/clinic";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest-800/10 bg-sand-50/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#topo" className="font-serif text-xl font-semibold text-forest-800">
          {clinic.shortName}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="text-base font-medium text-forest-800/80 hover:text-clay-500">
              {l.label}
            </a>
          ))}
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn-primary !py-2.5">
            {clinic.cta}
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-forest-800/20 text-forest-800 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-forest-800/10 bg-sand-50 md:hidden" aria-label="Principal">
          <div className="container-x flex flex-col py-3">
            {nav.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-lg font-medium text-forest-800">
                {l.label}
              </a>
            ))}
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn-primary mt-3">
              {clinic.cta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
