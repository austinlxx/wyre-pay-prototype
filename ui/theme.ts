import { extendTheme } from "@chakra-ui/react";
import { WyreInput, WyreSelect } from "@/ui/components/chakra-defs/input";
import { WyreButton } from "@/ui/components/chakra-defs/button";

const colors = {
  blue: {
    '50': '#EAF1FF',
    '100': '#C6D8F8',
    '200': '#7EAAF9',
    '300': '#508AF5',
    '400': '#005aff',
    '600': '#0846B9',
    '700': '#163E88',
    '800': '#183263',
    '900': '#081A39',
  },
  gray: {
    50: "#F5F5F5",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
}

const shadows = {
  outline: "0 0 0 3px rgba(0, 90, 255, 0.6)",
}

const fonts = {
  heading:
    "'PT Root UI', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Arial', serif",
  body:
    "'Inter', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Arial', sans-serif",
}

const fontSizes = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 17,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  '5xl': 40,
  '6xl': 64,
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
  WyreSelect,
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
  shadows,
})
