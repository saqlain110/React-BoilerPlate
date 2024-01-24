import axios from "axios";
import { BASE_URL, CONTENT_TYPE } from "../constants/api";
import { isUnauthorized } from "../utils/apiUtils";
import { makeUrl } from "../utils/urlUtils";
import { TOAST_TYPES, makeToast } from "../utils/toastUtil";
import { clearAllData, getItem } from "../services/storageService";
import { STORAGE_KEYS } from "../constants/queryKeys";

async function Get({
  path,
  toastMessage,
  toastError,
  contentType = CONTENT_TYPE.JSON,
}) {
  try {
    console.log('first')
    let url = BASE_URL + makeUrl(path);

    const headers = { "Content-Type": contentType };
    const token = getItem(STORAGE_KEYS.TOKEN);
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const response = await axios.get(url, { headers });

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
      let message = error?.response?.data.message?.message || "Unknown Error!";
      message = message.length > 130 ? "Unknown Error!" : message;
      makeToast({ type: TOAST_TYPES.ERROR, message });
    }
    console.warn("Error in Get.js: ", error);
    throw new Error(error);
  }
}

export { Get };
