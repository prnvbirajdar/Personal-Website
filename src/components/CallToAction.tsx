/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const CallToAction = () => {
  return (
    <section className="max-w-6xl w-11/12 px-4 py-20 mx-auto text-center md:w-3/4 lg:w-2/4  ">
      <h2 className="mb-2 text-3xl md:text-4xl font-extrabold tracking-tight  md:mb-6 md:leading-tight">
        Get In Touch!
      </h2>
      <p className="mb-7 text-gray-900 dark:text-gray-300  text-center ">
        Whether you have an idea for a project or just want to say hi, <br /> feel free to shoot me an email!
      </p>
      <div className="z-50 mb-0 space-x-0 md:space-x-2">
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:prnvbirajdar@gmail.com"
          className="bg-indigo-800 bg-opacity-90 hover:bg-indigo-900 focus:bg-indigo-900 text-indigo-100  mt-6 text-sm font-bold lg:text-base tracking-normal my-5 md:my-7 p-3 px-4 md:px-5 rounded ring-2 ring-gray-400 ring-opacity-50 shadow "
        >
          Say Hello!
        </a>
      </div>
    </section>
  )
}

export default CallToAction
