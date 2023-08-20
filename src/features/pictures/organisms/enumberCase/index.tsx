import PreloadableImage from "./../../../../ui/atoms/PreloadableImage";
import PreloadableVideo from "./../../../../ui/atoms/PreloadableVideo";
import * as React from "react";
import { Element } from "react-scroll";
import styles from "./enumberCase.module.css";

const EnumberCase = () => (
  <section className={styles.imgColumn}>
    <div>
      <p className={styles.text}>
      Enumber is an&nbsp;application for calls using IP telephony. Unlike the usual telecom operator with a&nbsp;SIM card, IP&nbsp;telephony allows you to&nbsp;connect several virtual numbers, so&nbsp;the application allows you to&nbsp;quickly change the active number and switch it&nbsp;off.
      </p>
    </div>
    <Element name="enumber" className={styles.element}>
      <PreloadableImage element src="img/enumber/tabbar.jpg" />
    </Element>
    <PreloadableImage wide src="img/enumber/three phones.jpg" />
    <PreloadableVideo high src="/img/enumber/rotate.mp4" />
    <PreloadableVideo wide src="/img/enumber/enumber_modal.mp4" />
  </section>
);

export default EnumberCase;
