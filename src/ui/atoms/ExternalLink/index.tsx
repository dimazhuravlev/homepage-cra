import cx from "classnames";
import React from "react";
import styles from "./externalLink.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
  blackHover: boolean;
  className?: string;
}

class ExternalLink extends React.Component<Props> {
  public render() {
    const { children, href, blackHover, className } = this.props;
    return (
      <a
        href={href}
        onClick={this.onClick}
        className={cx(
          blackHover ? styles.blackHover : styles.whiteHover,
          className
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  private onClick = (e: any) => {
    e.stopPropagation();
  };
}

export default ExternalLink;
