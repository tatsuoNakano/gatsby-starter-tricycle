









# Main technologies used


* Gatsby -v 5.12.2
* Babel
* Webpack
* Postcss
* GraphQL
* React
* material tailwind
* node.js -v 20.11.0
* tailwindcss
* MDX
* markdown
* HTML
* CSS
* Javascript
* Git
* Github
*  Webstorm


---


# Link to external documentation



* [gatsby](https://www.gatsbyjs.com/)
* [React](https://react.dev/)
* [GraphQL](https://graphql.org/)
* [material tailwind](https://www.material-tailwind.com/)
* [node.js](https://nodejs.org/en)
* [tailwindcss](https://tailwindcss.com/)
* [MDX](https://mdxjs.com/)
* [markdown](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Git](https://git-scm.com/)
* [Github](https://github.com/)
*  [Webstorm](https://www.jetbrains.com/webstorm/)


---


# Project Outline

Gatsby-starter-tricycle is a starter template for building websites and web applications created using the GatsbyJS framework.
## Technology stack:

- GatsbyJS: React-based static site generator to build websites fast and efficiently.。
- React: A popular JavaScript library for building modern UI components.
- GraphQL: A query language for querying and retrieving data. Gatsby uses GraphQL to retrieve data and build pages.


- Responsive design: Built-in responsive design suitable for use on mobile devices and desktops.
- SEO optimization: Utilizing the characteristics of Gatsby, it has built-in functions to build websites with excellent SEO.
- Styling: Flexible styling is possible using tailwndcss.
- Customizability: Take advantage of Gatsby's capabilities to easily customize pages and components.
  

- Page templates: Provides templates for commonly used pages, making it easy to add new pages.
- Component library: Contains reusable React components to improve development efficiency.
- Data acquisition and management: Use GraphQL to acquire and integrate external and local data into your website.


By leveraging GatsbyJS's official documentation and community forums, developers can effectively resolve issues and extend their projects.
Gatsby-starter-tricycle is a tool that allows both beginners and experienced developers to smoothly build static websites and web applications.
---


# Gatsby command list

| command | explanation |
|---------|------|
| develop |  |
| start   | Run the gatsby develop command to set up a development server |
| build   | Execute the gatsby build command and output the source code for publishing the site |
| serve   | Run the gatsby serve command and set up a server to check the source code output for publication |
| clean   | Execute the gatsby clean command to delete the cache. If you use this command when you change the directory or file structure or when a cache-related error occurs, the error will be resolved. |



---


# Directory structure


| directory/file | explanation |
|-----------------------|------|
| /post/                | Where to put your MDX articles |
| /src/                 | Where to mainly edit source code |
| /public/              | The location where the built code is output when gatsby builds. Publish this content when publishing the site |
| /gatsby-config.js     | Used when adding gatsby plugins. You can run the plugin by writing here. |


## /src/ directory description


| directory/file | explanation |
|-----------------------|------|
| /component/           | Directory to place React components |
| /hooks/               | Directory for placing SEO-related components |
| /image/               | A directory where images such as icons and profile images commonly used within the site are placed. |
| /static/              | Where to place files such as favicon and files that you do not want to be processed by webpack |
| /tamplate/            | A special directory for Gatsby. It receives a dynamically created page with gatsby-node.js and outputs the page according to the instructions in the files in this directory. |
| /style/               | Directory where CSS and Tailwind CSS related files are placed. Since tailwindcss is overwritten with global.css, normal CSS written in global.css will be applied. However, it is not recommended for tailwindcss, so it is better not to use it too often. It is recommended to use tailwindcss for styling. |


---


# How to build a development environment

[Gastby Tutorials](https://www.gatsbyjs.com/docs/tutorial/)


---


# troubleshooting
[https://github.com/tatsuoNakano/gatsby-starter-tricycle](https://github.com/tatsuoNakano/gatsby-starter-tricycle)
Please contact me here

If the page does not display well, the cache may be at fault, so try using the gatsby clean command.



