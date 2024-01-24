import React from "react";
import {
  Box,
  ButtonGroup,
  Heading,
  chakra,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
} from "@chakra-ui/react";

const TableInfoPopover = ({
  data = {},
  title,
  triggerText,
  titleKey = "name",
  children,
  triggerAction = "hover",
  triggerOnClick,
  triggerProps,
  triggerComponent,
  fallBackText,
  actions,
}) => {
  return (
    <Popover trigger={triggerAction} placement="auto-end">
      <Box
        ml={0}
        _hover={{
          color: "brand.primary",
          cursor: "pointer",
          textDecor: "underline",
        }}
      >
        <PopoverTrigger>
          {triggerComponent ? (
            triggerComponent
          ) : (
            <chakra.p
              w="fit-content"
              fontSize={"14px"}
              onClick={triggerOnClick}
              {...triggerProps}
            >
              {triggerText || data[titleKey] || fallBackText || "N/A"}
            </chakra.p>
          )}
        </PopoverTrigger>
      </Box>

      <PopoverContent textAlign={"left"}>
        <PopoverArrow />
        <PopoverCloseButton />

        <PopoverHeader>
          <Heading whiteSpace="normal" size="sm">
            {title || data[titleKey] || fallBackText}
          </Heading>
        </PopoverHeader>

        <PopoverBody>
          <SimpleGrid spacing={3}>{children}</SimpleGrid>

          {actions && <ButtonGroup mt={2}>{actions}</ButtonGroup>}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TableInfoPopover;
