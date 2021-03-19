/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import RecentProjects from '../src/components/Landing/RecentProjects'
// import LatestArticles from '@src/components/Landing/LatestArticles'
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
      <section className="w-11/12 px-4 md:px-0 pt-40 md:pt-44 lg:pt-52 mx-auto md:w-3/4 lg:w-2/4 mt-0 ">
        <Header />
        {/* <LatestArticles devData={devData} /> */}
        <section>
          <div className="text-left ">
            <h2 className="text-3xl md:text-4xl font-bold ">Latest Articles</h2>
          </div>
          <div className="flex flex-col">
            {devData &&
              devData.slice(0, 2).map(({ description, title, slug }) => (
                <div key={slug} className=" mt-5">
                  <Link href={`/blog/${slug}`}>
                    <h3 className="cursor-pointer mb-2 md:mb-3 text-xl  font-semibold tracking-normal md:text-2xl">
                      {title}
                    </h3>
                  </Link>

                  <div className="text-sm md:text-base font-normal text-gray-300">
                    {description}
                    {/* <Link href={`/blog/${slug}`}>
                      <a className="cursor-pointer ml-2 text-blue-500 hover:text-blue-700 focus:text-blue-700 inline-flex items-center">
                        Read More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </Link> */}
                  </div>
                </div>
              ))}
          </div>
        </section>
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
