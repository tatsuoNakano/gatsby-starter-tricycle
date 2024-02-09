import React from "react"
import PropTypes from "prop-types"
import Layout from '../../component/layout/layout'
// Utilities


// Components

import { Link, graphql } from "gatsby"

const CategoryPage = ({
                      data: {
                          allMdx: { group },
                          site: {
                              siteMetadata: { title },
                          },
                      },
                  }) => {
    return (
        <Layout>
            <div>

                <div>
                    <h1>Tags</h1>
                    <ul>
                        {group.map(category => (
                            <li key={category.fieldValue}>
                                <Link to={`/category/${(category.fieldValue)}/`}>
                                    {category.fieldValue} ({category.totalCount})
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    );
}

CategoryPage.propTypes = {
    data: PropTypes.shape({
        allMds: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
}

export default CategoryPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(limit: 2000) {
            group(field: { frontmatter: { category: SELECT }}) {
                fieldValue
                totalCount
            }
        }
    }
`