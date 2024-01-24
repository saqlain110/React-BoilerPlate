import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const CustomMenu = ({ label="Actions", options }) => {
  return (
    <Menu size={"xs"}>
      <MenuButton size="xs" as={Button} rightIcon={<ChevronDownIcon />}>
        {label}
      </MenuButton>
      <MenuList>
        {options?.map(({ label, action }, index) => (
          <MenuItem onClick={action} key={index}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CustomMenu;
