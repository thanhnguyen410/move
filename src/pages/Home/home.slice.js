import { createAsyncThunk } from '@reduxjs/toolkit'
import videoApi from 'src/api/videos.api'
import { payloadCreator } from 'src/utils/helper'

export const getVideos = createAsyncThunk('home/videos', payloadCreator(videoApi.getVideos))

export const getVideoDetail = createAsyncThunk('home/videoDetail', payloadCreator(videoApi.getVideoDetail))
