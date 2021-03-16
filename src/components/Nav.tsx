/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

const Nav2 = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-black z-20 text-gray-100">
      <nav className="border-b border-gray-800">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className=" hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <Link href="/">
                    <a className=" hover:bg-gray-900 focus:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a className=" hover:bg-gray-900 focus:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      Blog
                    </a>
                  </Link>
                  <Link href="/projects">
                    <a className=" hover:bg-gray-900 focus:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      Projects
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className=" hover:bg-gray-900 focus:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* <!-- Mobile menu button --> */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in-out duration-200 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          {(ref) => (
            <div className="border-b border-gray-600 md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                <div onClick={() => setIsOpen(!isOpen)} aria-hidden="true">
                  <Link href="/">
                    <a className="hover:bg-gray-900 focus:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                      Home
                    </a>
                  </Link>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} aria-hidden="true">
                  <Link href="/blog">
                    <a className="hover:bg-gray-900 focus:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                      Blog
                    </a>
                  </Link>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} aria-hidden="true">
                  <Link href="/projects">
                    <a className="hover:bg-gray-900 focus:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                      Projects
                    </a>
                  </Link>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} aria-hidden="true">
                  <Link href="/about">
                    <a className="hover:bg-gray-900 focus:bg-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                      About
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  )
}

export default Nav2
