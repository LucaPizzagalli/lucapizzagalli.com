import Menu from "./Menu";

export default function Layout(props) {
  return (
    <div class="page">
      <main>{props.children}</main>
      <Menu outsideLoop={props.outsideLoop} />
    </div>
  );
}
