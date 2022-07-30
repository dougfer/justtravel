import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href='/fonts/FontFace.css' rel='stylesheet' />
        <title>Testinho</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}