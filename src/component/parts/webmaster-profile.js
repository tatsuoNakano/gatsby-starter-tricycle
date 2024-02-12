import React from "react"
import {StaticImage} from "gatsby-plugin-image";


const WebmasterProfile = () => (
    <div className="m-2.5 primary-coler prime text-sm padding">
<div className="padding-b text-center font-bold">Gatsby-starter-tricycle Creator</div>
       <div className="text-center">Tatsuo Nakano</div>
            <div className="flex justify-center">
        <StaticImage className="w-2/3 shadow-2xl mb-2.5 rounded-full"  src="../../images/parts/monster01.png" alt="webmaster" />
            </div>
        <div>Hello, I'm the author of gatsby-starter-tricycle. I hope you create an interesting website using this starter. Please show me the wonderful work when it's finished. I'm also open to feedback on the starter and invitations for mutual linking. Let's enjoy web development together.</div>
    </div>
)

export default WebmasterProfile