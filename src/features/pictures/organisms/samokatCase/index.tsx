import PreloadableImage from "../../../../ui/atoms/PreloadableImage";
import * as React from "react";
import { Element } from "react-scroll";
import styles from "./samokatCase.module.css";
import PreloadableVideo from "ui/atoms/PreloadableVideo";

const SamokatCase = () => (
  <section className={styles.imgColumn}>
    <Element name="samokat" className={styles.element}></Element>
    <PreloadableVideo wide src="/img/samokat/steped.mp4" />
    <PreloadableVideo src="/img/samokat/card_video.mp4" />
    <div>
      <p className={styles.text}>
        Образ Самоката формируют два основных принципа — простота и невмешательство. Мы уделяем внимание визуальной экологии, которая позволяет человеку сфокусироваться на самом важном — поиске и выборе товаров. При этом мы уходим от чистой утилитарности, делая опыт эстетически наполненным. Всё это позволяет Самокату выделяться на фоне множества конкуретнов, образ которых сформирован на основе подходов староформатного офлайн-ритейла
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
