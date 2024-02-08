const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const tagsTemplate = path.resolve("src/templates/tags.js")


    const outcome = await graphql(`
        {
            categoryGroup: allMdx {
                group(field: {frontmatter: {tags: SELECT}}) {
                    fieldValue
                }
            }
        }
    `)

    if (outcome.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const tagfamily = outcome.data.categoryGroup.group

    tagfamily.forEach(tags => {
        createPage({
            path: `/tags/${tags.fieldValue}/`,
            component: tagsTemplate,
            context: {
                category: tags.fieldValue,
            },
        })
    })
}

