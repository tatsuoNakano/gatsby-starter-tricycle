import React from "react"
import TagCloud from "../parts/tag-cloud";
import HeadlineTitle from "../parts/headline-title";
import Publication from "../parts/publication";
import UpdateDay from "../parts/update-day";
import BreadCrumbs from "../parts/breadcrumbs";
import {BlogCard} from "../parts/blog-card";


const HeadlineInfo = (props) => (


    <div >
        <BreadCrumbs category={props.category}/>
        <HeadlineTitle title={props.title}/>
        <BlogCard slug={props.slug} title={props.title} description={props.description} thumbnail={props.thumbnail}/>
        <Publication Publication={props.publication}/>
        <UpdateDay update={props.update}/>
        <TagCloud tags={props.tags}/>
    </div>
)

export default HeadlineInfo