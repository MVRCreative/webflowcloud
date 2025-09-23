import * as React from "react";
import * as Types from "./types";

declare function StatItem(props: {
  as?: React.ElementType;
  statNumber?: Types.Devlink.RuntimeProps;
  statTrend?: Types.Devlink.RuntimeProps;
  statName?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
