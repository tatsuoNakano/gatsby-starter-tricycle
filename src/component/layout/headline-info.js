import React from "react"
import TagCloud from "../parts/tag-cloud";
import HeadlineTitle from "../parts/headline-title";


const HeadlineInfo = (props) => (


    <div >
        <HeadlineTitle title={props.title}/>
        <TagCloud tags={props.tags}/>
    </div>
)

export default HeadlineInfo