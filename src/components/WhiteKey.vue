<template lang="pug">
.white-key(@mousedown="pressKey(props.keyNote)")
  label(v-if="configStore.showKeyNames")="{{ label }}"
</template>

<script setup>
import { computed } from 'vue'
import { pressKey } from 'src/lib/keys'
import { useConfigStore } from 'src/stores/config'

const props = defineProps({
  keyNote: Object
})

const configStore = useConfigStore()

const label = computed(() =>
  configStore.showLatin ? props.keyNote.latin : props.keyNote.alphabet
)
</script>
