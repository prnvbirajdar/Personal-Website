/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const CallToAction = () => {
  return (
    <div className="w-11/12 px-4 py-20 mx-auto text-center md:w-3/4 lg:w-2/4 text-gray-900 ">
      <h2 className="mb-2 text-3xl font-extrabold tracking-tight md:text-4xl md:mb-6 md:leading-tight">
        Get In Touch!
      </h2>
      <p className="mb-6 w-3/4 lg:w-4/6 m-auto text-center font-semibold ">
        Whether you have an idea for a project or just want to say hi, feel free to shoot me an email!
      </p>

      <div className="mb-0 space-x-0 md:space-x-2">
        <a
          className="inline-flex font-semibold tracking-wider text-sm items-center justify-center mb-2 p-2.5 px-5 rounded ring-2 ring-gray-400 ring-opacity-50 dark:bg-gray-900 bg-opacity-0 hover:bg-opacity-100 hover:text-white shadow transition sm:w-auto sm:mb-0"
          href="#"
        >
          Say Hello!
          {/* <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </svg> */}
        </a>
      </div>
    </div>
  )
}

export default CallToAction
