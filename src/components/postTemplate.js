import React from 'react'
import { CommentCount } from 'gatsby-plugin-disqus'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Post(props) {
    const node = props.node;
    let disqusConfig = {
        url: `${node.fields.slug}`,
        identifier: node.id,
        title: node.frontmatter.title,
      }
    if(props.size === undefined){
    return (
        <div className="card col-lg-5 bg-white m-3 p-0 border-secondary shadow-lg" key={node.id}>
            <AniLink className="text-decoration-none" duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to={node.fields.slug}>
                <div className="card-body p-0">
                    <img className="card-image-top img-fluid rounded p-0" alt='thumbnail of post' src={node.frontmatter.thumbnail}/>
                    <div className="card-title mt-2 p-2 text-dark">{node.frontmatter.title}<br></br>
                    - <span className="small text-primary">{node.frontmatter.date}</span></div>
                    <div className="card-text p-2 text-secondary">{node.frontmatter.description}</div>
                    <div className="card-text p-2 text-secondary">
                        <CommentCount config={disqusConfig} placeholder={'...'} /> Komentarzy
                    </div>
                </div>
            </AniLink>
        </div>
    )
    } else {
        return (
            <div className="card col-lg-3 bg-white m-3 p-0 border-secondary shadow-lg" key={node.id}>
                <AniLink duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to={node.fields.slug}>
                    <div className="card-body p-0">
                        <img className="card-image-top img-fluid rounded p-0" alt='thumbnail of post' src={node.frontmatter.thumbnail}/>
                        <div className="card-title mt-2 p-2 text-dark">{node.frontmatter.title}<br></br>
                        - <span className="small text-primary">{node.frontmatter.date}</span></div>
                        <div className="card-text p-2 text-secondary">{node.frontmatter.description}</div>
                        <div className="card-text p-2 text-secondary">
                        <CommentCount config={disqusConfig} placeholder={'...'} />
                    </div>
                    </div>
                </AniLink>
            </div>
        )
    }
}