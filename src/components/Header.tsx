import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#cardapio", label: "Cardápio" },
  { href: "/#a-casa", label: "A casa" },
  { href: "/#onde-estamos", label: "Onde estamos" },
  { href: "/#pedir", label: "Pedir" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" aria-label="Trato & Butter, página inicial" className="flex items-center gap-3">
          <Image src="/img/logo.png" alt="" width={44} height={44} priority className="h-11 w-11" />
          <span className="font-display text-lg font-bold tracking-wide">TRATO &amp; BUTTER</span>
        </Link>
        <nav aria-label="Principal">
          <ul className="flex items-center gap-1 text-sm font-semibold sm:gap-4">
            {links.map((l) => (
              <li key={l.href} className="hidden md:block"><a href={l.href} className="inline-flex min-h-11 items-center px-2 hover:text-[#E8B54A]">{l.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
