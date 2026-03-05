# Test Environment

This folder is used to test the `legal-docs-fetcher` package locally before publishing to npm.

## Setup

From the root folder:
```bash
npm run test:setup
```

## Usage

From the root folder:
```bash
npm run test:dev
```

This will start a Vite dev server where you can test the package.

## How It Works

- **No code duplication**: Imports directly from `../src/dev/App.vue`
- **Tests the actual demo**: You're testing exactly what's in the package
- **Hot reload**: Changes to source files reload automatically
- **Vite alias**: `legal-docs-fetcher` imports from `../src/index.ts`

## What Gets Tested

- The exact demo application from `src/dev/`  
- Form component and all its features  
- API client functionality  
- Package imports work correctly  
- TypeScript types are valid  

## Customize Tests

To add custom tests, create new files in `test/src/` and import the package:

```vue
<script setup>
import { LegalDocsForm, createLegalDocsClient } from 'legal-docs-fetcher'
// Your custom test code
</script>
```

## Notes

- This folder is in `.gitignore` and won't be committed
- No code duplication - tests the actual source
- Make sure to test thoroughly before publishing to npm
