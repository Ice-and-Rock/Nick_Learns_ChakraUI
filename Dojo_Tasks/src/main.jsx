import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 1. import `ChakraProvider` component
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#F0EAD2",
    200: "#DDE5B6",
    300: "#ADC178",
    350: '#ADC141',
    400: "#A98467",
    500: "#6C584C",
  },
};
const fonts = {
  heading: "tahoma",
  body: "tahoma",
};

// add the theme to the rest of the Chakra library using <ChakraProvider>
const theme = extendTheme({
  colors,
  fonts,

});

ReactDOM.createRoot(document.getElementById("root")).render(
  // 2. Wrap ChakraProvider at the root of your app
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
