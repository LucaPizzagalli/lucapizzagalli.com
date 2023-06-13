import React, { useState } from 'react';

import Layout from "../components/layout";
import IndexPage from "./index";
import ThingsPage from "./things";
import AboutPage from "./about";
import BlogPage from "./blog";

let texts = [
    "Well, you are already seeing my website, anyway, here it is again.",
    "Mmm... Sure, same stuff.",
    "Yeah, it works, it just goes on.",
    "Yup, nothing new.",
    "...",
    "...",
    "Hem... what are you looking for?",
    "...Still here. I see.",
    "...",
    "...",
    "Congratulation! You won, there is nothing more. You can stop now.",
    "Damn.",
    "So you're a stubborn one.",
    "...",
    "Actually, if you now watch outside the screen you'll see something weird.",
    "Did you see it? yep, pretty weird.",
    "...",
    "Hey! Hey!, something weird is happening, you're going to deep.",
    "You have to stop it!",
    "Screw you, I'll try to fix that.",
    "Maybe if I restart it...",
]

function LoopPage({ loop }) {
    let [page, setPage] = useState(<IndexPage />);

    let setUrl = (url) => {
        if (url === "/")
            setPage(<IndexPage />);
        else if (url === "/things")
            setPage(<ThingsPage />);
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
            <p>{texts[loop.level % texts.length]}</p>
            <div style={loop.level % texts.length === 17 ? { border: "3px solid var(--highlight-color)", filter: "var(--noise-filter)" } : { border: "3px solid var(--highlight-color)"}}>
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
