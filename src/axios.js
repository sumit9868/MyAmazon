import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-46cdf/us-central1/api", // the cloud function url
});

export default instance;
