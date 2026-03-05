import type { App, Plugin } from 'vue'
import LegalDocsForm from './components/LegalDocsForm.vue'
import { LegalDocsClient, createLegalDocsClient } from './api/client'

// Export components
export { LegalDocsForm }

// Export API client
export { LegalDocsClient, createLegalDocsClient }

// Export types
export type {
  LegalDocumentQuery,
  LegalDocument,
  LegalDocumentNetwork,
  LegalDocsClientConfig
} from './api/client'

export type {
  LegalDocsFormProps
} from './components/LegalDocsForm.vue'

export {
  DataSource,
  DocType,
  type QueryParameters,
  type LawItem,
  type HierarchicalOption,
  type SearchSubmitParams
} from './types'

// Vue plugin for registering components globally
export const LegalDocsFetcherPlugin: Plugin = {
  install(app: App) {
    app.component('LegalDocsForm', LegalDocsForm)
  }
}

// Default export for convenience
export default LegalDocsFetcherPlugin
