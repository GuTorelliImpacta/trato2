import { dayNames, hours } from "@/content/site";

export function Hours() {
  const order = [1, 2, 3, 4, 5, 6, 0];
  return (
    <dl className="divide-y divide-white/15 border-y border-white/15">
      {order.map((d) => (
        <div key={d} className="flex justify-between gap-4 py-3">
          <dt className="capitalize text-white/70">{dayNames[d]}</dt>
          <dd className="text-right font-medium">{hours[d].map(([a, b]) => `${a}–${b}`).join(" · ")}</dd>
        </div>
      ))}
    </dl>
  );
}
