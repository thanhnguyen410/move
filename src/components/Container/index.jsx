import React from 'react'
import { Container as ContainerChakra } from '@chakra-ui/react'

export default function Container({ ...props }) {
  return (
    <>
      <ContainerChakra maxW="container.lg" p={2} {...props} />
    </>
  )
}
