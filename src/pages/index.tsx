/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      {/* <header className="w-9/12 m-auto">
        <div className="flex flex-col items-center ">
          <div className="w-7/12">
            <h1 className=" text-6xl font-bold mt-32 leading-tight">Hello, I&apos;m Pranav👋</h1>
            <p className="text-xl mt-5 ">
              I am a software developer based in Ottawa, ON focused on building beautiful interfaces and accessible
              applications.
            </p>
            <button
              type="button"
              className="tracking-wider font-medium text-sm ring-inset mt-7 p-3 px-6 rounded bg-gray-700 hover:bg-gray-800 transition"
            >
              RESUME
            </button>
          </div>
        </div>
      </header> */}
      <header className="container w-full px-6 py-24 mx-auto md:w-3/4 lg:w-2/4">
        <div className="flex flex-col space-y-12 divide-y divide-gray-200">
          <div>
            <h1 className="mb-2 text-4xl font-extrabold leading-snug tracking-normal md:text-6xl">
              Hello, I&apos;m Pranav👋
            </h1>
            <p className="mt-6 text-base md:text-xl font-normal ">
              I am a software developer based in Ottawa, ON focused on building beautiful interfaces and accessible
              applications.
            </p>
            <button
              type="button"
              className="tracking-wider font-medium text-sm ring-inset mt-7 p-3 px-6 rounded bg-gray-700 hover:bg-gray-800 transition"
            >
              RESUME
            </button>
          </div>
        </div>
      </header>

      <section className="container w-full px-4 py-24 mx-auto md:w-3/4 lg:w-2/4">
        <div className="mb-12 text-left md:text-center">
          <h2 className="mb-2 text-3xl font-extrabold leading-tight ">Skcript Blog</h2>
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
    </>
  )
}

export default Home
