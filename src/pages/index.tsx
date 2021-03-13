/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { NextPage } from 'next'
import RecentProjects from '@src/components/Landing/RecentProjects'
import LatestArticles from '@src/components/Landing/LatestArticles'
import Header from '@src/components/Landing/Header'
import { Moon, Sun } from '@src/components/Icons/Icons'
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <section className="w-11/12 px-4 md:px-0 mt-36 mx-auto md:w-3/4 lg:w-2/4 ">
        <button
          aria-label="dark mode"
          // onClick={toggleMode}
          className="bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500 transition dark:bg-gray-800 dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5"
        >
          {/* {theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />} */}button
        </button>
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
        <div className="text-black px-5">
          <p className="px-5 rounded py-1 bg-gray-300 block sm:hidden">Mobile</p>
          <p className="px-5 rounded py-1 bg-red-300 hidden sm:block md:hidden">Sm</p>
          <p className="px-5 rounded py-1 bg-green-300 hidden sm:hidden md:block lg:hidden">Md</p>
          <p className="px-5 rounded py-1 bg-blue-300 hidden sm:hidden md:hidden lg:block xl:hidden">Lg</p>
          <p className="px-5 rounded py-1 bg-yellow-300 hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</p>
          <p className="px-5 rounded py-1 bg-purple-300 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
            2xl
          </p>
        </div>
        <RecentProjects />
      </section>

      <section className="w-full mt-8 bg-gradient-to-b from-black to-gray-900">
        {/* <CallToAction />
        <Footer /> */}
      </section>
    </>
  )
}

export default Home
