import "@/ui/globals.css";
import "@/ui/fonts/font.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "jotai";
import { customTheme } from "@/ui/theme";

function App({ Component, pageProps }) {

  return (
    <Provider>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
