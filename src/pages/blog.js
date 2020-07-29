import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Post from '../components/postTemplate'

export default function Blog({data}) {
    console.log(data)
    return(
        <Layout>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <p>Wszystkich postów: {
                            data.allMarkdownRemark.totalCount
                        }</p>
                    </div>
                    </div>
                    <div className='row justify-content-center'>
                        {data.allMarkdownRemark.edges.map(({node}) => <Post node={node}/>)}
                    </div>
                </div>
        </Layout>
    )
}

export const query = graphql`
query {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
            thumbnail
          }
          fields{
              slug
          }
        }
      }
    }
  }
  
`