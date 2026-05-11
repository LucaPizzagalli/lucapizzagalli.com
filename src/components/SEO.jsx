import { Title, Meta } from "@solidjs/meta";

export default function SEO(props) {
  const title = props.title || "Luca Pizzagalli";
  const description = props.description || "Luca Pizzagalli personal website.";
  return (
    <>
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
    </>
  );
}
