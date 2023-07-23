import Image from "next/image";
import { Nunito } from "next/font/google";
import Header from "@/components/Header";
import Link from "next/link";
import HomeImage from "./../../public/home-image.png";
import Rectangle from "./../../public/rectangle.png";
import { useContext } from "react";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";

// const inter = Inter({ subsets: ['latin'] })
// const nunito = Nunito({ subsets: ['latin'], weight: ['300', '200', '400', '500','600', '800', '900'] })

export default function Home() {
  const { loginGoogle } = useContext(AutenticacaoContext);

  return (
    <main className="bg-gradient-to-br from-[#242429] to-[#000] h-screen">
      <Header />
      <div className="flex justify-center items-center h-[88vh]">
        <div
          className={`
          font-nunito 
          mx-auto  w-full max-w-6xl
          flex justify-center gap-28
        `}
        >
          <div className="flex flex-col gap-4">
            <div className="text-6xl">
              <span>Tenha mais</span> <br />
              <span>controle sobre</span> <br />
              <div className="relative ">
                <span className="z-10">seu dinheiro</span>
                {/* <Image
                src={Rectangle}
                alt=""
                className="absolute right-0 bottom-2 z-0"
                width={220}
              /> */}
              </div>
            </div>
            {/* Adicionando o título */}
            <p className="font-extralight text-lg text-gray-400">
              Organize seu dinheiro de forma inteligente{" "}
            </p>
            <div className="flex items-center gap-5">
              <button
                className="bg-gradient-to-r from-[#4A4CE1] to-[#0E8BB6] px-2 py-1 rounded"
                onClick={loginGoogle}
              >
                Iniciar agora
              </button>
              <Link href="/" className="underline">
                Saiba mais
              </Link>
            </div>
          </div>

          <Image src={HomeImage} alt="" width={550} height={300} />
        </div>
      </div>
    </main>
  );
}
