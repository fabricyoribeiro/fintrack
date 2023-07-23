import Link from "next/link";
import Logo from "./Logo";
import { GoogleLogo } from "phosphor-react";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import { useContext } from "react";

export default function Header() {

  const { loginGoogle } = useContext(AutenticacaoContext);

  return (
    <header className=" bg-black">
      <div
        className={`
        w-full h-20 max-w-6xl mx-auto 
        flex justify-between items-center 
      `}
      >
        <Logo />
        <div className="flex items-center gap-10 ">
          <Link href="/" className="text-xl">
            Início
          </Link>
          <button
            className={`
            flex items-center gap-2 py-1 px-2 rounded text-lg
            bg-gradient-to-r from-[#4A4CE1] to-[#0E8BB6]
          `}
          >
            <GoogleLogo />
            <button onClick={loginGoogle} >Login</button>
          </button>
        </div>
      </div>
    </header>
  );
}
