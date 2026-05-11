import { A, useLocation } from "@solidjs/router";
import "./Menu.css";

const navigation = [
  { title: "Home", url: "/", folder: "" },
  { title: "Things", url: "/things", folder: "things" },
  { title: "Words", url: "/words", folder: "words" },
  { title: "About", url: "/about", folder: "about" },
];

export default function Menu() {
  const location = useLocation();
  const folder = () => location.pathname.split("/")[1];

  return (
    <div class="website-menu">
      <menu>
        {navigation.map((element) => (
          <li>
            <A
              href={element.url}
              style={element.folder === folder() ? { color: "var(--highlight-color)" } : {}}
            >
              {element.title}
            </A>
          </li>
        ))}
      </menu>
    </div>
  );
}
