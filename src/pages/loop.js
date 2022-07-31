import React, { useState } from 'react';

import Layout from "../components/layout";
import IndexPage from "./index";
import ProjectsPage from "./projects";
import AboutPage from "./about";
import BlogPage from "./blog";

let texts = [
    "Well, you are already seeing my website, anyway, here it is again.",
    "Mmm... Sure, same stuff.",
    "Yeah, it works, it just goes on.",
    "Yup, nothing new.",
    "...",
    "...",
    "Hey... still here.",
    "I see.",
    "...",
    "...",
    "You won, there is nothing more. You can stop now, congratulation!",
    "Damn.",
    "You're a stubborn one, you know?",
    "...",
    "Actually, if you now watch outside the screen you'll see something weird.",
    "Did you see it? yep, pretty weird.",
    "...",
    "Thanks for keeping me company.",
    "The end.",
    "...",
    "...",
    "...",
]

function LoopPage({ loop }) {
    let [page, setPage] = useState(<IndexPage />);

    let setUrl = (url) => {
        if (url === "/")
            setPage(<IndexPage />);
        else if (url === "/projects")
            setPage(<ProjectsPage />);
        else if (url === "/about")
            setPage(<AboutPage />);
        else if (url === "/blog")
            setPage(<BlogPage />);
        else if (url === "/loop")
            setPage(<LoopPage />);
    }
    let next_loop = { level: loop.level + 1, setUrl: setUrl };

    return (
        <Layout loop={loop} location="/loop">
            <h1>My website</h1>
            <p className="main-text">{texts[loop.level % texts.length]}</p>
            <div style={{ border: "3px solid #01ff70" }}>
                {
                    React.cloneElement(page, { loop: next_loop })
                }
            </div>
        </Layout>
    );
}

LoopPage.defaultProps = {
    loop: { level: 0 }
}

export default LoopPage
