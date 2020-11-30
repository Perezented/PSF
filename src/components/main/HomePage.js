import React, { useEffect } from "react";
import TriSection from "../subhome/TriSection";
import Banner from "../sub/Banner";
import WeDoMore from "../subhome/WeDoMore";
import Spacer from "../sub/Spacer";
import { useScrolling } from "../helper/useScrolling";
export default function HomePage() {
  useEffect(() => {
    window.addEventListener("load", () => {
      document.querySelectorAll("p").forEach((value, i, array) => {
        value.classList.add("opacityBottom");
        array[0].classList.remove("opacityBottom");
      });
      document.querySelectorAll("section div").forEach((value, i, array) => {
        value.classList.add("opacityBottom");
        array[0].classList.remove("opacityBottom");
        // array[1].classList.remove("opacityBottom");
        array[array.length - 1].classList.remove("opacityBottom");
        // array[array.length - 2].classList.remove("opacityBottom");
      });
    });
  });
  let sections = document.querySelectorAll("section div");
  let ps = document.querySelectorAll("p");
  let twothirds = Math.floor((window.innerHeight / 10) * 9);
  function addingAppear(array) {
    array.forEach((value, index) => {
      let currSectionTop = value.getBoundingClientRect().top;
      if (index !== array.length - 1) {
        if (currSectionTop <= twothirds) {
          value.classList.add("appearBottom");
        }
      }
    });
  }
  addingAppear(sections);
  addingAppear(ps);

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
