//api setup
import axios from "axios";

const Instance = axios.create({
  baseURL: "https://pets-react-query-backend.eapi.joincoded.com",
});

export default Instance;
