import React from "react";
import TriSection from "./TriSection";
import HomeBanner from "./HomeBanner";
import WeDoMore from "./WeDoMore";
import Spacer from "./Spacer";
export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <TriSection />
      <Spacer />
      <WeDoMore />
    </>
  );
}
