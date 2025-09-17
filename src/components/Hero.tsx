import NailIMG from "../assets/hero_img.png";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <nav className="flex items-center justify-between">
        <div className="text-xl font-semibold">Nails Studio Košice</div>
        <a href="#book" className="rounded-xl border px-4 py-2">
          Rezervovať
        </a>
      </nav>

      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Gélové nechty, precízna manikúra.
            <br /> V centre Košíc.
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            Moderné štúdio s dôrazom na detail. Online rezervácia, jasný cenník
            a galéria výsledkov.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#book"
              className="rounded-xl bg-black text-white px-5 py-3"
            >
              Rezervovať
            </a>
            <a href="#pricing" className="rounded-xl border px-5 py-3">
              Cenník
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            Mlynská 10, Košice · Po–So 9:00–18:00
          </div>
        </div>
        <div className="aspect-[4/3] rounded-2xl bg-pink-100">
          <img
            src={NailIMG}
            alt="Nails"
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
