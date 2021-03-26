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

export default ProjectLayoutMed
