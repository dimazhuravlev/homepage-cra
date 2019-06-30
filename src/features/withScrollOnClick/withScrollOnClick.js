import React from "react";
import { scroller } from "react-scroll";
// import { useWindowSize } from 'react-use'
import { useContainerId } from "./useContainerId";

const withScrollOnClick = Component => {
  const ComponentWithScroll = props => {
    const containerId = useContainerId();
    const scrollTo = elementId => {
      scroller.scrollTo(elementId, {
        duration: 700,
        delay: 0,
        offset: -8,
        smooth: "easeInOutCubic",
        containerId: containerId
      });
    };

    return (
      <Component onClick={() => scrollTo(props.targetscroll)} {...props} />
    );
  };

  return ComponentWithScroll;
};

export default withScrollOnClick;
