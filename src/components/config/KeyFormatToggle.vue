<template lang="pug">
q-item
  q-item-section
    q-item-label="Keys format"
    q-toggle(
      :label="keyFormatLabel"
      :modelValue="configStore.showLatin"
      @update:modelValue="configStore.toggleLatin"
    )
</template>

<script setup>
import { computed } from 'vue'
import { useConfigStore } from 'src/stores/config'

const configStore = useConfigStore()

const keyFormatLabel = computed(
  () => configStore.showLatin ? 'Latin' : 'Alphabet'
)
</script>
