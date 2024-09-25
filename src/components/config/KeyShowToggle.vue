<template lang="pug">
q-item
  q-item-section
    q-item-label="Show key names"
    q-toggle(
      :label="showKeysNamesLabel"
      :modelValue="configStore.showKeyNames"
      @update:modelValue="configStore.toggleKeyNames"
    )
</template>

<script setup>
import { computed } from 'vue'
import { useConfigStore } from 'src/stores/config'

const configStore = useConfigStore()

const showKeysNamesLabel = computed(
  () => configStore.showKeyNames ? 'Show keys' : "Don't show keys"
)
</script>
