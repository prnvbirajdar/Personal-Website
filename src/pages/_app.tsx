/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { AppProps } from 'next/app'
import '@src/css/tailwind.css'
import Head from 'next/head'
import CallToAction from '@src/components/CallToAction'
import Footer from '@src/components/Footer'
import { ThemeProvider } from 'next-themes'
import Nav from '@src/components/Nav'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Personal Portfolio</title>
      <link rel="Lift Icon" type="image/ico" href="/dumbell.ico" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ThemeProvider attribute="class">
      <Nav />
      <Component {...pageProps} />
      <section className="w-full mt-8 dark:bg-gradient-to-b from-black to-gray-900">
        <CallToAction />
        <Footer />
      </section>
    </ThemeProvider>
  </>
)

export default App
