import React from "react"
import TagCloud from "../parts/tag-cloud";
import HeadlineTitle from "../parts/headline-title";
import Publication from "../parts/publication";
import UpdateDay from "../parts/update-day";


const HeadlineInfo = (props) => (


    <div >
        <HeadlineTitle title={props.title}/>
        <Publication Publication={props.publication}/>
        <UpdateDay update={props.update}/>
        <TagCloud tags={props.tags}/>
    </div>
)

export default HeadlineInfo