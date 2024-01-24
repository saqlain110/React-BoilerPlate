import React from "react";
import ReactDOM from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/toast";
import "@fontsource/poppins";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { getItem } from "./services/storageService";
import ApiClientProvider from "./APIservices/Client";

const { ToastContainer } = createStandaloneToast();

const root = document.getElementById("root");

const config = {
  initialColorMode: "light",
  useSystemColorMode: getItem("systemColorMode") || false,
};

const theme = extendTheme({ config });



ReactDOM.createRoot(root).render(
  <ChakraProvider theme={theme}>
    <ApiClientProvider>
        <AppRouter />
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
    </ApiClientProvider>
  </ChakraProvider>
);
