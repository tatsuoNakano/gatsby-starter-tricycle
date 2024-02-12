import React from "react"
import {GatsbyImage} from "gatsby-plugin-image";


const WriterProfile = (props) => (
    <div className="flex justify-center text-sm ">
        <div className=" w-2/4 padding bg-white">
            <div className="text-center primary-coler prime text-sm padding">
                <div className="padding-b text-center font-bold">Author of this article</div>
                <div className="text-center padding-b">{props.writer}</div>
                <div className="flex justify-center">
                    <GatsbyImage className="mb-2.5 shadow-2xl  rounded-full" height={100}  alt="writerprofile" image={props.writerface}/>
                </div>
                <a href={props.writerlink}>{props.writerlink}</a>
            </div>
        </div>
    </div>
)

export default WriterProfile


