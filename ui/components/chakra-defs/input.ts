export const WyreInput = {
  // All inputs have in common...
  baseStyle: {
    borderRadius: 8,
  },
  sizes: {
    md: {
      fontSize: 'sm',
      height: 8,
      fontWeight: 'regular',
      paddingLeft: 3,
      paddingRight: 3,
    },
    currency: {
      fontSize: '5xl',
      fontWeight: 'bold',
      fontFamily: 'heading',
      padding: 0,
      border: 'none',
      width: 0,
      minWidth: 8,
      ':focus': {
        outline: 'none',
        boxShadow: 'none',
        border: 'none',
      },
      ':hover': {
        border: 'none',
      }
    },
  },
  variants: {
    primary: {
      bg: 'white',
      color: 'black',
      border: '1px solid',
      borderColor: 'gray.100',
    },
    currency: {
      bg: 'white',
      color: 'black',
      borderColor: 'transparent',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
}
