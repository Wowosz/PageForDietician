import React from "react"
import { graphql } from "gatsby"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import Layout from "../components/layout"


export default function BlogPost({ data }) {
  const post = data.markdownRemark
  let disqusConfig = {
    url: `wojciechszoda.pl/blog/${post.frontmatter.title}`,
    identifier: post.id,
    title: post.frontmatter.title,
  }

  return (
    <Layout>
      <div className="container border mt-5 p-5">
        <h1>{post.frontmatter.title}</h1>
        <img src={post.frontmatter.thumbnail}></img>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div className="container">
      <Disqus config={disqusConfig} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        thumbnail
      }
    }
  }
  `