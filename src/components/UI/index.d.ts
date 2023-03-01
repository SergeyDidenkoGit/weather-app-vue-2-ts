declare module '@/components/UI' {
  import Vue, { ComponentOptions } from "vue";

  interface IUI extends ComponentOptions<Vue> {
    name: string;
  }

  const UI: IUI[];

  export default UI;
}
