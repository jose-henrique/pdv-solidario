import React from 'react'
import { Link } from '@inertiajs/react'

import { SideBar } from '../../layout/sidebar'

export default function Index({ promotions }) {
  return (
    <>
      <SideBar />
      <div style={{ padding: '20px' }}>
        <h1>Lista de Promoções</h1>
        {/* <ul>
          {promotions.map(post => (
            <li key={post.id}>
              <h3>{post.name}</h3>
            </li>
          ))}
        </ul> */}
      </div>
    </>
  )
}