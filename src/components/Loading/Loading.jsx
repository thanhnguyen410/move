import React from 'react'
import { Spinner } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledLoading = styled(Spinner)`
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
`
export default function Loading() {
  const loading = useSelector(state => state.app.loading)
  if (loading > 0) {
    return <StyledLoading color="secondary" />
  }
  return null
}
