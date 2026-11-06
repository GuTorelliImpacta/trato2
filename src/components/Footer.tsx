import Link from "next/link";
import { fullAddress, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-black pb-24 pt-12 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold">TRATO &amp; BUTTER</p>
          <p className="mt-2 text-white/70">Hambúrguer e carnes na parrilla a carvão.</p>
        </div>
        <address className="not-italic text-white/80">
          <p>{fullAddress}</p>
          <p className="mt-2"><a href={site.phoneHref} className="underline">{site.phone}</a></p>
        </address>
        <ul className="space-y-2 text-white/80">
          <li><a href={site.instagram} target="_blank" rel="noopener" className="underline">Instagram {site.instagramHandle}</a></li>
          <li><Link href="/privacidade" className="underline">Política de privacidade</Link></li>
        </ul>
      </div>
    </footer>
  );
}
