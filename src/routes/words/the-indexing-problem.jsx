import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Math from "../../components/Math";

export default function TheIndexingProblemPage() {
  return (
    <>
      <SEO title="The Indexing Problem" />
      <Layout>
        <h1>Indexing Subjective Information</h1>

        <h2>An Almost Symmetric Universe</h2>

        <p>
          Imagine a two-dimensional universe with radial symmetry. On the surface of this circular world live 6 conscious entities, all of whom are physically identical in every way. Above each entity is a lamp, currently turned off.
        </p>
        <p>
          This universe possesses a symmetry such that it is invariant by rotations of <Math eq={String.raw`\pi/3`} /> degrees, with only one exception breaking the symmetry: One of the lamps - let's call it the North lamp - contains a timer. There is a countdown, and when it reaches <Math eq="t=0" />, this and only this lamp will turn on.
        </p>
        <p>
          Each individual has perfect and complete objective information about the entire universe, except for the internal state of the entities brains (to avoid paradoxes of infinite recursion). They know the exact position and state of every atom outside their brains, including the North lamp and its timer. They also know that all 6 brains are identical, and that these brains act as pure observers (they absorb inputs but emit no outputs to the environment), allowing them to perfectly simulate the future evolution of the universe beyond their own neural states.
          The North lamp provides and absolute point of reference; we may assume the entities encode the universe in polar coordinates, with North lamp fixed at <Math eq={String.raw`\theta = 0`} />.
        </p>

        <figure>
          <img
            src="/words/the-indexing-problem/universe.svg"
            alt=""
            style={{
              width: "80%",
              "max-width": "30rem",
              filter: "var(--green-filter) var(--noise-filter) var(--noise2-filter)",
            }}
          />
          <figcaption>The universe before t=0</figcaption>
        </figure>

        <h2>The Shattering of Symmetry</h2>

        <p>
          At time <Math eq="t=0" />, the North lamp activates, breaking the rotational symmetry. The lamp casts light and shadow across the surface. The entity directly beneath the north lamp will be bathed in bright light. The entity on the opposite side of the world will be cast into shadow. Every other entity will experience a unique gradient of light based on their specific position.
        </p>
        <p>
          For the first time each individual is having a unique and distinct subjective experience, making them different from one another.
        </p>

        <h2>The Unknowable Subject</h2>

        <p>
          Here lies the central question. Let's label each entity on the planet: A is at <Math eq={String.raw`\theta = 0`} /> under the North lamp, and continuing clockwise we have B at <Math eq={String.raw`\theta = \pi/3`} />, then C, D, E, and F.
          For <Math eq="t<0" />, the identical animals could perfectly predict the evolution of the universe. They knew that at <Math eq="t>0" />, the entity at A would be in light, and the entity at D would be in darkness. They could also perfectly predict their own identical sensory experiences for <Math eq="t<0" />.
        </p>
        <p>
          However, there is one crucial piece of information they could not predict: their own identical sensory experiences for <Math eq="t>0" />, equivalently <em>which of the individuals they actually are</em>.
          When the lamp turns on, each entity seems to learn something fundamentally new. The one in the light learns, "I am the one under the North lamp (A)," and the one in the dark learns, "I am the one experiencing the shadow (D)."
        </p>
        <p>
          The paradox is this: If they truly knew everything about the physical state of the universe, how could there be a piece of information ("which of these individuals am I?") that they did not possess until the moment of the unique experience? This seems to suggest that subjective, first-person identity is a metaphysical property, separate from a complete and objective understanding of the physical world.
        </p>

        <h2>There is no I</h2>

        <p>
          If you imagine yourself as one of the entities predicting what you will see requires knowing which are you among the entities. This is not an information that's possible to obtain even by knowing everything about the universe you are in (with the exception of the brains information, but that would not be relevant for the task, as all brains are identical). This implies that the concept of a personal identity that spans time requires extra data (the label), that's beyond the physical nature of the universe. so identity as a metaphysical property.
        </p>
        <p>
          The solution to this paradox is that the question <em>"What will I see?"</em> is fundamentally flawed, because the concept of a persistent "I" is an illusion.
        </p>
        <p>
          Questions like <em>"What will entity A see?"</em> or <em>"What will entity B see?"</em> are meaningful and have predictable, objective answers. The paradox only arises when we assume the existence of an "I" that is preserved across time, floating above the physical reality and waiting to be dropped into a specific body.
        </p>
        <p>
          There is no "I". The universe locally processes information. A brain contains memories of its own past, not the past of other brains. Being a conscious brain in an instant <Math eq="t" /> means having access only to the memory of that brain, which creates the <em>illusion</em> of a continuous identity across time.
        </p>
        <p>
          Before <Math eq="t=0" />, there were simply 6 identical local processors computing the exact same data. After <Math eq="t=0" />, the new asymmetrical inputs caused the 6 local processors to compute different data. There is no metaphysical "I" that travelled from the past to the future.
        </p>
      </Layout>
    </>
  );
}
