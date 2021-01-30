export const WyreButton = {
  // All buttons have in common...
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
  },
  variants: {
    primary: {
      bg: 'blue.400',
      color: 'white',
      ':hover': {
        bg: 'blue.600'
      }
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
}
