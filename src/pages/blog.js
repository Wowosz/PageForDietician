import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
                        {data.allMarkdownRemark.edges.map(({node}) => (
                                <div className="card col-lg-5 bg-secondary m-3" key={node.id}>
                                    <AniLink duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to={node.fields.slug}>
                                        <div className="card-body">
                                            <img className="card-image-top img-fluid rounded" alt='panda eating bamboo' src="https://miro.medium.com/max/7386/1*DAU1i8-8GsyGqrC-rabuKg.jpeg"/>
                                            <div className="card-title mt-2">{node.frontmatter.title} - {node.frontmatter.date}</div>
                                            <div className="card-text">{node.frontmatter.description}</div>
                                        </div>
                                    </AniLink>
                                </div>
                        ))}
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
          }
          fields{
              slug
          }
        }
      }
    }
  }
  
`