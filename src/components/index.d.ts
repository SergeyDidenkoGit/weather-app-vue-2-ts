declare module "@/components/AutocompleteInput" {
  import Vue, { ComponentOptions } from "vue";

  interface IAutocompleteInput extends ComponentOptions<Vue> {
    name: string;
  }

  const components: IAutocompleteInput;

  export default components;
}
