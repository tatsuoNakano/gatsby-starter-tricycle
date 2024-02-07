import React from "react"
import { Link, graphql } from "gatsby"
const CategoryList = ({ data }) => {
    const { categories } = data.allMdx
    return (
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
    )
}
export default CategoryList
export const pageQuery = graphql`
    query{
        allMdx{
            categories: group (field: frontmatter___category){
                fieldValue
            }
        }
    }
`