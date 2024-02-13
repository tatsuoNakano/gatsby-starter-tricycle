

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../component/layout/layout";

const Tagfamily = ({ pageContext, data }) => {
    const { tags } = pageContext
    const { edges, totalCount } = data.allMdx
    // const tagsHeader = `${tags}タグで${totalCount}個の記事が見つかりました。`
    const tagsHeader = `${totalCount} articles found in ${tags} taglist`

    return (
        <Layout>
        <div>
            <h1 className="mb-2 padding-b text-xl font-semibold text-gray-900 bg-gradient-to-br from-gray-200 to-gray-300 p-4 shadow-md border-l-4 border-blue-500">{tagsHeader}</h1>
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