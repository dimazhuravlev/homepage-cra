import React from "react";
import cx from "classnames";
import styles from "./PreloadableImage.module.css";

class PreloadableImage extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    const img = this.image.current;
    if (img && img.complete) {
      this.handleImageLoaded();
    }
  }

  handleImageLoaded = () => {
    this.setState({ loaded: true });
  };

  image = React.createRef();

  render() {
    const { src, wide, high, element } = this.props;
    const { loaded } = this.state;

    return (
      <div
        className={cx(
          styles.wrapper,
          wide && styles.wide,
          high && styles.high,
          element && styles.element,
          loaded && styles.loaded
        )}
      >
        <img
          className={styles.image}
          src={src}
          ref={this.image}
          onLoad={this.handleImageLoaded}
          alt="img"
        />
        <div className={styles.preloader} />
      </div>
    );
  }
}

export default PreloadableImage;
