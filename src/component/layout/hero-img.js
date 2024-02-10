import React from "react"
import { StaticImage } from "gatsby-plugin-image"


const HeroImg = () => (
    <div className="pt-14 lg:pt-0 text-center">
        <StaticImage  aspectRatio={16/6}  className="" src="../../images/parts/PP_chari.jpg" alt=""/>
    </div>
)

export default HeroImg