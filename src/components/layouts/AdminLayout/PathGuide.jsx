import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import APP_ICONS from "../../../constants/icons";
import { colorKeys, getColor } from "../../../constants/colors";
import { getPageName } from "../../../utils/stringUtils";

const PathGuide = () => {
  const { colorMode } = useColorMode();
  const { pathname } = useLocation();
  const splitPath = pathname.split("/");

  return (
    <Breadcrumb
      separator={
        <Icon
          display="flex"
          as={APP_ICONS.RightChevron}
          color={getColor(colorKeys.primaryText, colorMode)}
        />
      }
    >
      <BreadcrumbItem>
        <BreadcrumbLink
          fontSize="15px"
          color={getColor(colorKeys.primaryText, colorMode)}
          as={Link}
          to="/admin/dashboard"
        >
          Dashboard
        </BreadcrumbLink>
      </BreadcrumbItem>
      {splitPath.map((item, index) => {
        if (index < 2 || item === "dashboard") return null;
        const link = splitPath.slice(0, index + 1).join("/");
        const pageName = getPageName(item, splitPath, index);
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink
              as={Link}
              fontSize="15px"
              color={getColor(colorKeys.primaryText, colorMode)}
              to={link}
              textTransform="capitalize"
            >
              {pageName}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default React.memo(PathGuide);
