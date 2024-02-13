import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../component/layout/layout";

const Categories = ({ pageContext, data }) => {
    const { category } = pageContext
    const { edges, totalCount } = data.allMdx
    const categoryHeader = `${category}カテゴリーで${totalCount}個の記事が見つかりました。`

    return (
        <Layout>

        <div>
            <h1>{categoryHeader}</h1>
            <ul>
                {edges.map(({node}) => {
                    const {slug} = node.frontmatter
                    const {title} = node.frontmatter
                    return (
                        <li key={slug}>
                            <Link to={"/post/" + slug}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        </Layout>
    )
}

export default Categories

export const pageQuery = graphql`
    query($category: String) {
        allMdx(
            limit: 2000
            sort: { frontmatter: {date: DESC}}
            filter: { frontmatter: { category: { in: [$category] } } }
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