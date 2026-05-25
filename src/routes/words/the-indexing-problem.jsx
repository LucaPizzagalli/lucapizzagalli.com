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
              Imagine a two-dimensional universe invariant under rotations of <Math eq={String.raw`\pi/3`} />. On the surface of a circular world live 6 conscious entities, identical to each other, including their brains. The entities are pure observers. They can see the universe but they can't move. Above each entity is a lamp, currently off.
            </p>
            <p>
              One thing only breaks the symmetry: One of the lamps - let's call it North lamp - contains a countdown. When the countdown will reach <Math eq="t=0" />, this and only this lamp will turn on.
              But all lamps are opaques so the North lamp is visually indistinguishable from the others until <Math eq="t=0" />.
            </p>
            <p>
              The entities know all I described so far, and much more. They have perfect knowledge about the universe, except for the internal state of the 6 brains (just to avoid infinite recursion problems). They know the physical laws governing the universe and the exact position and state of every atom outside their brains, including the North lamp and its timer. They are perfectly rational, allowing them to perfectly simulate the evolution of the universe outside the skulls.
              Being the North lamp the only symmetry-breaker; we can assume the entities encode the space in polar coordinates, with the North lamp fixed at <Math eq={String.raw`\theta = 0`} />.
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
              At time <Math eq="t=0" />, the North lamp activates, breaking the symmetry and illuminating each individual in an unique way.
              For the first time each individual have distinct subjective experience, making them different from one another.
            </p>
            <p>
              Let's label each entity on the planet: at <Math eq={String.raw`\theta = 0`} /> A is, under the North lamp; and continuing clockwise we have B at <Math eq={String.raw`\theta = \pi/3`} />, then C, D, E, and F.
            </p>
            <p>
              Before <Math eq="t=0" /> each entity could perfectly predict the entire future of the universe in third person: they know that for <Math eq="t>0" /> A will be in light, and D will be in darkness. They can also perfectly predict their own identical sensory experiences for all <Math eq="t<0" />.
            </p>
            <p>
             However, <em>there is one piece of information they cannot predict: what they will se at <Math eq="t>0" />, or equivalently, which of the individuals they actually are.</em>
            </p>
            <p>
              The paradox is this: If they truly know all information contained in the universe, how can there be a piece of information ("which of these individuals am I?") that they do not possess and that's provided at <Math eq="t=0" />? It looks like first-person identity has to be a metaphysical property, existing beyond the physical world.
            </p>
            <p>
              Hopefully this feels puzzling, the next section is only justified if you feel the paradox.
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
              Imagine a seventh entity, identical to the others but hidden inside the North lamp. Entity G. Everyone knows G is there.
              This entity has a unique visual input, so it knows exactly where it is. But notice that G has the same exact knowledge of the universe as the other six entities.
              The other entities know exactly what G sees, as they know physics and G's eyes' location. So how is it possible that G shares the same exact knowledge as the others, yet it knows everything there is to know about the universe, but the others don't?
            </p>
            <p>
              An objection could be: <em>"G knows more, as the visual input it receives is unique and different from the others'"</em>.
              Let's look deeper into how G locates itself. G has a perfect map of the physical universe, and it knows its current visual input (let's call this input the key). G matches its key onto the map. Because there is only one entity inside the North lamp, it finds exactly one match, revealing its position.
              When agents A-F try the same, they don't find a unique match for their key, they find instead 6 possible matches.
              So, once again, the question is, given they all have the same map, what is the information that G has and the others don't?
            </p>
            <p>
              <em>"The G-key"</em>, you could say. <em>"The universe is not only the map, but the map and the keys"</em>.
              But all the others are also aware of what the G-key is, as they can predict what G sees, and they can therefore locate G on the map.
              G's eyes don't give G any information the others don't have. All agents know all keys.
              {" "}<em>"But G has extra information as first-person experience of seeing the lamp"</em>.
              If we buy into this view — that the subjective feeling of I-am-here is a fundamental piece of information not contained in the universe — we have to concede that there is no single, shared universe containing all the information.
              As the universe can contain the map, the keys (that are part of the map already), but it cannot contain 7 conflicting you-are-here pointers as absolute facts.
              To admit that indexical information is real is to admit that each entity lives in its own private universe, and that there is no single objective universe that the entities inhabit.
            </p>
          </div>
        </details>

        <hr />



        {/* <h2>There is no I</h2> */}
        <p>
          As it often happens with paradoxes, the issue is in the question. We imagine an entity asking itself <em>"What will I see?"</em>, and there is no answer.
          The problem is that the question is not well formulated, as it assumes the existence of an "I" persistent in time, crossing from <Math eq="t<0" /> to <Math eq="t>0" />.
        </p>
        <p>
          Questions like <em>"What will entity A see?"</em> or <em>"What will entity B see?"</em> are meaningful and have predictable, objective answers. The paradox only arises when we assume the existence of an "I" that is preserved across time, floating above the physical reality and waiting to be dropped into one of the six bodies. As if before the lamp turned on there were six bodies plus an unattached <em>I</em>, and at <Math eq="t=0" /> the universe finally reveals where it landed.
        </p>
        <p>
          There is no such thing.
        </p>
        <p>
          In this universe, at every instant, there are six computations running in parallel. At <Math eq="t<0" /> they are identical. At <Math eq="t>0" /> they diverge. That's it. No metaphysical <em>I</em> travels from the past into one of the six futures.
        </p>
        <p>
          So the question <em>"what will I see at <Math eq="t=0" />?"</em> asked from <Math eq="t<0" /> is malformed. There is no entity that is both the asker (at <Math eq="t<0" />) and the seer (at <Math eq="t=0" />). It's legit to ask <em>"what will A see?"</em>, <em>"what will B see?"</em>. And all these question have answers. What's meaningless to ask is: <em>"What will I see?"</em> because there is no well defined concept of I traveling thought time.
        </p>
        <p>
          What we call personal identity is a memory trace. Each brain at each moment has access only to its own immediate past, which has access only to <em>its</em> immediate past, and so on. The sense of being a continuous self comes from this chain. But the <em>I</em> of <Math eq="t=-1" /> is not the same thing as the <em>I</em> of <Math eq="t=+1" />. They are two separate computations, linked only by the fact that the later one happens to contain a record of the earlier one. There is no metaphysical thread.
        </p>
        <p>
          The universe locally processes information. A brain contains memories of its own past, not the past of other brains. Being a conscious brain in an instant <Math eq="t" /> means having access only to the memory of that brain, which creates the <em>illusion</em> of a continuous identity across time.
        </p>
        <p>
          In a normal universe this same first-person question — <em>"what will I see tomorrow?"</em> — does have a clean answer, even without any traveling <em>I</em>. What you're really asking is <em>"what will the brain tomorrow that contains a memory trace of this brain see?"</em> In ordinary life there is at most one such brain, the substitution is unique, and the question routes cleanly to it. The illusion of a persistent self is harmless because the everyday usage of <em>"I"</em> was always doing a third-person substitution under the hood.
        </p>
        <p>
          In our six-fold universe, the substitution stops being unique. At <Math eq="t=0" /> six brains share the exact same memory trace of the past — six valid referents instead of one. The everyday shortcut runs out of unique targets, and the malformed question that was sitting underneath it the whole time gets exposed.
        </p>

when we ask about "I" in the future we are asking what will the entity that contains a trace of my memory will see/do? this is a meaningful question in most cases. but if we translate it in the universe proposed we run into the problem that in the future there are multiple being that share the memory with the real I (the istantaneous one).

Before $t = 0$: six identical local processors computing the same thing. After $t = 0$: six local processors computing different things. Nothing is transferred; nothing crosses.

        <p>
          Before <Math eq="t=0" />: six identical local processors computing the same thing. After <Math eq="t=0" />: six local processors computing different things. Nothing is transferred; nothing crosses. The puzzle's missing fact was never there to be found.
        </p>
        <hr />
      </Layout>
    </>
  );
}
