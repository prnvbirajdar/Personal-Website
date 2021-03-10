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
      {/* <header className=" w-11/12 sm:w-4/6 px-6 sm:px-0 py-24 mx-auto md:w-4/6 lg:w-2/4">
        <div className="flex flex-col space-y-12 divide-y divide-gray-200">
          <div>
            <h1 className="mb-2 text-4xl font-extrabold leading-snug  md:leading-tight tracking-normal sm:text-5xl md:text-6xl">
              Hi, I&apos;m Pranav👋
            </h1>
            <p className="mt-6 text-base md:text-xl font-normal ">
              I am a software developer based in Ottawa, ON focused on building beautiful interfaces and accessible
              applications.
            </p>
            <button
              type="button"
              className="tracking-wider font-bold text-sm ring-inset mt-7 p-3 px-6 rounded text-black bg-yellow-300 hover:bg-yellow-400 transition"
            >
              RESUME
            </button>
          </div>
        </div>
      </header> */}

      <section className="w-11/12 px-4 md:px-0 py-24 mx-auto md:w-3/4 lg:w-2/4">
        <div className="flex flex-col space-y-12 divide-y divide-gray-200 mb-28">
          <div>
            <h1 className="mb-2 text-4xl font-extrabold leading-snug  md:leading-tight tracking-normal sm:text-5xl md:text-6xl">
              Hi, I&apos;m Pranav👋
            </h1>
            <p className="mt-6 sm:w-9/12 md:w-10/12 lg:w-full text-base md:text-xl font-normal ">
              I am a software developer based in Ottawa, ON focused on building beautiful interfaces and accessible
              applications.
            </p>
            <button
              type="button"
              className="tracking-wider font-bold text-sm ring-inset my-7 p-3 px-6 rounded text-black bg-yellow-300 hover:bg-yellow-400 transition"
            >
              RESUME
            </button>
          </div>
        </div>
        <div className="mb-12 text-left">
          <h2 className="mb-2 text-3xl sm:text-4xl font-extrabold leading-tight ">Latest Articles</h2>
          <p className="text-lg ">
            Everything comes directly from the desk of the respective engineers, creators and managers at Skcript.
          </p>
        </div>
        <div className="flex flex-col space-y-12 divide-y divide-gray-200">
          <div>
            <p className="pt-12 mb-3 text-sm font-normal ">April 16, 2020</p>
            <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight  md:text-3xl">
              <a href="#" className=" hover:text-purple-700">
                Process Documents Using Artificial Intelligence For RPA Bots
              </a>
            </h2>
            <p className="mb-4 text-base font-normal ">
              Earlier RPA bots used to have some limitations like it would take structured data for processing from
              excel, database, on these data. But with advancements in technology like OCR (Optical Character
              Recognition) and Machine Learning, RPA bots are capable of extracting these data …
            </p>
            <a href="#" className="btn btn-light btn-sm">
              Continue Reading
            </a>
          </div>
          <div>
            <p className="pt-12 mb-3 text-sm font-normal ">April 16, 2020</p>
            <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight  md:text-3xl">
              <a href="#" className=" hover:text-purple-700">
                Implement Dark Mode in Your Android App
              </a>
            </h2>
            <p className="mb-4 text-base font-normal ">
              Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline to attain
              the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy Dark Mode.
            </p>
            <a href="#" className="btn btn-light btn-sm">
              Continue Reading
            </a>
          </div>
          <div>
            <p className="pt-12 mb-3 text-sm font-normal ">April 16, 2020</p>
            <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight  md:text-3xl">
              <a href="#" className=" hover:text-purple-700">
                Why is Mental Health one of the Important Issues to Address?
              </a>
            </h2>
            <p className="mb-4 text-base font-normal ">
              Mental health was one of the under spoken topics before this lockdown. After sitting at home for about six
              months I realized that this is one of the important issues to address not only in the work sector but also
              in daily living.
            </p>
            <a href="#" className="btn btn-light btn-sm">
              Continue Reading
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
      </section>
      <footer className="flex flex-col sm:flex-row sm:w-11/12 md:w-3/4 lg:w-2/4 m-auto sm:justify-between items-center w-full">
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
        <p className="text-sm mb-6 text-gray-400">Pranav Birajdar &copy; 2021</p>
      </footer>
    </>
  )
}

export default Home
