// Input and Select share common styles
const sizes = {
  md: {
    fontSize: "md",
    height: 12,
    fontWeight: "regular",
    paddingLeft: 3,
    paddingRight: 3
  }
};

const variants = {
  primary: {
    bg: "white",
    color: "black",
    border: "2px solid",
    borderColor: "gray.200",

    ":focus": {
      outline: "none",
      boxShadow: "outline",
      borderColor: "transparent"
    }
  }
};

export const WyreInput = {
  // All inputs have in common...
  baseStyle: {
    borderRadius: 8
  },
  sizes: {
    ...sizes,
    currency: {
      height: 20,
      fontSize: "6xl",
      fontWeight: "bold",
      fontFamily: "heading",
      padding: 0,
      border: "none",
      width: 0,
      minWidth: 10,
      ":focus": {
        outline: "none",
        boxShadow: "none",
        border: "none"
      },
      ":hover": {
        border: "none"
      }
    }
  },
  variants: {
    ...variants,
    currency: {
      bg: "white",
      color: "black",
      borderColor: "transparent"
    }
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "primary"
  }
};

export const WyreSelect = {
  baseStyle: {
    borderRadius: 8
  },
  sizes: {
    ...sizes
  },
  variants: {
    ...variants
  },
  defaultProps: {
    size: "md",
    variant: "primary"
  }
};
