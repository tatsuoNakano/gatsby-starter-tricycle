import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from "./header";
import Footer from "./Footer";
import OneColumn from "./one-column";
import ThreeColumn from "./three-column";

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
<body className="bg-gray-800 text-white">
    <Header/>
    <OneColumn/>
    <div >{data.site.siteMetadata.title}</div>
    {children}
    <Link to="/category/">カテゴリーリンク</Link>
    <Link to="/post/">投稿リンク</Link>
    <Link to="/">トップ</Link>
    <ThreeColumn/>
    <Footer/>
</body>
    )
}

export default Layout