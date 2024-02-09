import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../component/layout/layout";

const Categories = ({ pageContext, data }) => {
    let { category } = pageContext
    let { tags } = pageContext
    if (typeof category === 'undefined') {
        category = "タグ";
    }
    if (typeof tags === 'undefined') {
        tags = "カテゴリー";
    }
    const { edges, totalCount } = data.allMdx
    const categoryHeader = `${tags}${category}で${totalCount}個の記事が見つかりました。`

    return (
        <Layout>
        <div>
            <h1>{categoryHeader}</h1>
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

export default Categories

export const pageQuery = graphql`
    query {
        allMdx(
            limit: 2000
            sort: { frontmatter: {date: DESC}}
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