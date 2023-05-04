import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

async function getBlogs() {

    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blogPost`, { cache: 'no-cache' });

    if (!res.ok) {
        throw new Error('Failed to Fetch Data');
    }

    return res.json();
};

const page = async () => {

    const blogs = await getBlogs();

    return (
        <>
            {blogs.items.map((item: any) => {
                return (
                    <div key={item.sys.id} className="flex flex-col items-center">
                        <div className="py-4 text-3xl font-bold max-w-4xl text-center">
                            {item.fields.title}
                        </div>

                        <div className="max-w-4xl my-8 text-2xl text-justify leading-7">
                            {documentToReactComponents(item.fields.articleText)}
                        </div>
                    </div>
                )
            })}
        </>
    )
};

export default page;