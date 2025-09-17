import { useState } from "react";

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="book" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Rýchla rezervácia</h2>

        {!sent ? (
          <form
            className="mt-6 grid gap-4 sm:max-w-lg"
            action="https://formsubmit.co/youremail@example.com"
            method="POST"
            onSubmit={() => setSent(true)}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input className="rounded-xl border px-4 py-3" name="name" placeholder="Meno" required />
            <input className="rounded-xl border px-4 py-3" name="contact" placeholder="Telefón / IG" required />
            <select className="rounded-xl border px-4 py-3" name="service" required>
              <option value="">Vyber službu</option>
              <option>Gélové nechty – nové</option>
              <option>Doplnenie gélových nechtov</option>
              <option>Manikúra</option>
            </select>
            <button className="rounded-xl bg-black text-white px-5 py-3">Odoslať</button>
          </form>
        ) : (
          <div className="mt-6 rounded-2xl border bg-white p-6 text-green-600">
            Ďakujeme! Rezervácia odoslaná. Ozveme sa čoskoro.
          </div>
        )}

        <p className="text-sm text-gray-500 mt-4">
          Alebo napíš na IG: <span className="font-medium">@gabo_urban</span>
        </p>
      </div>
    </section>
  );
}
