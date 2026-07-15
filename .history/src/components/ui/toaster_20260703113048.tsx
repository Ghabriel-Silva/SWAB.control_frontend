"use client"

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react"

export const toaster = createToaster({
  placement: "top-start",
  pauseOnPageIdle: true,
  max: 3,

})

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} />
    </Portal>
  )
}