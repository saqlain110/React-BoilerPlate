import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useUsers,
  useUser,
  useRegisterUser,
  useUpdateUser,
  useUserDelete,
  useUserStatusChange,
} from "../../../APIservices/services/userService";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useDebounce from "../../../hooks/useDebounce";

export const useUserList = () => {
  const [query, setQuery] = useState({ page: 1, limit: 2, searchKey: "" });
  const debouncedQuery = useDebounce(query);
  const formDisclosure = useDisclosure();
  const navigate = useNavigate();
  const [selected, setSelected] = useState({});
  const { data, isFetching, isLoading, refetch } = useUsers(debouncedQuery);
  const { mutateAsync: UserDeleteById } = useUserDelete();
  const { mutateAsync: UserStatusChange } = useUserStatusChange();
  const onDelete = (id) => {
    UserDeleteById(id)
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

  const onView = (id) => navigate(`/admin/users/${id}`);

  const onStatusChange = (id, status) => {
    let body = {
      status: status ? 0 : 1,
    };
    UserStatusChange({ id, body }).catch((error) => console.warn(error));
  };

  return {
    data,
    isFetching,
    isLoading,
    refetch,
    onDelete,
    onEdit,
    onView,
    onStatusChange,
    selected,
    formDisclosure,
    query,
    onQueryChange,
  };
};

export const useUserForm = ({ rowData, disclosure }) => {
  const queryClient = useQueryClient();

  const { data, isFetching } = useUser(rowData?._id);
  const updateUser = useUpdateUser(rowData?._id);

  const {
    handleSubmit,
    control,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    values: {
      name: data?.data?.name,
      email: data?.data?.email,
      status: data?.data?.status,
    },
  });

  const onSubmit = (values) => {
    updateUser
      .mutateAsync(values)
      .then(() => {
        disclosure.onClose();
      })
      .catch((error) => console.warn(error));
  };

  useEffect(() => {
    if (!rowData?._id) resetForm();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowData?._id]);

  return {
    isFetching,
    control,
    errors,
    handleSubmit,
    onSubmit,
    resetForm,
    isSubmitting: updateUser.isPending,
  };
};
