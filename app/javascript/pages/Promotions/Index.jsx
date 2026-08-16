import React from 'react'
import { Link } from '@inertiajs/react'

import AppLayoutDesktop from '../../layout/AppLayoutDesktop'

export default function Index({ promotions }) {
  return (
    <>
      <div className='p-5'>
        <div className='flex justify-end'>  
          <Link href="/promotions/new" className='w-45 bg-green-400 text-black font-bold px-lg py-sm rounded-xl shadow-sm flex items-center justify-center gap-xs hover:brightness-110 active:scale-95 transition-all'>
            <span className="material-symbols-outlined">add</span>
            Nova Promoção
          </Link>
        </div>
        <ul>
          {promotions.map(post => (
            <li key={post.id}>
              <h3>{post.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

Index.layout = (page) => <AppLayoutDesktop children={page} />