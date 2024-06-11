import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b8866eef0190427ead46235e5301cb63",
  },
});
