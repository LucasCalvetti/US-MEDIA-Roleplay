import Link from "next/link";
import { Button } from "./internal/button";

export function Header() {
  return (
    <header className="flex justify-between gap-2 bg-amber-600 text-black p-8 mb-20 text-center">
      <img className="w-[60px] h-[60px] mr-auto brightness-0" src="https://usmediaconsulting.com/wp-content/uploads/2023/02/cropped-favicon-usmedia.png" alt="logo" />
      <h1 className="text-2xl md:text-4xl text-center w-2/4 font-bold">ROLEPLAY US MEDIA</h1>
      <div className="flex flex-col md:flex-row w-1/4 gap-6">
        <Link href={"/documentation"}>
          <Button variant="link" className="text-sm p-0 md:text-md font-semibold hover:scale-105">
            Documentacíon
          </Button>
        </Link>
        <Link href={"/"}>
          <Button variant="link" className="text-sm md:text-md p-0 font-semibold hover:scale-105">
            Cotizador
          </Button>
        </Link>
      </div>
    </header>
  );
}
