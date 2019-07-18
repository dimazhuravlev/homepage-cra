import * as React from "react";
import BreadheadCase from "./organisms/breadheadCase";
import ChevostikCase from "./organisms/chevostikCase";
import FasterCase from "./organisms/fasterCase";
import WazzappsCase from "./organisms/wazzappsCase";
import KamyshevCase from "./organisms/kamyshevCase";
import styles from "./pictures.module.css";

const Pictures = () => (
  <section id="paneContainer" className={styles.pictures}>
    <KamyshevCase />
    <FasterCase />
    <BreadheadCase />
    <ChevostikCase />
    <WazzappsCase />
  </section>
);

export default Pictures;
