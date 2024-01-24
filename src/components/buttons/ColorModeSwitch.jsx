import React, { useState, useEffect } from "react";
import {
  Icon,
  IconButton,
  useColorMode,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import COLOR_MODES from "../../constants/colorModes";
import APP_ICONS from "../../constants/icons";
import { colorKeys, getColor } from "../../constants/colors";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [animate, setAnimate] = useState(false);

  const toggle = () => {
    setAnimate(true);
  };

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        toggleColorMode();
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate]);
  return (
    <>
      <ChakraBox
        w="40px"
        h="40px"
        animate={
          animate
            ? {
                rotate: [0, 270, 360],
                borderRadius: ["20%", "50%", "100%"],
              }
            : {}
        }
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: 0,
          repeatType: "step-start",
        }}
        onAnimationComplete={() => {
          setAnimate(false);
        }}
      >
        <IconButton
          size="sm"
          variant="ghost"
          w="40px"
          h="40px"
          color={getColor(colorKeys.primaryText, colorMode)}
          onClick={toggle}
          transform={
            colorMode === COLOR_MODES.LIGHT ? "rotate(360deg)" : "rotate(0deg)"
          }
          icon={
            colorMode === COLOR_MODES.LIGHT ? (
              <Icon boxSize="6" as={APP_ICONS.DarkMode} />
            ) : (
              <Icon boxSize="6" as={APP_ICONS.LighMode} />
            )
          }
        />
      </ChakraBox>
    </>
  );
};

export default React.memo(ColorModeSwitch);
