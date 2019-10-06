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
      Чевостик — это интерактивная энциклопедия, где дети слушают аудиоуроки,
      проходят тесты и&nbsp;игры. Я проектировал и&nbsp;рисовал интерфейс
      с&nbsp;учётом взаимодействия с&nbsp;сервисом маленькими детьми, которые
      медленно читают и&nbsp;плохо справляются с&nbsp;курсором на экране.{" "}
      <ExternalLink blackHover href="https://chevostik.ru/">
        Перейти на&nbsp;сайт
      </ExternalLink>
    </p>
    <PreloadableImage high src="/img/chevostik/right_icons.jpg" />
    {/* <p />
    <p /> */}
    <PreloadableImage wide src="/img/chevostik/prizes.jpg" />
  </section>
);

export default ChevostikCase;
