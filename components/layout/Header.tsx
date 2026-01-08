import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center w-full max-w-7xl mx-auto gap-2 px-4">
        <Image
          src="/logo-s.png"
          alt="Cajuzim"
          width={40}
          height={40}
          className="object-contain mr-4"
        />
        <div className="hidden md:flex items-center">
          <span className="text-xl font-bold">Blog do Cajuzim</span>
        </div>
      </div>
    </header>
  );
}
