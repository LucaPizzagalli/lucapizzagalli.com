import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Math from "../../components/Math";

export default function TheIndexingProblemPage() {
  return (
    <>
      <SEO title="The Indexing Problem" />
      <Layout class="words">
        <h1>Indexing Subjective Information</h1>

        <h2>An Almost Symmetric Universe</h2>
        <div class="row responsive-row">
          <figure style={{flex: "1 1 40%",}}>
            <img
              src="/words/the-indexing-problem/universe.svg"
              alt=""
              style={{
                // filter: "var(--green-filter) var(--noise-filter)",
                filter: "var(--green-filter) var(--distortion-filter-light) var(--noise-filter)",
              }}
            />
            <figcaption>The universe for t&lt;0</figcaption>
          </figure>
          <div style={{flex: "1 1 60%"}}>
            <p>
              Imagine a two-dimensional universe invariant under rotations of <Math eq={String.raw`\pi/3`} />. On the surface of a circular world live 6 conscious entities, exactly identical in every aspect. Above each entity is a lamp, currently off.
            </p>
            <p>
              One thing only breaks the symmetry: One of the lamps - let's call it the North lamp - contains a countdown. When the countdown will reach <Math eq="t=0" />, this and only this lamp will turn on.
              But all lamps are opaques so the North lamp is visually indistinguishable form the others until <Math eq="t=0" />.
            </p>
            <p>
              Each entity has perfect and complete objective knowledge about universe, except for the internal state of the entities brains (to avoid infinite recursion). They know teh physical laws governing the universe and the exact position and state of every atom outside their brains, including the North lamp and its timer. They also know that all 6 brains are identical, and that these brains act as pure observers (they absorb inputs but emit no outputs to the environment), allowing them to perfectly simulate the evolution of the universe outside the skulls.
              Being the North lamp the only symmetry-breaker; we can assume the entities encode the space in polar coordinates, with North lamp fixed at <Math eq={String.raw`\theta = 0`} />.
            </p>
          </div>
        </div>

        <h2>Breaking the Symmetry</h2>
        <p>
          At time <Math eq="t=0" />, the North lamp activates, breaking the symmetry and illuminatin each inidivual in an unique way.
          For the first time each individual have distinct subjective experience, making them different from one another.
        </p>

        <p>
          Here lies the central question. Let's label each entity on the planet: A is at <Math eq={String.raw`\theta = 0`} /> under the North lamp, and continuing clockwise we have B at <Math eq={String.raw`\theta = \pi/3`} />, then C, D, E, and F.
        </p>
        <p>
          Before <Math eq="t=0" /> each entity could perfectly predict the entire future of the universe in third person — <em>"A will be in light, D will be in shadow, B will see a bright gradient."</em> What they could not predict, no matter how perfect their simulation, is <em>which letter they are</em>.
        </p>
        <p>
          When the lamp turns on, each entity seems to learn something fundamentally new. The one in the light learns "I am A." The one in the dark learns "I am D." Apparently, knowing every atom of the universe wasn't enough — there was a missing piece: my own index.
        </p>
        <p>
          Stop here for a moment. The entity at A, before the lamp turns on, has <em>literally everything</em> the physics can offer — every atom of the universe outside the six brains, the certainty that all brains are identical, even the third-person prediction that the future entity at A will be in light. And yet there is a question it cannot answer: <em>which one am I?</em> If that fact isn't in the physics, where is it? It looks like first-person identity has to be a metaphysical property, something hovering above the atoms, only revealed when an asymmetry exposes it.
        </p>
        <p>
          If that feels like a real puzzle, good. The next section is about why it isn't.
        </p>

        <h2>There is no I</h2>

        <p>
          The puzzle works by smuggling in a self that persists from <Math eq="t<0" /> to <Math eq="t>0" /> and is waiting to find out which body it ends up in. As if before the lamp turned on there were six bodies plus an unattached <em>I</em>, and at <Math eq="t=0" /> the universe finally tells it where it landed.
        </p>
        <p>
          There is no such thing.
        </p>
        <p>
          At every instant, the universe runs six local computations in parallel. At <Math eq="t<0" /> they happen to be identical — same inputs, same state, same outputs. At <Math eq="t>0" /> they diverge. That is the entire story. No metaphysical <em>I</em> travels from the symmetric past into one of the six asymmetric futures, because there is no carrier for the trip.
        </p>
        <p>
          What we call personal identity is a memory trace. Each brain at each moment has access only to its own immediate past, which has access only to <em>its</em> immediate past, and so on. The sense of being a continuous self comes from this chain. But the <em>I</em> of <Math eq="t=-1" /> is not the same thing as the <em>I</em> of <Math eq="t=+1" />. They are two separate computations, linked only by the fact that the later one happens to contain a record of the earlier one. There is no metaphysical thread.
        </p>
        <p>
          So the question <em>"what will I see at <Math eq="t=0" />?"</em> asked from <Math eq="t<0" /> is malformed. There is no entity that is both the asker (at <Math eq="t<0" />) and the seer (at <Math eq="t=0" />). The well-formed third-person versions — <em>"what will the brain at <Math eq={String.raw`\theta = 0`} /> see?"</em> — have answers, and every entity can compute them.
        </p>
        <p>
          Notice that in a normal universe this same first-person question — <em>"what will I see tomorrow?"</em> — does have a clean answer, even without any traveling <em>I</em>. What you're really asking is <em>"what will the brain tomorrow that contains a memory trace of this brain see?"</em> In ordinary life there is exactly one such brain (or none, if you die in your sleep), the substitution is unique, and the question routes cleanly to it. The illusion of a persistent self is harmless because the everyday usage of <em>"I"</em> was always doing a third-person substitution under the hood.
        </p>
        <p>
          In our six-fold universe, the substitution stops being unique. At <Math eq="t=0" /> six brains share the exact same memory trace of the past — six valid referents instead of one. The everyday shortcut runs out of unique targets, and the malformed question that was sitting underneath it the whole time gets exposed.
        </p>
        <p>
          Yudkowsky has a principle for this kind of move: any correct philosophical resolution should resolve back to normality. <em>"There is no I"</em> sounds destabilizing, but in normal life it changes nothing — the everyday use of <em>"I"</em> still picks out the right brain, because there is one. The puzzle isn't telling us that I-talk is wrong; it's telling us what I-talk was always doing, by constructing a case where it runs out of targets.
        </p>
        <p>
          Before <Math eq="t=0" />: six identical local processors computing the same thing. After <Math eq="t=0" />: six local processors computing different things. Nothing is transferred, nothing crosses, no labels are exchanged. The puzzle's missing fact was never there to be found.
        </p>
      </Layout>
    </>
  );
}
