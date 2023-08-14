import axios from "axios";
import API_LINK from "../config/API";

export async function GetPortfolio(currentPage) {
  try {
    const response = await axios.get(
      `${API_LINK}/projects/?page=${currentPage || 1}`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    throw new Error(err.response.data);
  }
}
