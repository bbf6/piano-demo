<template lang="pug">
.octave
  .white-box
    white-key(v-for="note in configStore.whiteKeys" :keyNote="note")
  .black-box
    black-key(v-for="note in configStore.blackKeys" :keyNote="note")
</template>

<script setup>
import { ref } from 'vue'
import { useConfigStore } from 'src/stores/config'
import WhiteKey from 'src/components/WhiteKey.vue'
import BlackKey from 'src/components/BlackKey.vue'

const configStore = useConfigStore()
</script>
