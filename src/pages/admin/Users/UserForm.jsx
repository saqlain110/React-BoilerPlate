import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import FormInput from "../../../components/forms/FormInput";
import FormModal from "../../../components/forms/FormModal";
import FormFieldsSkeleton from "../../../components/skeletons/FormFieldsSkeleton";
import { EMAIL_REGEX } from "../../../constants/regex";
import { useUserForm } from "./userContainer";

const UserForm = ({ disclosure, rowData }) => {
  const {
    isFetching,
    control,
    errors,
    handleSubmit,
    onSubmit,
    isSubmitting,
    resetForm,
  } = useUserForm({ disclosure, rowData });

  return (
    <FormModal
      title={"Edit User"}
      disclosure={disclosure}
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit(onSubmit)}
      maxW={"40rem"}
      reset={resetForm}
      onCloseFn={resetForm}
    >
      <FormFieldsSkeleton count={2} columns={1} loading={isFetching} />

      {!isFetching && (
        <SimpleGrid columns={1} spacing={5}>
          <FormInput
            label={"Name"}
            control={control}
            errors={errors}
            id="name"
            required={true}
            placeholder="Enter company name"
            inputProps={{ size: "sm" }}
          />

          <FormInput
            id={"email"}
            label="Email"
            placeholder="someone@example.com"
            required={true}
            errors={errors}
            control={control}
            rules={{
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address",
              },
            }}
            inputProps={{ size: "sm" }}
          />
        </SimpleGrid>
      )}
    </FormModal>
  );
};

export default UserForm;
