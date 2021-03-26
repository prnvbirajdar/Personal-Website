/* eslint-disable jsx-a11y/anchor-is-valid */
import { Github, OpenLink2 } from '@src/components/Icons/Icons'
import React from 'react'

const ProjectLayoutMed = ({ project }) => {
  return (
    <section className="lg:hidden mt-6  flex w-full border border-gray-600 hover:border-gray-400 focus:border-gray-400 md:h-96 h-64 rounded-lg shadow-2xl relative">
      <a href={project.site} target="_blank" rel="noopener noreferrer">
        <img
          className=" absolute inset-0 h-full w-full object-cover sm:object-contain  rounded-lg"
          src={project.imageDark}
          alt={project.title}
        />
        <div className=" absolute inset-0 bg-black bg-opacity-40 rounded-lg md:bg-opacity-50 bg-gradient-to-r from-black  " />
      </a>

      <div className=" px-6 py-3 relative  md:w-8/12 my-auto rounded-lg  ">
        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <h1 className="transition duration-500 dark:text-gray-100 mt-2   text-xl sm:text-2xl md:text-3xl  font-extrabold leading-snug tracking-tight  sm:leading-10 md:leading-14">
            {project.title}
          </h1>
          <div className="  sm:w-9/12  md:w-full text-sm md:text-lg ">
            <p className="text-sm mt-2 leading-snug md:text-base">{project.description}</p>
            <ul className="flex text-xs md:text-sm mt-3 font-semibold ">
              <li className=" mr-3">
                <i>{project.stack.first}</i>
              </li>
              <li className=" mr-3">
                <i>{project.stack.second}</i>
              </li>
              <li className="mr-3">
                <i>{project.stack.third}</i>
              </li>
            </ul>
          </div>
        </a>
        <div className="pt-2 mt-1 md:mt-1.5 flex">
          <a className="mr-5" href={project.gitHub} target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <OpenLink2 />
          </a>
        </div>
      </div>
    </section>
  )
}

const LeftProjectLayoutLarge = ({ project }) => {
  return (
    <section className="hidden lg:flex w-full ">
      <div className="w-3/5 ml-6 xl:ml-12 h-96 rounded-lg shadow-2xl overflow-hidden relative">
        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <img
            className="absolute inset-0 h-full w-full object-cover xl:object-top rounded-lg"
            src={project.imageDark}
            alt={project.title}
          />
          <div className="absolute border rounded-lg border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400 cursor-pointer inset-0 bg-gray-900 bg-opacity-40 hover:bg-opacity-25 transition duration-300" />
        </a>
      </div>

      <div className="w-2/5 z-10  py-3  my-auto rounded-lg lg:-ml-12 xl:-ml-24  ">
        <a href={project.site} target="_blank" rel="noopener noreferrer" className="text-right">
          <h1 className="transition duration-500 dark:text-gray-100 mt-2 lg:mb-5 text-xl lg:text-4xl font-extrabold leading-snug tracking-tight lg:leading-14">
            {project.title}
          </h1>
        </a>
        <div className=" w-full  ">
          <p className="text-right leading-snug transition duration-500 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
            {project.description}
          </p>
          <ul className="flex text-sm font-semibold mt-4 justify-end">
            <li className=" mr-3">
              <i>{project.stack.first}</i>
            </li>
            <li className=" mr-3">
              <i>{project.stack.second}</i>
            </li>
            <li>
              <i>{project.stack.third}</i>
            </li>
          </ul>
        </div>

        <div className="pt-2 mt-1.5 flex justify-end">
          <a className="mr-5" href={project.gitHub} target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <OpenLink2 />
          </a>
        </div>
      </div>
    </section>
  )
}

const RightProjectLayoutLarge = ({ project }) => {
  return (
    <section className="hidden lg:flex w-full ">
      <div className="w-2/5 z-10  py-3  my-auto rounded-lg lg:ml-6 xl:ml-12  ">
        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <h1 className="transition duration-500 dark:text-gray-100 mt-2 lg:mb-5 text-xl lg:text-4xl font-extrabold leading-snug tracking-tight lg:leading-14">
            {project.title}
          </h1>
        </a>
        <div className=" w-full   ">
          <p className="  leading-snug transition duration-500 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
            {project.description}
          </p>
          <ul className="flex text-sm font-semibold mt-4 justify-start">
            <li className=" mr-3">
              <i>{project.stack.first}</i>
            </li>
            <li className=" mr-3">
              <i>{project.stack.second}</i>
            </li>
            <li>
              <i>{project.stack.third}</i>
            </li>
          </ul>
        </div>

        <div className="pt-2 mt-1.5 flex justify-start">
          <a className="mr-5" href={project.gitHub} target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <OpenLink2 />
          </a>
        </div>
      </div>
      <div className="w-3/5 -ml-12 xl:-ml-24 h-96 rounded-lg shadow-2xl overflow-hidden relative">
        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <img
            className="absolute inset-0 h-full w-full object-cover xl:object-top rounded-lg"
            src={project.imageDark}
            alt={project.title}
          />
          <div className="absolute border rounded-lg border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400 cursor-pointer inset-0 bg-gray-900 bg-opacity-40 hover:bg-opacity-25 transition duration-300" />
        </a>
      </div>
    </section>
  )
}

export { ProjectLayoutMed, LeftProjectLayoutLarge, RightProjectLayoutLarge }
