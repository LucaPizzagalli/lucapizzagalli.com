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
    return (
        <menu>
            {navigation.map(element => (
                <li key={element.url}>
                    {loop && loop.level > 0 ?
                        <div onClick={() => { loop.setUrl(element.url); }}
                            style={element.folder === folder ?
                                { cursor: 'pointer', textDecoration: "underline", color: "#01ff70" }
                                :
                                { cursor: 'pointer', textDecoration: "underline" }}
                        >
                            {element.title}
                        </div>
                        :
                        <Link to={element.url}
                            style={element.folder === folder ? { color: "#01ff70" } : {}}
                        >
                            {element.title}
                        </Link>
                    }
                </li>
            ))}
        </menu>
    );
}

export default Menu
