/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <>
      <div className="text-black px-5">
        <p className="px-5 rounded py-1 bg-gray-300 block sm:hidden">Mobile</p>
        <p className="px-5 rounded py-1 bg-red-300 hidden sm:block md:hidden">Sm</p>
        <p className="px-5 rounded py-1 bg-green-300 hidden sm:hidden md:block lg:hidden">Md</p>
        <p className="px-5 rounded py-1 bg-blue-300 hidden sm:hidden md:hidden lg:block xl:hidden">Lg</p>
        <p className="px-5 rounded py-1 bg-yellow-300 hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</p>
        <p className="px-5 rounded py-1 bg-purple-300 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</p>
      </div>
      <section className="w-11/12 px-4 md:px-0 mt-16 md:mt-24 lg:mt-28 mx-auto md:w-3/4 lg:w-10/12 text-gray-300">
        <div>
          <div className=" space-y-2 md:space-y-5">
            <h1 className="mb-3 lg:mb-5 text-4xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Projects
            </h1>
            <p className=" sm:w-9/12 md:w-10/12 lg:w-9/12 text-base md:text-lg font-normal ">
              {/* With each new project, my goal it to either learn something new, or increase the size and the scope of the
              technologies I have previosly used. */}
              {/* These are some of my personal projects. This is a way for me to chronicle my growth as a developer. */}
              My personal projects are a way for me to chronicle my growth as a developer.
            </p>
          </div>
          <div className="items-start space-y-2 lg:grid lg:grid-cols-3 lg:space-y-0">
            <div className=" mt-8 space-y-2 md:space-y-5">
              <h1 className=" lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Lift Workout App
              </h1>
              <div className=" sm:w-9/12 md:w-10/12 lg:w-9/12 text-sm md:text-lg font-normal ">
                <p>
                  A simple, accessible workout app that allows a user to create, track, and update their daily workout
                  routines.
                </p>
                <ul className="flex md:justify-end text-xs mt-3">
                  <li className="md:ml-3 mr-3">Next js</li>
                  <li className="md:ml-3 mr-3">Firebase</li>
                  <li className="md:ml-3 mr-3">Tailwind</li>
                </ul>
                {/*   <p>Features:</p>
                <ul>
                  <li>Sign in with Google or Facebook to create a profile and starting tracking your workouts.</li>
                  <li>Allows users to select exercises based on the body part they wish to workout on.</li>
                  <li>Add sets, repititions and weight used for every exercises.</li>
                  <li>Add, update, and track your physical stats like weight and height.</li>
                  <li>Users can also go back and view, add, update or delete past workouts.</li>
                </ul> */}
              </div>
            </div>

            <div className=" space-y-2 md:space-y-5">
              <h1 className=" lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                COVID-19 Tracker
              </h1>
              <div className="sm:w-9/12 md:w-10/12 lg:w-9/12 text-sm md:text-lg font-normal ">
                <p>
                  This dashboard provides up-to-date information about the COVID-19 outbreak and the vaccination efforts
                  in Canada.
                </p>
                {/* <p>Tools used: React Semantic UI Leaflet Chart JS Webpack Axios</p> */}
                <ul className="flex md:justify-end text-xs mt-3">
                  <li className="md:ml-3 mr-3">React</li>
                  <li className="md:ml-3 mr-3">Chart js</li>
                  <li className="md:ml-3 mr-3">COVID-19 API</li>
                </ul>

                {/* <p>Features:</p>
                <ul>
                  <li>
                    Vaccination tracker helps track the number of vaccine administered in every health region for every
                    province and territories.
                  </li>
                  <li>Daily updated stats on the deaths, recoveries and cases for Canada and every province.</li>
                  <li>
                    The interactive bubble map gives a comparative data about the level of spread in different
                    provinces.
                  </li>
                  <li>Regional bar graph compares the COVID-19 outbreak for the five regions.</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
