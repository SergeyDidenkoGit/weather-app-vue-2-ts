import axios from "axios";

export async function requestIP() {
  return await axios.get("https://ipapi.co/json/");
}
