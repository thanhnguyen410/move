import React from 'react'
import Logo from 'src/assets/images/logo-header.png'
import { Image, Flex, Box } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box bg="black" p="3">
      <Flex display="flex" justifyContent="center">
        <Image src={Logo} alt="" />
      </Flex>
    </Box>
  )
}
