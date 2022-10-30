<script setup lang='ts'>
import { ref } from 'vue';

const a = ref(1);
</script>

<template lang="pug">
view.content
  view hello world!
  view(i-uiw-smile)
</template>
