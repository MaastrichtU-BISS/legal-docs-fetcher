# vue-legal-query-builder

A Vue 3 component for building legal document search queries using the [legal-docs-client](https://www.npmjs.com/package/legal-docs-client) package.


## Installation

```bash
npm install vue-legal-query-builder
```

## Usage

### Import the Component

```vue
<template>
  <LegalDocsForm 
    title="Search Legal Documents"
    :on-submit="handleSubmit"
    @success="onSuccess"
    @error="onError"
  />
</template>

<script setup>
import { LegalDocsForm, createLegalDocsClient } from 'vue-legal-query-builder'
import 'vue-legal-query-builder/style.css'

const client = createLegalDocsClient({
  // config (Optional)
})

const handleSubmit = async (queryParams) => {
  const results = await client.fetchDocuments(queryParams)
  return results
}

const onSuccess = (data) => {
  console.log('Search successful:', data)
}

const onError = (error) => {
  console.error('Search error:', error)
}
</script>
```

### Accessing Legal Documents Client Functions

Since `vue-legal-query-builder` re-exports the entire `legal-docs-client` dependency, you only need to install `vue-legal-query-builder` to access both the form component and the client:

```javascript
import { 
  createLegalDocsClient,      // Create client instances
  QueryParameters,             // Type definitions
  DataSource,                  // Dataset enums
  DocType,                     // Document type enums
  INSTANCES_OPTIONS,           // Hierarchical instances data
  DOMAINS_OPTIONS              // Hierarchical domains data
} from 'vue-legal-query-builder'

// Create a client
const client = createLegalDocsClient()

// Use instances and domains data directly
console.log(INSTANCES_OPTIONS)
console.log(DOMAINS_OPTIONS)
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | string | Form title (optional) |
| `subtitle` | string | Form subtitle (optional) |
| `onSubmit` | function | Callback that receives QueryParameters and returns search results (optional) |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `@submit` | QueryParameters | Emitted when form is submitted |
| `@success` | any | Emitted when search completes successfully |
| `@error` | Error | Emitted when an error occurs |

## Requirements

- Vue 3.4 or higher

## Note on Dependencies

This package bundles and re-exports the entire [`legal-docs-client`](https://www.npmjs.com/package/legal-docs-client) library. You only need to install `vue-legal-query-builder` to access both the form component and all client functions. The `legal-docs-client` dependency is included and fully integrated, so there's no need to install it separately.

## License

MIT

## Development

Test the package locally:

```bash
npm run test:dev
```

## License

MIT
