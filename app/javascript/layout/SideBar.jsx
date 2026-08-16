import React from 'react'
import { Link } from '@inertiajs/react'

export default function SideBar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white p-6 shadow-lg flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-wide text-indigo-400 mb-8">
          Aeb Evento
        </h1>
        
        <nav className="space-y-2">
            <Link href="/promotions" className="block px-4 py-2.5 rounded-lg bg-slate-800 text-slate-100 hover:bg-slate-700 transition-colors">
                Promoções
            </Link>
            <Link href="#" className="block px-4 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors">
                Configurações
            </Link>
            <Link href="#" className="block px-4 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors">
                Conexões QR
            </Link>
            <Link href="#" className="block px-4 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors">
                Relatórios
            </Link>
        </nav>
      </div>

    </aside>
  )
}
