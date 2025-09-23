"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./StatItem.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-11":{"id":"e-11","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-12"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d32a57014e95c965aa78a1|7053dc7d-d9cb-d762-10a5-82e730461193","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d32a57014e95c965aa78a1|7053dc7d-d9cb-d762-10a5-82e730461193","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693885908588},"e-12":{"id":"e-12","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d32a57014e95c965aa78a1|7053dc7d-d9cb-d762-10a5-82e730461193","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d32a57014e95c965aa78a1|7053dc7d-d9cb-d762-10a5-82e730461193","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693885908588},"e-13":{"id":"e-13","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-14"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"07341554-3fc9-cd9d-1303-0164c4fec3df","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"07341554-3fc9-cd9d-1303-0164c4fec3df","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693216966198},"e-14":{"id":"e-14","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"07341554-3fc9-cd9d-1303-0164c4fec3df","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"07341554-3fc9-cd9d-1303-0164c4fec3df","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693216966205},"e-15":{"id":"e-15","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d32a57014e95c965aa78a1|7053dc7d-d9cb-d762-10a5-82e7304611bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d32a57014e95c965aa78a1|7053dc7d-d9cb-d762-10a5-82e7304611bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693313506065},"e-16":{"id":"e-16","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-15"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d32a57014e95c965aa78a1|7053dc7d-d9cb-d762-10a5-82e7304611bc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d32a57014e95c965aa78a1|7053dc7d-d9cb-d762-10a5-82e7304611bc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693313506065},"e-17":{"id":"e-17","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-15","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d32a57014e95c965aa78a1|7053dc7d-d9cb-d762-10a5-82e7304611d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d32a57014e95c965aa78a1|7053dc7d-d9cb-d762-10a5-82e7304611d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693313509355},"e-18":{"id":"e-18","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d32a57014e95c965aa78a1|7053dc7d-d9cb-d762-10a5-82e7304611d5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d32a57014e95c965aa78a1|7053dc7d-d9cb-d762-10a5-82e7304611d5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1693313509355}},"actionLists":{"a-15":{"id":"a-15","title":"Dropdown 1 [Open]","actionItemGroups":[{"actionItems":[{"id":"a-15-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["cd6dde30-2e1a-ee1e-73be-8e965391aad9"]},"yValue":3,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-15-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["cd6dde30-2e1a-ee1e-73be-8e965391aad9"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-15-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["cd6dde30-2e1a-ee1e-73be-8e965391aad9"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-15-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["cd6dde30-2e1a-ee1e-73be-8e965391aad9"]},"value":1,"unit":""}},{"id":"a-15-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1626241970095},"a-16":{"id":"a-16","title":"Dropdown 1 [Close]","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["cd6dde30-2e1a-ee1e-73be-8e965391aad9"]},"value":0,"unit":""}},{"id":"a-16-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":300,"target":{},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-16-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".dropdown1_dropdown-list","selectorGuids":["cd6dde30-2e1a-ee1e-73be-8e965391aad9"]},"yValue":4,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1626241970095}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function StatItem({
  as: _Component = _Builtin.Block,
  statNumber = {},
  statTrend = {},
  statName = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "stat1_item")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "margin-bottom", "margin-xsmall")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "stat1_item-content-top")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "icon-1x1-small")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src="https://cdn.prod.website-files.com/68d32a56014e95c965aa77b1/68d32a57014e95c965aa78e3_icon.svg"
          />
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "dropdown1_component")}
            data-w-id="07341554-3fc9-cd9d-1303-0164c4fec3df"
            tag="div"
            delay="200"
            hover={false}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "dropdown1_toggle")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "button",
                  "is-tertiary",
                  "is-small",
                  "is-icon-only"
                )}
                tag="div"
              >
                <_Builtin.HtmlEmbed
                  className={_utils.cx(_styles, "icon-embed-xsmall")}
                  value="%3Csvg%20width%3D%22%20100%25%22%20height%3D%22%20100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20clip-path%3D%22url(%23clip0_609_6561)%22%3E%0A%3Cpath%20d%3D%22M12%2010C10.9%2010%2010%2010.9%2010%2012C10%2013.1%2010.9%2014%2012%2014C13.1%2014%2014%2013.1%2014%2012C14%2010.9%2013.1%2010%2012%2010ZM18%2010C16.9%2010%2016%2010.9%2016%2012C16%2013.1%2016.9%2014%2018%2014C19.1%2014%2020%2013.1%2020%2012C20%2010.9%2019.1%2010%2018%2010ZM6%2010C4.9%2010%204%2010.9%204%2012C4%2013.1%204.9%2014%206%2014C7.1%2014%208%2013.1%208%2012C8%2010.9%207.1%2010%206%2010Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_609_6561%22%3E%0A%3Crect%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E"
                />
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(
                _styles,
                "dropdown1_dropdown-list",
                "is-right"
              )}
              tag="nav"
            >
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "dropdown1_dropdown-link")}
                options={{
                  href: "#",
                }}
              >
                {"View Report"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "dropdown1_dropdown-link")}
                options={{
                  href: "#",
                }}
              >
                {"Add Report"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "dropdown1_dropdown-link")}
                options={{
                  href: "#",
                }}
              >
                {"View All"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "margin-bottom", "margin-tiny")}
        tag="div"
      >
        <_Builtin.Block tag="div" {...statName}>
          {"Lorem ipsum"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "stat1_item-content-bottom")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "heading-style-h5")}
          tag="div"
          {...statNumber}
        >
          {"90,000"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "stat1_item-badge")}
          tag="div"
        >
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "icon-embed-xxsmall")}
            value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10.8%207.69681V19.2H13.2V7.69681L18.3516%2012.8484L20.0484%2011.1516L12%203.10321L3.9516%2011.1516L5.6484%2012.8484L10.8%207.69681Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "text-size-small")}
            tag="div"
            {...statTrend}
          >
            {"100%"}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
