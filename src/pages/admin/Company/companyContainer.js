import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useCompanies,
  useDeleteCompany,
  useRegisterCompany,
  useUpdateCompany,
  useUpdateCompanyRule,
  useUpdateCompanyUserRule,
} from "../../../APIservices/services/companyService";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useDebounce from "../../../hooks/useDebounce";
import { API_CONSTANTS } from "../../../constants/api";

export const useCompanyList = () => {
  const [query, setQuery] = useState({ page: 1, limit: 10, searchKey: "" });
  const debouncedQuery = useDebounce(query);
  const formDisclosure = useDisclosure();
  const navigate = useNavigate();
  const [selected, setSelected] = useState({});
  const { data, isFetching, isLoading, refetch } = useCompanies(debouncedQuery);
  const { mutateAsync: DeleteCompanyById } = useDeleteCompany();

  const onAdd = () => {
    setSelected(null);
    formDisclosure.onOpen();
  }

  const onDelete = (id) => {
    DeleteCompanyById(id)
      .then(() => refetch())
      .catch((error) => console.warn(error));
  };

  const onQueryChange = (updatedQuery) => {
    setQuery((prev) => ({ ...prev, ...updatedQuery }));
  }

  const onEdit = (item) => {
    setSelected(item);
    formDisclosure.onOpen();
  };

  const onView = (id) => navigate(`/admin/companies/${id}`);

  return {
    data,
    isFetching,
    isLoading,
    refetch,
    onDelete,
    onEdit,
    onView,
    selected,
    formDisclosure,
    onQueryChange,
    query,
    onAdd
  };
};

export const useCompanyForm = ({ rowData, disclosure }) => {
  const queryClient = useQueryClient();

  // const { data, isFetching } = useCompany(rowData?._id);
  const registerCompany = useRegisterCompany();
  const updateCompany = useUpdateCompany(rowData?._id);

  const {
    handleSubmit,
    control,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    values: {
      name: rowData?.name,
      // email: rowData?.email,
      status: rowData?.status,
    },
  });

  const onSubmit = (values) => {

    const payload = {
      ...values,
      status: Number(values.status),
    }

    let formMutate = rowData?._id
      ? updateCompany.mutateAsync
      : registerCompany.mutateAsync;

    formMutate(payload)
      .then(() => {
        disclosure.onClose();
      })
      .catch((error) => console.warn(error));
  };

  useEffect(() => {
    if (!rowData?._id || !disclosure?.isOpen) resetForm();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowData?._id, disclosure?.isOpen]);

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    resetForm,
    isSubmitting: registerCompany.isPending || updateCompany.isPending,
  };
};

export const useRuleList = () => {
  const disclosure = useDisclosure();
  const [selected, setSelected] = useState(null);

  const onEdit = (item) => {
    setSelected(item);
    disclosure.onOpen();
  };

  return {
    disclosure,
    onEdit,
    selected,
  }
}

export const useCompanyRuleForm = ({ rowData, disclosure, companyId }) => {
  const queryClient = useQueryClient()
  const updateCompanyRule = useUpdateCompanyRule(companyId);

  const {
    handleSubmit,
    control,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    values: {
      uuid: rowData?.uuid,
      sessionCount: rowData?.sessionCount,
    },
  });

  const onSubmit = (values) => {
    const payload = {
      ...values,
      sessionCount: Number(values.sessionCount),
    }
    updateCompanyRule.mutateAsync(payload)
      .then(() => {
        disclosure.onClose();
        queryClient.invalidateQueries([API_CONSTANTS.COMPANY.base, companyId])
      })
      .catch((error) => console.warn(error));
  };

  useEffect(() => {
    if (!rowData?._id || !disclosure?.isOpen) resetForm();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowData?._id, disclosure?.isOpen]);

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    resetForm,
    isSubmitting: updateCompanyRule.isPending,
  };
};


export const useCompanyUserForm = ({ rowData, disclosure, companyId }) => {
  const queryClient = useQueryClient()
  const updateCompanyUserRule = useUpdateCompanyUserRule(companyId);

  const {
    handleSubmit,
    control,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    values: {
      uuid: rowData?.uuid,
      sessionsAllowedPerUser: rowData?.sessionsAllowedPerUser,
    },
  });

  const onSubmit = (values) => {
    const payload = {
      ...values,
      sessionsAllowedPerUser: Number(values.sessionsAllowedPerUser),
    }
    updateCompanyUserRule.mutateAsync(payload)
      .then(() => {
        disclosure.onClose();
        queryClient.invalidateQueries([API_CONSTANTS.COMPANY.base, companyId])
      })
      .catch((error) => console.warn(error));
  };

  useEffect(() => {
    if (!rowData?._id || !disclosure?.isOpen) resetForm();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowData?._id, disclosure?.isOpen]);

  return {
    control,
    errors,
    handleSubmit,
    onSubmit,
    resetForm,
    isSubmitting: updateCompanyUserRule.isPending,
  };
}