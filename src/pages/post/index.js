import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../component/layout/layout'
import { Seo } from "../../component/function/seo"

const PostPage = ({ data }) => {
    return (
        <Layout pageTitle="My  Posts">
            <h1 className="mb-2 padding-b text-xl font-semibold text-gray-900 bg-gradient-to-br from-gray-200 to-gray-300 p-4 shadow-md border-l-4 border-blue-500" >List of articles</h1>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <h2>
                            <Link to={`/post/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC }}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    slug
                }
                id
            }
        }
    }
`



export default PostPage

export const Head = () => (
    <Seo />
)