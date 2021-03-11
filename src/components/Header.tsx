/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-col space-y-12 divide-y divide-gray-200 mb-32">
      <div>
        <h1 className="mb-2 text-4xl font-extrabold leading-snug tracking-normal sm:text-4xl md:text-5xl">
          Hi, I&apos;m Pranav👋
        </h1>
        <p className="mt-6 sm:w-9/12 md:w-10/12 lg:w-full text-base md:text-lg font-normal ">
          I am a software developer building beautiful interfaces and accessible applications.
        </p>
        <button
          type="button"
          className="font-semibold tracking-wider text-sm my-7 p-2.5 px-5 rounded ring-2 ring-gray-400 ring-opacity-50 bg-gray-900 bg-opacity-50 hover:bg-opacity-100 shadow transition"
        >
          Resume
        </button>
      </div>
    </header>
  )
}

export default Header
