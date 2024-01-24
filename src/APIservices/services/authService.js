import { useMutation } from "@tanstack/react-query";
import { API_CONSTANTS } from "../../constants/api";
import { Get, Post } from "../../api";
import { getItem } from "../../services/storageService";
import { STORAGE_KEYS } from "../../constants/queryKeys";

export const getMe = async () => {
  const token = getItem(STORAGE_KEYS.TOKEN);
  if (token) {
    const data = await Get({
      path: API_CONSTANTS.USERS.me,
      token,
      toastError: true,
    });
    return data;
  }
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (body) => {
      const data = await Post({
        path: API_CONSTANTS.AUTH.login,
        body,
        toastError: true,
        toastMessage: true,
      });
      return data;
    },
  });
};
