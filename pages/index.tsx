/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import LatestArticles from '../src/components/Landing/LatestArticles'
import RecentProjects from '../src/components/Landing/RecentProjects'
import Header from '../src/components/Landing/Header'

interface User {
  github_username: string
  name: string
  profile_image: string
  profile_image_90: string
  twitter_username: string
  username: string
  website_url?: null | string
}

interface BlogPost {
  id: number
  title: string
  description: string
  type_of: string
  tag_list: string[]
  canonical_url: string
  slug: string
  body_markdown: string
  comments_count: number
  cover_image: string
  page_views_count: number
  path: string
  positive_reactions_count: number
  public_reactions_count: number
  published: boolean
  published_at: string
  published_timestamp: string
  url: string
  user: User
}

interface Props {
  devData: BlogPost[]
}

const Home: NextPage<Props> = (props) => {
  const { devData } = props

  return (
    <>
      <Head>
        {/* <html lang="en" />
        <title>Pranav Birajdar</title> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="Home Page" content="welcome to the home page!" />
      </Head>
      <section className="w-11/12 px-4 md:px-0 pt-40 md:pt-44 lg:pt-52 mx-auto md:w-3/4 lg:w-2/4 mt-0 ">
        <Header />
        <LatestArticles devData={devData} />
        <RecentProjects />
      </section>
    </>
  )
}

const getPosts = async () => {
  // const params = { per_page: 1000 }
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
    revalidate: 60,
  }
}

export default Home
