import React from 'react'
import 'src/assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './Routes'
import { ToastContainer } from 'react-toastify'
import Authorization from './components/Authorization/Authorization'
import { ChakraProvider } from '@chakra-ui/react'

import Loading from './components/Loading/Loading'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Routes />
        <Loading />
        <ToastContainer />
        <Authorization />
      </ChakraProvider>
    </div>
  )
}

export default App
