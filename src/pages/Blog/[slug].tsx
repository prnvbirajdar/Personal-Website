/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { GetStaticProps, NextPage } from 'next'

const About: NextPage = (props) => {
  const blogData = props.devData
  console.log(blogData)

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
      <section className="w-11/12 px-4 md:px-0 mt-16 md:mt-24 lg:mt-28 mx-auto md:w-3/4 lg:w-10/12 text-gray-300">
        <div dangerouslySetInnerHTML={{ __html: blogData?.body_html }}></div>{' '}
      </section>
    </>
  )
}

const getPost = async (slug: string) => {
  const res = await fetch(`https://dev.to/api/articles/prnvbirajdar/${slug}`)
  const post = await res.json()

  return post
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const devData = await getPost(params.slug)

  if (!devData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { devData }, // will be passed to the page component as props
  }
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  }
}

export default About
