import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../component/layout/layout";

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMdx
    const tagHeader = `${tag}カテゴリーで${totalCount}個の記事が見つかりました。`

    return (
        <Layout>
            <div>
                <h1>{tagHeader}</h1>
                <ul>
                    {edges.map(({node}) => {
                        const {slug} = node.frontmatter
                        const {title} = node.frontmatter
                        return (
                            <li className="category-list-style" key={slug}>
                                <Link className="category-lin-text" to={"/post/" + slug + "/"}>{title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default Tags

export const pageQuery = graphql`
    query($tags: String) {
        allMdx(
            limit: 2000
            sort: { frontmatter: {date: DESC}}
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