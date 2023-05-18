import { User } from 'lucide-react'
import nlwLogo from '../assets/logo-space-time.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid h-screen grid-cols-2">
      <div className="relative flex flex-col justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-estrelas.svg)] bg-cover px-32 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gray-400 p-[10px]">
            <User />
          </div>
          <p className="w-[140px] text-sm">
            <a
              className="text-gray-100 underline transition-colors hover:text-gray-50"
              href=""
            >
              Crie sua conta
            </a>{' '}
            e salve suas memórias!
          </p>
        </div>
        <div className="space-y-4">
          <Image src={nlwLogo} alt="Logo do SpaceTime NLW"></Image>
          <h1 className="text-4xl font-bold text-zinc-50">
            Sua cápsula do tempo
          </h1>
          <p className="text-lg">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </p>
          <a
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-bold text-black transition hover:bg-green-400"
            href=""
          >
            Cadastrar lembrança
          </a>
        </div>
        <footer>
          Feito com 💜 no NLW da{' '}
          <a className="text-gray-200 underline" href="#">
            Rocketseat
          </a>
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center bg-[url(../assets/bg-estrelas.svg)] bg-cover p-16">
        <p className="w-[360px] text-center">
          Você ainda não registrou nenhuma lembrança, comece a{' '}
          <a className="text-gray-100 underline hover:text-gray-50" href="#">
            criar agora!
          </a>
        </p>
      </div>
    </main>
  )
}
