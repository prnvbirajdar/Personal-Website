/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

import { Props } from '../../containers/Interfaces/Interface'
import { ClickArrow } from '../Icons/Icons'

const LatestArticles: React.FC<Props> = (props) => {
  const { devData } = props

  function compare(a: { public_reactions_count: number }, b: { public_reactions_count: number }) {
    const countA = a.public_reactions_count
    const countB = b.public_reactions_count

    let comparison = 0
    if (countA < countB) {
      comparison = 1
    } else if (countA > countB) {
      comparison = -1
    }
    return comparison
  }

  const mostLikedData = devData.sort(compare).slice(0, 2)

  return (
    <section>
      <div className="text-left ">
        <h2 className="text-3xl md:text-4xl font-bold ">Popular Articles</h2>
      </div>
      <div className="flex flex-col">
        {devData &&
          mostLikedData.map(({ description, title, slug, positive_reactions_count, published_at }) => (
            <Link key={slug} href={`/blog/${slug}`}>
              <a className="p-4 cursor-pointer border border-gray-400 duration-500 hover:border-gray-600 focus:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-400 dark:focus:bg-gray-900 transition rounded-lg mt-5">
                <div className="flex justify-between">
                  <h3 className=" mb-1 text-xl  font-semibold tracking-normal">{title}</h3>
                </div>
                <div className="flex justify-between mb-1">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-gray-700  transition duration-500 dark:text-gray-400  text-sm  leading-6 ">
                      <time>{format(parseISO(published_at), 'MMMM dd, yyyy')} </time>
                    </dd>
                  </dl>
                  <span className="text-gray-700  transition duration-500 dark:text-gray-400 text-sm flex">
                    {positive_reactions_count}&nbsp;
                    <span role="img" aria-label="Heart">
                      💖
                    </span>
                  </span>
                </div>

                <div className="text-sm md:text-base font-normal text-gray-900  transition duration-500 dark:text-gray-300">
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
              </a>
            </Link>
          ))}
      </div>
      <Link href="/blog">
        <a className=" flex justify-center p-3 focus:text-gray-800  transition duration-500 dark:text-gray-300 dark:focus:text-white ">
          <div className="text-center text-sm   md:text-base cursor-pointer ">More Articles</div>
          <ClickArrow />
        </a>
      </Link>
    </section>
  )
}

export default LatestArticles
