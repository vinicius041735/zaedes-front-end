'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">ZAedes</span>
              <img
                className="h-10 w-auto"
                src="/placeholder.svg?height=40&width=40"
                alt="Logo ZAedes"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link href="/painel" className={`text-base font-medium ${pathname === '/painel' ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
                Painel
              </Link>
              <Link href="/relatorios" className={`text-base font-medium ${pathname === '/relatorios' ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
                Relatórios
              </Link>
              <Link href="/admin" className={`text-base font-medium ${pathname === '/admin' ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
                Admin
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Button variant="outline" asChild>
              <Link href="/ajuda">Ajuda</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Sair</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

