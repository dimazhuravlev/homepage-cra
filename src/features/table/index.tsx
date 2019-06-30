import { cases } from "./../../data/cases";
import withScrollOnClick from "./../withScrollOnClick";
import * as React from "react";
import TableRow from "./atoms/TableRow";
import styles from "./table.module.css";

const ScrollRow = withScrollOnClick(TableRow);

const Table = () => {
  const rows = cases.map((row: any) => (
    <ScrollRow
      key={row.id}
      targetscroll={row.id}
      name={row.name}
      year={row.year}
      role={row.role}
      link={row.link}
      linkName={row.linkName}
    />
  ));

  return <div className={styles.table}>{rows}</div>;
};

export default Table;
