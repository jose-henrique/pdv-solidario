import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

// Função auxiliar para inicializar o Inertia
function initInertia() {
  const el = document.getElementById('app')
  
  if (!el) {
    console.error("Ainda não encontrou #app no DOM!")
    return
  }

  createInertiaApp({
    page: JSON.parse(el.dataset.page), // Passa os dados explicitamente
    resolve: name => {
      const pages = import.meta.glob('../pages/**/*.{jsx,tsx,js,ts}', { eager: true })
      
      console.log('Páginas encontradas:', pages)
      console.log('Página solicitada:', name)

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

// Se o DOM já estiver pronto, roda; se não, espera carregar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initInertia)
} else {
  initInertia()
}