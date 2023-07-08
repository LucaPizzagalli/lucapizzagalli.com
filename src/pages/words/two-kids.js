import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Deck from "../../components/deck"

import "./two-kids/white.css"


function TwoKidsDeck() {
  return (
    <div className="white">
      <Deck location="/words/two-kids" backgroundColor="#FFFFFF">

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/family.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/names.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/prior1D.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/combo2D.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/prior2D.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/question.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/unknown2D.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/equivalence.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/allowed2D.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/posterior2D.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/question_.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/unknown2D.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/process.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/prior1D_.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/combo3D.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/prior3D.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/allowed3D.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/posterior3D.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/posterior2D_.png"
            style={{ width: "100%" }} />
        </section>

        <section>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./two-kids/images/openQuestion.png"
            style={{ width: "100%" }} />
        </section>

      </Deck >
    </div>
  );
}

export default TwoKidsDeck
