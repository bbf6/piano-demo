<template lang="pug">
q-item
  q-item-section
    q-item-label="Octave {{ configStore.currentOctave }}"
    q-slider(
      :modelValue="configStore.currentOctave"
      @update:modelValue="configStore.changeOctave"
      :min="1"
      :max="5"
      snap
      label
    )
</template>

<script setup>
import { useConfigStore } from 'src/stores/config'

const configStore = useConfigStore()
</script>
