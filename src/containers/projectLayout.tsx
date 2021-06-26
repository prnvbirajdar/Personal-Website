/* eslint-disable jsx-a11y/anchor-is-valid */
import { Github, OpenLink2 } from '@src/components/Icons/Icons'
import React from 'react'
import { motion } from 'framer-motion'
import { stagger, fadeInUp } from '@src/containers/framerAnimations'

const ProjectLayoutMed = ({ project }) => {
  return (
    <section className="lg:hidden mt-6  flex w-full border hover:shadow-lg focus:shadow-lg border-gray-600 hover:border-gray-900 focus:border-gray-900 dark:hover:border-gray-400 dark:focus:border-gray-400 md:h-96 h-64 rounded-lg relative">
      <a href={project.site} target="_blank" rel="noopener noreferrer" className="dark:hidden">
        <img
          className="dark:hidden block  absolute inset-0 h-full w-full object-cover sm:object-contain md:object-fill rounded-lg"
          src={project.imageLight}
          alt={project.title}
        />
        <div className="absolute transition duration-100  inset-0 bg-gray-100 bg-opacity-90  rounded-lg md:bg-opacity-30  md:hover:bg-opacity-0" />
      </a>

      <a href={project.site} target="_blank" rel="noopener noreferrer" className="hidden dark:block">
        <img
          className="dark:block hidden  absolute inset-0 h-full w-full object-cover sm:object-contain md:object-fill  rounded-lg"
          src={project.imageDark}
          alt={project.title}
        />
        <div className="absolute transition duration-100  inset-0 bg-gray-900 bg-opacity-90  rounded-lg md:bg-opacity-30  md:hover:bg-opacity-0" />
      </a>

      <motion.div
        initial="initial"
        animate="animate"
        className=" md:mx-3 px-6 py-3 relative  md:w-8/12 my-auto rounded-lg  md:bg-gray-100 md:dark:bg-gray-900  md:shadow-md"
      >
        <motion.div variants={stagger}>
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <motion.h1
              variants={fadeInUp}
              className=" dark:text-gray-100 mt-2   text-xl sm:text-2xl md:text-3xl  font-extrabold leading-snug tracking-tight  sm:leading-10 md:leading-14"
            >
              {project.title}
            </motion.h1>
            <div className="  sm:w-9/12  md:w-full text-sm md:text-lg ">
              <motion.p variants={fadeInUp} className="text-sm mt-2 leading-snug md:text-base">
                {project.description}
              </motion.p>
              <motion.ul variants={fadeInUp} className="flex text-xs md:text-sm mt-3 font-semibold ">
                <li className=" mr-3">
                  <i>{project.stack.first}</i>
                </li>
                <li className=" mr-3">
                  <i>{project.stack.second}</i>
                </li>
                <li className="mr-3">
                  <i>{project.stack.third}</i>
                </li>
              </motion.ul>
            </div>
          </a>
          <motion.div variants={fadeInUp} className="pt-2 mt-1 md:mt-1.5 flex">
            <a className="mr-5" href={project.gitHub} target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href={project.site} target="_blank" rel="noopener noreferrer">
              <OpenLink2 />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

const LeftProjectLayoutLarge = ({ project }) => {
  return (
    <section className="hidden lg:flex w-full ">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ x: 500, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        }}
        exit={{ opacity: 0 }}
        className="shadow border border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400 cursor-pointer w-3/5 ml-6 xl:mx-auto h-96 rounded-lg hover:shadow-lg focus:shadow-lg overflow-hidden relative"
      >
        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <img
            className="dark:hidden block absolute inset-0 h-full w-full object-cover xl:object-top rounded-lg"
            src={project.imageLight}
            alt={project.title}
          />
          <img
            className="dark:block hidden absolute inset-0 h-full w-full object-cover xl:object-top rounded-lg"
            src={project.imageDark}
            alt={project.title}
          />
        </a>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        className="w-2/5 z-10  py-3  my-auto rounded-lg lg:-ml-12 xl:-ml-24  "
      >
        <motion.div variants={stagger}>
          <a href={project.site} target="_blank" rel="noopener noreferrer" className="text-right">
            <motion.h1
              variants={fadeInUp}
              className=" dark:text-gray-100 mt-2 lg:mb-5 text-xl lg:text-4xl font-extrabold leading-snug tracking-tight lg:leading-14"
            >
              {project.title}
            </motion.h1>
          </a>
          <div className=" w-full  ">
            <motion.p
              variants={fadeInUp}
              className="text-right leading-snug  bg-gray-100 dark:bg-gray-900 p-4 rounded-lg"
            >
              {project.description}
            </motion.p>
            <motion.ul variants={fadeInUp} className="flex text-sm font-semibold mt-4 justify-end">
              <li className=" mr-3">
                <i>{project.stack.first}</i>
              </li>
              <li className=" mr-3">
                <i>{project.stack.second}</i>
              </li>
              <li>
                <i>{project.stack.third}</i>
              </li>
            </motion.ul>
          </div>

          <motion.div variants={fadeInUp} className="pt-2 mt-1.5 flex justify-end">
            <a className="mr-5" href={project.gitHub} target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href={project.site} target="_blank" rel="noopener noreferrer">
              <OpenLink2 />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

const RightProjectLayoutLarge = ({ project }) => {
  return (
    <section className="hidden lg:flex w-full ">
      <motion.div
        initial="initial"
        animate="animate"
        className="w-2/5 z-10  py-3  my-auto rounded-lg lg:ml-6 xl:ml-12  "
      >
        <motion.div variants={stagger}>
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <motion.h1
              variants={fadeInUp}
              className=" dark:text-gray-100 mt-2 lg:mb-5 text-xl lg:text-4xl font-extrabold leading-snug tracking-tight lg:leading-14"
            >
              {project.title}
            </motion.h1>
          </a>
          <div className=" w-full   ">
            <motion.p variants={fadeInUp} className="  leading-snug  bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
              {project.description}
            </motion.p>
            <motion.ul variants={fadeInUp} className="flex text-sm font-semibold mt-4 justify-start">
              <li className=" mr-3">
                <i>{project.stack.first}</i>
              </li>
              <li className=" mr-3">
                <i>{project.stack.second}</i>
              </li>
              <li>
                <i>{project.stack.third}</i>
              </li>
            </motion.ul>
          </div>

          <motion.div variants={fadeInUp} className="pt-2 mt-1.5 flex justify-start">
            <a className="mr-5" href={project.gitHub} target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href={project.site} target="_blank" rel="noopener noreferrer">
              <OpenLink2 />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        }}
        initial={{ x: 200, opacity: 0 }}
        exit={{ opacity: 0 }}
        className=" shadow border border-gray-400 hover:border-gray-600 dark:border-gray-600 dark:hover:border-gray-400 w-3/5 -ml-12 h-96 rounded-lg hover:shadow-lg focus:shadow-lg  overflow-hidden relative"
      >
        <a href={project.site} target="_blank" rel="noopener noreferrer">
          <img
            className="dark:hidden block absolute inset-0 h-full w-full object-cover xl:object-top rounded-lg"
            src={project.imageLight}
            alt={project.title}
          />
          <img
            className="dark:block hidden absolute inset-0 h-full w-full object-cover xl:object-top rounded-lg"
            src={project.imageDark}
            alt={project.title}
          />
        </a>
      </motion.div>
    </section>
  )
}

export { ProjectLayoutMed, LeftProjectLayoutLarge, RightProjectLayoutLarge }
