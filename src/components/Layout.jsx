import Menu from "./Menu";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div class="page">
      <main>{props.children}</main>
      <Menu />
    </div>
  );
}
