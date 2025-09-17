export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold">Kontakt</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-4">
          <div className="font-medium">Nails Studio Košice</div>
          <div className="text-gray-600 mt-2">Mlynská 10, Košice</div>
          <div className="text-gray-600">Tel. 0900 000 000</div>
          <div className="text-gray-600">IG @gabo_urban</div>
          <div className="text-gray-600">Po–So 9:00–18:00</div>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.185703027721!2d21.25718477672322!3d48.72104317131388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee06532eb80d1%3A0x3097936f2b518d03!2zTWx5bnNrw6EgMTg2LzEwLCAwNDAgMDEgS2_FoWljZQ!5e0!3m2!1ssk!2ssk!4v1758033133261!5m2!1ssk!2ssk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
