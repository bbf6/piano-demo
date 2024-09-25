<template lang="pug">
q-layout(view="hHh lpR fFf")
  q-header.bg-primary.text-white(elevated)
    q-toolbar
      q-btn(dense flat round icon="menu" @click="toggleLeftDrawer")
      q-toolbar-title
        | Piano demo
  q-drawer(v-model="leftDrawerOpen" side="left" overlay elevated)
    q-list
      q-item
        q-item-section
          q-item-label="Options"
      octave-slider
      key-show-toggle
      key-format-toggle
  q-page-container
    router-view
</template>

<script setup>
import { ref } from 'vue'
import OctaveSlider from 'src/components/config/OctaveSlider.vue'
import KeyShowToggle from 'src/components/config/KeyShowToggle.vue'
import KeyFormatToggle from 'src/components/config/KeyFormatToggle.vue'

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () =>
  leftDrawerOpen.value = !leftDrawerOpen.value
</script>
