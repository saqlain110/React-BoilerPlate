import axios from "axios";
import { BASE_URL, CONTENT_TYPE } from "../constants/api";
import errorHandler from "../utils/errorHandler";
import { isUnauthorized } from "../utils/apiUtils";
import { TOAST_TYPES, makeToast } from "../utils/toastUtil";
import { clearAllData, getItem } from "../services/storageService";
import { STORAGE_KEYS } from "../constants/queryKeys";

async function Put({
  path,
  body,
  toastError,
  toastMessage,
  contentType = CONTENT_TYPE.JSON,
}) {
  let url = BASE_URL + path;
  try {
    const headers = { "Content-Type": contentType };
    const token = getItem(STORAGE_KEYS.TOKEN);

    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await axios.put(url, body, { headers });

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
      const message = errorHandler(error?.response?.data?.message);
      makeToast({ type: TOAST_TYPES.ERROR, message });
    }
    console.warn("Error in Put.js: ", error);
    throw new Error(error);
  }
}

export { Put };
