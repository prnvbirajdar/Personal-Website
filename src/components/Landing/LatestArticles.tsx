/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const LatestArticles = () => {
  return (
    <section>
      <div className="text-left ">
        <h2 className="text-3xl sm:text-3xl font-bold ">Latest Articles</h2>
        {/* <p className="text-lg ">
            I write about solving problems with code, desiging things people use, teaching, and learning.
          </p> */}
      </div>
      <div className="flex flex-col space-y-6 divide-y divide-gray-500">
        <div>
          <a href="#">
            <h3 className="mb-3 hover:text-gray-700 dark:hover:text-gray-300 text-xl mt-4 md:mt-8 font-semibold tracking-normal md:text-2xl">
              Process Documents Using Artificial Intelligence For RPA Bots
            </h3>
            <p className="text-base font-normal text-gray-700 dark:text-gray-300">
              processing from excel, database, on these data. But with advancements in technology like OCR (Optical
              Character Recognition) and Machine Learnof extracting these data
            </p>
          </a>
        </div>
        <div>
          <a href="#">
            <h3 className="mb-3 text-xl hover:text-gray-700 dark:hover:text-gray-300 transition mt-4 md:mt-8 font-semibold tracking-normal md:text-2xl">
              Implement Dark Mode in Your Android App
            </h3>
            <p className="text-base font-normal text-gray-700 dark:text-gray-300">
              guideline to attain the Dark Mode in Android Appliime; just implement and enjoy Dark Mode. e; just
              implement and enjoy Dark Mode. guideline to attain th
            </p>
          </a>
        </div>
        {/*  <div>
          <a href="#">
            <h3 className="mb-3 text-xl hover:text-gray-700 dark:hover:text-gray-300 transition mt-4 md:mt-8 font-semibold tracking-normal md:text-2xl">
              Why is Mental Health one of the Important Issues to Address?
            </h3>
            <p className="text-base font-normal text-gray-700 dark:text-gray-300">
              t home for about six months I realized that this is one of the important issues to address not only in the
              work sector but also in daily living.
            </p>
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default LatestArticles
