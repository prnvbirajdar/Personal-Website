/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <section>
      <div className="text-left mt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Recent Projects</h2>
      </div>
      <div className="mb-5 flex flex-col border border-gray-600 hover:border-gray-400 transition rounded-lg md:mt-5">
        <div className=" p-4 ">
          <a href="https://lift-next.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex">
            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-normal text-gray-100 ">Lift Workout App</h3>
              <p className="text-sm md:text-base font-normal text-gray-300">
                A simple, accessible workout app that allows a user to create, track, and update their daily workout
                routines.
              </p>
              <ul className="flex md:justify-end text-xs mt-3 font-semibold">
                <li className="md:ml-1 mr-3">
                  <i>Next.js</i>
                </li>
                <li className="md:ml-1 mr-3">
                  <i>Firebase</i>
                </li>
                <li className="md:ml-1 mr-3 md:mr-0">
                  <i>Tailwind CSS</i>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <div className="flex flex-col border border-gray-600 hover:border-gray-400 transition rounded-lg md:mt-5">
        <div className=" p-4">
          <a href="https://covid19ca.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex">
            <div>
              <h3 className="mb-2 text-xl font-semibold tracking-normal text-gray-100">
                COVID-19 Dashboard for Canada
              </h3>
              <p className="text-sm md:text-base font-normal text-gray-300">
                A dashboard providing up-to-date information on the COVID-19 outbreak and the vaccination efforts in
                Canada.
                {/* Users can also add, update or delete any previous logged workouts. */}
              </p>
              <ul className="flex md:justify-end text-xs mt-3 font-semibold">
                <li className="md:ml-1 mr-3">
                  <i>React</i>
                </li>
                <li className="md:ml-1 mr-3">
                  <i>Chart.js</i>
                </li>
                <li className="md:ml-1 mr-3 md:mr-0">
                  <i>COVID-19 API</i>
                </li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <Link href="/projects">
        <div className=" flex justify-center p-3 text-gray-300">
          <div className="text-center text-sm   md:text-base cursor-pointer">More Projects</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="self-center ml-1 h-4 w-4 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>
    </section>
  )
}

export default RecentProjects
