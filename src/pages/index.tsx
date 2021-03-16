/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import RecentProjects from '@src/components/Landing/RecentProjects'
import LatestArticles from '@src/components/Landing/LatestArticles'
import Header from '@src/components/Landing/Header'
//import { Moon, Sun } from '@src/components/Icons/Icons'
//import { useTheme } from 'next-themes'

const Home: NextPage = ({ devData }) => {
  console.log(devData)

  // const { theme, setTheme } = useTheme()

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
        <LatestArticles devData={devData} />
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

const getPosts = async () => {
  //const res = await fetch('https://dev.to/api/articles?username=prnvbirajdar')
  const params = { per_page: 1000 }
  const headers = { 'api-key': process.env.NEXT_API_KEY }
  const res = await fetch(`https://dev.to/api/articles/me/published`, { params, headers })
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
