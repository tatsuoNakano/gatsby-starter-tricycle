import React from "react"
import PropTypes from "prop-types"
import Layout from '../../component/layout/layout'
// Utilities


// Components

import { Link, graphql } from "gatsby"

const TagsPage = ({
                      data: {
                          allMdx: { group },
                          site: {
                              siteMetadata: { title },
                          },
                      },
                  }) => (
                      <Layout>
    <div>
            <h1>Tags</h1>
                {group.map(tags => (

                    <span
                        key={tags.fieldValue}
                        className="mb-2.5 mt-2.5 inline-block bg-gray-300 text-gray-800 px-4 py-2 rounded-full text-xs font-bold mr-2  relative"
                    >
                        <Link className="text-sm font-bold" to={`/tag/${(tags.fieldValue)}/`}>
                            {tags.fieldValue} ({tags.totalCount})
                        </Link>
                        <span className="absolute right-0 top-0 bottom-0 bg-gray-300 w-4"></span>
                    <span className="absolute right-0 top-0 bottom-0 bg-gray-400 w-3"></span>
                </span>
                    ))}
    </div>
                      </Layout>
)

TagsPage.propTypes = {
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

export default TagsPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMdx(limit: 2000) {
            group(field: { frontmatter: { tags: SELECT }}) {
                fieldValue
                totalCount
            }
        }
    }
`