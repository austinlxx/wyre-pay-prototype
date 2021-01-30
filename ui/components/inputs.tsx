import * as React from "react";
import { Input as ChakraInput, useStyleConfig } from "@chakra-ui/react";

export function Input(props) {
  const { size, variant, colorScheme, ...rest } = props;
  const styles = useStyleConfig("WyreInput", { size, variant, colorScheme });
  return <ChakraInput sx={styles} {...rest} />;
}

export const AutoResize = (input: HTMLInputElement) => {
  input.style.width = `${input.value.length * 1.5}rem`;
};
