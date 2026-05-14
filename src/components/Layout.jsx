import Menu from "./Menu";

export default function Layout(props) {
  return (
    <div class="page">
      <main class={props.class}>{props.children}</main>
      <Menu outsideLoop={props.outsideLoop} />
    </div>
  );
}
