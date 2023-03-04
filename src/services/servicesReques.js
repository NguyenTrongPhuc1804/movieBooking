import axios from "axios";
import { DOMAIN } from "../util/setting/config";
const requestMovie = axios.create({
  baseURL: DOMAIN,
});
export default requestMovie;
