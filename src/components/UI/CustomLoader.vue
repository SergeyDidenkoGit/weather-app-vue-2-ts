<template>
  <div class="loader">
    <div class="loader__wrapper"></div>
  </div>
</template>

<script>
export default {
  name: "custom-loader",
};
</script>

<style scoped>
.loader {
  width: 125px;
}

.loader__wrapper {
  position: relative;
  width: 125px;
  height: 125px;
}

.loader__wrapper::before,
.loader__wrapper::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 125px;
  height: 125px;
  border: 4px solid #0099ff;
  content: "";
  display: block;
  border-radius: 50%;
}

.loader__wrapper::before {
  animation: scale 1s linear 0s infinite;
}

.loader__wrapper::after {
  animation: scale 1s linear 0.5s infinite;
}

@keyframes scale {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(0.7);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
