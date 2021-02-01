export const WyreButton = {
  // All buttons have in common...
  baseStyle: {
    borderRadius: 8,
    fontFamily: 'heading',
    fontWeight: 'bold',
  },
  sizes: {
    md: {
      fontSize: 'sm',
      height: 8,
      paddingLeft: 3,
      paddingRight: 3,
    },
    icon: {
      height: 12,
      width: 12,
      borderRadius: 24,
      padding: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    xl: {
      fontSize: 'lg',
      height: 12,
      paddingLeft: 3,
      paddingRight: 3,
    },
    currency: {
      fontSize: 'sm',
      height: 10,
      fontWeight: 'bold',
      borderRadius: 24,
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
      },
      ':hover[disabled]': {
        bg: '#508AF5 !important'
      }
    },
    alt: {
      bg: 'blue.50',
      color: 'blue.400',
      ':hover': {
        bg: 'blue.100'
      },
      ':hover[disabled]': {
        bg: '#508AF5 !important'
      }
    },
    outline: {
      bg: 'white',
      borderColor: 'gray.200',
      borderWidth: 1,
      color: 'black',
      ':hover': {
        bg: 'gray.200'
      },
      ':hover[disabled]': {
        bg: '#508AF5 !important'
      }
    },
    currency: {
      bg: 'blue.50',
      color: 'blue.900',
      ':hover': {
        bg: 'blue.100'
      }
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
}
