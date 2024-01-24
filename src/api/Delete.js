import axios from "axios";
import { BASE_URL, CONTENT_TYPE } from "../constants/api";
import { isUnauthorized } from "../utils/apiUtils";
import { TOAST_TYPES, makeToast } from "../utils/toastUtil";
import { clearAllData, getItem } from "../services/storageService";
import { STORAGE_KEYS } from "../constants/queryKeys";

async function Delete({
  path,
  toastError,
  toastMessage,
  contentType = CONTENT_TYPE.JSON,
}) {
  let url = BASE_URL + path;
  try {
    const headers = { "Content-Type": contentType };
    const token = getItem(STORAGE_KEYS.TOKEN);

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const response = await axios.delete(url, { headers });

    if (toastMessage) {
      let message = response.data.message?.message || "Success!";
      makeToast({ type: TOAST_TYPES.SUCCESS, message });
    }
    return response.data;
  } catch (error) {
    if (isUnauthorized(error)) {
      clearAllData();
      window.location.reload();
      return;
    }

    if (toastError) {
      let message = error?.response?.data?.message?.message || "Unknown error!";
      message = message.length > 130 ? "Unknown Error!" : message;
      makeToast({ type: TOAST_TYPES.ERROR, message });
    }
    console.warn("Error in Delete.js: ", error);
    throw new Error(error);
  }
}

export { Delete };
