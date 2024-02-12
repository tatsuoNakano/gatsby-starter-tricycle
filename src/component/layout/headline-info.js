import React from "react"
import TagCloud from "../parts/tag-cloud";
import HeadlineTitle from "../parts/headline-title";
import Publication from "../parts/publication";
import UpdateDay from "../parts/update-day";
import BreadCrumbs from "../parts/breadcrumbs";
import Thumbnail from "../parts/thumbnail";

const HeadlineInfo = (props) => (


    <div　className="mb-2.5">
        <div className="padding mb-2.5 bg-white">
            <BreadCrumbs category={props.category}/>
        </div>
        <HeadlineTitle title={props.title}/>
        <Thumbnail
            thumbnail={props.thumbnail}
            alt={props.alt}
            credit={props.credit}
            imgdescription={props.imgdescription}
            link={props.link}
        />
        <div className="padding bg-gray-200">
            <Publication Publication={props.publication}/>
            <UpdateDay update={props.update}/>
        </div>
        <div className="mt-2.5 padding bg-white">
            <TagCloud tags={props.tags}/>
        </div>

        </div>
        )

        export default HeadlineInfo