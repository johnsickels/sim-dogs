import axios from "axios";
import { AxiosDogs } from "../interfaces";


const dogAPI = {
  getDogs: function () {
    return axios.get<AxiosDogs>("https://dog.ceo/api/breeds/list/all");
  },
};

export default dogAPI;
