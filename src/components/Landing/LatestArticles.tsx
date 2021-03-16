/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

const LatestArticles = ({ devData }) => {
  return (
    <section>
      <div className="text-left ">
        <h2 className="text-3xl md:text-4xl font-bold ">Latest Articles</h2>
      </div>
      <div className="flex flex-col">
        {devData &&
          devData.slice(0, 2).map(({ description, title, slug }) => (
            <div key={slug} className=" mt-5">
              <Link href={`/blog/${slug}`}>
                <h3 className="cursor-pointer mb-2 md:mb-3 hover:text-gray-700 dark:hover:text-gray-300 dark:focus:text-gray-300  text-xl  font-semibold tracking-normal md:text-2xl">
                  {title}
                </h3>
              </Link>

              <div className="text-sm md:text-base font-normal text-gray-700 dark:text-gray-300">
                {description}
                <Link href={`/blog/${slug}`}>
                  <a className="cursor-pointer ml-2 text-blue-500 hover:text-blue-700 focus:text-blue-700 inline-flex items-center">
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
          ))}
      </div>
    </section>
  )
}

export default LatestArticles
