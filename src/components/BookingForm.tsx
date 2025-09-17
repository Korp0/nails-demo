import { useState } from "react";

const SERVICES = [
  "Gélové nechty – nové",
  "Doplnenie gélových nechtov",
  "Manikúra",
] as const;

export default function BookingForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="book">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold">Rýchla rezervácia</h2>

        {!sent ? (
          <form
            className="mt-6 grid gap-4 sm:max-w-lg"
            action="https://formsubmit.co/youremail@example.com" // replace
            method="POST"
            onSubmit={() => setSent(true)}
          >
            <input type="hidden" name="_captcha" value="false" />

            <input
              className="h-12 rounded-xl border px-4"
              name="name"
              placeholder="Meno"
              required
            />
            <input
              className="h-12 rounded-xl border px-4"
              name="contact"
              placeholder="Telefón / IG"
              required
            />

            {/* Service picker (radios styled as cards) */}
            <fieldset className="mt-2">
              <legend className="mb-2 block text-sm font-medium text-gray-700">
                Vyber službu
              </legend>
              <div className="grid gap-2">
                {SERVICES.map((label, i) => {
                  const id = `service-${i}`;
                  return (
                    <label
                      key={id}
                      htmlFor={id}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition hover:border-pink-400"
                    >
                      <input
                        id={id}
                        type="radio"
                        name="service"
                        value={label}
                        required
                        className="h-4 w-4 accent-pink-500"
                      />
                      <span>{label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <button className="rounded-xl bg-black text-white px-5 py-3">
              Odoslať
            </button>
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
