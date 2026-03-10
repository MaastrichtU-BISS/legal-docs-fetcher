import type { App, Plugin } from 'vue'
import LegalDocsForm from './components/LegalDocsForm.vue'

// Re-export everything from legal-docs-client dependency
export * from 'legal-docs-client'
export { createLegalDocsClient } from 'legal-docs-client'

// Export components
export { LegalDocsForm }

// Export component types
export type {
  LegalDocsFormProps
} from './components/types'

// Vue plugin for registering components globally
export const VueLegalQueryBuilderPlugin: Plugin = {
  install(app: App) {
    app.component('LegalDocsForm', LegalDocsForm)
  }
}

// Default export for convenience
export default VueLegalQueryBuilderPlugin
