import ExternalLink from "./../../../../ui/atoms/ExternalLink";
import * as React from "react";
import styles from "./tableRow.module.css";

interface Props {
  name: string;
  year: string;
  role: string;
  link: string;
  linkName: string;
  onClick: any;
}

class TableRow extends React.Component<Props> {
  public render() {
    const { name, year, role, link, linkName, onClick } = this.props;

    return (
      <div className={styles.row} onClick={onClick}>
        <p className={styles.name}>{name}</p>
        <p className={styles.year}>{year}</p>
        <p className={styles.role}>{role}</p>
        <p className={styles.link}>
          <ExternalLink href={link} blackHover={false}>
            {linkName}
          </ExternalLink>
        </p>
      </div>
    );
  }
}

export default TableRow;
