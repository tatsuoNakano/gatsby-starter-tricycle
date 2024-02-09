const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const categoryTemplate = path.resolve("src/templates/category.js")
    const tagTemplate = path.resolve("src/templates/category.js")

    const result = await graphql(`
        {
            categoryGroup: allMdx {
                group(field: {frontmatter: {category: SELECT}}) {
                    fieldValue
                }
            }
        }
    `)
    const outcome = await graphql(`
        {
            tagGroup: allMdx {
                group(field: {frontmatter: {tags: SELECT}}) {
                    fieldValue
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }
    if (outcome.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const categories = result.data.categoryGroup.group
    const tagfamily = outcome.data.tagGroup.group

    categories.forEach(category => {
        createPage({
            path: `/fix/${category.fieldValue}/`,
            component: categoryTemplate,
            context: {
                category: category.fieldValue,
            },
        })
    })
    tagfamily.forEach(tags => {
        createPage({
            path: `/fix/${tags.fieldValue}/`,
            component: tagTemplate,
            context: {
                category: tags.fieldValue,
            },
        })
    })
}

