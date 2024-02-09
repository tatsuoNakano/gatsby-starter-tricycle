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

        <div>
            <h1>Tags</h1>
            <ul>
                {group.map(tags => (
                    <li key={tags.fieldValue}>
                        <Link to={`/tag/${(tags.fieldValue)}/`}>
                            {tags.fieldValue} ({tags.totalCount})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
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