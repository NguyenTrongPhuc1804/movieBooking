import axios from "axios";
import { DOMAIN } from "../util/setting/config";
const repuestMovie = axios.create({
  baseURL: DOMAIN,
});
export default repuestMovie;
