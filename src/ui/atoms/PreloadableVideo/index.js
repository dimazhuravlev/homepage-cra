import React from "react";
import cx from "classnames";
import styles from "./PreloadableVideo.module.css";

const VIDEO_READY = 4;

class PreloadableVideo extends React.Component {
  state = { loaded: false };

  componentDidMount() {
    const video = this.video.current;
    if (video && video.readyState === VIDEO_READY) {
      this.handleLoaded();
    }
  }

  handleLoaded = () => {
    this.setState({ loaded: true });
  };

  video = React.createRef();

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
        <video
          className={styles.video}
          src={src}
          ref={this.video}
          onCanPlay={this.handleLoaded}
          autoPlay
          muted
          loop
          playsInline
          width="100%"
          height="100%"
        />

        <div className={styles.preloader} />
      </div>
    );
  }
}

export default PreloadableVideo;
