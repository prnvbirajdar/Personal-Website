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
      <div className="text-black px-5">
        <p className="px-5 rounded py-1 bg-gray-300 block sm:hidden">Mobile</p>
        <p className="px-5 rounded py-1 bg-red-300 hidden sm:block md:hidden">Sm</p>
        <p className="px-5 rounded py-1 bg-green-300 hidden sm:hidden md:block lg:hidden">Md</p>
        <p className="px-5 rounded py-1 bg-blue-300 hidden sm:hidden md:hidden lg:block xl:hidden">Lg</p>
        <p className="px-5 rounded py-1 bg-yellow-300 hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</p>
        <p className="px-5 rounded py-1 bg-purple-300 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</p>
      </div>
      <header className=" w-11/12 sm:w-4/6 px-6 sm:px-0 py-24 mx-auto md:w-4/6 lg:w-2/4">
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
      </header>

      <section className="w-11/12 px-4 py-24 mx-auto md:w-3/4 lg:w-2/4">
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
      <footer>
        <div className="flex items-center mb-6 space-x-2">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="flex-none w-5 h-5"
              fill="currentColor"
            >
              <path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="flex-none w-5 h-5"
              fill="currentColor"
            >
              <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="flex-none w-5 h-5"
              fill="currentColor"
            >
              <circle cx="4.983" cy="5.009" r="2.188" />
              <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z" />
            </svg>
          </a>
          <p className="text-gray-600">Share this article</p>
        </div>
      </footer>
    </>
  )
}

export default Home
