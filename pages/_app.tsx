/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Nav from '../src/components/Nav'
import ScrollToTop from '../src/containers/scrollToTop'
import Footer from '../src/components/Footer'
import '../src/css/tailwind.css'
import CallToAction from '../src/components/CallToAction'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Pranav Birajdar</title>
      <link rel="Logo Icon" type="image/png" href="/fav.png" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    <Component {...pageProps} />
    <section className="w-full mt-8 bg-gradient-to-b from-black to-gray-900">
      <CallToAction />
      <ScrollToTop />
      <Footer />
    </section>
  </>
)

export default App
