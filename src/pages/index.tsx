/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { NextPage } from 'next'

const Home: NextPage = () => {
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
      <section className="w-11/12 px-4 md:px-0 mt-36 mx-auto md:w-3/4 lg:w-2/4">
        <header className="flex flex-col space-y-12 divide-y divide-gray-200 mb-32">
          <div>
            <h1 className="mb-2 text-4xl font-extrabold leading-snug tracking-normal sm:text-4xl md:text-5xl">
              Hi, I&apos;m Pranav👋
            </h1>
            <p className="mt-6 sm:w-9/12 md:w-10/12 lg:w-full text-base md:text-lg font-normal ">
              I am a software developer building beautiful interfaces and accessible applications.
            </p>
            <button
              type="button"
              className="font-semibold tracking-wider text-sm my-7 p-2.5 px-5 rounded ring-2 ring-gray-400 ring-opacity-50 bg-gray-900 hover:bg-opacity-25 shadow transition"
            >
              Resume
            </button>
          </div>
        </header>
        <div className="text-left ">
          <h2 className="text-3xl sm:text-4xl font-bold ">Latest Articles</h2>
          {/* <p className="text-lg ">
            I write about solving problems with code, desiging things people use, teaching, and learning.
          </p> */}
        </div>
        <div className="flex flex-col space-y-6 divide-y divide-gray-500">
          <div>
            <a href="#">
              <h3 className="mb-3 hover:text-gray-300 transition text-xl mt-8 font-bold tracking-normal md:text-2xl">
                Process Documents Using Artificial Intelligence For RPA Bots
              </h3>
              <p className="text-base font-normal text-gray-300">
                processing from excel, database, on these data. But with advancements in technology like OCR (Optical
                Character Recognition) and Machine Learnof extracting these data
              </p>
            </a>
          </div>
          <div>
            <a href="#">
              <h3 className="mb-3 text-xl hover:text-gray-300 transition mt-8 font-bold tracking-normal md:text-2xl">
                Implement Dark Mode in Your Android App
              </h3>
              <p className="text-base font-normal text-gray-300">
                guideline to attain the Dark Mode in Android Appliime; just implement and enjoy Dark Mode. e; just
                implement and enjoy Dark Mode. guideline to attain th
              </p>
            </a>
          </div>
          <div>
            <a href="#">
              <h3 className="mb-3 text-xl hover:text-gray-300 transition mt-8 font-bold tracking-normal md:text-2xl">
                Why is Mental Health one of the Important Issues to Address?
              </h3>
              <p className="text-base font-normal text-gray-300">
                t home for about six months I realized that this is one of the important issues to address not only in
                the work sector but also in daily living.
              </p>
            </a>
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center pt-12 mt-12 space-x-0 space-y-2 border-t border-gray-200 md:space-x-2 md:space-y-0 md:flex-row">
          <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">
            Previous Page
          </a>
          <a href="#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">
            Next Page
          </a>
        </div> */}
        <div className="text-left mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold ">Recent Projects</h2>
        </div>
        <div className="flex flex-col space-y-6 divide-y divide-gray-500 ring-1 ring-gray-700 rounded mt-8">
          <div className="bg-gray-900 bg-opacity-25 hover:bg-black p-4">
            <a href="#" className="flex">
              <div>IMAGE</div>
              <div className="ml-4">
                <h3 className="mb-2 text-xl font-bold tracking-normal">Lift Workout App</h3>
                <p className="text-base font-normal text-gray-300">
                  A simple, accessible workout app that allows a user to create, track, and update their daily workout
                  routines.
                  {/* Users can also add, update or delete any previous logged workouts. */}
                </p>
                <ul className="flex justify-end text-xs mt-3">
                  <li className="ml-3">Next js</li>
                  <li className="ml-3">Firebase</li>
                  <li className="ml-3">Tailwind</li>
                </ul>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-6 divide-y divide-gray-500 ring-1 ring-gray-700 rounded mt-4">
          <div className="bg-gray-900 bg-opacity-25 hover:bg-black p-4">
            <a href="#" className="flex">
              <div>IMAGE</div>
              <div className="ml-4">
                <h3 className="mb-2 text-xl font-bold tracking-normal">COVID-19 Dashboard for Canada</h3>
                <p className="text-base font-normal text-gray-300">
                  A dashboard providing up-to-date information on the COVID-19 outbreak and the vaccination efforts in
                  Canada.
                  {/* Users can also add, update or delete any previous logged workouts. */}
                </p>
                <ul className="flex justify-end text-xs mt-3">
                  <li className="ml-3">React</li>
                  <li className="ml-3">Chart js</li>
                  <li className="ml-3">COVID-19 API</li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="w-full mt-8 bg-gradient-to-b from-black to-gray-900">
        <div className="w-11/12 px-4 py-20 mx-auto text-center md:w-3/4 lg:w-2/4">
          <h2 className="mb-2 text-3xl font-extrabold tracking-tight md:text-4xl md:mb-6 md:leading-tight">
            Get In Touch!
          </h2>
          <p className="mb-6 text-base font-semibold text-gray-300">
            Whether you have an idea for a project or just want to say hi, feel free to shoot me an email!
          </p>

          <div className="mb-0 space-x-0 md:space-x-2">
            <a
              className="inline-flex items-center justify-center w-full mb-2 btn btn-light btn-lg sm:w-auto sm:mb-0"
              href="#"
            >
              Book a Demo
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        <footer className=" flex flex-col sm:flex-row sm:w-11/12 md:w-3/4 lg:w-2/4 m-auto sm:justify-between items-center w-full">
          <div className="flex mb-4 space-x-2">
            <a href="#" className="p-1.5 rounded text-gray-400 hover:text-gray-100 hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="flex-none w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
              </svg>
            </a>
            <a href="#" className="p-1.5 rounded text-gray-400 hover:text-gray-100 hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="flex-none w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a href="#" className="p-1.5 rounded text-gray-400 hover:text-gray-100 hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="flex-none w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a href="#" className="p-1.5 rounded text-gray-400 hover:text-gray-100 hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="flex-none w-5 h-5"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </div>
          <p className="text-sm mb-6 sm:mb-4 text-gray-400 sm:self-end">Pranav Birajdar &copy; 2021</p>
        </footer>
      </section>
    </>
  )
}

export default Home
