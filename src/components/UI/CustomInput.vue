<template>
  <div>
    <input :value="inputValue" @input="updateInput" type="text" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "CustomInput",
})
export default class CustomInput extends Vue {
  @Prop()
  private modelValue!: string | number;

  public get inputValue(): string | number {
    return this.modelValue;
  }

  public updateInput(event: Event) {
    this.$emit("input", (event.target as HTMLInputElement).value);
  }
}
</script>

<style scoped>
input {
  padding: 5px;
  width: 100%;
  border: 1px solid #808080;
  border-radius: 5px;
}
</style>
