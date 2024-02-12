import React from "react"
import {GatsbyImage} from "gatsby-plugin-image";


const Thumbnail = (props) => (
    <div className="flex justify-center text-sm padding-b">
        <div className=" img-w padding pb-20 bg-gray-800">
            <GatsbyImage height={100} alt={props.alt} image={props.thumbnail}/>
            <div className="mt-2.5 text-gray-50 text-center padding　text-lg">{props.credit}.credit</div>
            <div className="mt-2.5 text-gray-50 text-center padding　text-sm">{props.imgdescription}</div>
            <div className="pt-2.5 text-center">
            <a className=" text-gray-50  padding　text-sm" href={props.link}>{props.link}</a>
            </div>
        </div>
    </div>
)

export default Thumbnail


