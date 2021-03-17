/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

type BlogData = {
  devData: []
}

const About: NextPage<BlogData> = ({ devData }) => {
  const [searchValue, setSearchValue] = useState('')

  const filteredBlogPosts = devData.filter((data: { title: string; description: string; tag_list: string[] }) => {
    const searchContent = data.title + data.description + data.tag_list.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <>
      <section className="w-11/12 px-4 md:px-0 pt-24 md:pt-28 lg:pt-32 mx-auto md:w-3/4 lg:w-10/12 text-gray-300">
        <div>
          <div className=" space-y-2 md:space-y-5">
            <h1 className="mb-3 lg:mb-5 text-4xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Blog
            </h1>
            <p className=" sm:w-9/12 md:w-10/12 lg:w-9/12 text-base md:text-lg font-normal ">
              I love building new things. This blog is a way for me to write down and share new ideas and lessons with
              everyone.
            </p>
            {/* <ActiveScreen /> */}
          </div>
          <div className="divide-y divide-gray-800">
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
              <div className="relative max-w-lg">
                <input
                  aria-label="Search articles"
                  type="text"
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search articles"
                  className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
                />
                <svg
                  className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <ul>
              {!filteredBlogPosts.length && 'No posts found.'}
              {filteredBlogPosts.map(
                (data: { description: string; title: string; slug: string; published_at: string }) => {
                  const { description, title, slug, published_at } = data
                  return (
                    <li key={slug} className="py-4 xl:py-6">
                      <article className="space-y-2 xl:grid xl:grid-cols-5 xl:space-y-0 xl:items-baseline">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="prose prose-sm md:prose 2xl:prose-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time>{format(parseISO(published_at), 'MMMM dd, yyyy')} </time>
                          </dd>
                        </dl>
                        <div className="space-y-3 xl:col-span-4 xl:pr-20">
                          <div>
                            <h3 className="text-2xl font-bold leading-8 text-white hover:text-gray-300 tracking-tight">
                              <Link href={`/blog/${slug}`}>{title}</Link>
                            </h3>
                            {/* <div className="flex mb-6 space-x-2 text-sm">
                            {tag_list.map((tag) => (
                              <p key={tag} className="text-gray-900 bg-gray-100 select-none px-1.5 py-0.75 rounded">
                                {tag}
                              </p>
                            ))}
                          </div> */}
                            {/* I love coding and building things, and when I build something new, I usually learn something in the
              process. This blog is a way for me to write down and share these ideas and lessons with everyone. */}
                            {/*  I like to write and share the
              things I have learned I regularly write about solving problems with code, desiging things people use,
              teaching, and learning. I love coding and the feeling that comes with building something by yourself. When
              I build something new, I usually learn something in the process. This blog is a way for me to chronicle
              these lessons and ideas. Most of my articles are around solutions to problems that we face when building
              great web products. */}
                          </div>
                          <div className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                            {description}{' '}
                            <Link href={`/blog/${slug}`}>
                              <a className="cursor-pointer ml-2 text-blue-500 hover:text-blue-700 inline-flex items-center">
                                Learn More
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
                            </Link>
                          </div>
                        </div>
                      </article>
                    </li>
                  )
                },
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

const getPosts = async () => {
  //   const params = { per_page: 1000 }
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

export default About
