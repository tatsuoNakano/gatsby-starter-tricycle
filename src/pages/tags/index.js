import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../../component/layout/layout'
import {Seo} from "../../component/function/seo";
const TagsList = ({ data }) => {
    const { tagfamily } = data.allMdx
    return (
        <Layout>
            <div>
                <h1>カテゴリ一覧</h1>
                <ul>
                    {tagfamily.map( tags => {
                        return (
                            <li key={tags.fieldValue}>
                                <Link to={tags.fieldValue}>{tags.fieldValue}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}
export default TagsList
export const pageQuery = graphql`
    query{
        allMdx{
            tagfamily: group (field: {frontmatter: {tags: SELECT}}){
                fieldValue
            }
        }
    }
`

export const Head = () => (
    <Seo />
)