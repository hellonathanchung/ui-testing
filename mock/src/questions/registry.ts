import { lazy } from 'react'

export const questionComponents: Record<string, React.LazyExoticComponent<React.ComponentType>> = {
  'counter': lazy(() => import('./counter')),
  'toggle-group': lazy(() => import('./toggle-group')),
  'character-counter': lazy(() => import('./character-counter')),
  'user-card': lazy(() => import('./user-card')),
  'light-switch': lazy(() => import('./light-switch')),
  'todo-list': lazy(() => import('./todo-list')),
  'data-table': lazy(() => import('./data-table')),
  'shopping-cart': lazy(() => import('./shopping-cart')),
  'accessible-modal': lazy(() => import('./accessible-modal')),
  'dependent-dropdowns': lazy(() => import('./dependent-dropdowns')),
  'accordion': lazy(() => import('./accordion')),
  'multi-step-form': lazy(() => import('./multi-step-form')),
  'async-search': lazy(() => import('./async-search')),
  'infinite-scroll': lazy(() => import('./infinite-scroll')),
  'theme-context': lazy(() => import('./theme-context')),
  'chat-interface': lazy(() => import('./chat-interface')),
  'prompt-builder': lazy(() => import('./prompt-builder')),
  'feedback-widget': lazy(() => import('./feedback-widget')),
}
