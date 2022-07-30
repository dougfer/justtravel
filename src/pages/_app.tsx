import React from 'react'
import type { AppProps } from 'next/app'
import '../../styles/globals.css'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { travelApi } from 'src/service/travel'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider  api={travelApi}>
      <Component {...pageProps} />
    </ApiProvider>
  )
}

export default MyApp
