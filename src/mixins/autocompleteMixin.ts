import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { IAutocomplete } from "@/interfaces/mixins/IAutocompleteInput";

@Component
export default class autocompleteMixin extends Vue {
  private listCities: string[] = [];
  protected searchTerm = "";

  public get searchTermValue(): string {
    return this.searchTerm;
  }

  public set searchTermValue(value: string) {
    this.searchTerm = value;
  }

  public get searchCitiesLength(): boolean {
    return this.searchCities.length > 0;
  }

  public get searchCities(): [] | string[] {
    if (this.searchTerm === "") {
      return [];
    }

    return this.listCities.filter((city: string) => {
      return (
        city.indexOf(this.searchTerm) > -1 ||
        city.toLowerCase().indexOf(this.searchTerm) > -1
      );
    });
  }

  private async fetchCities() {
    try {
      const response = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/population/cities"
      );
      this.listCities = response.data.data.map(
        <T extends IAutocomplete>(item: T) => item.city
      );
    } catch (e) {
      console.log(e);
    }
  }

  async created() {
    await this.fetchCities();
  }
}
