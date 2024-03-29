import React from "react"
import {Navbar,
      Typography,
      IconButton,
    Collapse,
} from "@material-tailwind/react";
import {Link} from "gatsby";

export function StickyNavbar() {
      const [openNav, setOpenNav] = React.useState(false);

      React.useEffect(() => {
            window.addEventListener(
                "resize",
                () => window.innerWidth >= 960 && setOpenNav(false),
            );
      }, []);

      const navList = (
          <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li><Link className="text-gray-50" to="/category/">Category</Link></li>
              <li><Link className="text-gray-50" to="/post/">Post</Link></li>
              <li><Link className="text-gray-50" to="/">Top</Link></li>
              <li><Link className="text-gray-50" to="/tags/">Tags</Link></li>
          </ul>
      );

    return (
        <Navbar
            className="lg:hidden  bg-black fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                          href="#"
                          color="white"
                          className="mr-4 cursor-pointer py-1.5 font-medium"
                      >
                          gatsby-starter-tricycle
                      </Typography>
                      <div className="flex items-center gap-4">
                            <div className="mr-4 hidden lg:block">{navList}</div>
                            <div className="flex items-center gap-x-1">
                            </div>
                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                  {openNav ? (
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          className="h-6 w-6"
                                          viewBox="0 0 24 24"
                                          stroke="white"
                                          strokeWidth={2}
                                      >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                      </svg>
                                  ) : (
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6 w-6"
                                          fill="none"
                                          stroke="white"
                                          strokeWidth={2}
                                      >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                      </svg>
                                  )}
                            </IconButton>
                      </div>
                </div>
                <Collapse open={openNav}>
                      {navList}
                      <div className="flex items-center gap-x-1">
                      </div>
                </Collapse>
          </Navbar>
      );
}

export default StickyNavbar