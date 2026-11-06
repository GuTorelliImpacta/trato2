import { mapEmbedSrc } from "@/content/site";

export function MapEmbed() {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden bg-[#2f3032] md:aspect-auto md:h-full md:min-h-[360px]">
      <iframe
        src={mapEmbedSrc}
        title="Mapa com a localização do Trato & Butter, Rua Maria Amália Lopes Azevedo, 629, Tremembé"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full border-0"
      />
    </div>
  );
}
