/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Main = () => {
  return (
    <main className="flex flex-col space-y-12 divide-y divide-gray-200 mb-32 ">
      <div>
        <h1 className="text-4xl  md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight dark:text-gray-100  sm:leading-10   md:leading-14">
          Hi, I&apos;m Pranav👋
        </h1>
        <p className="mt-3  mb-6 md:mb-7 sm:w-9/12  text-gray-900 dark:text-gray-300 md:w-10/12 lg:w-full text-base md:text-lg font-medium ">
          I am a software developer building beautiful interfaces and accessible applications.
        </p>

        {/* <button
          type="button"
          className="text-sm font-bold lg:text-base tracking-normal my-5 md:my-7 p-2.5 px-4 md:px-5 rounded ring-2 ring-gray-400 ring-opacity-50 bg-gray-900 bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-100 shadow "
        >
          Resume
        </button> */}

        <a
          href="mailto:prnvbirajdar@gmail.com"
          className=" bg-indigo-800 bg-opacity-90 hover:bg-indigo-900 focus:bg-indigo-900 text-indigo-100 mt-6 text-sm font-bold lg:text-base tracking-normal my-5 md:my-7 p-2.5 px-4 md:px-5 rounded ring-2 ring-gray-400 ring-opacity-50 shadow "
        >
          Say Hello!
        </a>
      </div>
    </main>
  )
}

export default Main
