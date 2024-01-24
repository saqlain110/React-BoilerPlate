import {
  Avatar,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Button,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { colorKeys, getColor } from "../../../constants/colors";
import APP_ICONS from "../../../constants/icons";
import { getPageTitle, singularize } from "../../..//utils/stringUtils";
import PathGuide from "./PathGuide";
import NetworkBar from "./NetworkBar";
import ProfileMenu from "./ProfileMenu";

const Header = ({ disclosure, desktopDisclosure }) => {
  const { pathname } = useLocation();
  const splitPath = pathname.split("/");
  const navigate = useNavigate();

  const { colorMode } = useColorMode();

  useEffect(() => {
    let title = splitPath[splitPath.length - 1];
    if (!isNaN(splitPath[splitPath.length - 1])) {
      title = `${singularize(
        splitPath[splitPath.length - 2].replace("-", " ")
      )} Details`;
    }
    document.title = getPageTitle(title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px="4"
      minH="70px"
      bg={getColor(colorKeys.layoutHeaderBackground, colorMode)}
      h="14"
      pos="sticky"
      top="0"
      zIndex={99}
    >
      {/* mobile sider toggle button */}
      <IconButton
        aria-label="Menu"
        display={{
          base: "inline-flex",
          lg: "none",
        }}
        onClick={disclosure.onOpen}
        icon={<Icon as={APP_ICONS.MENU} />}
        size="sm"
      />

      {/* desktop sider toggle button */}
      <Flex align="center">
        <IconButton
          transitionDelay={"1s"}
          transition={"ease-in-out"}
          aria-label="Menu"
          display={{
            base: "none",
            lg: "inline-flex",
          }}
          onClick={() => desktopDisclosure.onToggle()}
          icon={<Icon as={APP_ICONS.DRAWER} />}
          size="sm"
          mr={5}
          transform={
            desktopDisclosure.isOpen ? "rotate(180deg)" : "rotate(0deg)"
          }
        />
        <PathGuide />
      </Flex>
      <NetworkBar />
      <ProfileMenu />
    </Flex>
  );
};

export default React.memo(Header);
