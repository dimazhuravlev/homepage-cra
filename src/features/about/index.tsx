import * as React from "react";
import Social from "../social";
import styles from "./about.module.css";
import ExternalLink from "./../../ui/atoms/ExternalLink";

const About = () => (
  <section className={styles.about}>
    <h2 className={styles.text}>
      Дима Журавлёв, дизайнер. Проектирую сайты, интерфейсы и&nbsp;приложения.
      Отвечаю за визуальный образ и ощущения от использования приложения&nbsp;
      <ExternalLink blackHover href="https://samokat.ru/">
        Самокат
      </ExternalLink>
      .
    </h2>
    <Social />
  </section>
);

export default About;
