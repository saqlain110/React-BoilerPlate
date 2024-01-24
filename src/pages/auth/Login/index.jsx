import React from "react";
import {
  Card,
  chakra,
  Flex,
  Box,
  Text,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { getColor, colorKeys } from "../../../constants/colors";
import IMAGES from "../../../constants/images";
import COLOR_MODES from "../../../constants/colorModes";
import { EMAIL_REGEX } from "../../../constants/regex";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import FormInput from "../../../components/forms/FormInput";
import { useLogin } from "../../../APIservices/services/authService";
import { useBearStore } from "../../../stores";
import { setItem } from "../../../services/storageService";
import { STORAGE_KEYS } from "../../../constants/queryKeys";

const Login = () => {
  const { colorMode } = useColorMode();
  const { setIsAuth } = useBearStore((state) => ({
      setIsAuth: state.setIsAuth,
    })
  );

  const loginQuery = useLogin();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  function onSubmit(values) {
    const payload = {
      ...values,
      userType: 1,
    };

    loginQuery
      .mutateAsync(payload)
      .then((response) => {
        const token = response?.tokens?.access?.token;
        const user = response?.user;
        setItem(STORAGE_KEYS.GET_USER, user);
        setItem(STORAGE_KEYS.TOKEN, token);
        setIsAuth(true);
      })
      .catch((error) => {
        console.warn(error)
        
        //This is temporary, When API is ready we will remove this
        setIsAuth(true);
      });
  }

  return (
    <Flex
      height={"100vh"}
      justify="center"
      align="center"
      bg={getColor(colorKeys.white, colorMode)}
      background={`url(${IMAGES.AUTH_HERO})`}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <Flex w="full" justify={"center"} align={"center"} flexDir={"column"}>
        <Card w="full" maxW="480px">
          <Box w="full" maxW="480px">
            <Flex
              px="5"
              justify={"space-between"}
              bg={getColor(colorKeys.dimmerBlue, colorMode)}
            >
              <Box>
                <Text
                  fontSize="16px"
                  color={getColor(colorKeys.white, colorMode)}
                  mt={5}
                >
                  Welcome Back!
                </Text>
                <Text
                  fontSize="13px"
                  color={getColor(colorKeys.white, colorMode)}
                >
                  Sign in to continue to React Boilerplate
                </Text>
              </Box>

              <Box background={`url(${IMAGES.AUTH_MIN})`} w="173px" h="112px" />
            </Flex>

            <Box
              pos="absolute"
              top="75px"
              left="25px"
              w="90px"
              m="auto"
              bg={getColor(colorKeys.white, colorMode)}
              rounded="full"
            >
              {colorMode === COLOR_MODES.LIGHT ? (
                <Image w="full" h="full" src={IMAGES.LOGO} alt="logo" />
              ) : (
                <WhiteLogo containerStyles={{ margin: "auto" }} />
              )}
            </Box>

            <Box p="10">
              <chakra.form onSubmit={handleSubmit(onSubmit)} m="30px 0">
                <FormInput
                  id={"email"}
                  label={"Email"}
                  placeholder="Enter email"
                  required={true}
                  errors={errors}
                  control={control}
                  inputProps={{ fontSize: "15px" }}
                  rules={{
                    pattern: {
                      value: EMAIL_REGEX,
                      message: "Invalid email address",
                    },
                  }}
                />

                <FormInput
                  id={"password"}
                  label={"Password"}
                  type="password"
                  secure={true}
                  placeholder="Enter Password"
                  required={true}
                  errors={errors}
                  control={control}
                  inputProps={{ fontSize: "15px" }}
                  containerStyles={{ mt: 5 }}
                />

                <PrimaryButton
                  isLoading={loginQuery.isPending}
                  mt={5}
                  type="submit"
                  p="18px 33px"
                  bg={getColor(colorKeys.spanishYellow, colorMode)}
                  w="full"
                  rounded="md"
                  fontWeight={"bold"}
                  color="white"
                >
                  Login
                </PrimaryButton>
              </chakra.form>
            </Box>
          </Box>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Login;
