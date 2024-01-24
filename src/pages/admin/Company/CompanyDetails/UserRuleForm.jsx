import React from "react";
import FormInput from "../../../../components/forms/FormInput";
import FormModal from "../../../../components/forms/FormModal";
import { useCompanyUserForm } from "../companyContainer";
import { useParams } from "react-router-dom";

const UserRuleForm = ({ disclosure, rowData }) => {
  const { id } = useParams();
  const { control, errors, handleSubmit, onSubmit, isSubmitting, resetForm } =
    useCompanyUserForm({ disclosure, rowData, companyId: id });

  return (
    <FormModal
      title={"Update Company Rule"}
      disclosure={disclosure}
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit(onSubmit)}
      maxW={"40rem"}
      reset={resetForm}
      onCloseFn={resetForm}
    >
      <FormInput
        label={"Sessions Allowed Per User"}
        control={control}
        errors={errors}
        id="sessionsAllowedPerUser"
        required={true}
        placeholder="Enter sessions allowed per user"
        inputProps={{ size: "sm" }}
      />
    </FormModal>
  );
};

export default UserRuleForm;
