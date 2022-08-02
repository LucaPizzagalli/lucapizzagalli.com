---
url:         "/blog/the-bayesian-way"
title:        The Bayesian Way
author:       Luca Pizzagalli
date:         2022-07-28
language:     en
comment:      https://fletcher.github.io/MultiMarkdown-6/syntax/index.htmls
CSS:          ../retro.css
HTML header:  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
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
---
# The Bayesian Way

Ok, we cannot trust the [maximum likelihood](/blog/maximum-likelihood-is-a-lie). So what's next, are we lost?
Nope, we are not. There is a light coming to save us, the light it's called *bayesian inference*.
You are a big boy, you already know the bayes theorem, no need for a recap.

<details>
<summary>Actually, maybe...</summary><div>

The idea of bayesian inference is that if you have some theories about a fact of the universe, but you are not sure which theory is the correct one, you can represent your uncertainty by assigning a probability to each theory. If we call one of your theories $A$, $P(A)$ will be how sure you are that $A$ is the correct theory. We call *prior* the distribution of these probabilities.

Then an experiment is done, and you get new data $X$. Using the *Bayes theorem* you can find how confident you should be now of a theory, given the new information ($P(A|X)$). The updated probability distribution is called *posterior*.

Here our friend Bayes theorem:

$$
P(A|X) = \frac{P(X|A) P(A)}{sum of P(X|K) along all possible theories A,B,C,D,E}
$$
</details></div>

How do we apply Bayes to our example?

1. We start with a prior describing the probability that the number of cards is $N=1$, or that is $N=2$, $N=3$...
2. Using the Bayes theorem we update it with the information that we extracted card number 14.
3. We'll have the posterior, telling us what's now our best prediction for $N=1$.

Easy! Done! No problem at all! Child's game! Let's go home.

---

What are you saying? I hear some grumbling over there.
*"How am I suppose to choose a prior?"*, *"Picking one, over the infinite amount of possible priors, means deciding a priori that some values of $N$ are more probable than others. But I am supposed to know nothing about the deck, therefore that violates the problem."*, *"The result will depend strongly on my prior, especially in this settings, where I have only one data point."*, *"You know what would spare me from picking a prior? The maximu*

You sneaky sneaky bastard. I thought we had moved past that. But I'll fix you, I promise I'll convince you to drop the beast forever.
But we have to make a little de-tour for that. Close your eyes, grab my hand, take a deep breath and I'll bring you to a new beautiful place.

## The place

You open your eyes, you are in a busy street

In front of you there are two boxes. Inside one of them there is an unknown amount of candies, in the other one, twice as many. You don't know which box is which.

The magician explain the rules to you:

You pick the box you want and you open it. After counting the candies, you can decide to bring them home with you, **or**, you can switch box and bring home the candies in the other box. Only one little thing: for the ability of switching box, you have to pay a modest fee of 2% of the candies you'll find in the second box (even powerful magician have to pay the rent).

What do you do? (Your goal is to maximize the expected number of candies)

---

*"What kind of stupid riddle is this? Do you think I'm a fool?"* I know what you are thinking *"I have no idea which box contains the most candies, and even after I open the first box, I still have no idea which box contains the most candies. So why should I pay a fee for switching box? If whathever number I see in the first box, I always switch for the second one, then why not picking the second one directly, and avoid the fee? Keeping the box is obviously the best choice. Not even mr Maximum Likelihood would be stupid enough to switch box (well, maybe)."*

And you are right.

He's right. You think again about it, he's actually right. But you were right too. You are both right.
This cannot be, it's a paradox.


You destroyed it

---

## Test space

BLa bla bla bla
BLa bla bla bla
BLa bla bla bla

![Alt text here](newplot.png "some title")

BLa bla bla bla
BLa bla bla bla
BLa bla bla bla
BLa bla bla bla
