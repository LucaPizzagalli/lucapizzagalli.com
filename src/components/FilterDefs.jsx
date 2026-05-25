// Inline <svg> filter defs referenced by the --green-filter / --noise-filter /
// --distortion-filter CSS variables. Lives in the DOM at all times so any page can
// pick up the filter via `filter: var(--noise-filter)` etc.
//
// Safari does not resolve fragment identifiers inside `data:` URLs, so the
// previous approach (entire SVG embedded in the CSS var) silently produced no
// effect. Putting the filters inline and referencing by plain `#id` works
// everywhere.

export default function FilterDefs() {
  return (
    <svg aria-hidden="true" style={{ position: "absolute", width: 0, height: 0 }}>
      <filter
        id="green-filter"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feColorMatrix
          type="matrix"
          values=" 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0"
          in="SourceGraphic"
        />
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0.4 0" />
          <feFuncG type="table" tableValues="0.4 1" />
          <feFuncB type="table" tableValues="0.4 0.44" />
          <feFuncA type="table" tableValues="0 1" />
        </feComponentTransfer>
        <feBlend in2="SourceGraphic" mode="hue" />
      </filter>

      <filter id="distortion-filter" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence baseFrequency="0.01 0.4" result="turbulence" numOctaves="2" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="turbulence"
          scale="12"
          xChannelSelector="R"
          yChannelSelector="R"
        />
      </filter>

      <filter id="distortion-filter-light" x="-4%" y="-4%" width="108%" height="108%">
        <feTurbulence baseFrequency="0.01 0.4" result="turbulence" numOctaves="2" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="turbulence"
          scale="5"
          xChannelSelector="R"
          yChannelSelector="R"
        />
      </filter>

      <filter id="noise-filter">
        <feTurbulence baseFrequency="0.60,0.90" />
        <feColorMatrix
          type="matrix"
          values=" .33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 2 0"
        />
        <feComposite operator="in" in2="SourceGraphic" />
        <feBlend in2="SourceGraphic" mode="multiply" />
      </filter>
    </svg>
  );
}
