import './application.css'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

// Função auxiliar para inicializar o Inertia
function initInertia() {
  const el = document.getElementById('app')
  
  if (!el) {
    return
  }

  createInertiaApp({
    page: JSON.parse(el.dataset.page),
    resolve: name => {
      const pages = import.meta.glob('../pages/**/*.{jsx,tsx,js,ts}', { eager: true })

      const page = pages[`../pages/${name}.jsx`] || 
                   pages[`../pages/${name}.tsx`] || 
                   pages[`../pages/${name}.js`]

      return page
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />)
    },
  })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInertia)
} else {
  initInertia()
}