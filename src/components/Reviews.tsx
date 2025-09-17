const reviews = [
  { name: "Katka", text: "Najlepšie nechty v KE, precízne!" },
  { name: "Nika", text: "Rýchla rezervácia a krásna práca." },
  { name: "Laura", text: "Držia mi 4 týždne bez problémov." },
];

export default function Reviews() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Recenzie klientiek</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl border p-4 shadow-sm transition hover:shadow-md"
            >
              <div className="font-semibold text-pink-600">{r.name}</div>
              <div className="text-gray-600 mt-2">{r.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
