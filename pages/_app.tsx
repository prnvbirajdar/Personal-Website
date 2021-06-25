/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { GoogleFonts } from 'next-google-fonts'
import { Windmill } from '@windmill/react-ui'
import { motion } from 'framer-motion'
import * as gtag from '../lib/gtag'
import Nav from '../src/components/Nav'
import ScrollToTop from '../src/containers/scrollToTop'
import Footer from '../src/components/Footer'
import '../src/css/tailwind.css'
import CallToAction from '../src/components/CallToAction'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" />
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="Logo Icon" type="image/png" href="/fav.png" />
        <meta name="Description" content="This is a home page of my portfolio website!" />
        <meta name="title" property="og:title" content="Pranav Birajdar" />
        <meta property="og:type" content="Website" />
        <meta
          name="image"
          property="og:image"
          content="https://live.staticflickr.com/65535/51212041376_2c88715c8b_k.jpg"
        />
        <meta name="description" property="og:description" content="Pranav Birajdar" />
      </Head>
      <Windmill usePreferences>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              x: '100%',
            },
            pageAnimate: {
              x: '0%',
            },
          }}
          transition={{
            duration: 0.25,
            damping: 300,
            mass: 1,
          }}
        >
          <Nav />
          <div className="relative min-h-screen">
            <Component {...pageProps} />

            <section className="w-full pb-20 md:pb-8">
              <CallToAction />
              <ScrollToTop />
              <div className="absolute bottom-0 w-full ">
                <Footer />
              </div>
            </section>
          </div>
        </motion.div>
      </Windmill>
    </>
  )
}
export default App
