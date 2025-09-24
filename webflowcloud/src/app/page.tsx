"use client";

import { StatItem } from "@/devlink/StatItem";
import {
  NavbarWrapper,
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  NavbarButton,
  NavbarLink,
} from "@/devlink/_Builtin";

export default function Page() {
  return (
    <>
      <NavbarWrapper
        config={{
          animation: "default",
          collapse: "medium",
          docHeight: false,
          duration: 300,
          easing: "ease",
          easing2: "ease",
          noScroll: false,
        }}
      >
        <NavbarContainer>
          <NavbarBrand options={{ href: "#" }}>Webflow Cloud</NavbarBrand>
          <NavbarButton />
          <NavbarMenu>
            <NavbarLink options={{ href: "#" }}>Home</NavbarLink>
          </NavbarMenu>
        </NavbarContainer>
      </NavbarWrapper>
      <main style={{ padding: 24 }}>
        <StatItem
          statName={{ children: "Status" }}
          statNumber={{ children: "Synced" }}
          statTrend={{ children: "100%" }}
        />
      </main>
    </>
  );
}
