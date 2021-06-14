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
      <section className="max-w-3xl w-11/12 px-4 md:px-0 pt-40 md:pt-44 lg:pt-48 mx-auto md:w-3/4 lg:w-2/4 mt-0 ">
        <div className="text-black px-5">
          <p className="px-5 rounded py-1 bg-gray-300 block sm:hidden">Mobile</p>
          <p className="px-5 rounded py-1 bg-red-300  hidden sm:block md:hidden">Sm</p>
          <p className="px-5 rounded py-1 bg-green-300 hidden  sm:hidden md:block  lg:hidden">Md</p>
          <p className="px-5 rounded py-1 bg-blue-300 hidden sm:hidden md:hidden lg:block xl:hidden">Lg</p>
          <p className="px-5 rounded py-1 bg-yellow-300 hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</p>
          <p className="px-5 rounded py-1 bg-purple-300 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
            2xl
          </p>
        </div>
        <Header />
        <LatestArticles devData={devData} />
        <RecentProjects />
      </section>
    </>
  )
}

const getPosts = async () => {
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
