import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import IAutocomplete from "@/interfaces/mixins/IAutocompleteInput";

@Component
export default class autocompleteMixin extends Vue {
  protected listCities: string[] = [];
  public searchTerm = "";

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
