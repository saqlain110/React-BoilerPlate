import { Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { colorKeys, getColor } from "../../../constants/colors";

const NavItem = ({ icon, link = "#", title, subsider, isOpen, ...rest }) => {
    const { pathname } = useLocation()
    const isActive = pathname.split("/")[2] === link.split("/")[2]
    const { colorMode } = useColorMode()

    return (
        <Flex
            as={Link}
            align="center"
            p={{
                base: "12px 25px",
                lg: isOpen ? "12px 30px" : "12px 25px"
            }}
            w="full"
            cursor="pointer"
            color={getColor(colorKeys.alwaysWhite, colorMode)}
            bg={isActive ? getColor(colorKeys.activeNavButton, colorMode) : "transparent"}
            role="group"
            fontSize={"13px"}
            transition=".15s ease"
            to={link}
            _hover={{
                color: "white",
            }}
            {...rest}
        >
            {icon && (
                <Icon
                    className="nav-icon"
                    boxSize="5"
                    _groupHover={{
                        color: "white",
                    }}
                    as={icon}
                />
            )}
            <Text ml={2} display={{ base: "block", lg: isOpen ? "block" : "none" }}>{title}</Text>
        </Flex>
    );
};

export default React.memo(NavItem)