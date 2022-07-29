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

What we saw last time is, to my understaunding, waht's called "frequentist inference", that's apparently synonym of "wrong inference".

we have to make a little de-tour for that. Close your eyes, grab me by hand, and I'll bring you to a new beautiufl place.

##

In front of you there are two boxes. Inside one of them there is an unknown ammount of candies, in the other one, there are twice as many candies. You don't know which box is which.

The magician explain you the rules:

You can pick the box you want and open it. After counting the candies, you can decide to bring them home with you, **or** you can switch box and bring home the candies in the other box. Only one little thing: for the possibility of switching you have to pay a modest fee of 2% of the candies you'll find in the second box (even powerful magician have to pay the rent at the end of the month).

What do you do? (Your goal is to maximise the expected number of candies)

---

**"What kind of stupid riddle is this? Do you whink I'm a fool?"** I know what you are thinking **I have no idea which box contains the most candies, and even after I open the first box, I still have no idea which box contains the most candies. So why should I pay a fee for switching box? If whathever number I see in the first box, I always switch for the second one, then why not picking the second one directly, and avoid the fee? Keeping the box is obviously the best choice. Not even mr Maximum Likelihood would be stupid enough to switch box (well, maybe).**

And you are right.

