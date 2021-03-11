/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { NextPage } from 'next'
import Footer from '@src/components/Footer'
import CallToAction from '@src/components/CallToAction'
import RecentProjects from '@src/components/RecentProjects'
import LatestArticles from '@src/components/LatestArticles'
import Header from '@src/components/Header'

const Home: NextPage = () => {
  return (
    <>
      <div className="text-black px-5">
        <p className="px-5 rounded py-1 bg-gray-300 block sm:hidden">Mobile</p>
        <p className="px-5 rounded py-1 bg-red-300 hidden sm:block md:hidden">Sm</p>
        <p className="px-5 rounded py-1 bg-green-300 hidden sm:hidden md:block lg:hidden">Md</p>
        <p className="px-5 rounded py-1 bg-blue-300 hidden sm:hidden md:hidden lg:block xl:hidden">Lg</p>
        <p className="px-5 rounded py-1 bg-yellow-300 hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</p>
        <p className="px-5 rounded py-1 bg-purple-300 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</p>
      </div>
      <section className="w-11/12 px-4 md:px-0 mt-36 mx-auto md:w-3/4 lg:w-2/4">
        <Header />

        {/* <div className="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
          <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">
            Previous Page
          </a>
          <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">
            Next Page
          </a>
        </div> */}
        <LatestArticles />
        <RecentProjects />
      </section>

      <section className="w-full mt-8 bg-gradient-to-b from-black to-gray-900">
        <CallToAction />
        <Footer />
      </section>
    </>
  )
}

export default Home
