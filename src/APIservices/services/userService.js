import { useMutation, useQuery } from "@tanstack/react-query";
import { Delete, Get, Post, Put } from "../../api";
import { API_CONSTANTS } from "../../constants/api";
import { appendQueryParams } from "../../utils/queryUtils";

export const useUsers = (params) => {
  return useQuery({
    queryKey: [API_CONSTANTS.USERS.base, params],
    queryFn: async () => {
      const data = await Get({
        path: `${API_CONSTANTS.USERS.base}?${appendQueryParams(params)}`,
      });
      return data;
    },
    keepPreviousData: true,
  });
};

export const useUser = (id) => {
  return useQuery({
    queryKey: [API_CONSTANTS.USERS.base, id],
    queryFn: async () => {
      const data = await Get({
        path: `${API_CONSTANTS.USERS.base}/${id}`,
      });
      return data;
    },
    enabled: !!id,
  });
};
export const useUserDelete = () => {
  return useMutation({
    mutationFn: async (id) => {
      const response = await Delete({
        path: `${API_CONSTANTS.USERS.base}/${id}`,
        toastError: true,
        toastMessage: true,
      });
      return response;
    },
  });
};
export const useUserStatusChange = () => {
  return useMutation({
    mutationFn: async ({ id, body }) => {
      console.log(body, "bodybodybodybody");
      const response = await Put({
        path: `${API_CONSTANTS.USERS.status}/${id}`,
        body,
        toastError: true,
        toastMessage: true,
      });
      return response;
    },
  });
};
export const useRegisterUser = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await Post({
        path: `${API_CONSTANTS.USERS.register}`,
        body,
        toastError: true,
        toastMessage: true,
      });
      return response;
    },
  });
};

export const useUpdateUser = (id) => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await Put({
        path: `${API_CONSTANTS.USERS.base}/${id}`,
        body,
        toastError: true,
        toastMessage: true,
      });
      return response;
    },
  });
};
