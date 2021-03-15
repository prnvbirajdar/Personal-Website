/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
//import Link from 'next/link'

const LatestArticles = (devData) => {
  // const [getFiles, setGetFiles] = useState([])

  // const getData = async () => {
  //   const res = await fetch('https://dev.to/api/articles?username=prnvbirajdar')
  //   const devData = await res.json()
  //   setGetFiles(devData)
  //   return devData
  // }

  devData.devData.map((data) => console.log(data))
  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <section>
      <div className="text-left ">
        <h2 className="text-3xl md:text-4xl  font-bold ">Latest Articles</h2>
        {/* <p className="text-lg ">
            I write about solving problems with code, desiging things people use, teaching, and learning.
          </p> */}
      </div>
      <div className="flex flex-col">
        {devData.devData &&
          devData.devData.slice(0, 2).map(({ id, description, title, slug }) => (
            <div key={id} className=" mt-5">
              <a href={`/blog/${slug}`}>
                <h3 className="mb-3 hover:text-gray-700 dark:hover:text-gray-300 text-xl  font-semibold tracking-normal md:text-2xl">
                  {title}
                </h3>
                <p className="text-base font-normal text-gray-700 dark:text-gray-300">{description}</p>
              </a>
            </div>
          ))}
        {/* <div>
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
        </div> */}
      </div>
    </section>
  )
}

export default LatestArticles

// export async function getSortedPostsData() {
//   // Instead of the file system,
//   // fetch post data from an external API endpoint

//   const res = await fetch('https://dev.to/api/articles?username=prnvbirajdar')
//   return res.json()
// }

// const getPosts = async () => {
//   const res = await fetch('https://dev.to/api/articles?username=prnvbirajdar')
//   const devData = await res.json()
//   return devData
// }
