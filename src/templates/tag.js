

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../component/layout/layout";

const Tagfamily = ({ pageContext, data }) => {
    const { tags } = pageContext
    const { edges, totalCount } = data.allMdx
    const tagsHeader = `${tags}タグで${totalCount}個の記事が見つかりました。`

    return (
        <Layout>
        <div>
            <h1>{tagsHeader}</h1>
            <ul>
                {edges.map(({ node }) => {
                    const { slug } = node.frontmatter
                    const { title } = node.frontmatter
                    return (
                        <li key={slug}>
                            <Link to={"/post/"+slug}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        </Layout>
    )
}

export default Tagfamily

export const pageQuery = graphql`
    query($tags: String) {
        allMdx(
            limit: 2000
            sort: {frontmatter: {date: DESC}}
            filter: { frontmatter: { tags: { in: [$tags] } } }
        ) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        slug
                    }
                }
            }
        }
    }
`