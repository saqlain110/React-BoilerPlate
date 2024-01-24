import React from "react";
import FormInput from "../../../../components/forms/FormInput";
import FormModal from "../../../../components/forms/FormModal";
import { useCompanyRuleForm } from "../companyContainer";
import { useParams } from "react-router-dom";

const CompanyRuleForm = ({ disclosure, rowData }) => {
  const { id } = useParams();
  const { control, errors, handleSubmit, onSubmit, isSubmitting, resetForm } =
    useCompanyRuleForm({ disclosure, rowData, companyId: id });

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
        label={"Session Count"}
        control={control}
        errors={errors}
        id="sessionCount"
        required={true}
        placeholder="Enter session count"
        inputProps={{ size: "sm" }}
      />
    </FormModal>
  );
};

export default CompanyRuleForm;
