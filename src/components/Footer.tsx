export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500 flex flex-col sm:flex-row justify-between">
        <div>
          © {new Date().getFullYear()} Nails Studio Košice. Všetky práva
          vyhradené.
        </div>
        <div className="mt-2 sm:mt-0">
          Web by{" "}
          <span className="font-medium">
            <a href="https://www.instagram.com/gabo_urban/">Gabriel Urban</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
