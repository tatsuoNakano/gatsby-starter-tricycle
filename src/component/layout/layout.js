import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from "./header";
import Footer from "./Footer";
import OneColumn from "./one-column";
import ThreeColumn from "./three-column";
import {Seo} from "../function/seo";


const Layout = ({ children }) => {
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
    <div className="grid grid-cols-12 gap-0">
        <OneColumn/>
            <div className="bg-gray-400 col-span-6">{data.site.siteMetadata.title}
            {children}
                <li><Link to="/category/">カテゴリーリンク</Link></li>
                <li><Link to="/post/">投稿リンク</Link></li>
                <li><Link to="/">トップ</Link></li>
                <li><Link to="/tags/">タグ</Link></li>
                <li><Link to="/404/404">404</Link></li>
            </div>
        <ThreeColumn/>
    </div>
    <Footer/>
</body>
    )
}

export default Layout


