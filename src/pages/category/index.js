import React from "react"
import PropTypes from "prop-types"
import Layout from '../../component/layout/layout'
import {
    List,
    ListItem,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";


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
                    <h1 className="mb-2 padding-b text-xl font-semibold text-gray-900 bg-gradient-to-br from-gray-200 to-gray-300 p-4 shadow-md border-l-4 border-blue-500">All Category</h1>
                    <List>
                        {group.map(category => (
                            <Link to={`/category/${(category.fieldValue)}/`}>
                            <ListItem className="border-gray-200" key={category.fieldValue}>{category.fieldValue}
                                      <ListItemSuffix>
                                          <Chip
                                            value={category.totalCount}
                                            variant="ghost"
                                            size="xl"
                                            className="rounded-full"
                                            />
                                      </ListItemSuffix>
                            </ListItem>
                            </Link>
                        ))}
                    </List>
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