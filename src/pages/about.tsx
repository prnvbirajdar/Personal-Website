/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { NextPage } from 'next'
import Icons from '@src/components/Icons/Icons'

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
      <section className="w-11/12 px-4 md:px-0 mt-16 md:mt-24 lg:mt-36 mx-auto  md:w-3/4 lg:w-7/12 text-gray-300">
        <div>
          <div className=" space-y-2 md:space-y-5">
            <h1 className="pb-3 text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              About Me
            </h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center pt-8 space-x-2">
              <img
                src="https://avatars.githubusercontent.com/u/15911693?s=400&u=2b0df1b5fed0e01367e86e01a3f39868360f2663&v=4"
                alt="avatar"
                className="w-48 h-48 rounded-xl"
              />
              <h3 className="pt-4 text-2xl md:text-3xl font-bold leading-8 tracking-tight">Pranav Birajdar</h3>
              <div className="md:text-lg text-gray-400 dark:text-gray-400 mb-2 md:mt-1">Software Developer</div>
              {/* <div className="text-gray-500 dark:text-gray-400">Stanford University</div> */}
              <Icons />
            </div>
            <div className="pt-4 pb-8 xl:col-span-2 text-base font-normal sm:w-9/12 md:w-10/12 mx-auto">
              <p className="mb-4">
                Hello! I&apos;m Pranav, a software developer and personal trainer based in Ottawa, CA🍁.
              </p>
              <p className="mb-4">
                I’m a first year student at Algonquin College studying Computer Engineering Technology. I have
                experience designing and developing applications for the web, from simple landing pages to progressive
                web applications.
              </p>
              <p className="mb-4">
                I aspire toward a career that will allow me to build beautiful applications through carefully crafted
                code and user-centric design that result in engaging experiences.
              </p>
              {/* <p className="mb-4">
                When I’m not in front of a computer screen, I am probably working out, riding my bike, or trying out a
                new recipe in the kitchen.
              </p> */}
              <p className="mb-4">Here are a few technologies I&apos;ve been working with recently:</p>
              <ul className="list-inside">
                <div>
                  <li className="mb-0.25">React</li>
                  <li className="mb-0.25">JavaScript (ES6+)</li>
                </div>

                <div>
                  <li className="mb-0.25">Semantic HTML</li>
                  <li className="mb-0.25">(S)CSS</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
