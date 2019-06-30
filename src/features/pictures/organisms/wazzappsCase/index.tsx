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
      Сайт для Wazzapps — компания из Новосибирска, которая создаёт мобильные
      игры. Визуальный образ и&nbsp;дизайн сделали{" "}
      <ExternalLink blackHover href="http://fullfort.agency/">
        Fullfort
      </ExternalLink>
      , я&nbsp;занимался фронтенд разработкой.{" "}
      <ExternalLink blackHover href="https://wazzapps.org/">
        Перейти на&nbsp;сайт
      </ExternalLink>
    </p>
    <PreloadableVideo src="/img/wazzapps/page_transition.mp4" />
    <PreloadableImage wide src="/img/wazzapps/about.jpg" />
  </section>
);

export default WazzappsCase;
