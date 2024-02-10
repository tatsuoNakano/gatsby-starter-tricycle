import * as React from 'react'
import { Link } from 'gatsby'
// import Header from "./header";
import Footer from "./Footer";
import OneColumn from "./one-column";
import ThreeColumn from "./three-column";
import HeroImg from "./hero-img";
import StickyNavbar from "./header";





const Layout = ({ children }) => {

    return (
<body >
    {/*<Header/>*/}
    <StickyNavbar/>
    <HeroImg/>
    <div className="grid grid-cols-12 gap-0 m-0 p-0">
        <OneColumn/>
            <div className="padding primary-coler col-span-12  lg:col-span-9 xl:col-span-6">
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


