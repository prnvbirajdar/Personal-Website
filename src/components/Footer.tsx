/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Icons from './Icons/Icons'

const Footer = () => {
  return (
    <footer className=" flex flex-col sm:flex-row sm:w-11/12 md:w-3/4 lg:w-2/4 m-auto sm:justify-between items-center w-full">
      <Icons />
      <p className="text-sm mb-6 sm:mb-4 transition duration-500 text-gray-800 dark:text-gray-400 sm:self-center">
        Pranav Birajdar &copy; 2021
      </p>
    </footer>
  )
}

export default Footer
