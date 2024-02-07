import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../../component/layout/layout'
import {Seo} from "../../component/function/seo";
const CategoryList = ({ data }) => {
    const { categories } = data.allMdx
    return (
        <Layout>
        <div>
            <h1>カテゴリ一覧</h1>
            <ul>
                {categories.map( category => {
                    return (
                        <li key={category.fieldValue}>
                            <Link to={category.fieldValue}>{category.fieldValue}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
        </Layout>
    )
}
export default CategoryList
export const pageQuery = graphql`
    query{
        allMdx{
            categories: group (field: {frontmatter: {category: SELECT}}){
                fieldValue
            }
        }
    }
`

export const Head = () => (
    <Seo />
)