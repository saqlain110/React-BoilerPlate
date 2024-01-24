import { useMutation, useQuery } from "@tanstack/react-query";
import { Delete, Get, Post, Put } from "../../api";
import { API_CONSTANTS } from "../../constants/api";
import { appendQueryParams } from "../../utils/queryUtils";

export const useCompanies = (params) => {
  return useQuery({
    queryKey: [API_CONSTANTS.COMPANY.base, params],
    queryFn: async () => {
      const data = await Get({
        path: `${API_CONSTANTS.COMPANY.base}?${appendQueryParams(params)}`,
      });
      return data;
    },
    keepPreviousData: true,
  });
};

export const useCompany = (id) => {
  return useQuery({
    queryKey: [API_CONSTANTS.COMPANY.base, id],
    queryFn: async () => {
      const data = await Get({
        path: `${API_CONSTANTS.COMPANY.base}/${id}`,
      });
      return data;
    },
    enabled: !!id,
  });
};
export const useDeleteCompany = () => {
  return useMutation({
    mutationFn: async (id) => {
      const response = await Delete({
        path: `${API_CONSTANTS.COMPANY.base}/${id}`,
        toastError: true,
        toastMessage: true,
      });
      return response;
    },
  });
};
export const useRegisterCompany = () => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await Post({
        path: `${API_CONSTANTS.COMPANY.register}`,
        body,
        toastError: true,
        toastMessage: true,
      });
      return response;
    },
  });
};

export const useUpdateCompany = (id) => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await Put({
        path: `${API_CONSTANTS.COMPANY.base}/${id}`,
        body,
        toastError: true,
        toastMessage: true,
      });
      return response;
    },
  });
};

export const useUpdateCompanyRule = (id) => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await Put({
        path: API_CONSTANTS.COMPANY.companyRules.replace(
          ":id",
          id
        ),
        body,
        toastError: true,
        toastMessage: true,
      });
      return response;
    },
  });
}

export const useUpdateCompanyUserRule = (id) => {
  return useMutation({
    mutationFn: async (body) => {
      const response = await Put({
        path: API_CONSTANTS.COMPANY.userRules.replace(
          ":id",
          id
        ),
        body,
        toastError: true,
        toastMessage: true,
      });
      return response;
    },
  });
}