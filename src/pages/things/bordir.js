import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Deck from "../../components/deck"

import Autism from "./bordir/images/autism.png"
import SyntheticDataset from "./bordir/images/synthetic_dataset.png"


function BordirDeck() {
  return (
    <Deck location="/things/bordir">

      <section>
        <div>
          <h1>Instance Segmentation</h1>
          <h2>has a problem</h2>
        </div>
      </section>

      <section>
        <h2>Semantic segmentation</h2>
        <div className="row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/target.png"
            style={{ height: "30vh", flex: "1 1 1%", }}
            alt="Various objects." />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/class_segmentation.png"
            style={{ height: "30vh", flex: "1 1 1%", }}
            alt="Same image but each object has a color corresponding to its class." />
        </div>
        <p>The semantic segmentation problem has a natural solution.</p>
        <aside className="notes">
          Encode each class in a different way,
          so we can predict the class for every pixel.
        </aside>
      </section>

      <section>
        <h2>Instance Segmentation</h2>
        <div className="row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/target.png"
            style={{ height: "30vh", flex: "1 1 1%" }}
            alt="Various objects." />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/instance_segmentation.png"
            style={{ height: "30vh", flex: "1 1 1%" }}
            alt="Same image but each object has a different index." />
        </div>
        <p>For instance segmentation, some kind of trick is needed.</p>
      </section>
      <section data-transition="slide-in zoom-out">
        <h2>Existing solutions</h2>
        <aside className="notes">
          Let's see how other people approached the problem,
          and what kind of tricks they are using in their pre/post processing.
        </aside>
      </section>

      <section>
        <h2>Mask R-CNN / Yolo</h2>
        <div className="row">
          <figure>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/r-cnn_ugly.png"
              style={{ height: "30vh", flex: "1 1 1%" }}
              alt="Boxes around objects." />
            <figcaption>
              <a href="https://doi.org/10.48550/arXiv.1703.06870">doi.org/10.48550/arXiv.1703.06870</a> 2017
            </figcaption>
          </figure>
          <figure>
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/yolo_ugly.png"
              style={{ height: "30vh", flex: "1 1 1%" }}
              alt="Boxes around objects." />
            <figcaption>
              <a href="https://doi.org/10.48550/arXiv.1506.02640">doi.org/10.48550/arXiv.1506.02640</a> 2015
            </figcaption>
          </figure>
        </div>
        <p>Arbitrary concept of box. region proposal / grid. NMS.</p>
      </section>

      <section>
        <h2>Mask R-CNN / Yolo</h2>
        <div className="row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/r-cnn_yolo_test.png"
            style={{ height: "30vh", flex: "1 1 1%" }}
            alt="Two objects next to each other in diagonal." />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/r-cnn_yolo_fail.png"
            style={{ height: "30vh", flex: "1 1 1%" }}
            alt="Same two objects, but with two boxes around them, almost overlapping." />
        </div>
        <p>Fails for complex intertwined shapes. Ugly.</p>
      </section>

      <section>
        <h2>Stardist</h2>
        <figure>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/stardist_ugly.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
          <figcaption>
            <a href="https://doi.org/10.48550/arXiv.1806.03535">doi.org/10.48550/arXiv.1806.03535</a> 2018
          </figcaption>
        </figure>
        <p>Predicts full object shape for every pixel. NMS.</p>
      </section>

      <section>
        <h2>Stardist</h2>
        <div className="row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/stardist_test.png"
            style={{ height: "28vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/stardist_fail.png"
            style={{ height: "28vh", flex: "1 1 1%" }} />
        </div>
        <p>Works ony for simple shapes with well defined centers. Ugly.</p>
      </section>

      <section>
        <h2>Cellpose</h2>
        <figure>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/cellpose_ugly.png"
            style={{ width: "100%" }} />
          <figcaption>
            <a href="https://doi.org/10.1038/s41592-020-01018-x">doi.org/10.1038/s41592-020-01018-x</a> 2020
          </figcaption>
        </figure>
        <p>Diffusion simulation form object center. Predicts gradient, aka "path" to center.</p>
        <aside className="notes">It needs the concept of center. The model requires a global
          understanding of the object in order to identify the center.
          Some object simply don't have a center, this can cause instability
          in the target.</aside>
      </section>

      <section>
        <h2>Cellpose</h2>
        <div className="row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/cellpose_test_1.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/cellpose_fail_1.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
        </div>
        <p>Arbitrary concept of center. Local change has global impacts.</p>
        <aside className="notes">
          Model needs global understanding of the object in order to identify the center.
        </aside>
      </section>

      <section>
        <h2>Cellpose</h2>
        <div className="row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/cellpose_test_2.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/cellpose_fail_2.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
        </div>
        <p>Local change has global impacts. Vanishing gradient. Kinda not ugly.</p>
        <aside className="notes">
          The model requires a global
          understanding of the object in order to identify topology.
        </aside>
      </section>

      <section>
        <h2>Panoptic-DeepLab</h2>
        <figure>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/deeplab_ugly.png"
            style={{ width: "100%" }} />
          <figcaption>
            <a href="https://doi.org/10.48550/arXiv.1806.03535">doi.org/10.48550/arXiv.1806.03535</a> 2018
          </figcaption>
        </figure>
        <p>Predicts centers and vector distance to center.</p>
      </section>

      <section>
        <h2>Panoptic-DeepLab</h2>
        <div className="row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/deeplab_test.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/deeplab_fail.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
        </div>
        <p>Global object understanding is needed. Fails if centers are next to each other.</p>
      </section>

      <section>
        <h2>MaskFormer</h2>
        <div className="row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/maskformer_ugly_1.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/arrow.png"
            style={{ height: "5vh" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/maskformer_ugly_2.png"
            style={{ height: "30vh", flex: "2 1 1%" }} />
        </div>
        <p>Predicts directly multiple masks.</p>
      </section>

      <section>
        <h2>MaskFormer</h2>
        <figure>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/maskformer_fail_1.png"
            style={{ width: "100%" }} />
          <figcaption>
            <a href="https://doi.org/10.48550/arXiv.2107.06278">doi.org/10.48550/arXiv.2107.06278</a> 2021
          </figcaption>
        </figure>
        <p>Complicated model. Global image understanding needed.</p>
      </section>

      <section>
        <h2>MaskFormer</h2>
        <div className="full row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/maskformer_test_2.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/maskformer_fail_2.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
        </div>
        <p>Similar objects -&gt; same mask. I guess.</p>
      </section>

      <section>
        <h2>Facebook Segment Anything Model</h2>
        <figure>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/facebook_ugly_1.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
          <figcaption>
            <a href="https://doi.org/10.48550/arXiv.2304.02643">doi.org/10.48550/arXiv.2304.02643</a> 2023
          </figcaption>
        </figure>
        <p>Needs extra input. E.g. point. Generates mask containing the point.</p>
        <aside className="notes">
          It's playing a different game. it's an interactive model,
          it needs a token "hint" in the input. For full segmentation of an
          image it creates a grid of input points, and then it does NMS.
        </aside>
      </section>

      <section>
        <h2>Facebook Segment Anything Model</h2>
        <figure>
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/facebook_ugly_2.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
          <figcaption>
            <a href="https://doi.org/10.48550/arXiv.2304.02643">doi.org/10.48550/arXiv.2304.02643</a> 2023
          </figcaption>
        </figure>
        <p>Uses grid. Generates one mask for each grid point. NMS.</p>
      </section>

      <section>
        <h2>Facebook Segment Anything Model</h2>
        <div className="row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/facebook_test_1.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/facebook_fail_1.png"
            style={{ height: "30vh", flex: "1 1 1%" }} />
        </div>
        <p>Grid can miss small objects. Lots of computation. Ugly.</p>
      </section>

      <section>
        <h2>Facebook Segment Anything Model</h2>
        <div className="row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/facebook_test_2.png"
            style={{ height: "26vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/facebook_fail_2.png"
            style={{ height: "26vh", flex: "1 1 1%" }} />
        </div>
        <p>Apparently it's not perfect for complex shapes.</p>
      </section>

      <section data-transition="slide-in zoom-out">
        <h2>Ok, my proposal</h2>
      </section>
      <section data-background-image={Autism}>
        <div style={{ color: "black", fontWeight: "bolder", WebkitTextStroke: "1px var(--highlight-color)" }}>
          <h2>Border direction is all you need</h2>
          <p>Just predict the direction to the closest border.</p>
        </div>
        <aside className="notes">
          Very simple idea. A bit anti-climatic, even.
          Predict the direction to the closest border.
        </aside>
      </section>

      <section>
        <h2>Postprocessing</h2>
        <p>Border direction is enough information for reconstructing the objects.</p>
        <div className="column" style={{ alignItems: "stretch" }}>
          <div className="row">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/vectors_1.png"
              style={{ height: "10vh" }} />
            <p style={{ flexGrow: "1" }}>Parallel vectors -&gt; same object</p>
          </div>
          <div className="row">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/vectors_2.png"
              style={{ height: "10vh" }} />
            <p style={{ flexGrow: "1" }}>Diverging vectors -&gt; same object</p>
          </div>
          <div className="row">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/vectors_3.png"
              style={{ height: "10vh" }} />
            <p style={{ flexGrow: "1" }}>Converging vectors -&gt; different objects</p>
          </div>
        </div>
        <aside className="notes">
          The information is enough to reconstruct the object shape.
          parallel vectors bla bla.
        </aside>
      </section>

      <section>
        <h2>Why it's cool</h2>
        <ul>
          <li>No boxes / assumptions about objects' shape.</li>
          <li>No made up definition of center.</li>
          <li>Only local context needed for prediction.</li>
          <li>Target is always well-behaved in [-1, 1].</li>
          <li>No ugly NMS.</li>
          <li>Robust to rescaling (?).</li>
          <li>Fast (?).</li>
        </ul>
      </section>

      <section>
        <h2>Not just border detection</h2>
        <div className="row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/border_test.png"
            style={{ height: "25vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/border_error.png"
            style={{ height: "25vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/border_fail.png"
            style={{ height: "25vh", flex: "1 1 1%" }} />
        </div>
        <p>Fragile. Mis-prediction in a few pixels can cause cascading error.</p>
        <aside className="notes">
          Detecting directly borders is very fragile. Mis-predictions in a few
          pixels can cause a cascade error.
        </aside>
      </section>

      <section>

        <section>
          <h2>Not just border detection</h2>
          <div className="row">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/border_test.png"
              style={{ height: "25vh", flex: "1 1 1%" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/gradient_error.png"
              style={{ height: "25vh", flex: "1 1 1%" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/gradient_success.png"
              style={{ height: "25vh", flex: "1 1 1%" }} />
          </div>
          <p>Robust. Redundancy of information allows prediction stability.</p>
          <aside className="notes">
            With border direction prediction the information about the position
            of the border is replicated and distributed in the whole 2d area, not
            only in the 1d border. There is redundancy and this makes the model
            more robust.
            Even if we scramble the predictions at the border the information
            for a good object reconstruction is still there.
          </aside>
        </section>

        <section>
          <h2>A Better Definition</h2>
          <div className="row">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/direction_fail_1.png"
              style={{ height: "25vh", flex: "1 1 1%" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/direction_fail_2.png"
              style={{ height: "25vh", flex: "1 1 1%" }} />
          </div>
          <p>The simplest definition of border direction is "unstable".</p>
        </section>

        <section>
          <h2>A Better Definition</h2>
          <div className="row">
            <StaticImage loading="eager"
              objectFit="contain"
              src="./bordir/images/definition_instance.png"
              style={{ height: "18vh", flex: "3 1 1%" }} />
            <StaticImage loading="eager"
              objectFit="contain"
              src="./bordir/images/arrow.png"
              style={{ height: "5vh", flex: "1 1 1%" }} />
            <StaticImage loading="eager"
              objectFit="contain"
              src="./bordir/images/definition_pyramids.png"
              style={{ height: "18vh", flex: "3 1 1%" }} />
            <StaticImage loading="eager"
              objectFit="contain"
              src="./bordir/images/arrow.png"
              style={{ height: "5vh", flex: "1 1 1%" }} />
            <StaticImage loading="eager"
              objectFit="contain"
              src="./bordir/images/definition_gradient_y.png"
              style={{ height: "18vh", flex: "3 1 1%" }} />
            <StaticImage loading="eager"
              objectFit="contain"
              src="./bordir/images/arrow.png"
              style={{ height: "5vh", flex: "1 1 1%" }} />
            <StaticImage loading="eager"
              objectFit="contain"
              src="./bordir/images/definition_gradient.png"
              style={{ height: "18vh", flex: "3 1 1%" }} />
          </div>
          <p>Gradient of the distance-to-border field.</p>
        </section>

      </section>

      <section data-transition="slide-in zoom-out">
        <h2>Let's see the prototype</h2>
      </section>

      <section data-background-image={SyntheticDataset}>
        <h2 style={{ color: "black", fontWeight: "bolder", WebkitTextStroke: "1px var(--highlight-color)" }}>
          Synthetic dataset
        </h2>
      </section>

      <section>
        <h2>Bordir</h2>
        <div className="row">
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/step_input.png"
            style={{ height: "18vh", flex: "3 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/arrow.png"
            style={{ height: "5vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/step_network.png"
            style={{ height: "18vh", flex: "3 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/arrow.png"
            style={{ height: "5vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/step_gradient.png"
            style={{ height: "18vh", flex: "3 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/arrow.png"
            style={{ height: "5vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/step_postprocessing.png"
            style={{ height: "16vh", flex: "3 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/arrow.png"
            style={{ height: "5vh", flex: "1 1 1%" }} />
          <StaticImage
            loading="eager"
            objectFit="contain"
            src="./bordir/images/step_unknown.png"
            style={{ height: "16vh", flex: "3 1 1%" }} />
        </div>
        <p>Classic ResNet as network.</p>
      </section>

      <section style={{ width: "100%" }}>
        <div className="row" style={{ width: "100%" }} >
          <div className="column">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex1_input.png"
              style={{ height: "100%", margin: "0" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex1_output.png"
              style={{ height: "100%", margin: "0" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex1_error.png"
              style={{ height: "100%", margin: "0" }} />
          </div>
          <div className="column">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex2_input.png"
              style={{ height: "100%", margin: "0" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex2_output.png"
              style={{ height: "100%", margin: "0" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex2_error.png"
              style={{ height: "100%", margin: "0" }} />
          </div>
          <div className="column">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex3_input.png"
              style={{ height: "100%", margin: "0" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex3_output.png"
              style={{ height: "100%", margin: "0" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex3_error.png"
              style={{ height: "100%", margin: "0" }} />
          </div>
          <div className="column">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex4_input.png"
              style={{ height: "100%", margin: "0" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex4_output.png"
              style={{ height: "100%", margin: "0" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex4_error.png"
              style={{ height: "100%", margin: "0" }} />
          </div>
          <div className="column">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex5_input.png"
              style={{ height: "100%", margin: "0" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex5_output.png"
              style={{ height: "100%", margin: "0" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex5_error.png"
              style={{ height: "100%", margin: "0" }} />
          </div>
          <div className="column">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex6_input.png"
              style={{ height: "100%", margin: "0" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex6_output.png"
              style={{ height: "100%", margin: "0" }} />
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/ex6_error.png"
              style={{ height: "100%", margin: "0" }} />
          </div>
        </div>
        <p>Predictions on the test set.</p>
      </section>

      <section>

        <section>
          <div>
            <h2>Instance segmentation</h2>
            <h1>metrics</h1>
          </div>
        </section>

        <section>
          <h2>Intersection over union</h2>
        </section>

        <section>
          <p>True positive is when intersection over union is above a threshold.</p>
          https://kharshit.github.io/blog/2019/09/20/evaluation-metrics-for-object-detection-and-segmentation
          <aside className="notes">
            I suppose the advantage is that the metrics are intuitive.
            I guess.
          </aside>
        </section>

        <section>
          <p>Problem 1: arbitrary threshold is involved</p>
          <aside className="notes">
            Also, under 50% it makes no sense anymore
            as you could have multiple true positive for a single data point.
            Commonly used thresholds are 50% and 95%. Sometimes it's not even
            reported and it's left to you to guess.
            In COCO evaluation, the IoU threshold ranges from 0.5 to 0.95
            with a step size of 0.05.
          </aside>
        </section>

        <section>
          <p>Problem 2: Integration is not intuitive anymore.</p>
          <aside className="notes">
            Also, the size of the integration step still lives
            room for arbitrariness. And then if you compute the "average precision",
            you have to integrate over the model threshold, so you have a
            double integration.
          </aside>
        </section>

        <section>
          <p>Very different kind of errors have the same metric.</p>
          <aside className="notes">
            It fells like we need more dimensions to
            better represent the system.
          </aside>
        </section>

        <section>
          <h2>Panoptic quality</h2>
        </section>

        <section>
          <h2>My proposal</h2>
        </section>

        <section>
          <div className="row">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/metric_target.png"
              style={{ height: "40vh", flex: "1 1 1%" }} />
            <p>Two classes: object and background. We have a target...</p>
          </div>
        </section>

        <section>
          <div className="row">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/metric_prediction.png"
              style={{ height: "40vh", flex: "1 1 1%" }} />
            <p>...and the model prediction. What are the errors?</p>
          </div>
        </section>

        <section>
          <div className="row">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/metric_class_error.png"
              style={{ height: "40vh", flex: "1 1 1%" }} />
            <div className="column">
              <p style={{ flexGrow: "1" }}>Class errors</p>
              <div className="row">
                <StaticImage
                  loading="eager"
                  objectFit="contain" src="./bordir/images/metrics_class_error_1.png"
                  style={{ height: "3vh", flex: "1 1 1%", margin: "2rem" }} />
                <p style={{ flexGrow: "1" }}>false positive</p>
              </div>
              <div className="row">
                <StaticImage
                  loading="eager"
                  objectFit="contain"
                  src="./bordir/images/metrics_class_error_2.png"
                  style={{ height: "3vh", flex: "1 1 1%", margin: "2rem" }} />
                <p style={{ flexGrow: "1" }}>false negative</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <StaticImage loading="eager"
              objectFit="contain"
              src="./bordir/images/metric_instance_error.png"
              style={{ height: "40vh", flex: "1 1 1%" }} />
            <div className="column">
              <p style={{ flexGrow: "1" }}>Instance errors</p>
              <div className="row">
                <StaticImage loading="eager"
                  objectFit="contain"
                  src="./bordir/images/metrics_merge_error.png"
                  style={{ height: "3vh", flex: "1 1 1%", margin: "2rem" }} />
                <p style={{ flexGrow: "1" }}>merge error</p>
              </div>
              <div className="row">
                <StaticImage loading="eager"
                  objectFit="contain"
                  src="./bordir/images/metrics_split_error.png"
                  style={{ height: "3vh", flex: "1 1 1%", margin: "2rem" }} />
                <p style={{ flexGrow: "1" }}>split error</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <StaticImage loading="eager"
            objectFit="contain"
            src="./bordir/images/metric_recursive_error.png"
            style={{ height: "40vh", flex: "1 1 1%" }} />
        </section>

        <section>
          <div className="row">
            <StaticImage
              loading="eager"
              objectFit="contain"
              src="./bordir/images/metric_correct.png"
              style={{ height: "40vh", flex: "1 1 1%" }} />
            <div className="column">
              <div className="row">
                <StaticImage
                  loading="eager"
                  objectFit="contain"
                  src="./bordir/images/metrics_correct_class_1.png"
                  style={{ height: "3vh", flex: "1 1 1%", margin: "2rem" }} />
                <p style={{ flexGrow: "1" }}>true positive</p>
              </div>
              <div className="row">
                <StaticImage
                  loading="eager"
                  objectFit="contain"
                  src="./bordir/images/metrics_correct_class_2.png"
                  style={{ height: "3vh", flex: "1 1 1%", margin: "2rem" }} />
                <p style={{ flexGrow: "1" }}>true negative</p>
              </div>
            </div>
          </div>
        </section>

      </section>

      <section>
        <h2>Metrics</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value (&#37;)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>correct</td>
              <td>96.120</td>
            </tr>
            <tr>
              <td>instance error</td>
              <td>3.880</td>
            </tr>
            <tr>
              <td>split error</td>
              <td>6.209</td>
            </tr>
            <tr>
              <td>merge error</td>
              <td>2.652</td>
            </tr>
          </tbody>
        </table>
        <p>.</p>
      </section>

    </Deck >
  );
}

export default BordirDeck
