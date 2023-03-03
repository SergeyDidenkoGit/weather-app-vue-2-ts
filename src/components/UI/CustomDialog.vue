<template>
  <div class="dialog" v-if="showValue" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "CustomDialog",
})
export default class CustomDialog extends Vue {
  @Prop()
  private show!: boolean;

  public get showValue(): boolean {
    return this.show;
  }

  public hideDialog(): void {
    this.$emit("show", false);
  }
}
</script>

<style scoped>
.dialog {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 153, 255, 0.2);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
