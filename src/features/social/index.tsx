import ExternalLink from "./../../ui/atoms/ExternalLink";
import * as React from "react";
import styles from "./social.module.css";

const Social = () => (
  <div className={styles.social}>
    <ExternalLink
      blackHover
      href="https://www.linkedin.com/in/dmitrii-zhuravlev-434769179"
      className={styles.link}
    >
      LinkedIn
    </ExternalLink>

    <ExternalLink
      blackHover
      href="https://t.me/dimazhuravlev"
      className={styles.link}
    >
      Telegram
    </ExternalLink>

    <ExternalLink
      blackHover
      href="https://www.instagram.com/mityazhuravlev/"
      className={styles.link}
    >
      Instagram
    </ExternalLink>

    <ExternalLink
      blackHover
      href="https://www.facebook.com/dmtrzhrvl"
      className={styles.link}
    >
      Facebook
    </ExternalLink>

    <ExternalLink
      blackHover
      href="mailto:dmitryzhur@gmail.com"
      className={styles.link}
    >
      Email
    </ExternalLink>

    <ExternalLink
      blackHover
      href="https://www.are.na/dima-zhuravlev"
      className={styles.link}
    >
      Are.na
    </ExternalLink>
  </div>
);

export default Social;
