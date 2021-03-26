/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import ProjectLayoutMed from '@src/containers/projectLayout'
import { Github, OpenLink2 } from '../src/components/Icons/Icons'
import { covid19, keepClone, reelDb, lift } from '../src/containers/projectData'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Put your description here." />
      </Head>
      <section className="w-11/12 px-4 md:px-0 pt-24 md:pt-28 lg:pt-32 mx-auto md:w-3/4 lg:w-10/12 transition duration-500 dark:text-gray-300">
        <div className="divide-y divide-gray-800">
          <div className=" pb-6 space-y-2 md:space-y-5 ">
            <h1 className=" text-4xl font-extrabold leading-9 tracking-tight transition duration-500 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Projects
            </h1>
            <p className="font-normal tracking-tight sm:w-9/12 md:w-10/12 lg:w-9/12 text-base md:text-lg ">
              My personal projects are a way for me to chronicle my growth as a developer.
            </p>
          </div>
          <div className="space-y-6 ">
            <ProjectLayoutMed project={lift} />
            <ProjectLayoutMed project={covid19} />
            <ProjectLayoutMed project={reelDb} />
            <ProjectLayoutMed project={keepClone} />

            <div className="text-black px-5">
              <p className="px-5 rounded py-1 bg-gray-300 block sm:hidden">Mobile</p>
              <p className="px-5 rounded py-1 bg-red-300  hidden sm:block md:hidden">Sm</p>
              <p className="px-5 rounded py-1 bg-green-300 hidden  sm:hidden md:block  lg:hidden">Md</p>
              <p className="px-5 rounded py-1 bg-blue-300 hidden sm:hidden md:hidden lg:block xl:hidden">Lg</p>
              <p className="px-5 rounded py-1 bg-yellow-300 hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
                xl
              </p>
              <p className="px-5 rounded py-1 bg-purple-300 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">
                2xl
              </p>
            </div>

            <div className="hidden lg:flex w-full ">
              <div className="w-3/5 ml-6 xl:ml-12 h-96 rounded-lg shadow-2xl overflow-hidden relative">
                <a href="https://lift-next.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="absolute inset-0 h-full w-full object-cover xl:object-contain rounded-lg"
                    src="/lift-app.jpg"
                    alt="lift workout app"
                  />
                  <div className="absolute border rounded-lg border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400 cursor-pointer inset-0 bg-gray-900 bg-opacity-40 hover:bg-opacity-25 transition duration-300" />
                </a>
              </div>

              <div className="w-2/5 z-10  py-3  my-auto rounded-lg lg:-ml-12 xl:-ml-24  ">
                <a
                  href="https://lift-next.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-right"
                >
                  <h1 className="transition duration-500 dark:text-gray-100 mt-2 lg:mb-5 text-xl lg:text-4xl font-extrabold leading-snug tracking-tight lg:leading-14">
                    Lift Workout App
                  </h1>
                </a>
                <div className=" w-full  text-lg ">
                  <p className="text-right  leading-snug text-base transition duration-500 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                    Lift is a resistance training app that allows users to create, track, and update their daily workout
                    routines.
                  </p>
                  <ul className="flex text-sm font-semibold mt-4 justify-end">
                    <li className=" mr-3">
                      <i>Next.js</i>
                    </li>
                    <li className=" mr-3">
                      <i>Firebase</i>
                    </li>
                    <li>
                      <i>Tailwind CSS</i>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 mt-1.5 flex justify-end">
                  <a
                    className="mr-5"
                    href="https://github.com/prnvbirajdar/NEXT-Workout-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                  <a href="https://lift-next.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <OpenLink2 />
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex w-full ">
              <div className="w-3/5 ml-6 xl:ml-12 h-96 rounded-lg shadow-2xl overflow-hidden relative">
                <a href="https://lift-next.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="absolute inset-0 h-full w-full object-cover xl:object-contain rounded-lg"
                    src="/lift-app.jpg"
                    alt="lift workout app"
                  />
                  <div className="absolute border rounded-lg border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400 cursor-pointer inset-0 bg-gray-900 bg-opacity-40 hover:bg-opacity-25 transition duration-300" />
                </a>
              </div>

              <div className="w-2/5 z-10  py-3  my-auto rounded-lg lg:-ml-12 xl:-ml-24  ">
                <a
                  href="https://lift-next.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-right"
                >
                  <h1 className="transition duration-500 dark:text-gray-100 mt-2 lg:mb-5 text-xl lg:text-4xl font-extrabold leading-snug tracking-tight lg:leading-14">
                    Lift Workout App
                  </h1>
                </a>
                <div className=" w-full  text-lg ">
                  <p className="text-right  leading-snug text-base transition duration-500 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
                    Lift is a resistance training app that allows users to create, track, and update their daily workout
                    routines.
                  </p>
                  <ul className="flex text-sm font-semibold mt-4 justify-end">
                    <li className=" mr-3">
                      <i>Next.js</i>
                    </li>
                    <li className=" mr-3">
                      <i>Firebase</i>
                    </li>
                    <li>
                      <i>Tailwind CSS</i>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 mt-1.5 flex justify-end">
                  <a
                    className="mr-5"
                    href="https://github.com/prnvbirajdar/NEXT-Workout-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                  <a href="https://lift-next.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <OpenLink2 />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
