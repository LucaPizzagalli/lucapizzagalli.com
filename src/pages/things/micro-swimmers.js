import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Deck from "../../components/deck"

import "./micro-swimmers/moseppia.css"
import SealTrentoUniversity from "./micro-swimmers/images/Sigillo_Universita_di_Trento.png"
import ExperimentOpenVideo from "./micro-swimmers/videos/kantsler2013ciliary_cell.webm"
import ExperimentConfinedVideo from "./micro-swimmers/videos/ostapenko2018curvature_cell.webm"
import SimulationConfinedVideo from "./micro-swimmers/videos/confined_rendering.webm"
import SimulationOpenVideo from "./micro-swimmers/videos/diffusion.webm"
import ThankYouVideo from "./micro-swimmers/videos/thank_you.webm"


function MicroSwimmersDeck() {

  let data = useStaticQuery(graphql`
  query MicroSwimmersEquations {
    allEquationsYaml {
      nodes {
        fields {
          equationKatex
        }
        equation {
          id
        }
      }
    }
  }
  `)
  let ids = data.allEquationsYaml.nodes[0].equation
  let eqs = data.allEquationsYaml.nodes[0].fields.equationKatex
  let equations = {}
  for (let i = 0; i < ids.length; i++) {
    equations[ids[i].id] = eqs[i]
  }

  return (
    <Deck location="/things/microswimmers" deckTheme="moseppia">

      <section className="center" data-background-image={SealTrentoUniversity}>
        <div style={{ gridArea: "1/1", position: "relative", placeItems: "center", display: "grid" }} >
          <h1>Modelling microbial motion: the case of <i>Chlamydomonas reinhardtii</i></h1>
          <p className="small">CIBIO Centre for Integrative Biology</p>
          <div className="row">
            <p><i>Author:</i> Luca Pizzagalli</p>
            <p><i>Supervisor:</i> Prof. Gianluca Lattanzi</p>
          </div>
          <p className="small">Academic year 2017/2018</p>
          <aside className="notes">
            Good afternoon. The title of my thesis is: "Modelling microbial motion: the case of Chlamydomonas reinhardtii".
          </aside>
        </div>
      </section>


      <section>
        <h2><i>Chlamydomonas reinhardtii</i></h2>
        <div className="big-content">
          <div className="row">
            <figure style={{ flex: "1 1 40%", }}>
              <StaticImage
                loading="eager"
                objectFit="contain"
                src="./micro-swimmers/images/chlamydomonas_reinhardtii.png"
                style={{ width: "100%", height: "34vh", }}
                alt="chlamydomonas reinhardtii moves beating two forward flagella" />
              <figcaption>
                Alper Joshua et al. Methods in Enzymology, 2013
              </figcaption>
            </figure>
            <ul style={{ flex: "1 1 60%", }}>
              <li>Green algae, a single cell eukaryotic organism <span dangerouslySetInnerHTML={{ __html: equations.size }} /></li>
              <li>Model organism in biology, studied for photosynthesis and ciliary functions</li>
              <li>Possible source of useful proteins and bio-fuels</li>
            </ul>
          </div>
        </div>
        <aside className="notes">
          Chlamydomonas reinhardtii is a green algae, a single cell eukaryotic organism, 10 micro meters in size,
          that lives in soil and fresh water. It is a model organism in biology, used for studying photosynthesis
          and ciliary functions in eukaryotes.
          Recently, Chlamydomonas reinhardtii has drawn attention as a possible source of useful proteins and bio-fuels.
        </aside>
      </section>

      <section>
        <h2>How does it move</h2>
        <div className="big-content">
          <div className="row">
            <ul>
              <li>Puller micro-swimmer</li>
              <li>Breast-stroke motion</li>
              <li>Run and tumble: <br /> straight swims alternated with rapid rotations</li>
            </ul>
            <figure>
              <video width="440" loop autoPlay="autoplay" controls muted>
                <source src={ExperimentOpenVideo} />
                <track />
              </video>
              <figcaption>
                Alper Joshua et al. Methods in Enzymology, 2013
              </figcaption>
            </figure>
          </div>
        </div>
        <aside className="notes">
          The propulsion mechanism of Chlamydomonas reinhardtii is provided by two anterior flagella that move in a breast-stroke movement,
          as shown in the video, at a frequency of 50 Hz. if we observe the motion for a longer time it can be seen that the periods
          of swimmings are interrupted by shorter periods in which the cell reorient itself. this is due to an asyncrony between the two
          flagella and this motion is called run and tumble motion.
        </aside>
      </section>


      <section>
        <h2>How to define a model for the motion of <i>C. reinhardtii</i>?</h2>
        <div className="medium-content">
          <ul>
            <li>Run and tumble motion</li>
            <li>Interaction with obstacles</li>
            <li>Results coherent with experiments</li>
          </ul>
        </div>
        <aside className="notes">
          The goal of my work is to define a mathematical model able to reproduce the swimming of Chlamydomonas reinhardtii,
          capturing the statistical properties of the diffusion in space of the cell and of the interactions with physical surfaces.
          Some possible applications of this organism include its use confined in a quasi-2D environment,
          like micro-channels or surfaces. For this reason, and for availability of experimental data, the model developed is in two dimensions.
        </aside>
      </section>


      <section>
        <h2>The Model</h2>
        <div className="big-content">
          <p>2D Asymmetric dumbbell, a sphere for the cell's body and a sphere for the area covered by the beating flagella</p>
          <div className="row">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/chlamydomonas_reinhardtii_rotated.png"
              style={{ flex: "1 1 50%", height: "34vh", }}
              alt="C. reinhardtii with a spherical body and two flagella" />
            <figure style={{ flex: "1 1 50%", }}>
              <StaticImage
                loading="eager"
                objectFit="contain"
                src="./micro-swimmers/images/dumbbell.png"
                style={{ width: "100%", height: "34vh", }}
                alt="dumbbell model composed of two spheres" />
              <figcaption>
                Wysocki Adam et al. Phys. Rev. E, May 2015
              </figcaption>
            </figure>
          </div>
        </div>
        <aside className="notes">
          The shape of the micro-swimmer has a great influence on the way it interacts with walls, particularly the trapping time duration.
          For a good characterization of the interaction between the cell and a wall a simple spherical model is not sufficient;
          when near a barrier, the forward flagella interacts with the surface, and the resulting torque causes the rotation of the cell.
          I use an asymmetric dumbbell as a model for the cell that consists of two spheres with radii a b and a f,
          connected by a rigid rod of length l.
          The green sphere represents the body of the cell, while the blue sphere represents the area covered by the beating flagella.
          e is the vector of norm 1 facing the swimming's direction of the cell.
          This kind of dumbbell model is frequently used for modelling micro-swimmers.
        </aside>
      </section>

      <section className="center">
        <h2>Equations of motion</h2>
        <div className="medium-content">
          <p className="big" dangerouslySetInnerHTML={{ __html: equations.motion_r }} />
          <p className="big" dangerouslySetInnerHTML={{ __html: equations.motion_eta }} />
        </div>
        <aside className="notes">
          I use the over-damped Langevin equation for describing the evolution in time of the position r of the dumbbell.
          v0 is the propulsion speed s the cell in the direction e.
          Given the mesoscopic scale of the object modeled,
          random noise caused by the thermal energy in the environment has an impact on the motion and is included in the differential equations.
          eta is a Gaussian white noise with zero mean and delta correlation function as shown in the second equation.
          F is the force accounting for the interaction with other objects present in the environment.
        </aside>
      </section>


      <section>
        <h2>Forces</h2>
        <div className="row">
          <div className="column">
            <p dangerouslySetInnerHTML={{ __html: equations.force_a }} />
            <p dangerouslySetInnerHTML={{ __html: equations.force_b }} />
          </div>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./micro-swimmers/images/dumbbell_w.png"
            style={{ height: "28vh" }}
            alt="A force is applied on each sphere." />
        </div>
        <p>Truncated Lennard-Jones potential:</p>
        <p dangerouslySetInnerHTML={{ __html: equations.potential_b }} />
        <p dangerouslySetInnerHTML={{ __html: equations.potential_f }} />
        <aside className="notes">
          F is the sum of two forces: one acting on the body and one acting on the flagella.
          Both are conservative forces coming from a simple truncated Lennard-Jones potential.
          In the equations r b is the position of the body's sphere, r f is the position of the
          flagella's sphere, and r w is the position of the nearby obstacle.
        </aside>
      </section>

      <section>
        <section>
          <h2>Direction</h2>
          <div className="medium-content">
            <p className="big" dangerouslySetInnerHTML={{ __html: equations.direction_e }} />
            <p className="big" dangerouslySetInnerHTML={{ __html: equations.direction_xi }} />
          </div>
          <aside className="notes">
            The direction e also changes in time, following this equations.
            xi is white Gaussian noise, again with mean 0 and delta auto-correlated,
            but this time is acting as a torque. big T is the torque applied on the cell, and has two components.
          </aside>
        </section>

        <section className="center">
          <h2>Direction</h2>
          <div className="medium-content">
            <p>Alternative expression, more useful for numerical computation</p>
            <p dangerouslySetInnerHTML={{ __html: equations.direction_theta }} />
          </div>
        </section>

        <section className="center">
          <h2>Direction</h2>
          <div className="medium-content">
            <p dangerouslySetInnerHTML={{ __html: equations.direction_tumble }} />
          </div>
        </section>
      </section>


      <section>
        <h2>Tumble</h2>
        <div className="big-content">
          <p className="big" dangerouslySetInnerHTML={{ __html: equations.tumble }} />
          <ul>
            <li>Time between two tumbles: exponential distribution with average <span dangerouslySetInnerHTML={{ __html: equations._11_2_s }} /></li>
            <li>Tumble duration: Gaussian distribution with average <span dangerouslySetInnerHTML={{ __html: equations._2_s }} /></li>
            <li>Tumble strength: Gaussian distribution with average <span dangerouslySetInnerHTML={{ __html: equations._0_75_rad_s }} /></li>
          </ul>
        </div>
        <aside className="notes">
          T w is the torque resulting from the external forces applied on the dumbbell seen before.
          T t is the torque caused by the tumbling of the cell.
          T t is equal to zero during the straight swim and has a strength and a duration extracted from a gaussian distribution
          during the tumbLe, in order to reproduce as closely as possible the real tumble of C. reinhardtii.
          The duration of the straight swim between two consecutive tumbles is extracted from a exponential distribution with mean 11.2 seconds.
        </aside>
      </section>


      <section>
        <h3>Parameters</h3>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="column">
            <table>
              <thead>
                <tr><th>variable</th></tr>
              </thead>
              <tbody dangerouslySetInnerHTML={{ __html: equations.parameter_variables }} className="small" />
            </table>
          </div>
          <div className="column">
            <table className="fragment fade-in">
              <thead>
                <tr><th>value</th><th>m. u.</th></tr>
              </thead>
              <tbody dangerouslySetInnerHTML={{ __html: equations.parameter_values }} className="small" />
            </table>
          </div>
        </div>
        <aside className="notes">
          The model illustrated is quite simple, however it already depends on quite a few parameters,
          for the shape, propulsion, random perturbations and tumble.
          After a literature search I found these values for the parameters.
          However, for the propulsive speed v 0, there are different values in the literature that correspond to different strands
          of C. reinhardtii, different measurement conditions and techniques.
          They are in a range from 60 to 110 micro meter per second. Regarding noise intensities mu and tau,
          no experimental values could be found in the literature.
          To obtain these parameters I considered different experiments,
          and fitted the parameters to best reproduce the empirical data.
        </aside>
      </section>

      <section>
        <h3>Experimental Validation</h3>
        <div className="big-content">
          <div className="row">
            <figure>
              <StaticImage
                loading="eager"
                objectFit="contain"
                src="./micro-swimmers/images/open_displacement_kantsler2013ciliary.jpg"
                style={{ height: "40vh" }}
                alt="Mean square displacement in open space from experiment." />
              <figcaption>
                Vasily Kantsler et al. PNAS, January 2013
              </figcaption>
            </figure>
            <div className="column">
              <p>Mean square displacement from experiment in open space</p>
              <ul>
                <li>Short time: ballistic behavior</li>
                <li>Long time: diffusion behavior</li>
              </ul>
            </div>
          </div>
        </div>
        <aside className="notes">
          The first experiment consider the cell in an environment without obstacles, where it's free to move.
          This plot shows the experimental measure of the mean square displacement for a cell in a quasi 2D chamber of height 25 micro meters.
          From the figure we can see that the motion is ballistics for the first instants,
          with the mean square displacement proportional to t squared, and diffusive for longer times,
          with the mean square displacement proportional to the time.
        </aside>
      </section>


      <section>
        <h3>Experimental Validation</h3>
        <div className="big-content">
          <div className="row">
            <figure>
              <StaticImage
                loading="eager"
                objectFit="contain"
                src="./micro-swimmers/images/confined_radial_ostapenko2018curvature.png"
                style={{ height: "35vh" }}
                alt="Radial probability in confined space from experiment." />
              <figcaption>
                Tanya Ostapenko et al. Phys. Rev. Lett., February 2018
              </figcaption>
            </figure>
            <div className="column">
              <p>Radial probability <span dangerouslySetInnerHTML={{ __html: equations.p_r }} /> in confined environment</p>
              <p dangerouslySetInnerHTML={{ __html: equations.radial_probability }} />
            </div>
          </div>
        </div>
        <aside className="notes">
          Another study reports empirical data about the statistical properties of a single cell swimming confined in an almost-2D disk.
          All experiments were performed in circular compartments with radii ranging from 25 micro meters to 500 micro meters;
          the height of the compartments was approximately 20 micro meters.
          The probability density here defined, represents how much time the cell spends at different distances from the center.
          The figure shows that for all the experiment most of the time is spent near the wall.
        </aside>
      </section>


      <section>
        <h3>Numerical Simulation</h3>
        <div className="row">
          <div className="column" style={{ flex: "1 1 1%" }} >
            <p>Experiment</p>
            <figure>
              <video loop autoPlay="autoplay" controls muted style={{ height: "40vh" }}>
                <source src={ExperimentConfinedVideo} />
                <track />
              </video>
              <figcaption>
                Tanya Ostapenko et al. Phys. Rev. Lett., February 2018
              </figcaption>
            </figure>
          </div>
          <div className="column" style={{ flex: "1 1 1%" }} >
            <p>Simulation</p>
            <figure>
              <video loop autoPlay="autoplay" controls muted style={{ height: "40vh" }}>
                <source src={SimulationConfinedVideo} />
              </video>
              <figcaption>
                <a href="https://github.com/LucaPizzagalli/swimmers-brownian-simulation">
                  github.com/LucaPizzagalli/swimmers-brownian-simulation
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
        <aside className="notes">
          I then discretized the equations of motion and implemented a numerical simulation for the presented model,
          written in the language C++.
          Here on the left there is a recording of the real Chlamydomonas reinhardtii, on the right a rendering of my simulation.
          We can see that the model mimics the real cell, the dumbbell spends lots of time near the wall,
          but it also travels trough the center area.
        </aside>
      </section>


      <section>
        <h3>Experimental Validation</h3>
        <div className="row">
          <div className="column">
            <p>Experiment</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/open_displacement_kantsler2013ciliary.jpg"
              style={{ height: "40vh" }}
              alt="Mean square displacement in open space from experiment." />
          </div>
          <div className="column fragment fade-in">
            <p>Simulation</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/open_my_displacement.png"
              style={{ height: "40vh" }}
              alt="Mean square displacement in open space from simulation." />
          </div>
        </div>
        <aside className="notes">
          I set the value of the three parameters v 0 mu and tau to fit the experimental data.
          Here we can see that the model is able to reproduce the two behavior for different timescales,
          and the transition between ballistic and behavior is around 10 seconds,
          that is the mean time of a straight swim.
        </aside>
      </section>


      <section>
        <h3>Experimental Validation</h3>
        <div className="row">
          <div className="column">
            <p>Experiment</p>
            <figure>
              <StaticImage
                loading="eager"
                objectFit="contain"
                src="./micro-swimmers/images/confined_radial_ostapenko2018curvature.png"
                style={{ height: "35vh" }}
                alt="Radial probability in confined space from experiment." />
              <figcaption>
                Tanya Ostapenko et al. Phys. Rev. Lett., February 2018
              </figcaption>
            </figure>
          </div>
          <div className="column fragment fade-in">
            <p>Simulation</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/confined_R_radial_probability.png"
              style={{ height: "40vh" }}
              alt="Radial probability in confined space from simulation." />
          </div>
        </div>
        <aside className="notes">
          Also the statistical properties of the cell in a confined environment are well reproduced by the model.
          Quantitatively we can see a significant discrepancy only for the radial probability for the smallest disk,
          that is a bit to high.
        </aside>
      </section>


      <section>
        <h3>Parameters</h3>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="column">
            <table>
              <thead>
                <tr><th>variable</th></tr>
              </thead>
              <tbody dangerouslySetInnerHTML={{ __html: equations.parameter_variables }} className="small" />
            </table>
          </div>
          <div className="column">
            <table className="fragment fade-in">
              <thead>
                <tr><th>value</th><th>m. u.</th></tr>
              </thead>
              <tbody dangerouslySetInnerHTML={{ __html: equations.parameter_values_2 }} className="small" />
            </table>
          </div>
        </div>
      </section>


      <section>
        <h1>Dependence on parameters</h1>
        <aside className="notes">
          The next step is to check the robustness of these results as parameters change,
          this is particularly interesting given the uncertainty and the variability of some parameters.
        </aside>
      </section>


      <section>
        <h2>Propulsion Speed</h2>
        <div className="row">
          <div className="column">
            <p>Msd in open space</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/open_v_0_displacement.png"
              style={{ height: "40vh" }}
              alt="MSD in open space as a function of speed." />
          </div>
          <div className="column">
            <p><span dangerouslySetInnerHTML={{ __html: equations.p_r }} /> in confinement</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/confined_v_0_radial_probability.png"
              style={{ height: "40vh" }}
              alt="Radial probability in confined space as a function of speed." />
          </div>
        </div>
        <aside className="notes">
          The figures are obtained simulating the movement of the cell confined in a disk of radius 100 mu m,
          while the other figure is obtained for a cell free to move in all the space;
          both are plotted for different values of the propulsion speed v_0.
          As expected the mean square displacement grows with the speed.
          Less expected is the result about the time spent near wall: it grows significantly with the speed;
          this can be explained considering that a faster cell, when leaving a surface,
          will spend less time traveling until the next contact with another surface.
        </aside>
      </section>


      <section>
        <h2>Rotational Axis</h2>
        <div className="row">
          <div className="column">
            <p>Msd in open space</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/open_c_displacement.png"
              style={{ height: "40vh" }}
              alt="MSD in open space as a function of the position of the rotational axis." />
          </div>
          <div className="column">
            <p><span dangerouslySetInnerHTML={{ __html: equations.p_r }} /> in confinement</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/confined_c_radial_probability.png"
              style={{ height: "40vh" }}
              alt="Radial probability in confined space as a function of the position of the rotational axis." />
          </div>
        </div>
        <aside className="notes">
          Another interesting dependence is the one between the location c of the rotation axis
          along the length of the cell and the radial probability P(r).
          This affect both the rotation due to the interaction with the wall an the rotation due to the tumble movement.
          From the figure we can see that the time spent by the cell near the wall is longer
          if the center of rotation of the cell is moved forward (so if c is bigger).
          A possible explanation of this fact is that during an interaction between the micro-swimmer and the wall,
          a center of mass shifted toward the back makes the torque's arm longer and thus makes it easier for the cell to turn away from the wall.
          (the figure tries to explain this concept).
        </aside>
      </section>


      <section>
        <h2>Rotational Axis</h2>
        <div className="medium-content">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./micro-swimmers/images/dumbbell_c.png"
            style={{ height: "30vh" }}
            alt="Stronger arm, and thus torque, when the rotational axis is far from the cell's center." />
        </div>
        <aside className="notes">
          Another interesting dependence is the one between the location c of the rotation axis along the length of the cell
          and the radial probability P(r).
          This affect both the rotation due to the interaction with the wall an the rotation due to the tumble movement.
          From the figure we can see that the time spent by the cell near the wall is longer
          if the center of rotation of the cell is moved forward (so if c is bigger).
          A possible explanation of this fact is that during an interaction between the micro-swimmer and the wall,
          a center of mass shifted toward the back makes the torque's arm longer and thus makes it easier for the cell to turn away from the wall.
          (the Figure tries to explain this concept).
        </aside>
      </section>


      <section>
        <h2>Tumble Strength</h2>
        <div className="row">
          <div className="column">
            <p>Msd in open space</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/open_fracT_ttau_displacement.png"
              style={{ height: "40vh" }}
              alt="MSD in open space as a function of tumble strength." />
          </div>
          <div className="column">
            <p><span dangerouslySetInnerHTML={{ __html: equations.p_r }} /> in confinement</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/confined_fracT_ttau_radial_probability.png"
              style={{ height: "40vh" }}
              alt="Radial probability in confined space as a function of tumble strength." />
          </div>
        </div>
        <aside className="notes">
          Let us consider now the influence of the tumble on the statistical properties of the micro-swimmer's movement.
          Different simulations have been performed for different values of T_t, the torque representing the tumble.
          From the figure we can see that the tumble starts having an influence on the mean-square-displacement only after about one second from the start;
          this is caused by the fact that in the simulation the microswimmer starts in a non-tumbling configuration,
          and only after a random time the first tumble begins.
          A stronger torque means a more drastic reorientation of the cell and this is reflected in a minor mean-square displacement.
          The tumble has also an effect on the radial probability.
          The persistence time near the wall decreases with the increasing strength of the tumble
          as a stronger tumble means higher probability of reorienting the cell away from the wall.
          Analogous effects on both mean-square-displacement and radial probability
          can be expected to induce a variation in the tumble duration or in the frequency of tumbling events.
        </aside>
      </section>


      <section>
        <h2>Translational Noise</h2>
        <div className="row">
          <div className="column">
            <p>Msd in open space</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/open_K_bTmu_displacement.png"
              style={{ height: "40vh" }}
              alt="MSD in open space as a function of translational noise strength." />
          </div>
          <div className="column">
            <p><span dangerouslySetInnerHTML={{ __html: equations.p_r }} /> in confinement</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/confined_K_bTmu_radial_probability.png"
              style={{ height: "40vh" }}
              alt="Radial probability in confined space as a function of translational noise strength." />
          </div>
        </div>
        <aside className="notes">
          The next parameter to be varied is mu.
          The value of mu influences the intensity of the random noise,
          that perturbs the cell's swimming.
          This can be seen in the mean-square-displacement;
          mu has an influence in the first moments of swimming (mostly the first second).
          After some time the displacement caused by the propulsive speed of the cell becomes predominant and the different plots converge.
          The figure shows the radial probability;
          as the intensity of the noise increases the movement of the cell is more disturbed and the time spent near the wall decreases.
        </aside>
      </section>


      <section>
        <h2>Rotational Noise</h2>
        <div className="row">
          <div className="column">
            <p>Msd in open space</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/open_fracK_bTtau_displacement.png"
              style={{ height: "40vh" }}
              alt="MSD in open space as a function of rotational noise strength." />
          </div>
          <div className="column">
            <p><span dangerouslySetInnerHTML={{ __html: equations.p_r }} /> in confinement</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/confined_fracK_bTtau_radial_probability.png"
              style={{ height: "40vh" }}
              alt="Radial probability in confined space as a function of rotational noise strength." />
          </div>
        </div>
        <aside className="notes">
          The last parameter dependency to be evaluated is the one on tau_p.
          tau_p determines the strength of the rotational noise.
          As expected there is an inverse correlation between the mean-square-displacement and tau_p.
          Unlike the case with mu, however, this is relevant in the longer term,
          because tau_p affects the rotation of the cell and so the direction of the propulsive speed.
          Also, contrary to mu, tau_p has a negative effect on the mean-square-displacement,
          as increasing the rotational diffusion reduces the linearity of the trajectory, and so the msd.
          From figure we can see that a stronger rotational noise implies a shorter retention times near the wall,
          this time in analogy with the case of mu.
        </aside>
      </section>


      <section data-background-video={SimulationOpenVideo} data-background-video-loop="true">
        <div className="column"
          style={{ backgroundColor: "rgba(0, 0, 0, .7)" }}>
          <h2 className="white">Collective Behavior</h2>
          <p className="white">Four components for the force:</p>
          <p className="white" dangerouslySetInnerHTML={{ __html: equations.collective_f }} />
          <p className="white">from truncated Lennard-Jones potentials</p>
        </div>
        <aside className="notes">
          When two active swimmers get near each other,
          each one of the two sphere composing a dumbbell can interact with both of the two spheres composing the other,
          thus four forces are to be computed.
          I model each of these forces as the result of a truncated Lennard-Jones potential,
          in analogy with what done for the cell-wall interaction.
        </aside>
      </section>


      <section>
        <h3>Diffusion</h3>
        <p>Linear density of a diffusion of <i>C. reinhardtii</i> in a test tube, 1 minute after centrifugation.</p>
        <div className="row">
          <div className="column" style={{ flex: "1 1 50%", }}>
            <p>Experiment</p>
            <figure>
              <StaticImage
                loading="eager"
                objectFit="contain"
                src="./micro-swimmers/images/diffusion_polin2009chlamydomonas.png"
                style={{ height: "34vh" }}
                alt="Linear density after diffusion from experiment." />
              <figcaption>
                Polin Marco et al. Science, Jul 2009
              </figcaption>
            </figure>
          </div>
          <div className="column fragment fade-in" style={{ flex: "1 1 50%", }}>
            <p>Simulation</p>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/diffusion_my.png"
              style={{ height: "36vh" }}
              alt="Linear density after diffusion from simulation." />
          </div>
        </div>
        <aside className="notes">
          Experimental measurements of Chlamydomonas' macroscopic diffusion are available from the work polin2009chlamydomonas.
          A suspension of 1.5 ml of Chlamydomonas is transferred in a test tube of size 20 x 12.2 x 4 mm
          and centrifuged at 350 g for 2.5 min, causing the sedimentation of the suspended cells.
          The figure reports the measurements of the cells' linear density distribution across the test tube
          after one minute form the end of the centrifugation process.
          I simulated one minute of 10_000 Chlamydomonas' cells diffusing from a concentrated initial state,
          with a time-step of 10^-3 s.
          The picture reports the linear concentration at different times of the micro-swimmers' suspension according to the simulation.
          The final distribution is qualitatively similar to the experimental measurement.
          However, the max value of the simulated distribution is not at the absolute bottom of the test tube only because of the starting condition.
          Instead, for the experiment, the reason explaining why the max density is not exactly located at the bottom
          is to be found in the physical traits of C. reinhardtii.
        </aside>
      </section>


      <section>
        <h2>Conclusions</h2>
        <div className="medium-content">
          <p>The model developed is powerful enough to reproduce:</p>
          <div className="row">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/cute_chlamydomonas_1.jpeg"
              style={{ flex: "1 1 40%", height: "34vh", }}
              alt="chlamydomonas reinhardtii moves beating two forward flagella" />
            <ul style={{ flex: "1 1 60%", }}>
              <li>Ballistic and diffusive behavior in open space</li>
              <li>Long retention times when near convex walls</li>
              <li>Diffusion of cells in a suspension</li>
            </ul>
          </div>
        </div>
        <aside className="notes">
          In this work I developed a mathematical model of C. reinhardtii.
          The model formalizes the eukaryotes' motion taking into account the propulsion coming from the flagella activity,
          the perturbation due to the thermal noise, the tumbling activity,
          and the interaction between the cell and a surface.
          The comparison between the numerical simulations and empirical data
          shows that the developed model is able to qualitatively reproduce some fundamental properties of the motion of the cell
          and its interaction with obstacles:
          - Looking at the mean-square-displacement as function of time,
          the model is able to reproduce both the ballistic behaviour typical of the first instants of motion
          and the subsequent transition to a diffusive motion when the direction the cell is facing has been randomized
          by the rotational noise and the tumble events.
          - The compatibility as been observed also with experiments of a single cell in a confined environment.
          The plot of the radial probability resulting from the numerical simulations
          well captures the facts that most of the time is spent by the cell near the surface.
          - Finally, the plot of the time evolution of the simulation of a multitude of active particles in the same environment
          shows that it is also possible to capture some the collective quality of the Chlamydomonas' motion.
          I then proceeded testing the robustness of the model by changing the value of its parameters.
          A significant dependence of the result on all the parameters is observed.
          For this reason, and having in mind the variability and uncertainty of some parameters of the model,
          we can expect that quantitative predictions based on this model can show some discrepancies with empirical data.
          The last comparison between the diffusion of thousands simulated active-particles
          and the diffusion of the real cells of C. reinhardtii in a suspensions
          shows a first limitation in the description power of the model.
          The real Chlamydomonas exhibits gravitaxis while for the mathematical model here developed the space is isotropic.
          This introduces the opportunity for future developments and improvements.
          The model here developed does not exactly describe all the aspects of the behavior of C. reinhardtii.
          However an extension of such model could capture the way C. reinhardtii perceives the environment
          and adapts to the different conditions, particularly reproducing gravitaxis, chemotaxis and phototaxis.
        </aside>
      </section>


      <section>
        <h2>Conclusions</h2>
        <div className="medium-content">
          <p>The quantitative results are in good agreement with the experimental values, but:</p>
          <div className="row">
            <ul style={{ flex: "1 1 50%", }}>
              <li>Some parameters are tuned to experiments</li>
              <li>Results show a significant dependence on the parameters used</li>
            </ul>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/cute_chlamydomonas_2.jpeg"
              style={{ flex: "1 1 50%", height: "30vh", }}
              alt="chlamydomonas reinhardtii moves beating two forward flagella" />
          </div>
        </div>
      </section>


      <section>
        <h2>Conclusions</h2>
        <div className="medium-content">
          <p>Further extensions could take into account how the cell perceives the environment and modifies its behavior accordingly, including:</p>
          <div className="row" style={{ width: "80%", }}>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./micro-swimmers/images/cute_chlamydomonas_3.jpeg"
              style={{ flex: "1 1 60%", height: "34vh", }}
              alt="Chlamydomonas reinhardtii moves beating two forward flagella." />
            <ul style={{ flex: "1 1 40%", }}>
              <li>Chemotaxis</li>
              <li>Gravitaxis</li>
              <li>Phototaxis</li>
            </ul>
          </div>
        </div>
      </section>


      <section className="center" data-background-video={ThankYouVideo}>
        <h3 className="white">Thank you for your attention</h3>
        <aside className="notes">
          Thank you for your attention.
        </aside>
      </section>
    </Deck>
  );
}

export default MicroSwimmersDeck
