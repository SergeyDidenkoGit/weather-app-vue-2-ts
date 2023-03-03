<template>
  <section class="autocomplete">
    <custom-input
      ref="autocompleteInput"
      class="autocomplete__input"
      v-model="searchTermValue"
      placeholder="Type city name ..."
    />
    <ul class="autocomplete__dropdown" v-if="searchCitiesLength">
      <li
        class="autocomplete__option"
        v-for="city in searchCities"
        :key="city"
        @click="selectCity(city)"
      >
        {{ city }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { namespace } from "vuex-class";
import AutocompleteMixin from "@/mixins/autocompleteMixin";

const WeatherModule = namespace("weatherModule");

@Component({
  name: "autocompleteInput",
})
export default class AutocompleteInput extends mixins(AutocompleteMixin) {
  @WeatherModule.Action("fetchCurrentWeatherByCity")
  private fetchCurrentWeatherByCity!: (value: string) => void;

  @WeatherModule.Action("fetchWeatherByCity")
  private fetchWeatherByCity!: (value: string) => void;

  selectCity(city: string): void {
    this.fetchCurrentWeatherByCity(city);
    this.fetchWeatherByCity(city);
    this.reset();
  }

  reset(): void {
    this.searchTermValue = "";
  }
}
</script>

<style scoped>
.autocomplete {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.autocomplete__dropdown {
  position: absolute;
  top: 26px;
  padding: 5px;
  width: 100%;
  max-height: 100px;
  border: 1px solid #808080;
  border-radius: 5px;
  background: #ffffff;
  overflow-y: scroll;
  z-index: 100000;
}

.autocomplete__option {
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
}
.autocomplete__option:hover {
  background: #d3d3d3;
}
</style>
