/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import { ClickArrow } from '../Icons/Icons'

const RecentProjects = () => {
  return (
    <section>
      <div className="text-left mt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-5   dark:text-white text-black">Recent Projects</h2>
      </div>
      <div className="hover:shadow-lg focus:shadow-lg  mb-5 flex flex-col border border-gray-400 hover:border-gray-600  dark:border-gray-600 dark:hover:border-gray-400  rounded-lg md:mt-5">
        <a
          href="https://lift-next.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="focus:bg-gray-100 dark:focus:bg-gray-900 p-4 flex"
        >
          <div>
            <h3 className="mb-2 text-xl font-semibold tracking-normal  dark:text-gray-100 ">Lift Workout App</h3>
            <p className="text-sm md:text-base font-normal text-gray-900   dark:text-gray-300">
              Lift is a resistance training app that allows users to create, track, and update their daily workout
              routines.
            </p>
            <ul className="flex md:justify-end text-xs md:text-sm mt-3  font-semibold">
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
      <div className="hover:shadow-lg focus:shadow-lg  flex flex-col border border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400  rounded-lg md:mt-5">
        <a
          href="https://covid19ca.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="focus:bg-gray-100 dark:focus:bg-gray-900 p-4 flex"
        >
          <div>
            <h3 className="mb-2 text-xl font-semibold tracking-normal  dark:text-gray-100">
              COVID-19 Dashboard for Canada
            </h3>
            <p className="text-sm md:text-base font-normal text-gray-900  dark:text-gray-300">
              A dashboard providing up-to-date information on the COVID-19 outbreak and the vaccination efforts in
              Canada.
            </p>
            <ul className="flex md:justify-end text-xs md:text-sm mt-3  font-semibold">
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
      <Link href="/projects">
        <a className=" flex justify-center p-3 focus:text-gray-800  dark:text-gray-300 dark:focus:text-white">
          <div className="text-center text-sm   md:text-base cursor-pointer">More Projects</div>
          <ClickArrow />
        </a>
      </Link>
    </section>
  )
}

export default RecentProjects
