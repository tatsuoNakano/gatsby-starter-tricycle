// Step 1: Import React
import * as React from 'react'
import Layout from '../component/layout/layout'
import { Seo } from "../component/function/seo"


// Step 2: Define your component
const IndexPage = () => {
  return (
      <main>
          <Layout pageTitle="Home Page">
              <h1 className="mb-2 padding-b text-xl font-semibold text-gray-900 bg-gradient-to-br from-gray-200 to-gray-300 p-4 shadow-md border-l-4 border-blue-500">Thank
                  you for installing Gatsby-starter-tricycle!</h1>

          </Layout>
      </main>
  )
}

// You'll learn about this in the next task, just copy it for now


// Step 3: Export your component
export default IndexPage

export const Head = () => (
    <Seo />
)