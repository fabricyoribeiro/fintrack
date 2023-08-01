import Image from 'next/image'
import { Nunito } from 'next/font/google'
import Header from '@/components/Header'
import Link from 'next/link'
import HomeImage from './../../../public/home-image.png'
import { useContext } from 'react'
import AutenticacaoContext from '@/data/contexts/AutenticacaoContext'
import Pagina from '../template/Pagina'

export default function Home() {
  const { loginGoogle } = useContext(AutenticacaoContext)

  return (
    <Pagina externa>
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
              </div>
            </div>
            <p className="font-extralight text-lg text-gray-400">
              Organize seu dinheiro de forma inteligente{' '}
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
    </Pagina>
  )
}
