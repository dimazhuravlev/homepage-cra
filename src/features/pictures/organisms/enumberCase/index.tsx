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
      Приложение для звонков с использованием IP-телефонии. В отличие от привычного оператора связи с сим-картой, IP-телефония позволяет подключить несколько виртуальных номером, поэтому в приложении предусмотрена быстрая смена активного номера и его выключение.
    </p>
    <PreloadableVideo wide src="/img/enumber/enumber_modal.mp4" />
  </section>
);

export default EnumberCase;
