import { useEffect, useState } from "react"
import { BASE_URL, API_CONSTANTS } from "../constants/api"

export const prepareData = (data, allowedKeys, removeKeys) => {
  data = Object.keys(data).reduce((obj, key) => {
    if (allowedKeys.includes(key)) {
      obj[key] = data[key]
    }
    return obj
  }, {})
  if (removeKeys) {
    removeKeys.forEach((item) => delete data[item])
  }
  return data
}

export const apiResponse = () => {
  return {
    data: "any",
    success: "boolean",
    message: "string",
    devMessage: "string",
    apiCode: "number",
    statusCode: "number"
  }
}

export function useNetwork() {
  const [isOnline, setNetwork] = useState(window.navigator.onLine);

  const updateNetwork = () => {
    setNetwork(window.navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("offline", updateNetwork);

    window.addEventListener("online", updateNetwork);

    return () => {
      window.removeEventListener("offline", updateNetwork);

      window.removeEventListener("online", updateNetwork);
    };
  });

  return isOnline;
}

export const isUnauthorized = (error) => {
  const allowedEndPoints = [
    `${BASE_URL}${API_CONSTANTS.AUTH.login}`,
    `${BASE_URL}${API_CONSTANTS.AUTH.forgotPassword}`,
    `${BASE_URL}${API_CONSTANTS.AUTH.verifyOtp}`,
    `${BASE_URL}${API_CONSTANTS.AUTH.resetPassword}`,
    `${BASE_URL}${API_CONSTANTS.AUTH.updatePassword}`,
    `${BASE_URL}${API_CONSTANTS.AUTH.setPassword}`,
    `${BASE_URL}${API_CONSTANTS.AUTH.permissions}`,
    `${BASE_URL}${API_CONSTANTS.AUTH.verifySetPassword}`,
  ]

  if (allowedEndPoints.includes(error?.config?.url)) return false
  return error.response?.status === 401
}