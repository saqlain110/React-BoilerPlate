import {
  Avatar,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import APP_ICONS from "../../../constants/icons";
import { clearAllData, getItem } from "../../../services/storageService";
import { STORAGE_KEYS } from "../../../constants/queryKeys";
import { useBearStore } from "../../../stores";

const ProfileMenu = () => {

const userDetails = getItem(STORAGE_KEYS.GET_USER);
const { setIsAuth } = useBearStore(
  (state) => ({
    setIsAuth: state.setIsAuth,
  }),
);
const handleLogout = () => {
  setIsAuth(false)
  clearAllData();
}
  return (
    <Menu>
      <MenuButton ml={1} as={Button} variant={"unstyled"}>
        <Flex align="center">
          <Avatar
            size="xs"
            name={`${userDetails?.firstName || "User"} ${
              userDetails?.lastName || ""
            }`}
            // src={user?.profilePictureUrl || user?.profilePicture}
            cursor="pointer"
            className="top-nav-avatar"
          />
          <Text ml={2} fontSize="sm" fontWeight="medium">
            {`${userDetails?.firstName || "User"} ${
              userDetails?.lastName || ""
            }`}
          </Text>
          <Icon mt={1} boxSize="2" as={APP_ICONS.DownChevron} ml={1} />
        </Flex>
      </MenuButton>
      <MenuList>
        {[
          {
            name: "Log Out",
            icon: APP_ICONS.LOGOUT,
            action: () => handleLogout(),
          },
        ].map((item, index) => (
          <MenuItem
            fontSize={"14px"}
            icon={<Icon as={item.icon} boxSize="4" />}
            key={index}
            onClick={item.action}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
