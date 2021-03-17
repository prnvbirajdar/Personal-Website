/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import RecentProjects from '@src/components/Landing/RecentProjects'
import LatestArticles from '@src/components/Landing/LatestArticles'
import Header from '@src/components/Landing/Header'

// import { Moon, Sun } from '@src/components/Icons/Icons'
// import { useTheme } from 'next-themes'

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

// type BlogData = {
//   devData: []
// }
const Home: NextPage<Props> = (props) => {
  // const { theme, setTheme } = useTheme()

  const { devData } = props

  return (
    <>
      <section className="w-11/12 px-4 md:px-0 pt-40 md:pt-44 lg:pt-52 mx-auto md:w-3/4 lg:w-2/4 mt-0 ">
        {/* <button
          aria-label="dark mode"
          // onClick={toggleMode}
          className="bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500 transition dark:bg-gray-800 dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5"
        >
          {/* {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />} button
        </button> */}
        <Header />
        <LatestArticles devData={devData} />

        <RecentProjects />
      </section>
    </>
  )
}

const getPosts = async () => {
  // const params = { per_page: 1000 }
  const headers = { 'api-key': process.env.NEXT_API_KEY! }
  const res = await fetch('https://dev.to/api/articles/me/published', { headers })
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
