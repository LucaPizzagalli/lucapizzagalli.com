import React from "react"
import Deck from "../components/slides/deck"
import Slide from "../components/slides/slide"

function Slides(){
    return(
    <div className="Slides">
      <Deck>
      <Slide>
        <h2>pippo</h2>
        <h5>Katie Walker @KatCodes</h5>
      </Slide>
      <Slide>
        <h2>wefwefwefwef</h2>
        <h5>Katie Walker @KatCodes</h5>
      </Slide>
      </Deck>
    </div>
    );
}
  
export default Slides
