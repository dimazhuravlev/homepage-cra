import PreloadableImage from "./../../../../ui/atoms/PreloadableImage";
import PreloadableVideo from "./../../../../ui/atoms/PreloadableVideo";
import * as React from "react";
import { Element } from "react-scroll";
import styles from "./fasterCase.module.css";

const FasterCase = () => (
  <section className={styles.imgColumn}>
    <Element name="faster" className={styles.element}>
      <PreloadableImage high src="/img/faster/high.jpg" />
    </Element>
    <PreloadableImage wide src="/img/faster/search_full.jpg" />
    <p />
    <PreloadableImage high src="/img/faster/popular_drugs.jpg" />
    <p />
    <PreloadableImage src="/img/faster/bag_icon.jpg" />
    <p />
    <PreloadableVideo wide src="/img/faster/scroll.mp4" />
    <p />
    <PreloadableImage high src="/img/faster/bag_icon_tooltip.jpg" />
    <PreloadableImage wide src="/img/faster/bag_map_order_phones.jpg" />
    <p />
    <PreloadableImage src="/img/faster/amount.jpg" />
    <PreloadableImage wide src="/img/faster/catalog_full.jpg" />
    <PreloadableVideo src="/img/faster/popup.mp4" />
    <PreloadableImage high src="/img/faster/drugs_icons.gif" />
    <PreloadableImage wide src="/img/faster/status.gif" />
    <PreloadableImage high src="/img/faster/card.jpg" />
    <p />
    <p />
    <p className={styles.text}>
      Faster — аптечный маркетплейс, объединяющий все аптеки города в&nbsp;одном
      месте. Я&nbsp;занимался проектированием, верстал адаптивные прототипы,
      отвечал за весь дизайн, вёл проект от начальных иследований
      и&nbsp;проверки гипотез до подготовки к&nbsp;запуску.
    </p>
    <PreloadableImage src="/img/faster/not_found.jpg" />
    <PreloadableVideo wide src="/img/faster/map_order.mp4" />
  </section>
);

export default FasterCase;