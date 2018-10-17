<template>
  <div class="loading">
    <vue-typed-js
    :strings="typeStrings"
    cursorChar="_" 
    >
      <h1 class="typing"></h1>
    </vue-typed-js>
    <div class="enter-directly">
      <span :style="{
        opacity: visible_GoDirectlyBtn ? 1 : 0
      }" @click="$router.push('home')">进入主页></span>
    </div>
  </div>
</template>

<script lang="ts">
import { LoadingView } from './loading.view'
export default LoadingView
</script>

<style lang="stylus" scoped>
@import './loading.stylus';
</style>
