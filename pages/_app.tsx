import '../ui/globals.css'
import {ChakraProvider} from "@chakra-ui/react"
import { customTheme } from '@/ui/theme'

function WyrePay({Component, pageProps}) {

  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default WyrePay
