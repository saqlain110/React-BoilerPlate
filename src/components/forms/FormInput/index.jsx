import {
  FormControl,
  chakra,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  useColorMode,
  FormHelperText,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Controller } from "react-hook-form";
import APP_ICONS from "../../../constants/icons";
import { accessValue } from "../../../utils/stringUtils";
import { colorKeys, getColor } from "../../../constants/colors";

const FormInput = ({
  label,
  placeholder,
  id,
  required = false,
  errors = {},
  control,
  rules,
  containerStyles,
  type,
  leftAddon,
  rightAddon,
  inputProps,
  hideLabel,
  secure,
  size = "md",
  messageContainerProps,
  labelProps,
  iconProps,
  customError,
  feedbackMessage,
  labelExtention,
  labelContainerProps,
  groupProps
}) => {
  const [show, setShow] = React.useState(false);
  const { colorMode } = useColorMode();

  if (required) {
    required = `${label} is required`;
  }

  return (
    <Controller
      control={control}
      name={id}
      rules={{
        required,
        ...rules,
      }}
      render={({ field: { onChange, onBlur, value, ref, ...rest } }) => (
        <FormControl
          isInvalid={errors[id] || accessValue(errors, `${id}.message`)}
          {...containerStyles}
        >
          {!hideLabel && (
            <FormLabel htmlFor={id} fontSize={"13px"} {...labelProps}>
              <Flex justify="space-between" {...labelContainerProps}>
                <Flex>
                  {label}
                  {required && <chakra.span color={getColor(colorKeys.danger, colorMode)}>*</chakra.span>}
                </Flex>
                {labelExtention}
              </Flex>
            </FormLabel>
          )}
          <InputGroup size={size} {...groupProps}>
            {leftAddon}
            <Input
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              ref={ref}
              placeholder={placeholder}
              id={id}
              type={secure ? (show ? "text" : "password") : type}
              {...inputProps}
              {...rest}
            />
            {secure ? (
              <InputRightElement h="full" cursor={"pointer"}>
                <Icon
                  as={show ? APP_ICONS.EYE : APP_ICONS.EYE_OFF}
                  boxSize={5}
                  onClick={() => setShow(!show)}
                  {...iconProps}
                />
              </InputRightElement>
            ) : (
              <InputRightElement
                display={errors[id] ? "flex" : "none"}
                h="full"
              >
                <Icon
                  as={APP_ICONS.WARNING}
                  color={getColor(colorKeys.danger, colorMode)}
                  boxSize={5}
                  {...iconProps}
                />
              </InputRightElement>
            )}
            {rightAddon}
          </InputGroup>
          <FormErrorMessage {...messageContainerProps}>
            {/* {errors[id] && errors[id]?.message} */}
            {customError || accessValue(errors, `${id}.message`)}
          </FormErrorMessage>
          <FormHelperText {...messageContainerProps}>
            {feedbackMessage}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
};

export default FormInput;
