const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const categoryTemplate = path.resolve("src/templates/category.js")
    const tagTemplate = path.resolve("src/templates/tag.js")


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


    const categories = result.data.categoryGroup.group
    const tagfamily = outcome.data.tagGroup.group

    categories.forEach(category => {
        createPage({
            path: `/category/${category.fieldValue}/`,
            component: categoryTemplate,
            context: {
                category: category.fieldValue,
            },
        })
    })

    tagfamily.forEach(tags => {
        createPage({
            path: `/tag/${tags.fieldValue}/`,
            component: tagTemplate,
            context: {
                tags: tags.fieldValue,
            },
        })
    })
}

