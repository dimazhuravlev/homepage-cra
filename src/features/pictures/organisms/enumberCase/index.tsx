import PreloadableImage from "./../../../../ui/atoms/PreloadableImage";
import PreloadableVideo from "./../../../../ui/atoms/PreloadableVideo";
import * as React from "react";
import { Element } from "react-scroll";
import styles from "./enumberCase.module.css";

const EnumberCase = () => (
  <section className={styles.imgColumn}>
    <Element name="enumber" className={styles.element}></Element>
    <PreloadableImage src="img/enumber/tabbar.jpg" />
    <PreloadableImage wide src="img/enumber/three phones.jpg" />
    <PreloadableVideo high src="/img/enumber/rotate.mp4" />
    <p className={styles.text}>
      Приложение для звонков через ip-телефонию. В отличие от стандартных, можно подключить несколько виртуальных номером без дополнительных сим-карт. для разных целей.
    </p>
    <PreloadableVideo wide src="/img/enumber/enumber_modal.mp4" />
  </section>
);

export default EnumberCase;
