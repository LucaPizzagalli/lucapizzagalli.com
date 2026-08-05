import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Math from "../../components/Math";

export default function TheIndexingProblemPage() {
  return (
    <>
      <SEO title="The Indexing Problem" />
      <Layout class="words">
        <h1>The Indexing Problem</h1>

        {/* <h2>An Almost Symmetric Universe</h2> */}
        <div class="responsive-row" style={{ gap: "calc(3rem + 2cqi)" }}>
          <figure style={{ flex: "2", "max-width": "26rem" }}>
            <img
              src="/words/the-indexing-problem/universe-pre-t0.svg"
              alt=""
              style={{
                // filter: "var(--green-filter) var(--noise-filter)",
                filter: "var(--green-filter) var(--distortion-filter-light) var(--noise-filter)",
              }}
            />
            <figcaption>The universe for <Math eq="t<0" />. The North lamp is off and all entities receive identical stimuli via their senses.</figcaption>
          </figure>
          <div style={{ flex: "3" }}>
            <p>
              Imagine a two-dimensional universe invariant under rotations of <Math eq="\pi/3" />. On the surface of a circular world live six conscious entities, identical to each other, including their brains. The entities are pure observers: they can see the universe but they can't move. Above each entity is a lamp, currently off.
            </p>
            <p>
              Only one thing breaks the symmetry: One of the lamps - let's call it North lamp - contains a countdown. When the countdown reaches <Math eq="t=0" />, this and only this lamp turns on.
              All lamps are opaque, so the North lamp is visually indistinguishable from the others until <Math eq="t=0" />.
            </p>
            <p>
              The entities are rational beings aware of all I've described so far. They also have perfect knowledge of the universe, except for the internal state of the 6 brains (just to avoid infinite recursion problems). They know the physical laws governing the universe and the exact position and state of every atom outside their brains, including the North lamp and its timer. They can therefore accurately simulate the evolution of the universe outside their skulls.
            </p>
            <p>
              Let's assume the entities encode the space in polar coordinates, with the North lamp fixed at <Math eq="\theta = 0" />.
            </p>
          </div>
        </div>

        <hr />
        {/* <h2>Breaking the Symmetry</h2> */}
        <div class="responsive-row" style={{ gap: "3rem", "--row-direction": "row-reverse" }}>
          <figure style={{ flex: "2", "max-width": "26rem"}}>
            <img
              src="/words/the-indexing-problem/universe-post-t0.svg"
              alt=""
              style={{
                // filter: "var(--green-filter) var(--noise-filter)",
                filter: "var(--green-filter) var(--distortion-filter-light) var(--noise-filter)",
              }}
            />
            <figcaption>The universe for <Math eq="t>0" />. The North lamp is on and each entity receives unique stimuli via its senses.</figcaption>
          </figure>
          <div style={{ flex: "3" }}>
            <p>
              At time <Math eq="t=0" />, the North lamp activates, breaking the symmetry and illuminating each individual uniquely.
              For the first time, the entities have distinct subjective experiences, making them different from one another.
            </p>
            <p>
              Let's label each entity on the planet: at <Math eq="\theta = 0" /> is A, under the North lamp; and continuing clockwise we have B at <Math eq="\theta = \pi/3" />, then C, D, E, and F.
            </p>
            <p>
              Before <Math eq="t=0" /> each entity can perfectly predict the entire future of the universe in third person: they know that for <Math eq="t>0" /> A will be in light, and D will be in darkness. They can also perfectly predict their own identical sensory experiences for all <Math eq="t<0" />.
            </p>
            <p>
             However, <em>there is one piece of information they cannot predict: what they will see at <Math eq="t>0" />, or, equivalently, which of the six individuals they are.</em>
            </p>
            <p>
              The paradox is this: If they truly know all information contained in the universe, how can there be a piece of information ("which of these individuals am I?") that they do not possess and that's provided at <Math eq="t=0" />? It looks like first-person identity must be a metaphysical property, part of the universe but existing beyond the physical world.
            </p>
            <p>
              Hopefully this feels puzzling, as the next section is only justified if you are feeling the paradox. You can pause here and come up with your own answer.
            </p>
          </div>
        </div>

        <details>
          <summary><em>"I'm not convinced. I think the entities are simply missing the information about where they are."</em></summary>
          <div>
            <p>
              If this objection is in your mind, let's test it by introducing entity G.
            </p>
            <p>
              Imagine a seventh entity, identical to the others but hidden inside the North lamp: entity G. Everyone is aware G is there.
              This entity has a unique visual input of the inner lamp, so it knows exactly where it is. But notice that G has the same exact knowledge of the universe as the other six entities.
              The other entities know exactly what G sees, as they know physics and G's eyes' location. So how is it possible that G shares the same knowledge as the others, yet it knows everything there is to know about the universe but the others don't?
            </p>
            <p>
              An objection could be: <em>"G knows more, as the visual input it receives is unique and different from the others'"</em>.
              Let's look deeper into how G locates itself. G has a perfect map of the physical universe, and it knows its current visual input (let's call this input <em>key</em>). G matches its key onto the map. Because there is only one entity inside the North lamp, it finds exactly one match, revealing its position.
              When entities A-F try the same, they don't find a unique match for their key, they find instead six possible matches.
              So, once again, the question is, given they all have the same map, what is the information that G has and the others don't?
            </p>
            <p>
              <em>"The G-key"</em>, you could say. <em>"The universe is not only the map, but the map and the keys"</em>.
              But all the others are also aware of what the G-key is, as they can predict what G sees, and they can therefore locate G on the map.
              G's eyes don't give G any information the others don't have. All entities know all keys.
              {" "}<em>"But G has extra information as first-person experience of seeing the lamp"</em>.
              If we buy into this view — that the subjective feeling of I-am-here is a fundamental piece of information not contained in the universe — we have to concede that there is no single, shared universe containing all the information.
              As the universe can contain the map, the keys (that are part of the map already), but it cannot contain 7 conflicting you-are-here pointers as absolute facts.
              To admit that indexical information is real is to admit that each entity lives in its own private universe, and that there is no single objective universe that all the entities inhabit.
            </p>
          </div>
        </details>

        <hr />

        {/* <h2>There is no I</h2> */}
        <p>
          As with many paradoxes, the issue is in the question. We imagine an entity asking itself <em>"What will I see?"</em>, and there is no answer.
          The problem is that the question is not well formulated, as it assumes the existence of an "I" persistent in time, crossing from <Math eq="t<0" /> to <Math eq="t>0" />.
        </p>
        <p>
          Questions like <em>"What will entity A see?"</em> or <em>"What will entity B see?"</em> are meaningful and have predictable, objective answers. The paradox only arises when we assume the existence of an "I" label that is preserved across time, floating above the physical reality and waiting to be dropped into one of the six bodies. As if before the lamp turned on there were six bodies plus an unattached "I", and at <Math eq="t=0" /> the universe finally reveals where it landed.
        </p>
        <p>
          There is no such thing.
        </p>
        <p>
          In this universe, at every instant, there are six brains - six computations - running in parallel. At <Math eq="t<0" /> they are identical. At <Math eq="t>0" /> they diverge. That's it. No metaphysical "I" travels from the past into one of the six possible futures.
        </p>
        <p>
          So the question <em>"what will I see at <Math eq="t>0" /> ?"</em> asked from <Math eq="t<0" /> is malformed. There is no entity that is both the asker (at <Math eq="t<0" />) and the seer (at <Math eq="t>0" />). It's legit to ask <em>"what will A see?"</em>, <em>"what will B see?"</em>; and these questions have answers.
        </p>
        <p>
          We have this illusion of persistent personal identity because our brain at each moment has access only to its personal memories, and not the ones of other brains.
          We therefore identify with this chain of memories and we project this identity into the future. But the "I" of <Math eq="t=-1" /> is not the same thing as the "I" of <Math eq="t=+1" />. They are two separate computations, linked by the fact that the later one contains a record of the earlier one. But there is no metaphysical thread.
        </p>
        <p>
          In a normal universe, the first-person question <em>"What will I see tomorrow?"</em> has a reasonable answer, even without any traveling "I". What you're really asking is <em>"Tomorrow, what will the brain that contains a memory trace of my brain see?"</em> In ordinary life there is (at most) one such brain, and therefore no ambiguity in the question.
          But the "time-travelling I" is just an approximation valid in the edge case of everyday reality, not a real fundamental concept.
        </p>
        <hr />
      </Layout>
    </>
  );
}
