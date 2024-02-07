// Step 1: Import React
import * as React from 'react'
import Layout from '../component/layout/layout'
import { Seo } from "../component/function/seo"

// Step 2: Define your component
const IndexPage = () => {
  return (
      <main>
          <Layout pageTitle="Home Page">
              <p>I'm making this by following the Gatsby Tutorial.</p>
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