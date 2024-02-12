

import React from 'react';
import {Link} from "gatsby";


function TagCloud(props) {
    // propsからtagsという名前の配列を受け取る
    const { tags } = props;

    return (
        <div className=" flex flex-wrap">
            {/* 配列内の各要素に対してタグを出力 */}
            {tags.map((tag, index) => (
                <span
                    key={index}
                    className="inline-block bg-gray-300 text-gray-900 px-4 py-2 rounded-full text-xs font-semibold mr-2  relative"
                >
                    <Link className="text-base font-bold" to={`/tag/${tag}/`}>{tag}</Link>
                    <span className="absolute right-0 top-0 bottom-0 bg-gray-300 w-4"></span>
                    <span className="absolute right-0 top-0 bottom-0 bg-gray-400 w-3"></span>
                </span>
            ))}
        </div>
    );
}

export default TagCloud;

// 使い方
// <TagCloud tags={props.pageContext.frontmatter.tags}/>　フロントメーターからタグ情報を持ってくる