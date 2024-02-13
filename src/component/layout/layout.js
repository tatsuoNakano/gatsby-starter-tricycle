import * as React from 'react'
import { Link } from 'gatsby'
import Footer from "./footer";
import OneColumn from "./one-column";
import ThreeColumn from "./three-column";
import HeroImg from "./hero-img";
import StickyNavbar from "./header";





const Layout = ({ children }) => {

    return (
<body className="primary-coler">
    {/*<Header/>*/}
    <StickyNavbar/>
    <HeroImg/>
    <div className="grid grid-cols-12 gap-0 m-0 p-0">
        <OneColumn/>
            <div className="padding secondary-coler  col-span-12  lg:col-span-9 xl:col-span-6">
            {children}
                <ol className="bg-gray-300 mt-2.5 padding">
                <li><Link to="/category/">Category</Link></li>
                <li><Link to="/post/">Post</Link></li>
                <li><Link to="/">Top</Link></li>
                <li><Link to="/tags/">Tags</Link></li>
                <li><Link to="/404/404">404</Link></li>
                </ol>
            </div>
        <ThreeColumn/>
    </div>
    <Footer/>
</body>
    )
}

export default Layout


