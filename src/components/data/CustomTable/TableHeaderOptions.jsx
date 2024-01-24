import React from "react";
import { Flex, Heading, Icon } from "@chakra-ui/react";
import PrimaryButton from "../../buttons/PrimaryButton";

const TableHeaderOptions = ({
  title,
  actionText,
  action,
  icon,
  actionProps,
  containerProps,
  titleProps,
}) => {
  return (
    <Flex
      w="full"
      justify="space-between"
      align={"center"}
      {...containerProps}
      flexWrap={"wrap"}
    >
      {title && (
        <Heading as="h2" fontSize={26} fontWeight="bold" {...titleProps}>
          {title}
        </Heading>
      )}
      {actionText && action && (
        <PrimaryButton
          onClick={action}
          leftIcon={icon && <Icon boxSize={6} as={icon} />}
          {...actionProps}
        >
          {actionText}
        </PrimaryButton>
      )}
    </Flex>
  );
};

export default TableHeaderOptions;
