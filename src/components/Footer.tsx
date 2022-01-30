/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Icons from './Icons/Icons'

const Footer = () => {
  return (
    <footer className="max-w-5xl flex flex-col sm:flex-row  m-auto sm:justify-between items-center w-11/12">
      <Icons />
      <p className="text-sm mb-6 sm:mb-4 text-gray-800 dark:text-gray-400 sm:self-center">
        Pranav Birajdar &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
