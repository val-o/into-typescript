import React from "react";
import { TableColumn, IDog, columns } from "./6_generics";

interface ITableProps<TItem extends object> {
  columns: TableColumn<TItem>[];
  items: TItem[];
  keyGetter: (item: TItem) => string;
}

export const Table = <TItem extends object>(props: ITableProps<TItem>) => {
  return <div></div>;
};

const tableEl = (
  <Table<IDog> columns={columns} items={[]} keyGetter={d => d.name} />
);


declare module 'react' {
  interface Component {
    myProp: string;
  }
}
