import React from "react"
import { Button } from "@material-tailwind/react";


const OneColumn = () => (
        <div className="mr-2.5 ml-2.5 secondary-coler text-white hidden lg:block lg:col-span-3 xl:col-span-3">
        <Button>Button</Button>
        <div className="flex flex-wrap">

            <span
                className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-xs font-semibold mr-2 mb-2 relative">
            Tag 2
            <span className="absolute right-0 top-0 bottom-0 bg-gray-200 w-4"></span>
            <span className="absolute right-0 top-0 bottom-0 bg-white w-3"></span>
        </span>
            <span
                className="inline-block bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-xs font-semibold mr-2 mb-2 relative">
            Tag 3
            <span className="absolute right-0 top-0 bottom-0 bg-gray-200 w-4"></span>
            <span className="absolute right-0 top-0 bottom-0 bg-white w-3"></span>
        </span>
        </div>
    </div>

)

export default OneColumn