import { Link } from "gatsby";
import React from "react";

let navigation = [
    {
        title: "Home",
        url: "/",
        folder: "",
    },
    {
        title: "Side Projects",
        url: "/projects",
        folder: "projects",
    },
    {
        title: "Blog",
        url: "/blog",
        folder: "blog",
    },
    {
        title: "About",
        url: "/about",
        folder: "about",
    }
];

function Menu({ loop, location }) {
    let folder = location.split('/')[1];
    if (loop && loop.level > 0)
        console.log(loop.level)
    if (loop && loop.level === 42)
        return (
            <menu>{navigation.map(element => (
                <li key={element.url}>
                    <Link to="/the-void">
                        {element.title}
                    </Link>
                </li>
            ))}</menu>
        );

    if (loop && loop.level > 0)
        return (
            <menu>{navigation.map(element => (
                <li key={element.url}>
                    <div onClick={() => { loop.setUrl(element.url); }}
                        style={element.folder === folder ?
                            { cursor: 'pointer', textDecoration: "underline var(--highlight-color)", color: "var(--highlight-color)" }
                            :
                            { cursor: 'pointer', textDecoration: "underline var(--highlight-color)" }}
                    >
                        {element.title}
                    </div>
                </li>
            ))}</menu>
        );

    return (
        <menu>{navigation.map(element => (
            <li key={element.url}>
                <Link to={element.url}
                    style={element.folder === folder ? { color: "var(--highlight-color)" } : {}}
                >
                    {element.title}
                </Link>
            </li>
        ))}</menu>
    );
}

export default Menu
