import React from "react"

import Layout from "../components/layout";
import HeadTags from "../components/head-tags";

function NotFoundPage() {
    return (
        <Layout location="/404">
            <h1>Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Layout>
    );
}


export function Head(){
    return <HeadTags title="404: Not found" description="" />;
}
export default NotFoundPage
