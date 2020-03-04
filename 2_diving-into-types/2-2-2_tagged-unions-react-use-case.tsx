import React = require("react");

interface IListPropsBase {
  count: number;
}

interface IPlainList extends IListPropsBase {
  sortable?: false;
}

interface ISortableList extends IListPropsBase {
  sortable: true;
  sortDirection: "ascending" | "descending";
}

type IProps = IPlainList | ISortableList;

export const List = (
  props: React.PropsWithChildren<IProps>
): React.ReactElement => {
  return (
    <div>
      <p>{props.sortable && props.sortDirection}</p>
      {props.children}
    </div>
  );
};

const sortableListEl = (
  <List count={10} sortable sortDirection="ascending"></List>
);

const plainListEl = <List count={10}></List>;


