import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../component/layout/layout'
import { Seo } from "../../component/function/seo"
import HeadlineInfo from "../../component/layout/headline-info";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Post = ({ data, children }) => {
    const image = getImage(data.mdx.frontmatter.thumbnail)


    return (
        <Layout>
            <HeadlineInfo
                tags={data.mdx.frontmatter.tags}
                title={data.mdx.frontmatter.title}
                publication={data.mdx.frontmatter.publication}
                category={data.mdx.frontmatter.category}
                update={data.mdx.frontmatter.update}
            />
            <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.thumbnail}
            />
            {children}
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                category
                description
                number
                pagetype
                publication
                slug
                tags
                update
                writer
                writerface
                writerlink
                xaccout
                thumbnail{
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }


`



export default Post

export const Head = () => (
    <Seo />
)