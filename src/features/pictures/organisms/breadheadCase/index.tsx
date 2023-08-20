import ExternalLink from "./../../../../ui/atoms/ExternalLink";
import PreloadableImage from "./../../../../ui/atoms/PreloadableImage";
import PreloadableVideo from "./../../../../ui/atoms/PreloadableVideo";
import * as React from "react";
import { Element } from "react-scroll";
import styles from "./breadheadCase.module.css";

const BreadheadCase = () => (
  <section className={styles.imgColumn}>
    <p className={styles.text}>
      Portfolio for Breadhead. Design: Denis Ilyin. I was doing frontend development.{" "}
      <ExternalLink blackHover href="https://breadhead.ru/">
        View&nbsp;website
      </ExternalLink>
    </p>
    <Element name="breadhead" className={styles.element}>
      <PreloadableVideo high src="/img/breadhead/intro.mp4" />
    </Element>
    <PreloadableImage wide src="img/breadhead/phones.jpg" />
  </section>
);

export default BreadheadCase;
