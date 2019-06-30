import * as React from "react";
import Social from "../social";
import styles from "./about.module.css";
import ExternalLink from "./../../ui/atoms/ExternalLink";

const About = () => (
  <section className={styles.about}>
    <h2 className={styles.text}>
      Дима Журавлёв, дизайнер. Проектирую сайты, интерфейсы и&nbsp;приложения.
      Работаю в&nbsp;
      <ExternalLink blackHover href="https://breadhead.ru/">
        Breadhead
      </ExternalLink>
      . Иногда называю себя разработчиком — верстаю, немного знаю JavaScript /
      TypeScript / React.
    </h2>
    <Social />
  </section>
);

export default About;
