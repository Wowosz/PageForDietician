import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default function Post(props) {
    const node = props.node;
    if(props.size === undefined){
    return (
        <div className="card col-lg-5 bg-secondary m-3" key={node.id}>
            <AniLink duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to={node.fields.slug}>
                <div className="card-body">
                    <img className="card-image-top img-fluid rounded" alt='panda eating bamboo' src="https://miro.medium.com/max/7386/1*DAU1i8-8GsyGqrC-rabuKg.jpeg"/>
                    <div className="card-title mt-2">{node.frontmatter.title} - {node.frontmatter.date}</div>
                </div>
            </AniLink>
        </div>
    )
    } else {
        return (
            <div className="card col-lg-3 bg-secondary m-3" key={node.id}>
                <AniLink duration={0.5} hex="#FFFFFF" swipe direction="left" entryOffset={80} to={node.fields.slug}>
                    <div className="card-body">
                        <img className="card-image-top img-fluid rounded" alt='panda eating bamboo' src="https://miro.medium.com/max/7386/1*DAU1i8-8GsyGqrC-rabuKg.jpeg"/>
                        <div className="card-title mt-2">{node.frontmatter.title} - {node.frontmatter.date}</div>
                        <div className="card-text">{node.frontmatter.description}</div>
                    </div>
                </AniLink>
            </div>
        )
    }
}