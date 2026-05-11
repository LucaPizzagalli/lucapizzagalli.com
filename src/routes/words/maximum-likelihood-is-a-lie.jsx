import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Math from "../../components/Math";

const Shrink = (props) => (
  <span style={{ "font-size": `${props.size}em` }}>{props.children}</span>
);

export default function MaximumLikelihoodIsALie() {
  return (
    <>
      <SEO title="Maximum Likelihood is a Lie" />
      <Layout>
        <h1>Maximum Likelihood is a Lie.</h1>

        <p>
          Maximum Likelihood is a lie.
          They taught it to you when you were just little more than a kid, you learned it, you liked it, you used it, you've grown affectionate to it.
          But they lied to you.
        </p>

        <p><em>Maximum Likelihood is a lie.</em></p>

        <hr />

        <p>
          On the desk lies a deck with <Math eq="N" /> cards, the cards are numbered from 1 to, you guessed, <Math eq="N" />.
          You don't know how many they are, but you shuffle them and you randomly pick one.
          You look at the card in your hands, it's card number 14. How many cards do you think there are in total in the deck? What's your estimate for <Math eq="N" />?
        </p>

        <p>
          <em>"Maybe I picked something around the middle, so there are around 28 cards? Maybe 30?"</em>,
          {" "}<em>"Well, for sure it's more than 13 cards"</em>,
          {" "}<em>"It's probably not some crazy big number like one billion"</em>.
          Perhaps you were thinking something along those lines.
          These are all reasonable thoughts, you're a reasonable person, it's ok, I like you.
          You're doing well. Take care of yourself.
        </p>

        <p>
          Let's see what our friend maximum likelihood thinks instead. Kidding, it's not our friend.
          Maximum likelihood is a bitch.
        </p>

        <p>
          You already know how it works.
          In general you look for the parameter that maximizes the probability of extracting the sample you actually extracted.
          In other words you compute the likelihood and then you take the max.
        </p>

        <p><em>This already smells bullshit.</em></p>

        <p>
          We are talking about estimates, probabilities, statistics.
          And you give me one number, only one?
          Shouldn't you tell me something like: "I'm <em>this</em> confident that your parameter lies in <em>that</em> interval"?
          I mean, give me a probability distribution... something...
          Am I sure it's really that one value? How much sure? Should I collect more data? What's the uncertainty?
        </p>

        <p>
          And then why do we take the max likelihood, why not the mean for example? Or the median?
          I have this likelihood thing, that looks suspiciously like a distribution, I could just normalize it and do to it all the dirty things I like to do to a distribution, you know what I mean... when
          {" "}<Shrink size={0.9}>you meet a new distribution that you don't know yet, you're still new to each other, but hey, it has quite a</Shrink>
          <Shrink size={0.8}>beautiful shape, you take a better look and, uh, did you see it? Was she staring at you? Naaah, you're</Shrink>
          <Shrink size={0.7}> imagining it. It's all in your mind. You would like to, that's why. But you're daydreaming. She was </Shrink>
          <Shrink size={0.6}>probably contemplating the trash can behind you. Still, you have a stupid smile on your face now, and, </Shrink>
          <Shrink size={0.5}>hey! She's smiling back! You bravely break the ice, ok, you clumsily break the ice, but it doesn't matter, you're talking now.
            At first things were a bit awkward, then it all magically started to go smoothly, </Shrink>
          <Shrink size={0.4}>and now, you can feel the tension growing.
            You know it's your opportunity, you know you have to take the initiative, you just don't know exactly how. </Shrink>
          <Shrink size={0.3}>You finally take your chances, you make your move and </Shrink>you compute mean, median, mode and all the moments.
        </p>

        <p>
          But no. Maximum likelihood gives you one number. Just one. Take it or leave it.
          It's an oracle, a God. If you have faith you take your number and shut up, no question allowed, otherwise, fuck off, heretic.
        </p>

        <hr />

        <p>
          And what number does our miraculous oracle give us?
          Let's go back to our problem.
          It's a uniform distribution, so each card has a probability of <Math eq="1/N" />.
          We know <Math eq={String.raw`N \geq 14`} /> because we picked card 14. So, the <Math eq="N" /> that maximizes <Math eq="p = 1/N" /> is...
        </p>

        <p><em>14.</em></p>

        <p>
          Exactly 14.
          Mr. maximum likelihood thinks we took exactly the highest card. It thinks that every single time.
          What if we had instead taken card number 57? "There are obviously 57 cards, sir.", he would have said.
          If we had taken card one-million-three-hundred-twenty-two? "One-million-three-hundred-twenty-two cards in total in the deck, clearly."
          {" "}<em>"Do you really think that out of more than one million cards, I took exactly the highest one? Are you really really sure this is the best guess possible?"</em> "Absolutely."
          {" "}<em>"Isn't more realistic that there are at least a few more cards than that?"</em> "Nope."
        </p>

        <p>
          Maximum likelihood is the village idiot.
          You had this complex problem you were working on;
          you had incomplete information; you developed a theory, but it still had a free parameter;
          you did experiments; you collected data; just a final, last piece is missing in the puzzle;
          and then you pick the most retarded guy you could find in town and ask for a solution, and what does he tell you?
        </p>

        <p><em>14.</em></p>

        <hr />

        <p>ok, then for the correct approach we see each other in the <a href="/words/not-here-yet">next episode</a>.</p>
      </Layout>
    </>
  );
}
