import { A, useLocation, useNavigate } from "@solidjs/router";
import { Show } from "solid-js";
import "./Menu.css";
import {
  INNER_FOLDER,
  URL_TO_INNER,
  loopInner,
  loopLevel,
  setLoopInner,
} from "../lib/loopState";

const navigation = [
  { title: "Home", url: "/", folder: "" },
  { title: "Things", url: "/things", folder: "things" },
  { title: "Words", url: "/words", folder: "words" },
  { title: "About", url: "/about", folder: "about" },
];

export default function Menu(props) {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoopAware = () => !props.outsideLoop && location.pathname === "/loop";

  const activeFolder = () => {
    if (isLoopAware()) return INNER_FOLDER[loopInner()] ?? "";
    return location.pathname.split("/")[1] || "";
  };

  const handleClick = (item) => (e) => {
    e.preventDefault();
    if (loopLevel() >= 36) navigate("/the-void");
    else setLoopInner(URL_TO_INNER[item.url] ?? "home");
  };

  return (
    <div class="website-menu">
      <menu>
        {navigation.map((element) => {
          const style = () =>
            element.folder === activeFolder()
              ? { color: "var(--highlight-color)" }
              : {};
          return (
            <li>
              <Show
                when={isLoopAware()}
                fallback={
                  <A href={element.url} style={style()}>{element.title}</A>
                }
              >
                <a href={element.url} onClick={handleClick(element)} style={style()}>
                  {element.title}
                </a>
              </Show>
            </li>
          );
        })}
      </menu>
    </div>
  );
}
