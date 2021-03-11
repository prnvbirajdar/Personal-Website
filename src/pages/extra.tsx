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
            <h1 className=" lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              COVID-19 Tracker
            </h1>
            <div className=" sm:w-9/12 md:w-10/12 lg:w-9/12 text-base md:text-lg font-normal ">
              <p>
                This dashboard provides up-to-date information about the COVID-19 outbreak and the vaccination efforts
                in Canada.
              </p>
              <p>Tools used: React Semantic UI Leaflet Chart JS Webpack Axios</p>

              <p>Features:</p>
              <ul>
                <li>
                  Vaccination tracker helps track the number of vaccine administered in every health region for every
                  province and territories.
                </li>
                <li>Daily updated stats on the deaths, recoveries and cases for Canada and every province.</li>
                <li>
                  The interactive bubble map gives a comparative data about the level of spread in different provinces.
                </li>
                <li>Regional bar graph compares the COVID-19 outbreak for the five regions.</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 space-y-2 md:space-y-5">
            <h1 className=" lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Reels Movie Database
            </h1>
            <div className=" sm:w-9/12 md:w-10/12 lg:w-9/12 text-base md:text-lg font-normal ">
              <p>
                A simplified Netflix clone with a personal twist. It helps you find your favortie movies and watch
                trailers.
              </p>
              <p>Tools Used: React React-Router Webpack Axios</p>
              <p>Features:</p>
              <ul>
                <li>Search through 30,000 movies from the TMDb API.</li>
                <li>Browse through the weekly updated trending and upcoming movies.</li>
                <li>
                  Every movie includes details such the release year, genre, movie runtime, a short summary, and a list
                  of cast and crew involved.
                </li>
                <li>
                  The individual movie page also allows user to watch a Youtube trailer in a modal and browse through a
                  list of similar movies.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 space-y-2 md:space-y-5">
            <h1 className=" lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Google Keep Clone
            </h1>
            <div className=" sm:w-9/12 md:w-10/12 lg:w-9/12 text-base md:text-lg font-normal ">
              <p>
                A minimalistic Google Keep clone. My goal with this project was to learn Next JS, Tailwind CSS, and
                Firebase and this glorified todo list helped me achieve exactly that.
              </p>
              <p>Tools Used: Next JS, Tailwind CSS, Firebase</p>
              <p>Features:</p>
              <ul>
                <li>Static website importing dynamic assests from Firebase.</li>
                <li>Users can create, update, and delete notes. All changes are immediately pushed to the database.</li>
                <li>Enable/disable dark mode. Saves your preference for next time.</li>
                <li>Adapts to all screen sizes, from mobile screens upto 4k displays.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
