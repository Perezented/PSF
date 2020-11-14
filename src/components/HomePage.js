import React from "react";
import TriSection from "./TriSection";
import Banner from "./Banner";
import WeDoMore from "./WeDoMore";
import Spacer from "./Spacer";
export default function HomePage() {
  let bannerInfo = [
    "img0",
    "Pro-Select Flooring LLC.",
    "29+ Years of Experience"
  ];
  return (
    <>
      <Banner props={bannerInfo} />
      <TriSection />
      <Spacer />
      <WeDoMore />
    </>
  );
}
