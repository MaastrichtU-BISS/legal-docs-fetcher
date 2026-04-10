import type { QueryParameters } from 'legal-docs-client'

export enum FormType {
  FREE = 'free',
  GUIDED = 'guided',
}

export interface LegalDocsFormProps {
  title?: string
  subtitle?: string
  type?: FormType
  onSubmit?: (data: QueryParameters) => Promise<any>
}

