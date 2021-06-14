/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import { LeftProjectLayoutLarge, ProjectLayoutMed, RightProjectLayoutLarge } from '@src/containers/projectLayout'
import { covid19, keepClone, reelsDb, lift } from '../src/containers/projectData'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Put your description here." />
      </Head>
      <section className="max-w-5xl w-11/12 px-4 md:px-0 pt-24 md:pt-28 lg:pt-32 mx-auto md:w-3/4 lg:w-10/12 dark:text-gray-300">
        <div className="divide-y divide-gray-800">
          <div className=" pb-6 space-y-2 md:space-y-5 ">
            <h1 className=" text-4xl font-extrabold leading-9 tracking-tight dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Projects
            </h1>
            <p className="font-normal tracking-tight sm:w-9/12 md:w-10/12 lg:w-9/12 text-base md:text-lg ">
              My personal projects are a way for me to chronicle my growth as a developer.
            </p>
          </div>
          <div className="space-y-6 xl:space-y-10 ">
            <ProjectLayoutMed project={lift} />
            <ProjectLayoutMed project={covid19} />
            <ProjectLayoutMed project={reelsDb} />
            <ProjectLayoutMed project={keepClone} />
            <LeftProjectLayoutLarge project={lift} />
            <RightProjectLayoutLarge project={covid19} />
            <LeftProjectLayoutLarge project={reelsDb} />
            <RightProjectLayoutLarge project={keepClone} />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
