import React, { lazy, Suspense } from 'react'
import { Routes as Switch, Route } from 'react-router-dom'
import { path } from './constants/path'
import NotFound from './pages/NotFound/NotFound'
import MainLayout from './layouts/MainLayout/MainLayout'
import UnAuthenticated from './guards/UnAuthenticated/UnAuthenticated'
import Fallback from './components/Fallback/Fallback'

const Home = lazy(() => import('./pages/Home/Home'))
const Login = lazy(() => import('./pages/Auth/Login/Login'))

export default function Routes() {
  return (
    <Switch>
      <Route
        path={path.home}
        element={
          <MainLayout>
            <Suspense fallback={<Fallback />}>
              <Home />
            </Suspense>
          </MainLayout>
        }
      ></Route>
      <Route
        path={path.login}
        element={
          <UnAuthenticated>
            <MainLayout>
              <Suspense fallback={<Fallback />}>
                <Login />
              </Suspense>
            </MainLayout>
          </UnAuthenticated>
        }
      ></Route>
      <Route path={path.notFound} exact element={<NotFound />}></Route>
    </Switch>
  )
}
