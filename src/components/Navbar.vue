<template>
  <section class="navbar">
    <div class="navbar__wrapper">
      <figure class="navbar__logo-wrapper" @click="changePage('/weather-app/')">
        <img class="navbar__logo" src="@/assets/imgs/logo.png" alt="Logo" />
      </figure>
      <div class="navbar__buttons">
        <custom-button
          class="navbar__button-main"
          @click.native="changePage('/weather-app/')"
          >Main</custom-button
        >
        <custom-button
          class="navbar__button-favorites"
          @click.native="changePage('/weather-app/favorites')"
          >Favorites</custom-button
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "Navbar",
})
export default class Navbar extends Vue {
  public changePage(page: string): void {
    this.$router.push(page);
  }
}
</script>

<style scoped>
.navbar {
  max-width: 100%;
  background-color: #ffffff;
}

.navbar__wrapper {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 25px 15px;
  display: flex;
  align-items: center;
}

.navbar__logo-wrapper {
  width: 60px;
  height: 40px;
}

.navbar__logo {
  max-width: 100%;
  height: auto;
}

.navbar__buttons {
  margin-left: auto;
}

.navbar__button-main {
  margin-right: 20px;
}
</style>
