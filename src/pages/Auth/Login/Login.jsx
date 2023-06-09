import { unwrapResult } from '@reduxjs/toolkit'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import InputPassword from 'src/components/InputPassword/InputPassword'
import InputText from 'src/components/InputText/InputText'
import { rules } from 'src/constants/rules'
import { showErrorApi } from 'src/utils/helper'
import { login } from '../auth.slice'
import * as S from './login.style'

export default function Login() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(login(body))
      unwrapResult(res)
      navigate('/')
    } catch (error) {
      showErrorApi(error, setError)
    }
  }

  return (
    <div>
      <S.StyledLogin>
        <S.Container className="container">
          <S.FormWrapper>
            <S.FormTitle>Đăng nhập</S.FormTitle>
            <S.Form noValidate onSubmit={handleSubmit(handleLogin)}>
              <S.FormControl>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={field.onChange}
                      value={getValues('email')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="email" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <InputPassword
                      name="password"
                      placeholder="Mật khẩu"
                      onChange={field.onChange}
                      value={getValues('password')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="password" />
              </S.FormControl>
              <S.FormButton>
                <Button type="submit">Đăng nhập</Button>
              </S.FormButton>
            </S.Form>
          </S.FormWrapper>
        </S.Container>
      </S.StyledLogin>
    </div>
  )
}
