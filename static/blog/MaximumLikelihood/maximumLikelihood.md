Title:        Maximum Likelihood is a Lie
Author:       Luca Pizzagalli
Date:         2022-07-27
Language:     en
Comment:      https://fletcher.github.io/MultiMarkdown-6/syntax/index.htmls
CSS:          ../retro.css
HTML header:  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
              <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="retro-image-filter" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feColorMatrix type="matrix" values="
                      1 0 0 0 0
                      1 0 0 0 0
                      1 0 0 0 0s
                      0 0 0 1 0" in="SourceGraphic" />
                    <feComponentTransfer>
                      <feFuncR type="table" tableValues="0.4 0"/>
                      <feFuncG type="table" tableValues="0.4 1"/>
                      <feFuncB type="table" tableValues="0.4 0.44"/>
                      <feFuncA type="table" tableValues="0 1"/>
                    </feComponentTransfer>
                    <feBlend in2="SourceGraphic" mode="hue"/>
                  </filter>
                  <filter id="noise2-filter" x="-10%" y="-10%" width="120%" height="120%">
                    <feTurbulence baseFrequency="0.01 0.4" result="turbulence" numOctaves="2" />
                    <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="12" xChannelSelector="R" yChannelSelector="R">
                    </feDisplacementMap>
                  </filter>
                  <filter id="noise-filter">
                    <feTurbulence baseFrequency="0.60,0.90" />
                    <feColorMatrix type="matrix" values="
                      .33 .33 .33 0 0
                      .33 .33 .33 0 0
                      .33 .33 .33 0 0
                      0 0 0 2 0"/>
                    <feComposite operator="in" in2="SourceGraphic"/>
                    <feBlend in2="SourceGraphic" mode="multiply" />
                  </filter>
                </defs>
              </svg>

# Maximum Likelihood is a Lie.

Maximum Likelihood is a lie. They taught it to you when you were just little more than a kid, you learned it, you liked it, you used it, you've grown affectionate to it.
But they lied to you.

*Maximum Likelihood is a lie.*

---

On the desk lies a deck with $N$ cards, the cards are numbered from 1 to, you guessed, $N$. You don't know how many they are, but you shuffle them and you randomly pick one. You look at the card in your hands, it's card number 14. How many cards do you think there are in total in the deck? What's your estimate for $N$?

**"Maybe I picked something around the middle, so there are around 28 cards? Maybe 30?"**, **"Well, for sure it's more than 13 cards"**, **"It's probably not some crazy big number like one billion"**. Perhaps you were thinking something along those lines. These are all reasonable thoughts, you're a reasonable person, it's ok, I like you. You're doing well. Take care of yourself.

Let's see what our friend maximum likelihood thinks instead. Kidding, it's not our friend. Maximum likelihood is a bitch.

You already know how it works. In general you look for the parameter that maximizes the probability of extracting the sample that you actually extracted.
In other words you compute the likelihood and then you take the max.

*This already smells bullshit.*

We are talking about estimates, probabilities, statistics. And you give me one number, only one? Shouldn't you tell me something like: "I'm **this** confident that your parameter lies in **that** interval"? I mean, give me a probability distribution... something... Am I sure it's really that one value? How much sure? Should I collect more data? What's the uncertainty?

And then why do we take the max likelihood, why not the mean for example? Or the median? I have this likelihood thing, that looks suspiciously like a distribution, I could just normalize it and do to it all the dirty things I like to do to a distribution, you know what I mean... when <span style="font-size: 0.9em;">you meet a new distribution that you don't know yet, you're still new to each other, but hey, it has quite a</span>
<span style="font-size: 0.8em;">beautiful shape, you take a better look and, uh, did you see it? Was she staring at you? Naaah, you're</span>
<span style="font-size: 0.7em;"> imagining it. It's all in your mind. You would like to, that's why. But you're daydreaming. She was </span>
<span style="font-size: 0.6em;">probably contemplating the trash can behind you. Still, you have a stupid smile on your face now, and, </span>
<span style="font-size: 0.5em;">hey! She's smiling back! You bravely break the ice, ok, you clumsily break the ice, but it doesn't matter, you're talking not. At first things were a bit awkward, then it all magically started to go smoothly, </span>
<span style="font-size: 0.4em;">and now, you can feel the tension growing. You know it's your opportunity, you know you have to take the initiative, you just don't know exactly how. </span>
<span style="font-size: 0.3em;">You finally take your chances, you make your move and </span>you compute mean, median, mode and all the moments.


But no. Maximum likelihood gives you one number. Just one. Take it or leave it. It's an oracle, a God. If you have faith you take your number and shut up, no question allowed, otherwise, fuck off, heretic.

---

And what number does our miraculous oracle give us?
Let's go back to our problem. It's a uniform distribution, so each card has a probability of $1/N$. We know $N \geq 14$ because we picked card 14. So, the $N$ that maximizes $p = 1/N$ is...

*14.*

Exactly 14. Mr. maximum likelihood thinks we took exactly the highest card. It thinks that every single time. What if we had instead taken card number 57? "There are obviously 57 cards, sir.", it would have said. If we had taken card one-million-three-hundred-twenty-two? "One-million-three-hundred-twenty-two cards in total in the deck, clearly." **"Do you really think that out of more than one million cards, I took exactly the highest one? Are you really really sure this is the best guess possible?"** "Absolutely." **"Isn't more realistic that there are at least a few more cards than that?"** "Nope."

Maximum likelihood is the village idiot.
You had this complex problem you were working on; you had incomplete information; you developed a theory, but it still has a free parameter; you did experiments; you collected data; just a final, last piece is missing in the puzzle; and then you pick the most retarded guy you could find in town and ask for a solution, and what does he tell you?

14.

---

ok, then for the correct approach we see each other at the next episode.