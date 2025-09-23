import * as React from "react";
import * as Types from "./types";

declare function TableRowItem(props: {
  as?: React.ElementType;
  rowItemName?: Types.Devlink.RuntimeProps;
  rowItemColumn?: Types.Devlink.RuntimeProps;
  rowItemNumber?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
