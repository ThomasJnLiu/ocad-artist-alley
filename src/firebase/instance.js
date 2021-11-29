import axios from "axios";

export default axios.create({
  baseURL: "https://userauth-example-default-rtdb.firebaseio.com/",
});
