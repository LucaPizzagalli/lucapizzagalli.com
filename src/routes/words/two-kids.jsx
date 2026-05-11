import Deck from "../../components/Deck";
import SEO from "../../components/SEO";
import "./two-kids.css";

const base = "/words/two-kids/images/";

const Slide = (props) => (
  <section>
    <img
      src={base + props.img}
      alt={props.alt}
      style={{ width: "100%", "object-fit": "contain" }}
      loading="eager"
    />
  </section>
);

export default function TwoKidsDeck() {
  return (
    <>
      <SEO title="Two kids" />
      <Deck deckTheme="white">
        <Slide img="family.png" alt="A woman and two kids." />
        <Slide img="names.png" alt="A = day of the week on which kid 1 was born.
            B = day of the week on which kid 2 was born." />
        <Slide img="prior1D.png" alt="Both A and B have a uniform probability distribution on the week domain (p=1/7)." />
        <Slide img="combo2D.png" alt="There are 7*7=49 total combinations." />
        <Slide img="prior2D.png" alt="The probability distribution over the combinations is still uniform (p=1/49)." />
        <Slide img="question.png" alt="Q: 'Was at least one of your kids born on Monday?'
            A: 'At least one of my kids was born on Monday'." />
        <Slide img="unknown2D.png" alt="You need to figure out the new probability distribution over the combinations (p=?)." />
        <Slide img="equivalence.png" alt="'Was at least one of your kids born on Monday?' =
            'Is A=M and B=M or A=M and B not N or A not M and B=M ?' =
            'Is one of these combinations? A=B B=M,
            A=M B=T, A=M B=W, A=M B=T, A=M B=F, A=M B=S, A=M B=S,
            A=T B=M, A=W B=M, A=T B=M, A=F B=M, A=S B=M, A=S B=M'." />
        <Slide img="allowed2D.png" alt="There are only 13 allowed combinations now." />
        <Slide img="posterior2D.png" alt="The updated probability distribution is uniform along the allowed combinations (p=1/13)
            and 0 everywhere else." />
        <Slide img="question_.png" alt="Q: 'On what day of the week was at least one of your kids born?'
            A: 'At least one of my kids was born on Monday'." />
        <Slide img="unknown2D.png" alt="You need to figure out the new probability distribution over the combinations (p=?)." />
        <Slide img="process.png" alt="'On what day of the week was at least one of your kids born?' => Coin toss => (50% kid 1, 50% kid 2)" />
        <Slide img="prior1D_.png" alt="Both A and B have a uniform probability distribution (p=1/7), the coin has uniform probability over (head, tail)." />
        <Slide img="combo3D.png" alt="There are 7*7*2=98 total combinations." />
        <Slide img="prior3D.png" alt="Before the answer is given, the probability distribution over all the 98 combinations is uniform (p=1/98)." />
        <Slide img="allowed3D.png" alt="After the answer is given, only 14 valid combinations are left." />
        <Slide img="posterior3D.png" alt="After the answer is given, the probability distribution over the 14 valid combinations is uniform (p=1/14)." />
        <Slide img="posterior2D_.png" alt="If you project the pdf in 2D, ignoring the coin toss case,
          you get a distribution that's not uniform anymore,
          as the combination MM is the sum of two valid combinations in the 3D space." />
        <Slide img="openQuestion.png" alt="Unprompted statement: 'Hey you! At least one of my kids was born on Monday'.
            What's the probability distribution in this case?" />
      </Deck>
    </>
  );
}
