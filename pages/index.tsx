/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import LatestArticles from '../src/components/Landing/LatestArticles'
import RecentProjects from '../src/components/Landing/RecentProjects'
import Header from '../src/components/Landing/Header'
import { Props } from '../src/containers/Interfaces/Interface'

const Home: NextPage<Props> = (props) => {
  const { devData } = props

  return (
    <>
      <Head>
        <title>Pranav Birajdar</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Home Page" content="welcome to the home page!" />
        <meta name="Description" content="This is a home page of my website!" />
      </Head>
      <section className="w-11/12 px-4 md:px-0 pt-40 md:pt-44 lg:pt-48 mx-auto md:w-3/4 lg:w-2/4 mt-0 ">
        <Header />
        <LatestArticles devData={devData} />
        <RecentProjects />
      </section>
    </>
  )
}

const getPosts = async () => {
  // const headers = { 'api-key': 'u6fFae5kYdEF1NiaUuGZdhTh' }
  const res = await fetch('https://dev.to/api/articles?username=prnvbirajdar')
  const posts = await res.json()

  return posts
}

export const getStaticProps: GetStaticProps = async () => {
  const devData = await getPosts()

  if (!devData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { devData }, // will be passed to the page component as props
    revalidate: 1,
  }
}

export default Home
