import PreloadableImage from "./../../../../ui/atoms/PreloadableImage";
import ExternalLink from "./../../../../ui/atoms/ExternalLink";
import * as React from "react";
import { Element } from "react-scroll";
import styles from "./kamyshevCase.module.css";

const KamyshevCase = () => (
  <section className={styles.imgColumn}>
    <p />
    <Element name="kamyshev" className={styles.element}>
      <PreloadableImage high src="/img/kamyshev/details_2.jpg" />
    </Element>
    <PreloadableImage wide src="/img/kamyshev/windows.jpg" />
    <PreloadableImage src="/img/kamyshev/blue.jpg" />
    <div>
      <p className={styles.text}>
        Portfolio + blog for web developer Igor Kamyshev.{" "}
        <ExternalLink blackHover href="https://kamyshev.me/">
          View&nbsp;website
        </ExternalLink>
      </p>
    </div>
    <p />
    <PreloadableImage high src="/img/kamyshev/details_1.jpg" />
  </section>
);

export default KamyshevCase;
