import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../component/layout/layout'
import { Seo } from "../../component/function/seo"
import HeadlineInfo from "../../component/layout/headline-info";
import {  getImage } from 'gatsby-plugin-image'
import BottomlineInfo from "../../component/layout/bottomline-info";

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
                thumbnail={image}
                alt={data.mdx.frontmatter.thumbnail_alt}
                credit={data.mdx.frontmatter.thumbnail_credit_text}
                imgdescription={data.mdx.frontmatter.thumbnail_description}
                link={data.mdx.frontmatter.thumbnail_credit_link}
            />
            {children}
            <BottomlineInfo
                tags={data.mdx.frontmatter.tags}
                category={data.mdx.frontmatter.category}
            />
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
                writer_link
                xaccout
                thumbnail_alt
                thumbnail_description
                thumbnail_credit_text
                thumbnail_credit_link
                writer_face{
                    childImageSharp {
                        gatsbyImageData
                    }
                }
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