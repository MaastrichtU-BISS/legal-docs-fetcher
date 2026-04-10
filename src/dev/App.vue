<template>
    <main class="dev-main">
        <LegalDocsForm 
            :onSubmit="handleSubmit"
            :type="FormType.FREE"
            @success="handleSuccess"
        />
    </main>
</template>

<script setup lang="ts">
import { LegalDocsForm, createLegalDocsClient, FormType } from '../index'

const client = createLegalDocsClient({})

const handleSubmit = async (data: any) => {
    console.log('Form submitted:', data)
    const results = await client.fetchDocuments(data)
    return results
}

const handleSuccess = (data: any) => {
    console.log('Documents fetched successfully:', data)
}
</script>

<style scoped></style>
