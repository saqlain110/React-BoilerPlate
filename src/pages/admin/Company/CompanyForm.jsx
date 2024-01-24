import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import FormInput from "../../../components/forms/FormInput";
import FormModal from "../../../components/forms/FormModal";
import { EMAIL_REGEX } from "../../../constants/regex";
import { useCompanyForm } from "./companyContainer";
import FormSwitch from "../../../components/forms/FormSwitch";

const CompanyForm = ({ disclosure, rowData }) => {
  const { control, errors, handleSubmit, onSubmit, isSubmitting, resetForm } =
    useCompanyForm({ disclosure, rowData });

  return (
    <FormModal
      title={rowData?._id ? "Edit Company" : "Add Company"}
      disclosure={disclosure}
      isSubmitting={isSubmitting}
      onSubmit={handleSubmit(onSubmit)}
      maxW={"40rem"}
      reset={resetForm}
      onCloseFn={resetForm}
    >
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

        {!rowData?._id && (
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
        )}

        <FormSwitch
          control={control}
          errors={errors}
          id={"status"}
          label={"Status"}
        />
      </SimpleGrid>
    </FormModal>
  );
};

export default CompanyForm;
