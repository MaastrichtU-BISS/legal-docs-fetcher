import type { DefineComponent, Plugin } from "vue";
import type {
  FullTextDocument,
  LegalDocsClient,
  LegalDocsClientConfig,
  LegalDocument,
  QueryParameters,
} from "legal-docs-client";

export declare enum FormType {
  FREE = "free",
  GUIDED = "guided",
}

export interface LegalDocsFormProps {
  title?: string;
  subtitle?: string;
  type?: FormType;
  guidedStructure?: unknown;
  onSubmit?: (data: QueryParameters) => Promise<any>;
}

export declare const LegalDocsForm: DefineComponent<LegalDocsFormProps, {}, any>;

export type {
  FullTextDocument,
  LegalDocsClient,
  LegalDocsClientConfig,
  LegalDocument,
  QueryParameters,
};

export { createLegalDocsClient } from "legal-docs-client";

export declare const VueLegalQueryBuilderPlugin: Plugin;

export default VueLegalQueryBuilderPlugin;