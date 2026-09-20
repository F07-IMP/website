"use client";

export default function Hero() {
  return (
    <div className="relative">
      <img src="/hero-bg-image.png" alt="" className="block h-auto w-full" />
      <div className="absolute inset-0 grid grid-cols-1 items-center gap-8 px-8 md:grid-cols-2 md:px-32">
        <div>
          <h1 className="text-[64px] font-bold">Fachschaft</h1>
          <h2 className="text-[32px] font-medium leading-tight">
            Medientechnologie
          </h2>
          <p className="max-w-sm text-[18px] leading-tight">
            Willkommen an der Fachschaft Medientechnologie, der TH Köln. Hier
            gibt es Informationen und Nützliches rund ums Studium der
            Medientechnologie!
          </p>
        </div>
        <nav className="justify-self-end">
          <ul className="space-y-4 text-right font-bold text-[20px]">
            <li>
              <a href="/news">
                Aktuelles <span aria-hidden="true">→</span>
              </a>
            </li>
            <li>
              <a href="/first-semester">
                Erstsemester <span aria-hidden="true">→</span>
              </a>
            </li>
            <li>
              <a href="/nextcloud">
                NextCloud <span aria-hidden="true">→</span>
              </a>
            </li>
            <li>
              <a href="/q-a">
                Q&A <span aria-hidden="true">→</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
