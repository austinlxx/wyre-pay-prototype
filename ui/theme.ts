import {extendTheme} from "@chakra-ui/react"
import {WyreInput} from "@/ui/components/chakra-defs/input";
import { WyreButton } from "@/ui/components/chakra-defs/button";

const colors = {
  blue: {
    '400': '#005aff',
    '600': '#0846B9',
  }
}

const fonts = {
  heading:
    "'Kumbh Sans', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Arial', serif",
  body:
    "'Inter', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Arial', sans-serif",
}

export const fontSizes = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
}

const fontWeights = {
  extralight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};

const components = {
  WyreInput,
  WyreButton,
}

export const customTheme = extendTheme({
  styles: {
    global: {
      'body': {fontFamily: fonts.body, color: 'black'},
    },
  },
  components,
  colors,
  fonts,
  fontWeights,
  fontSizes,
})
