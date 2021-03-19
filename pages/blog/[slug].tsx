/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'

// import renderToString from 'next-mdx-remote/render-to-string'
// import hydrate from 'next-mdx-remote/hydrate'
import { parseISO, format } from 'date-fns'
// import { MdxRemote } from 'next-mdx-remote/types'

interface HopeBlog {
  id: number
  title: string
  description: string
  type_of: string
  canonical_url: string
  slug: string
  body_markdown: string
  comments_count: number
  cover_image: string
  page_views_count: number
  path: string
  positive_reactions_count: number
  public_reactions_count: number
  published: boolean
  published_at: string
  published_timestamp: string
  url: string
  user: User
  readable_publish_date: string
  collection_id: null | number
  social_image: string
  created_at: string
  edited_at: string
  crossposted_at: null | string
  last_comment_at: string
  tag_list: string
  tags: string[]
  body_html: string
}

interface User {
  github_username?: string
  name: string
  profile_image?: string
  profile_image_90?: string
  twitter_username?: string
  username?: string
  website_url?: null | string
}

// interface Markdown {
//   body_markdown: string
// }

interface BlogPost {
  id: number
  title: string
  description: string
  type_of: string
  tag_list: string[]
  canonical_url: string
  slug: string
  body_markdown: string
  comments_count: number
  cover_image: string
  page_views_count: number
  path: string
  positive_reactions_count: number
  public_reactions_count: number
  published: boolean
  published_at: string
  published_timestamp: string
  url: string
  user: User
}

// interface GetAllBlogs {
//   type_of: string
//   id: number
//   title: string
//   description: string
//   tag_list: string[]
//   canonical_url: string
//   slug: string
//   body_markdown: string
//   comments_count: number
//   cover_image: string
//   page_views_count: number
//   path: string
//   positive_reactions_count: number
//   public_reactions_count: number
//   published: boolean
//   published_at: string
//   published_timestamp: string
//   url: string
//   user: User
// }

// interface MdxProps {
//   source: MdxRemote.Source
// }

interface AllBlogProps {
  hopeBlog: HopeBlog
}

const BlogPage: NextPage<AllBlogProps> = ({ hopeBlog }) => {
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
                <p className="text-sm flex justify-end text-gray-400">{hopeBlog.public_reactions_count} 💖</p>
                {/* <p className="text-gray-400 flex justify-end text-sm">{hopeBlog.page_views_count} views</p> */}
              </div>
            </div>
          </div>
          {/* <div className=" px-4 sm:px-0 text-gray-300 w-full mx-auto prose prose-sm md:prose 2xl:prose-lg  md:w-3/4 lg:w-1/2">
            {blogText}
          </div> */}
          <div
            className=" px-4 sm:px-0 text-gray-300 w-full mx-auto prose prose-sm md:prose 2xl:prose-lg  md:w-3/4 lg:w-1/2"
            dangerouslySetInnerHTML={{ __html: hopeBlog.body_html }}
          />
        </article>
      )}
    </>
  )
}
// const getPosts = async () => {
//   // const params = { per_page: 1000 }
//   const headers = { 'api-key': 'u6fFae5kYdEF1NiaUuGZdhTh' }
//   const res = await fetch('https://dev.to/api/articles/me/published', { headers })
//   const posts = await res.json()

//   return posts
// }

const getAllBlogs = async () => {
  // try {
  const response = await axios.get('https://dev.to/api/articles?username=prnvbirajdar')
  const { data } = response
  return data
  // } catch (error) {
  //   console.error(error)
  // }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const devData: BlogPost[] = await getPosts()

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

  // const resHtmlBlog = await await fetch(`https://dev.to/api/articles/${selectedBlog[0]?.id}`, {
  //   headers: {
  //     // update with your user-agent
  //     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:86.0) Gecko/20100101 Firefox/86.0',
  //     Accept: '	text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  //   },
  // })
  // const htmlBlog = await resHtmlBlog.json()
  // const markdown = selectedBlog[0]?.body_markdown
  // const mdxSource = await renderToString(markdown)

  let data = {}
  let error = ''
  try {
    const res = await await fetch(`https://dev.to/api/articles/${selectedBlog[0]?.id}`, {
      headers: {
        // update with your user-agent
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:86.0) Gecko/20100101 Firefox/86.0',
        Accept: '	text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      },
    })

    data = await res.json()
  } catch (e) {
    error = e.toString()
  }

  const htmlBlog = data
  // eslint-disable-next-line no-console
  console.log(error)

  if (!devData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { blogData: selectedBlog[0], hopeBlog: htmlBlog }, // will be passed to the page component as props
    revalidate: 60,
  }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const devData = await getPosts()

//   return {
//     paths: devData.map((data: { slug: string }) => ({
//       params: { slug: data?.slug },
//     })),
//     fallback: true,
//   }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const devData = await getPosts()

//   const selectedBlog = devData.filter((data: { slug: string | string[] | undefined }) => data?.slug === params?.slug)
//   const markdown = selectedBlog[0]?.body_markdown
//   const mdxSource = await renderToString(markdown)

//   if (!devData) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { source: mdxSource, blogData: selectedBlog[0] }, // will be passed to the page component as props
//     revalidate: 60,
//   }
// }

export default BlogPage
