import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Deck from "../../components/deck"

import "./two-kids/white.css"


function TwoKidsDeck() {
  return (
    <Deck location="/words/two-kids" deckTheme="white">

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/family.png"
          style={{ width: "100%" }}
          alt="A woman and two kids." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/names.png"
          style={{ width: "100%" }}
          alt="A = day of the week on which kid 1 was born. 
            B = day of the week on which kid 2 was born." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/prior1D.png"
          style={{ width: "100%" }}
          alt="Both A and B have a uniform probability distribution on the week domain (p=1/7)." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/combo2D.png"
          style={{ width: "100%" }}
          alt="There are 7*7=49 total combinations." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/prior2D.png"
          style={{ width: "100%" }}
          alt="The probability distribution over the combinations is still uniform (p=1/49)." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/question.png"
          style={{ width: "100%" }}
          alt="Q: 'Was at least one of your kids born on Monday?' 
            A: 'At least one of my kids was born on Monday'." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/unknown2D.png"
          style={{ width: "100%" }}
          alt="You need to figure out the new probability distribution over the combinations (p=?)." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/equivalence.png"
          style={{ width: "100%" }}
          alt="'Was at least one of your kids born on Monday?' = 
            'Is A=M and B=M or A=M and B not N or A not M and B=M ?' = 
            'Is one of these combinations? A=B B=M, 
            A=M B=T, A=M B=W, A=M B=T, A=M B=F, A=M B=S, A=M B=S, 
            A=T B=M, A=W B=M, A=T B=M, A=F B=M, A=S B=M, A=S B=M'." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/allowed2D.png"
          style={{ width: "100%" }}
          alt="There are only 13 allowed combinations now." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/posterior2D.png"
          style={{ width: "100%" }}
          alt="The updated probability distribution is uniform along the allowed combinations (p=1/13) 
            and 0 everywhere else." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/question_.png"
          style={{ width: "100%" }}
          alt="Q: 'On what day of the week was at least one of your kids born?' 
            A: 'At least one of my kids was born on Monday'." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/unknown2D.png"
          style={{ width: "100%" }}
          alt="You need to figure out the new probability distribution over the combinations (p=?)." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/process.png"
          style={{ width: "100%" }}
          alt="'On what day of the week was at least one of your kids born?' => Coin toss => (50% kid 1, 50% kid 2)" />
          </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/prior1D_.png"
          style={{ width: "100%" }}
          alt="Both A and B have a uniform probability distribution (p=1/7), the coin has uniform probability over (head, tail)." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/combo3D.png"
          style={{ width: "100%" }}
          alt="There are 7*7*2=98 total combinations." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/prior3D.png"
          style={{ width: "100%" }}
          alt="Before the answer is given, the probability distribution over all the 98 combinations is uniform (p=1/98)." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/allowed3D.png"
          style={{ width: "100%" }}
          alt="After the answer is given, only 14 valid combinations are left." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/posterior3D.png"
          style={{ width: "100%" }}
          alt="After the answer is given, the probability distribution over the 14 valid combinations is uniform (p=1/14)." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/posterior2D_.png"
          style={{ width: "100%" }}
          alt="If you project the pdf in 2D, ignoring the coin toss case, 
          you get a distribution that's not uniform anymore, 
          as the combination MM is the sum of two valid combinations in the 3D space." />
      </section>

      <section>
        <StaticImage
          loading="eager"
          objectFit="contain"
          src="./two-kids/images/openQuestion.png"
          style={{ width: "100%" }}
          alt="Unprompted statement: 'Hey you! At least one of my kids was born on Monday'. 
            What's the probability distribution in this case?" />
      </section>

    </Deck >
  );
}

export default TwoKidsDeck
