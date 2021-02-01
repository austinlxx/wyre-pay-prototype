import * as React from "react";
import {
  Checkbox as ChakraCheckbox,
  Input as ChakraInput,
  Select as ChakraSelect,
  useStyleConfig
} from "@chakra-ui/react";
import { CheckIcon } from "@/ui/icons";
import { customTheme } from "@/ui/theme";

export function Input(props) {
  const { size, variant, colorScheme, ...rest } = props;
  const styles = useStyleConfig("WyreInput", { size, variant, colorScheme });
  return <ChakraInput sx={styles} {...rest} />;
}

export function Select(props) {
  const { size, variant, colorScheme, ...rest } = props;
  const styles = useStyleConfig("WyreSelect", { size, variant, colorScheme });
  return <ChakraSelect sx={styles} {...rest} />;
}

export function Checkbox(props) {
  return <ChakraCheckbox
    size={"lg"}
    colorScheme="blue"
    spacing={4}
    icon={<CheckIcon boxSize={5}/>}
    css={{
      alignItems: "flex-start",
      "& > .chakra-checkbox__control": { marginTop: 4, borderRadius: 6, width: 24, height: 24 },
      "& > .chakra-checkbox__control[data-checked], .chakra-checkbox__control[aria-checked='true']": {
        backgroundColor: customTheme.colors.blue['400'],
        borderColor: customTheme.colors.blue['400'],
      },
      "& > .chakra-checkbox__control[data-checked][data-hover]": {
        backgroundColor: customTheme.colors.blue['600'],
        borderColor: customTheme.colors.blue['600'],
      },
      "& > .chakra-checkbox__label": { fontSize: 15 }
    }}
    {...props} />;
}

export const AutoResize = (input: HTMLInputElement) => {
  input.style.width = `${input.value.length * 2.5}rem`;
};
