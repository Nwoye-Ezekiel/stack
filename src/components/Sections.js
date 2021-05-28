import React from 'react'
import ideas from "../images/ideas.svg";
import Section from "./Section";

function Sections() {
    return (
      <div>
        <div className="line"></div>
        <Section
          source={ideas}
          heading="Why choose Time
Stack?"
          btn_name="About"
          link="/About"
        >
          This app provides amazing features that assists you in managing your
          time well. To know more about Time Stack, click on the button below.
        </Section>
        <div className="line"></div>
      </div>
    );
}

export default Sections
