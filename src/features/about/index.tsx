import * as React from "react";
import Social from "../social";
import styles from "./about.module.css";
import ExternalLink from "./../../ui/atoms/ExternalLink";

const About = () => (
  <section className={styles.about}>
    <h2 className={styles.text}>
      Dima Zhuravlev is a multidisciplinary designer focused on shaping human experience across people's emotions, interconnecting product and visual brand language, and merging usability and aesthetics.
      <br />
      <br />
      My practice plays in the margins between hands-on concept crafting and inspiring and motivating design teams with shared values and principles. 
      <br />
      <br />
      Currently Lead Product Designer at&nbsp;
      <ExternalLink blackHover href="https://play.yango.com/">
        Yango Play
      </ExternalLink>
      , previously led the Customer Experience Design team at&nbsp;
      <ExternalLink blackHover href="https://samokat.ru/">
        Samokat
      </ExternalLink>
      .
      <br />
      <br />
      2023, Belgrade, Serbia
    </h2>
    <Social />
  </section>
);

export default About;
