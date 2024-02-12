import React from "react"
import { StaticImage} from "gatsby-plugin-image";


const WriterProfile = (props) => (
    <div className="flex justify-center text-sm ">
        <div className=" w-2/4 padding bg-white">
            <div className=" primary-coler prime text-sm padding">
                <div className="padding-b text-center font-bold">Gatsby-starter-tricycle Creator</div>
                <div className="text-center">Tatsuo Nakano</div>
                <div className="flex justify-center">
                    <StaticImage className="w-2/3 shadow-2xl mb-2.5 rounded-full" src="../../images/parts/monster01.png"
                                 alt="webmaster"/>
                </div>
                <div>Hello, I'm the author of gatsby-starter-tricycle. I hope you create an interesting website using
                    this starter. Please show me the wonderful work when it's finished. I'm also open to feedback on the
                    starter and invitations for mutual linking. Let's enjoy web development together.
                </div>
            </div>
        </div>
    </div>
)

export default WriterProfile


