import React from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { colorKeys, getColor } from "../../../constants/colors";
// import WhiteLogo from "../../svgs/WhiteLogo";
import { mainMenu } from "../../../constants/menus";

const Sider = ({ disclosure, desktopDisclosure }) => {
  const { colorMode } = useColorMode();

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={getColor(colorKeys.siderBackground, colorMode)}
      transition=".3s ease"
      transitionDelay=".2s" // Add the transition delay value here
      w={desktopDisclosure.isOpen ? "70px" : "255px"}
      {...props}
    >
      <Flex
        justify="center"
        h={"70px"}
        align="center"
        bg={getColor(colorKeys.siderBackground, colorMode)}
      >
        <Link to="/admin/dashboard">{/* <WhiteLogo /> */}</Link>
      </Flex>

      <Box borderTop={"1px solid #6c6c6c"}>
        <VStack
          spacing={1}
          mt={4}
          direction="column"
          as="nav"
          fontSize="sm"
          color="primaryText"
          aria-label="Main Navigation"
        >
          {mainMenu.map((item, index) => {
            return (
              <NavItem
                key={index}
                icon={item.icon}
                title={item.title}
                link={item.link}
                subsider={item.subsider}
                isOpen={!desktopDisclosure.isOpen}
              />
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
  return (
    <React.Fragment>
      <SidebarContent
        display={{
          base: "none",
          lg: "unset",
        }}
      />

      <Drawer
        isOpen={disclosure.isOpen}
        onClose={disclosure.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};

export default React.memo(Sider);
