import ExternalLink from "./../../../../ui/atoms/ExternalLink";
import PreloadableImage from "./../../../../ui/atoms/PreloadableImage";
import PreloadableVideo from "./../../../../ui/atoms/PreloadableVideo";
import * as React from "react";
import { Element } from "react-scroll";
import styles from "./chevostikCase.module.css";

const ChevostikCase = () => (
  <section className={styles.imgColumn}>
    <Element name="chevostik" className={styles.element}>
      <PreloadableImage element src="/img/chevostik/chevostik_icon.jpg" />
    </Element>
    <p />
    <p />

    <PreloadableVideo src="/img/chevostik/button.mov" />
    <PreloadableVideo src="/img/chevostik/games.mp4" />
    <PreloadableVideo wide src="/img/chevostik/map.mp4" />
    <PreloadableVideo src="/img/chevostik/lessons.mp4" />
    <p />
    <p className={styles.text}>
      Chevostik is an&nbsp;interactive encyclopaedia where children can listen to&nbsp;audio lessons, take tests and play games. I&nbsp;designed and drew the interface with a&nbsp;view to&nbsp;the interaction with the service by&nbsp;kids who are slow readers and don't have good control of&nbsp;the cursor on&nbsp;the screen.{" "}
      <ExternalLink blackHover href="https://chevostik.ru/">
        View&nbsp;website
      </ExternalLink>
    </p>
    <PreloadableImage high src="/img/chevostik/right_icons.jpg" />
    <PreloadableImage wide src="/img/chevostik/prizes.jpg" />
  </section>
);

export default ChevostikCase;
