import axios from "axios";

const instance = axios.create({
  baseURL: "", // the cloud function url
});

export default instance;
