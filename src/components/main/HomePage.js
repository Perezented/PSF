import React, { useEffect } from "react";
import TriSection from "../subhome/TriSection";
import Banner from "../sub/Banner";
import WeDoMore from "../subhome/WeDoMore";
import Spacer from "../sub/Spacer";
import { useScrolling } from "../helper/useScrolling";
export default function HomePage() {
  // upon load up, classes are added using js to hide selected elements
  useEffect(() => {
    window.addEventListener("load", () => {
      document.querySelectorAll("p").forEach((value, i, array) => {
        value.classList.add("opacityBottom");
        array[0].classList.remove("opacityBottom");
      });

      document.querySelectorAll("section div").forEach((value, i, array) => {
        value.classList.add("opacityBottom");
        array[0].classList.remove("opacityBottom");
        array[array.length - 1].classList.remove("opacityBottom");
      });
    });
  });

  // Setup of specific items to have them appear once 9/10 of the screen has scrolled through
  let sections = document.querySelectorAll("section div");
  let ps = document.querySelectorAll("p");
  let ninetenths = Math.floor((window.innerHeight / 10) * 9);
  // adds 'appear' class to elements once 9/10 of the screen has passed by
  function addingAppear(array) {
    array.forEach((value, index) => {
      let currSectionTop = value.getBoundingClientRect().top;
      if (index !== array.length - 1) {
        if (currSectionTop <= ninetenths) {
          value.classList.add("appearBottom");
        }
      }
    });
  }

  addingAppear(sections);
  addingAppear(ps);
  // props for Banner component out of homepage
  let bannerInfo = [
    "img0",
    "Pro-Select Flooring LLC.",
    "29+ Years of Experience"
  ];
  // uses state to constantly check the scroll on this page
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
