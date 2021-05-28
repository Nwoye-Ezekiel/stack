import React from "react";
import celebration from "../images/celebration.svg";
import Section from "./Section";

function Cta() {
  return (
    <div className="cta">
      <Section
        source={celebration}
        heading="Are you Ready?"
        btn_name="Get Started"
        btn_style="btn-secondary"
         link="/Tasks"
      >
        <span className="to-white">
          This is the right time for you to start working like a professional.
          Begin today by using the Time Stack app and attain your goals as
          expected. Time is money, why waste it?
        </span>
      </Section>
    </div>
  );
}

export default Cta;
