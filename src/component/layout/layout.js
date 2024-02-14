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
            <div className="block secondary-coler  col-span-12  lg:col-span-9 xl:col-span-6 padding">
            {children}
                <ul className="bg-gray-300 mt-2.5 padding">
                <li className="ml-2.5"><Link to="/category/">Category</Link></li>
                <li className="ml-2.5"><Link to="/post/">Post</Link></li>
                <li className="ml-2.5"><Link to="/">Top</Link></li>
                <li className="ml-2.5"><Link to="/tags/">Tags</Link></li>
                <li className="ml-2.5"><Link to="/404/404">404</Link></li>
                </ul>
            </div>
        <ThreeColumn/>
    </div>
    <Footer/>
</body>
    )
}

export default Layout


