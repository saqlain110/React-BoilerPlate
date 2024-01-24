import React, { useEffect } from "react";
import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import FormInput from "../../../components/forms/FormInput";
import FormModal from "../../../components/forms/FormModal";
import FormFieldsSkeleton from "../../../components/skeletons/FormFieldsSkeleton";
import { EMAIL_REGEX } from "../../../constants/regex";

const MeasurementForm = ({ disclosure, data }) => {
  const queryClient = useQueryClient();

  //   const tenantQuery = useTenant(data?.id);
  //   const createTenantQuery = useCreateTenant();
  //   const updateTenantQuery = useUpdateTenant();

  const {
    handleSubmit,
    control,
    reset: resetForm,
    formState: { errors },
  } = useForm({
    // values: prepareForm({
    //     formValues: data,
    //     serverValues: tenantQuery.data
    // })
  });

  const onSubmit = (values) => {
    // let formMutate = data?.id
    //   ? updateTenantQuery.mutateAsync
    //   : createTenantQuery.mutateAsync;
    // formMutate(preparePayload(values))
    //   .then(() => {
    //     disclosure.onClose();
    //   })
    //   .catch((error) => console.warn(error));
  };

  useEffect(() => {
    if (!data?.id) resetForm();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.id]);

  return (
    <FormModal
      title={data?.id ? "Edit Measurement" : "Add Measurement"}
      disclosure={disclosure}
    //   isSubmitting={createTenantQuery.isPending || updateTenantQuery.isPending}
      onSubmit={handleSubmit(onSubmit)}
      maxW={"75rem"}
      reset={resetForm}
      onCloseFn={resetForm}
    >
      <VStack spacing={5} align="stretch">
        <Box>
          {/* <FormFieldsSkeleton count={7} loading={tenantQuery.isFetching} /> */}

          {/* {!tenantQuery.isFetching && ( */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
              <FormInput
                label={"Name"}
                control={control}
                errors={errors}
                id="name"
                required={true}
                placeholder="Enter tenant name"
                inputProps={{ size: "sm" }}
              />

              <FormInput
                id={"adminEmail"}
                label="Admin Email"
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
          {/* )} */}
        </Box>
      </VStack>
    </FormModal>
  );
};

export default MeasurementForm;
