import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Container from 'src/components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getVideos } from './home.slice'
import { unwrapResult } from '@reduxjs/toolkit'

export default function Home() {
  const [videos, setVideos] = useState([])
  const loading = useSelector(state => state.app.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideos())
      .then(unwrapResult)
      .then(videos => {
        setVideos(videos?.data || [])
      })
  }, [dispatch])

  console.log('videos', videos)
  console.log('loading', loading)

  return (
    <Box>
      <Container>HOME</Container>
    </Box>
  )
}
