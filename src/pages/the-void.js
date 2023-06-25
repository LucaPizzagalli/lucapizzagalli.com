import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function TheVoidPage() {
    return (
        <div style={{
            backgroundColor: "#ecbdc4",
            minHeight: "100vh",
            width: "100vw",
            position: "absolute",
            left: 0,
            top: 0,
            fontFamily: "Helvetica, Sans-Serif",
            fontWeight: "bolder",
            textAlign: "center",
            color: "#cf268a",
            filters: "none",
        }}>
            <h1>My website</h1>
            <p>It doesn&#39;t exist anymore.</p>
            <p>You broke it.</p>
            <StaticImage
                src="./the-void/unicorn.png"
                width={"600"}
                alt="Common animal found inhabiting the void."
                imgStyle={{filters: "none", backgroundColor: "#ffffff"}} />
        </div>
    );
}

export default TheVoidPage
