import About from "./../../about";
import Pictures from "./../../pictures";
import Table from "./../../table";
import * as React from "react";
import withSizes from "react-sizes";
import SplitPane from "react-split-pane";
import "./splitterStyles.css?CSSModulesDisable";
import styles from "./page.module.css";

interface Props {
  isMobile: any;
}

const SplitPaneAny: any = SplitPane;

const LandingPage = ({ isMobile }: Props) =>
  isMobile ? (
    <main>
      <SplitPaneAny minSize={400} defaultSize="50%">
        <section className={styles.textColumn}>
          <About />
          <Table />
        </section>

        <Pictures />
      </SplitPaneAny>
    </main>
  ) : (
    <main>
      <section className={styles.textColumn}>
        <About />
        <Table />
      </section>
      <Pictures />
    </main>
  );

const mapSizesToProps = ({ width }: any) => ({
  isMobile: width > 1024
});

export default withSizes(mapSizesToProps)(LandingPage);
