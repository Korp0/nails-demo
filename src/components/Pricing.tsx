type Item = { name: string; price: string; note?: string };

const items: Item[] = [
  { name: "Gélové nechty – nové", price: "35 €" },
  { name: "Doplnenie gélových nechtov", price: "29 €" },
  { name: "Manikúra (klasická)", price: "18 €" },
  { name: "Pedikúra (express)", price: "22 €" },
  { name: "Nail art (jednoduchý)", price: "+5 €", note: "k vybranej službe" },
  { name: "Odstránenie gélov", price: "10 €" },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Služby & Cenník</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.name}
              className="rounded-2xl border p-4 transition hover:border-pink-400 hover:shadow-md"
            >
              <div className="font-medium">{it.name}</div>
              <div className="text-gray-500">{it.price}</div>
              {it.note && (
                <div className="text-xs text-gray-400 mt-1">{it.note}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
