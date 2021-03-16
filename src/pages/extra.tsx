/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

const About: NextPage = ({ devData }) => {
  const [searchValue, setSearchValue] = useState('')

  console.log(devData)

  const filteredBlogPosts = devData?.filter((data) => {
    const searchContent = data.title + data.description + data.tag_list.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <>
      <section className="w-11/12 px-4 md:px-0 mt-16 md:mt-24 lg:mt-28 mx-auto md:w-3/4 lg:w-10/12 text-gray-300">
        <div className=" space-y-2 md:space-y-5">
          <h1 className="mb-3 lg:mb-5 text-4xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Blog
          </h1>
          <p className="sm:w-9/12 md:w-10/12 lg:w-9/12 text-base md:text-lg font-normal ">
            I love building new things. This blog is a way for me to write down and share new ideas and lessons with
            everyone.
          </p>
        </div>
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <div className="relative max-w-xl">
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
        <div className=" w-full xl:w-4/6">
          <div className="flex flex-col space-y-8">
            <div className="grid grid-cols-1 lg:gap-20 md:grid-cols-4">
              <img
                src="/brand/og.png"
                className="object-cover w-full h-40 col-span-1 bg-center"
                alt="Kutty"
                loading="lazy"
              />
              <div className="col-span-1 md:col-span-3">
                <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
                <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                  <a href="#" className="text-gray-900 hover:text-purple-700">
                    Process Documents Using Artificial Intelligence For RPA Bots
                  </a>
                </h2>
                <p className="mb-3 text-sm font-normal text-gray-500">
                  Earlier RPA bots used to have some limitations like it would take structured data for processing from
                  excel, database, on these data. But with advancements in technology like OCR (Optical Character
                  Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                </p>
                <a href="#" className="btn btn-light btn-sm">
                  Read More
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <img
                src="/brand/og-white.png"
                className="object-cover w-full h-40 col-span-1 bg-center"
                alt="Kutty"
                loading="lazy"
              />
              <div className="col-span-1 md:col-span-3">
                <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">April 16, 2020</p>
                <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                  <a href="#" className="text-gray-900 hover:text-purple-700">
                    Implement Dark Mode in Your Android App
                  </a>
                </h2>
                <p className="mb-3 text-sm font-normal text-gray-500">
                  Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to
                  attain the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy Dark
                  Mode.
                </p>
                <a href="#" className="btn btn-light btn-sm">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="pt-10 mt-10 border-t border-gray-200">
            <a href="#" className="w-full btn btn-light btn-lg md:w-auto">
              Load More
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

const getPosts = async () => {
  const params = { per_page: 1000 }
  const headers = { 'api-key': process.env.NEXT_API_KEY }
  const res = await fetch(`https://dev.to/api/articles/me/published`, { params, headers })
  const posts = await res.json()

  return posts
}

export const getStaticProps = async () => {
  const devData = await getPosts()

  if (!devData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { devData }, // will be passed to the page component as props
  }
}

export default About
