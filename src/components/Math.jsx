import katex from "katex";
import "katex/dist/katex.min.css";

export default function Math(props) {
  const html = katex.renderToString(props.eq, {
    throwOnError: false,
    displayMode: !!props.block,
  });
  return <span innerHTML={html} />;
}
