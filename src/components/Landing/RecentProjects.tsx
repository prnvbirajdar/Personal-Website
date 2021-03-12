/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const RecentProjects = () => {
  return (
    <section>
      <div className="text-left mt-16">
        <h2 className="text-3xl sm:text-4xl font-bold ">Recent Projects</h2>
      </div>
      <div className="flex flex-col space-y-6 divide-y divide-gray-500 border border-gray-600 hover:border-gray-400 transition rounded mt-8">
        <div className=" p-4 rounded">
          <a href="#" className="flex">
            <div>IMAGE</div>
            <div className="ml-4">
              <h3 className="mb-2 text-xl font-semibold tracking-normal ">Lift Workout App</h3>
              <p className="text-base font-normal  text-gray-700 dark:text-gray-300">
                A simple, accessible workout app that allows a user to create, track, and update their daily workout
                routines.
                {/* Users can also add, update or delete any previous logged workouts. */}
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
      <div className="flex flex-col space-y-6 divide-y divide-gray-500 border border-gray-600 hover:border-gray-400 transition rounded mt-8">
        <div className=" p-4 rounded">
          <a href="#" className="flex">
            <div>IMAGE</div>
            <div className="ml-4">
              <h3 className="mb-2 text-xl font-semibold tracking-normal">COVID-19 Dashboard for Canada</h3>
              <p className="text-base font-normal text-gray-700 dark:text-gray-300">
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
    </section>
  )
}

export default RecentProjects
