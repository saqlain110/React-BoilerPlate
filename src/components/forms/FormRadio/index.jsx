import React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const FormRadio = ({
  options,
  defaultValue,
  label,
  errors = {},
  id,
  required = false,
  control,
  hideLabel,
  stackProps,
  rules,
  radioGroupProps,
  labelProps,
  radioItemProps,
  radioItemLabelProps
}) => {
  if (required) {
    required = `${label} is required`;
  }
  return (
    <Controller
      control={control}
      name={id}
      rules={{
        required: required,
        ...rules,
      }}
      render={({ field: { onChange, onBlur, value, ref, ...rest } }) => (
        <FormControl isInvalid={errors[id]}>
          {label && !hideLabel && (
            <FormLabel htmlFor={id} fontSize="14px" {...labelProps}>
              {label}
            </FormLabel>
          )}
          <RadioGroup
            alignItems={"end"}
            onChange={onChange}
            onBlur={onBlur}
            value={String(value)}
            defaultValue={defaultValue}
            ref={ref}
            {...radioGroupProps}
            {...rest}
          >
            <Stack direction="row" {...stackProps}>
              {options &&
                options.map((item, index) => (
                  <Radio
                    key={index}
                    value={String(item.value) || String(item)}
                    {...radioItemProps}
                  >
                    <Text {...radioItemLabelProps}>{item.label || item}</Text>
                  </Radio>
                ))}
            </Stack>
          </RadioGroup>
          <FormErrorMessage>
            {errors[id] && errors[id].message}
          </FormErrorMessage>
        </FormControl>
      )}
    />
  );
};

export default FormRadio;
