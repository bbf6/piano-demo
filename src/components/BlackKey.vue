<template lang="pug">
.black-key(v-if="props.keyNote.latin" @mousedown="pressKey(props.keyNote)")
  label(v-if="configStore.showKeyNames")="{{ label }}"
.empty-space(v-else)
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
