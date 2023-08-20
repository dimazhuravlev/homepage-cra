import PreloadableImage from "../../../../ui/atoms/PreloadableImage";
import * as React from "react";
import { Element } from "react-scroll";
import styles from "./samokatCase.module.css";
import PreloadableVideo from "ui/atoms/PreloadableVideo";

const SamokatCase = () => (
  <section className={styles.imgColumn}>
    <Element name="samokat" className={styles.element}></Element>
    {/* <PreloadableVideo src="/img/samokat/price_range_slider.mov" /> */}
    <PreloadableVideo wide src="/img/samokat/added_card.mov" />
    {/* <PreloadableVideo src="/img/samokat/item_sheet.mov" /> */}
    <PreloadableVideo wide src="/img/samokat/steped.mp4" />
    <PreloadableVideo src="/img/samokat/card_video.mp4" />
    <div>
      <p className={styles.text}>
        Samokat's identity is&nbsp;shaped by&nbsp;two basic principles - simplicity and non-interference. We pay attention to&nbsp;visual ecology, which allows people to&nbsp;focus on&nbsp;the most important thing - searching and choosing goods. In&nbsp;doing so, we move away from pure utilitarianism and make the experience aesthetically fulfilling. All of&nbsp;this allows Samokat to&nbsp;stand out from many competitors, whose identity is&nbsp;based on&nbsp;old-fashioned offline retail approaches.
      </p>
    </div>
    <PreloadableImage wide src="img/samokat/pages.jpg" />
    <PreloadableImage src="img/samokat/tabbar.jpg" />
    <p></p>
    <p></p>
    <PreloadableImage high src="img/samokat/profile.jpg" />
    <PreloadableImage wide src="img/samokat/catalog.jpg" />
    <p></p>
    <PreloadableVideo src="/img/samokat/loader_video.mp4" />
    <PreloadableImage src="img/samokat/button.jpg" />
    <PreloadableImage wide src="img/samokat/cart.jpg" />
  </section>
);

export default SamokatCase;
