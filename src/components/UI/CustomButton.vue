<template>
  <button class="custom-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "CustomButton",
})
export default class CustomButton extends Vue {}
</script>

<style scoped></style>
