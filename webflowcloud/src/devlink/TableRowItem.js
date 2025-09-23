"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TableRowItem.module.css";

export function TableRowItem({
  as: _Component = _Builtin.Block,
  rowItemName = {},
  rowItemColumn = {},
  rowItemNumber = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "table_item")}
      tag="div"
      role="row"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "table4_column")}
        tag="div"
        role="cell"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "text-weight-medium")}
          tag="div"
          fs-cmssort-field="IDENTIFIER"
          {...rowItemName}
        >
          {"Full name"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "table4_column", "is-width-large")}
        tag="div"
        role="cell"
      >
        <_Builtin.Block
          tag="div"
          fs-cmssort-field="IDENTIFIER"
          {...rowItemColumn}
        >
          {"Company name"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "table4_column", "is-width-small")}
        tag="div"
        role="cell"
      >
        <_Builtin.Block
          tag="div"
          fs-cmssort-field="IDENTIFIER"
          {...rowItemNumber}
        >
          {"14"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "table4_column", "is-width-large")}
        tag="div"
        role="cell"
      >
        <_Builtin.Block tag="div" fs-cmssort-field="IDENTIFIER">
          {"Team name"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "table4_column", "is-width-medium")}
        tag="div"
        role="cell"
      >
        <_Builtin.Block
          tag="div"
          fs-cmssort-field="IDENTIFIER"
          fs-cmssort-type="date"
        >
          {"Jan 11, 2050"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "table4_column-button-wrapper")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "table4_link")}
          button={false}
          block=""
          options={{
            href: "#",
          }}
        >
          {"View"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
