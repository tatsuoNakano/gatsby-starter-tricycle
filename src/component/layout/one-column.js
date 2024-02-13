import React from "react"
import AccordionCategory from "../parts/accordion-category";
import {Sidebar} from "../parts/sidebar";


const OneColumn = () => (
    <div className="mr-2.5 ml-2.5 secondary-coler text-white hidden lg:block lg:col-span-3 xl:col-span-3">
        <Sidebar/>
<AccordionCategory/>

    </div>

)

export default OneColumn