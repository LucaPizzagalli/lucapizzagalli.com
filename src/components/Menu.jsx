import { A, useLocation } from "@solidjs/router";
import { Show, createSignal } from "solid-js";
import "./Menu.css";

const navigation = [
  { title: "Home", url: "/", folder: "" },
  { title: "Things", url: "/things", folder: "things" },
  { title: "Words", url: "/words", folder: "words" },
  { title: "About", url: "/about", folder: "about" },
];

export default function Menu(props) {
  const location = useLocation();
  const [isHidden, setIsHidden] = createSignal(props.foldable);

  const activeFolder = () => location.pathname.split("/")[1] || "";

  const handleClick = (item) => (e) => {
    e.preventDefault();
    props.setPage(item.folder);
  };

  const renderItem = (element) => {
    const style = () =>
      element.folder === activeFolder()
        ? { color: "var(--menu-active-color, var(--highlight-color))" }
        : {};
    return (
      <li>
        <Show
          when={props.setPage}
          fallback={<A href={element.url} style={style()}>{element.title}</A>}
        >
          <a href={element.url} onClick={handleClick(element)} style={style()}>
            {element.title}
          </a>
        </Show>
      </li>
    );
  };

  if (props.foldable) {
    return (
      <Show when={isHidden() ? "closed" : "open"} keyed>
        {(state) => (
          <div
            class={
              (props.menuTheme || "") +
              " nav-wrapper " +
              (state === "closed" ? "reverse" : "")
            }
          >
            <nav class="sliding-text-wrapper">
              <ul class="sliding-text">{navigation.map(renderItem)}</ul>
            </nav>
            <button
              class="menu-circle column"
              onClick={() => setIsHidden(false)}
              aria-label="open menu"
            >
              <div class="menu-inner-circle" />
              <div
                class="menu-half-circle-wrapper"
                style={{ "clip-path": "inset(0 50% 0 0)" }}
              >
                <div
                  class="menu-half-circle left-animated"
                  style={{ "animation-name": "animation-circle-left" }}
                />
              </div>
              <div
                class="menu-half-circle-wrapper"
                style={{ "clip-path": "inset(0 0 0 50%)" }}
              >
                <div
                  class="menu-half-circle right-animated"
                  style={{ "animation-name": "animation-circle-right" }}
                />
              </div>
            </button>
            <button
              class="menu-line column"
              onClick={() => setIsHidden(true)}
              aria-label="close menu"
            >
              <div class="menu-inner-line" />
            </button>
          </div>
        )}
      </Show>
    );
  }

  return (
    <nav>
      <ul>{navigation.map(renderItem)}</ul>
    </nav>
  );
}
