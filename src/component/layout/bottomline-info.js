import React from "react"

import WriterProfile from "../parts/writer-profile";
import TagCloud from "../parts/tag-cloud";
import BreadCrumbs from "../parts/breadcrumbs";


const BottomlineInfo = (props) => (


    <div className="text-base">
        <div className="padding mb-2.5 mt-2.5  bg-gray-200">
            <WriterProfile/>
        </div>
        <div className="bg-white padding">
            <BreadCrumbs category={props.category}/>
        </div>
        <div className="mt-2.5 bg-white padding">
            <TagCloud tags={props.tags}/>
        </div>

        </div>
        )

        export default BottomlineInfo
