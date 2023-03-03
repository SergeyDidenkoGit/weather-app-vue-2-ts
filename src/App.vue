<template>
  <div id="app">
    <navbar></navbar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue";

@Component({
  components: {
    Navbar,
  },
})
export default class autocompleteInput extends Vue {}
</script>

<style>
@import "@/assets/styles/imports.css";
</style>
