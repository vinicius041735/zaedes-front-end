import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <Link href="/sobre" className="text-base text-gray-500 hover:text-gray-900">
              Sobre
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/privacidade" className="text-base text-gray-500 hover:text-gray-900">
              Política de Privacidade
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/termos" className="text-base text-gray-500 hover:text-gray-900">
              Termos de Uso
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="/contato" className="text-base text-gray-500 hover:text-gray-900">
              Contato
            </Link>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2023 ZAedes. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

