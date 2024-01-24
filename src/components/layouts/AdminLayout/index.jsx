import React from "react";
import { Outlet } from "react-router";
import { Box, useDisclosure, useColorMode } from "@chakra-ui/react";
import Sider from "./Sider";
import Header from "./Header";
import { colorKeys, getColor } from "../../../constants/colors";
import { useNavigate } from "react-router-dom";
import { useBearStore } from "../../../stores";
import { Navigate } from "react-router-dom";
const AdminLayout = () => {
  const sidebar = useDisclosure();
  const desktopDisclosure = useDisclosure({ defaultIsOpen: false });
  const { colorMode } = useColorMode();
  const { isAuth } = useBearStore(
    (state) => ({
      isAuth: state.isAuth,
    })
  );


  if (!isAuth) {
    return <Navigate to="/auth/login" replace={true} />;
  }
  return (
    <Box as="section" minH="100vh">
      <Sider disclosure={sidebar} desktopDisclosure={desktopDisclosure} />
      <Box
        ml={{
          base: 0,
          lg: desktopDisclosure.isOpen ? "70px" : "255px",
        }}
        transition=".3s ease"
      >
        <Header disclosure={sidebar} desktopDisclosure={desktopDisclosure} />
        <Box
          as="main"
          p="15px"
          bg={getColor(colorKeys.layoutBoxBackground, colorMode)}
          // bg={{ base: "red", sm: "blue", md: "green", lg: "yellow", xl: "purple" }}
          minH="calc(100vh - 70px)"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(AdminLayout);
