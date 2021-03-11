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
      <section className="w-11/12 px-4 md:px-0 mt-36 mx-auto md:w-3/4 lg:w-7/12 ">
        <div className="divide-y">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight  text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              About Me
            </h1>
          </div>
          <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div className="flex flex-col items-center pt-8 space-x-2">
              <img alt="avatar" className="w-48 h-48 rounded-full" />
              <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">Pranav Birajdar</h3>
              <div className="text-gray-500 dark:text-gray-400">Professor of Atmospheric Science</div>
              <div className="text-gray-500 dark:text-gray-400">Stanford University</div>
              <Icons />
            </div>
            <div className="pt-8 pb-8 xl:col-span-2">
              <p className="mb-4">
                I’m a first year student at Algonquin College studying Computer Engineering Technology. I have
                experience designing and developing applications for the web, from simple landing pages to progressive
                web applications.
              </p>
              <p className="mb-4">
                I aspire toward a career that will allow me to build beautiful applications through carefully crafted
                code and user-centric design that result in engaging experiences.
              </p>
              <p className="mb-4">
                When I’m not in front of a computer screen, I am probably working out, riding my bike, or trying out a
                new recipe in the kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
