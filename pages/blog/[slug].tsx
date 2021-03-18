/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { parseISO, format } from 'date-fns'

interface User {
  github_username: string
  name: string
  profile_image: string
  profile_image_90: string
  twitter_username: string
  username: string
  website_url?: null | string
}

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

type BlogData = {
  blogData: {
    cover_image: string
    title: string
    published_at: string
    public_reactions_count: number
    page_views_count: number
    user: { profile_image_90: string; name: string }
  }
  source: { compiledSource: string; renderedOutput: string }
}

const BlogPage: NextPage<BlogData> = ({ source, blogData }) => {
  const blogText = hydrate(source)
  return (
    <>
      {blogData && blogText && (
        <article
          className="text-gray-300 sm:px-4 py-16 mx-auto max-w-7xl pt-16 md:pt-28"
          itemID="#"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div className="w-full mx-auto mb-8 text-left sm:w-11/12 md:w-3/4 lg:w-1/2">
            <img
              src={blogData.cover_image}
              className="object-fit  h-auto md:object-cover w-full md:max-h-64 bg-center rounded-lg"
              alt="Blog Cover"
            />
            <h1
              className="px-4 sm:px-0 mt-6 mb-6 text-3xl font-bold leading-tight text-white md:text-4xl"
              itemProp="headline"
              title={blogData.title}
            >
              {blogData.title}
            </h1>

            {/* <div className="flex mb-6 space-x-2 text-sm">
            {blogData.tag_list.map((tag) => (
              <p key={tag} className="text-gray-900 bg-gray-100 select-none px-1.5 py-0.75 rounded">
                {tag}
              </p>
            ))}
          </div> */}
            <div className="flex justify-between px-4 sm:px-0">
              <div className="flex items-center ">
                <div className="avatar ">
                  <img
                    className="rounded-full w-14 h-14"
                    src={blogData.user.profile_image_90}
                    alt={blogData.user.name}
                  />
                </div>
                <div className="ml-2">
                  <p className=" font-semibold "> {blogData.user.name}</p>
                  <p className="text-sm text-gray-400">{format(parseISO(blogData.published_at), 'MMMM dd, yyyy')}</p>
                </div>
              </div>
              <div className="self-center">
                <p className="text-sm flex justify-end text-gray-400">{blogData.public_reactions_count} 💖</p>
                <p className="text-gray-400 flex justify-end text-sm">{blogData.page_views_count} views</p>
              </div>
            </div>
          </div>
          <div className=" px-4 sm:px-0 text-gray-300 w-full mx-auto prose prose-sm md:prose 2xl:prose-lg  md:w-3/4 lg:w-1/2">
            {blogText}
          </div>
        </article>
      )}
    </>
  )
}
const getPosts = async () => {
  // const params = { per_page: 1000 }
  const headers = { 'api-key': 'u6fFae5kYdEF1NiaUuGZdhTh' }
  const res = await fetch('https://dev.to/api/articles/me/published', { headers })
  const posts = await res.json()

  return posts
}

export const getStaticPaths: GetStaticPaths = async () => {
  const devData: BlogPost[] = await getPosts()

  return {
    paths: devData.map((data) => ({
      params: { slug: data?.slug },
    })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const devData: BlogPost[] = await getPosts()

  const selectedBlog = devData.filter((data) => data?.slug === params?.slug)
  const markdown = selectedBlog[0]?.body_markdown
  const mdxSource = await renderToString(markdown)

  if (!devData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { source: mdxSource, blogData: selectedBlog[0] }, // will be passed to the page component as props
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
