<template>
    <div class="guided-form-container">
        <p style="color: #666; text-align: center; margin-top: 20px;">
            Guided form mode coming soon...
        </p>
    </div>
</template>

<script setup lang="ts">
import type { GuidedStructure } from '../types'

interface Props {
  guidedStructure?: GuidedStructure
}

defineProps<Props>()
</script>

<style scoped>

</style>
