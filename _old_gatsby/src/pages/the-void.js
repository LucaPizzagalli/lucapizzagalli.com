import React from "react";
import { StaticImage } from "gatsby-plugin-image";


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
            <h1 style={{margin: "6rem auto 4rem auto"}}>My website</h1>
            <p>It doesn&#39;t exist anymore.</p>
            <p>You broke it.</p>
            <StaticImage
                src="./the-void/images/unicorn.png"
                loading="eager"
                alt="Common animal found inhabiting the void."
                style={{width: "60vh"}}/>
        </div>
    );
}


export default TheVoidPage;
