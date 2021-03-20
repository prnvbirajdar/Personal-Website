/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { parseISO, format } from 'date-fns'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { MdxRemote } from 'next-mdx-remote/types'
// import Prism from 'prismjs'
import { BlogPost } from '../../src/containers/Interfaces/Interface'

export interface AllBlogProps {
  hopeBlog: BlogPost
  mdxSource: MdxRemote.Source
}

const BlogPage: NextPage<AllBlogProps> = ({ hopeBlog, mdxSource }) => {
  // const html = Prism.highlight(hopeBlog.body_html, Prism.languages.javascript, 'javascript')

  // console.log(hopeBlog)

  const content = hydrate(mdxSource)

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Put your description here." />
      </Head>
      {hopeBlog && (
        <article
          className="text-gray-300 sm:px-4 py-16 mx-auto max-w-7xl pt-20 md:pt-28"
          itemID="#"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div className="w-full mx-auto mb-8 text-left sm:w-11/12 md:w-3/4 lg:w-1/2">
            <img
              src={hopeBlog.cover_image}
              className="object-fit  h-auto md:object-cover w-full md:max-h-64 bg-center rounded-lg"
              alt="Blog Cover"
            />
            <h1
              className="px-4 sm:px-0 mt-6 mb-6 text-3xl font-bold leading-tight text-white md:text-4xl"
              itemProp="headline"
              title={hopeBlog.title}
            >
              {hopeBlog.title}
            </h1>

            <div className="flex justify-between px-4 sm:px-0">
              <div className="flex items-center ">
                <div className="avatar ">
                  <img
                    className="rounded-full w-14 h-14"
                    src={hopeBlog.user.profile_image_90}
                    alt={hopeBlog.user.name}
                  />
                </div>
                <div className="ml-2">
                  <p className=" font-semibold "> {hopeBlog.user.name}</p>
                  <p className="text-sm text-gray-400">{format(parseISO(hopeBlog.published_at), 'MMMM dd, yyyy')}</p>
                </div>
              </div>
              <div className="self-center">
                <p className="text-sm flex justify-end text-gray-400">
                  {hopeBlog.public_reactions_count}&nbsp;
                  <span role="img" aria-label="Heart">
                    💖
                  </span>
                </p>
                {/* <p className="text-gray-400 flex justify-end text-sm">{hopeBlog.page_views_count} views</p> */}
              </div>
            </div>
          </div>
          <div className=" px-4 sm:px-0 text-gray-300 w-full mx-auto prose  md:prose 2xl:prose-lg  md:w-3/4 lg:w-1/2">
            {content}
          </div>
          {/* <div
            className=" px-4 sm:px-0 text-gray-300 w-full mx-auto prose  md:prose 2xl:prose-lg  md:w-3/4 lg:w-1/2"
            dangerouslySetInnerHTML={{ __html: hopeBlog.body_html }}
          /> */}
        </article>
      )}
    </>
  )
}

const getAllBlogs = async () => {
  const res = await fetch('https://dev.to/api/articles?username=prnvbirajdar')
  const data = await res.json()
  return data
}

export const getStaticPaths: GetStaticPaths = async () => {
  const devData: BlogPost[] = await getAllBlogs()

  return {
    paths: devData.map((data) => ({
      params: { slug: data?.slug },
    })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const devData: BlogPost[] = await getAllBlogs()

  const selectedBlog = devData.filter((data) => data?.slug === params?.slug)
  const res = await fetch(`https://dev.to/api/articles/${selectedBlog[0]?.id}`)
  const htmlBlog = await res.json()

  const mdxSource = await renderToString(htmlBlog.body_markdown)

  if (!devData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { mdxSource, hopeBlog: htmlBlog }, // will be passed to the page component as props
    revalidate: 1,
  }
}

export default BlogPage
