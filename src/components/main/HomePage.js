import React, { useEffect } from "react";
import TriSection from "../subhome/TriSection";
import Banner from "../sub/Banner";
import WeDoMore from "../subhome/WeDoMore";
import Spacer from "../sub/Spacer";
import { useScrolling } from "../helper/useScrolling";
export default function HomePage() {
  let bannerInfo = [
    "img0",
    "Pro-Select Flooring LLC.",
    "29+ Years of Experience"
  ];

  let scrollData = useScrolling();

  return (
    <>
      <Banner props={bannerInfo} />
      <TriSection />
      <Spacer />
      <WeDoMore />
    </>
  );
}
