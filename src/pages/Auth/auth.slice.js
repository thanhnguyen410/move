import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from 'src/api/auth.api'
import LocalStorage from 'src/constants/localStorage'
import { payloadCreator } from 'src/utils/helper'

export const login = createAsyncThunk('auth/login', payloadCreator(authApi.login))

const handleAuthFulfilled = (state, action) => {
  const { user, access_token } = action.payload.data
  state.profile = user
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
  localStorage.setItem(LocalStorage.accessToken, access_token)
}

const handleUnAuth = state => {
  state.profile = {}
  localStorage.removeItem(LocalStorage.user)
  localStorage.removeItem(LocalStorage.accessToken)
}

const auth = createSlice({
  name: 'auth',
  initialState: {
    loading: false
  },
  reducers: {
    unauthorize: handleUnAuth
  },
  extraReducers: {
    [login.fulfilled]: handleAuthFulfilled
  }
})

const authReducer = auth.reducer
export const unauthorize = auth.actions.unauthorize
export default authReducer
