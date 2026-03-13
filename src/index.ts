import type { App, Plugin } from "vue";
import LegalDocsForm from "./components/LegalDocsForm.vue";

// Explicitly import and re-export types from legal-docs-client
import type {
  LegalDocsClient,
  QueryParameters,
  LegalDocument,
  FullTextDocument,
  LegalDocsClientConfig,
} from "legal-docs-client";
export type {
  LegalDocsClient,
  QueryParameters,
  LegalDocument,
  FullTextDocument,
  LegalDocsClientConfig,
};

// Explicitly import and re-export key exports
import { createLegalDocsClient } from "legal-docs-client";
export { createLegalDocsClient };

// Export components
export { LegalDocsForm };

// Export component types
export type { LegalDocsFormProps } from "./components/types";

// Vue plugin for registering components globally
export const VueLegalQueryBuilderPlugin: Plugin = {
  install(app: App) {
    app.component("LegalDocsForm", LegalDocsForm);
  },
};

// Default export for convenience
export default VueLegalQueryBuilderPlugin;
