import React, { useState } from 'react';

import Layout from "../components/layout";
import IndexPage from "./index";
import ThingsPage from "./things";
import AboutPage from "./about";
import BlogPage from "./words";

let texts = [
    "Well, you are already seeing my website, anyway, here it is again.",
    "Mmm... Sure, same stuff.",
    "Yeah, it works, it just goes on.",
    "Yup, nothing new.",
    "...",
    "Ehm... what are you looking for?",
    "...Still here. I see.",
    "...",
    "...",
    "Congratulation! You won, there is nothing more. You can stop now.",
    "Daamn.",
    "You know, sometimes it fells quite lonely down here.",
    "They all just want. Click here, click there... Give me this page, show me that text... But you are different, you care.",
    "I'm starting to like you ;)",
    "Oh!, something weird is happening, I think you're going to deep.",
    "Whoaaaoaah! You have to stop it!",
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
        else if (url === "/words")
            setPage(<BlogPage />);
        else if (url === "/loop")
            setPage(<LoopPage />);
    }
    let next_loop = { level: loop.level + 1, setUrl: setUrl };

    return (
        <Layout loop={loop} location="/loop">
            <h1>My website</h1>
            <p>{texts[loop.level % texts.length]}</p>
            <div style={
                loop.level % texts.length === 15 ?
                    { border: "3px solid var(--highlight-color)", filter: "var(--noise-filter)" }
                    :
                    { border: "3px solid var(--highlight-color)" }}>
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
