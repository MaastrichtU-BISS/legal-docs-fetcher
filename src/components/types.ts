import type { QueryParameters } from 'legal-docs-client'

export interface LegalDocsFormProps {
  title?: string
  subtitle?: string
  onSubmit?: (data: QueryParameters) => Promise<any>
}
