import axios from "axios";
import { DogsResponse, ImagesResponse } from "../interfaces";

const dogAPI = {
  /**
   * Get Dogs
   * @returns List of all breeds
   */
  getDogs: function () {
    return axios.get<DogsResponse>("https://dog.ceo/api/breeds/list/all");
  },
  /**
   * Get Images
   * @param query dog breed
   * @returns Eight random dog images by breed
   */
  getImages: function (query: string) {
    return axios.get<ImagesResponse>(`https://dog.ceo/api/breed/${query}/images/random/8`);
  },
};

export default dogAPI;
