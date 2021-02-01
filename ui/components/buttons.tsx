import * as React from "react";
import { Button as ChakraButton, IconButton as ChakraIconButton, useStyleConfig } from "@chakra-ui/react";

export function Button(props) {
  const { size, variant, colorScheme, ...rest } = props;
  const styles = useStyleConfig("WyreButton", { size, variant, colorScheme });
  return <ChakraButton sx={styles} {...rest} />;
}

export function IconButton(props) {
  const { size, variant, colorScheme, ...rest } = props;
  const styles = useStyleConfig("WyreButton", { size, variant, colorScheme });
  return <ChakraIconButton sx={styles} {...rest} />;
}
