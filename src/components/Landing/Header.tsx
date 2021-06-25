/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { motion } from 'framer-motion'

const Main = () => {
  return (
    <main className="flex flex-col space-y-12  divide-y divide-gray-200 mb-32 2xl:pt-28 ">
      <div>
        <p className="mt-3 sm:w-9/12 mb-2  text-indigo-800 dark:text-indigo-400 md:w-10/12 lg:w-full text-base md:text-lg font-bold ">
          HEY THERE,
        </p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: 30,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
            },
          }}
          transition={{
            delay: 0.4,
            duration: 0.5,
            damping: 5,
            mass: 1,
          }}
        >
          <h1 className="text-4xl md:mb-5 2xl:text-7xl  md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight dark:text-gray-100  sm:leading-10   md:leading-14">
            I&apos;m Pranav 👋
          </h1>
        </motion.div>
        <p className="mt-3 mb-6 md:mb-8 sm:w-9/12  text-gray-900 dark:text-gray-300 md:w-10/12 lg:w-full max-w-2xl text-base md:text-lg font-medium ">
          I&apos;m a software developer building beautiful interfaces and accessible applications. Welcome to my
          personal slice of the internet. I&apos;m glad you&apos;re here!
        </p>

        {/* <button
          type="button"
          className="text-sm font-bold lg:text-base tracking-normal my-5 md:my-7 p-2.5 px-4 md:px-5 rounded ring-2 ring-gray-400 ring-opacity-50 bg-gray-900 bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-100 shadow "
        >
          Resume
        </button> */}

        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:prnvbirajdar@gmail.com"
          className=" bg-indigo-800 bg-opacity-90 hover:bg-indigo-900 focus:bg-indigo-900 text-indigo-100 mt-6 text-sm font-bold lg:text-base tracking-normal my-5 md:my-7 p-3 px-4 md:px-5 rounded ring-2 ring-gray-400 ring-opacity-50 shadow "
        >
          Say Hello!
        </a>
      </div>
    </main>
  )
}

export default Main
