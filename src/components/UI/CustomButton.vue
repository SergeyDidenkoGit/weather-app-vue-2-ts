<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "custom-button",
};
</script>

<style scoped>
.button {
  padding: 12px 25px;
  background: #0e3c62;
  color: #ffffff;
  border: none;
  cursor: pointer;
}
</style>
