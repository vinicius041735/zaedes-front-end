import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-blue-600">
          Bem-vindo ao ZAedes
        </h1>
        <p className="mt-3 text-2xl text-gray-700">
          Aprendizado de Máquina a Serviço da Saúde
        </p>
        <p className="mt-3 text-xl text-gray-600">
          Monitoramento e prevenção de surtos de doenças causadas pelo mosquito Aedes aegypti
        </p>
        <Link href="/painel" passHref>
          <Button className="mt-6 text-lg">
            Acessar Painel
          </Button>
        </Link>
      </main>
    </div>
  )
}

