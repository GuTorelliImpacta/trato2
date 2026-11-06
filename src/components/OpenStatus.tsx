"use client";
import { useEffect, useState } from "react";
import { hours } from "@/content/site";

const toMin = (t: string) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3));

function compute(now: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const dayIdx = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const cur = Number(get("hour")) * 60 + Number(get("minute"));
  for (const [open, close] of hours[dayIdx]) {
    if (cur >= toMin(open) && cur < toMin(close)) return `Aberto agora · fecha às ${close}`;
  }
  const later = hours[dayIdx].find(([open]) => toMin(open) > cur);
  if (later) return `Fechado · abre às ${later[0]}`;
  for (let i = 1; i <= 7; i++) {
    const slots = hours[(dayIdx + i) % 7];
    if (slots.length) return `Fechado · abre ${i === 1 ? "amanhã" : "em breve"} às ${slots[0][0]}`;
  }
  return "Fechado";
}

export function OpenStatus({ className = "" }: { className?: string }) {
  const [text, setText] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => setText(compute(new Date()));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  const open = text?.startsWith("Aberto");
  return (
    <p className={`inline-flex items-center gap-2 text-sm ${className}`} aria-live="polite">
      <span className={`h-2.5 w-2.5 rounded-full ${open ? "bg-[#6fcf7c]" : "bg-white/40"}`} aria-hidden />
      {text ?? "Confira os horários abaixo"}
    </p>
  );
}
