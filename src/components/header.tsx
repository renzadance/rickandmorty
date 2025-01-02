import Link from "next/link";

export function Header() {
  return (
    <div className="relative">
      <header
        className="
          inset-x-0 mx-14
        bg-slate-900/80 backdrop-blur-md p-4 shadow-lg rounded-b-xl
          fixed z-50
          flex justify-between
        "
      >
        <h1 className="text-xl font-bold text-neutral-100">
          <Link href="/">rickandmorty</Link>
        </h1>
        <nav className="">
          <ul className="flex gap-5 text-lg text-slate-300">
            <li className="hover:text-slate-50">
              <Link href="/episodes">episodes</Link>
            </li>
            <li className="hover:text-slate-50">
              <Link href="/characters">characters</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
