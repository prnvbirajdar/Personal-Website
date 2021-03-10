/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react'
import { AppProps } from 'next/app'
import '@src/css/tailwind.css'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Personal Portfolio</title>
      <link rel="Lift Icon" type="image/ico" href="/dumbell.ico" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App
