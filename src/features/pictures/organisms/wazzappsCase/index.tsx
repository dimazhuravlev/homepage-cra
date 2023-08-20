import ExternalLink from "./../../../../ui/atoms/ExternalLink";
import PreloadableImage from "./../../../../ui/atoms/PreloadableImage";
import PreloadableVideo from "./../../../../ui/atoms/PreloadableVideo";
import * as React from "react";

import styles from "./wazzappsCase.module.css";

import { Element } from "react-scroll";

const WazzappsCase = () => (
  <section className={styles.imgColumn}>
    <Element name="wazzapps" className={styles.element}>
      <PreloadableVideo element src="/img/wazzapps/main_scroll.mp4" />
    </Element>
    <PreloadableImage wide src="/img/wazzapps/phones.jpg" />
    <p className={styles.text}>
      A website for Wazzapps - a&nbsp;company that creates mobile games. Visual identity and design were done by&nbsp;Fullfort agency and I&nbsp;did frontend development.{" "}
      <ExternalLink blackHover href="https://wazzapps.org/en/#">
        View&nbsp;website
      </ExternalLink>
    </p>
    <PreloadableVideo src="/img/wazzapps/page_transition.mp4" />
    <PreloadableImage wide src="/img/wazzapps/about.jpg" />
  </section>
);

export default WazzappsCase;
