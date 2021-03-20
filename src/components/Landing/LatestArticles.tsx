/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { parseISO, format } from 'date-fns'

import { Props } from '../../containers/Interfaces/Interface'

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
              <div className="p-4 cursor-pointer border border-gray-600 hover:border-gray-400 transition rounded-lg mt-5">
                <div className="flex justify-between">
                  <h3 className=" mb-1 text-xl  font-semibold tracking-normal">{title}</h3>
                </div>
                <div className="flex justify-between mb-1">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-gray-400 prose text-sm  leading-6 ">
                      <time>{format(parseISO(published_at), 'MMMM dd, yyyy')} </time>
                    </dd>
                  </dl>
                  <span className="text-gray-400 text-sm flex">
                    {positive_reactions_count}&nbsp;
                    <span role="img" aria-label="Heart">
                      💖
                    </span>
                  </span>
                </div>

                <div className="text-sm md:text-base font-normal text-gray-300">
                  {description}
                  <Link href={`/blog/${slug}`}>
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
                  </Link>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <Link href="/blog">
        <div className=" flex justify-center p-3 text-gray-300">
          <div className="text-center text-sm   md:text-base cursor-pointer">More Articles</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="self-center ml-1 h-4 w-4 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>
    </section>
  )
}

export default LatestArticles
