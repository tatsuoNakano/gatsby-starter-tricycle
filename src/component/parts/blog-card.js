import React from "react"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import {StaticImage} from "gatsby-plugin-image";



export function BlogCard(props,data) {

    return (


        <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0"
            >

            </CardHeader>
            <CardBody>
            <StaticImage src={`${props.thumbnail}`}/>
                <Typography variant="h4" color="blue-gray">
                    {props.title}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    {props.description}{props.slug}{props.thumbnail}{`/post/${props.slug}/${props.thumbnail}/`}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    {`/post/${props.slug}/${props.thumbnail}`}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                    <Tooltip content="Natali Craig">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="natali craig"
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                            className="border-2 border-white hover:z-10"
                        />
                    </Tooltip>
                    <Tooltip content="Tania Andrew">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="tania andrew"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            className="border-2 border-white hover:z-10"
                        />
                    </Tooltip>
                </div>
                <Typography className="font-normal">January 10</Typography>
            </CardFooter>
        </Card>
    );
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                thumbnail {
                    childrenImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`
