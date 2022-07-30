import React from 'react'
import type { AppProps } from 'next/app'
import '../../styles/globals.css'
import 'antd/dist/antd.css'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { travelApi } from 'src/service/travel'
import { Head } from 'next/document'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApiProvider  api={travelApi}>
        <Component {...pageProps} />
      </ApiProvider>
    </>
  )
}

export default MyApp
