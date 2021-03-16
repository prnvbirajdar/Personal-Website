/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

const LatestArticles = ({ devData }) => {
  return (
    <section>
      <div className="text-left ">
        <h2 className="text-3xl md:text-4xl  font-bold ">Latest Articles</h2>
        {/* <p className="text-lg ">
            I write about solving problems with code, desiging things people use, teaching, and learning.
          </p> */}
      </div>
      <div className="flex flex-col">
        {devData &&
          devData.slice(0, 2).map(({ description, title, slug }) => (
            <div key={slug} className=" mt-5">
              <Link href={`/blog/${slug}`}>
                <div className="cursor-pointer">
                  <h3 className="mb-3 hover:text-gray-700 dark:hover:text-gray-300 text-xl  font-semibold tracking-normal md:text-2xl">
                    {title}
                  </h3>
                  <p className="text-base font-normal text-gray-700 dark:text-gray-300">{description}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </section>
  )
}

export default LatestArticles
