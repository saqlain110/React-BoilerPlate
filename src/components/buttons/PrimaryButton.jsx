import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { colorKeys, getColor } from "../../constants/colors";

const PrimaryButton = ({ children, rightIcon, size, ...rest }) => {
  const { colorMode } = useColorMode();
  return (
    <Button
      bg={getColor(colorKeys.primaryButtonFill, colorMode)}
      color={"white"}
      lineHeight={"unset"}
      fontSize={14}
      _hover={{
        bg: getColor(colorKeys.primaryButtonFillHover, colorMode),
      }}
      _active={{
        bg: getColor(colorKeys.primaryButtonFillHover, colorMode),
      }}
      rightIcon={rightIcon}
      size={size}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
