import React, { useEffect } from "react";
import TriSection from "../subhome/TriSection";
import Banner from "../sub/Banner";
import WeDoMore from "../subhome/WeDoMore";
import Button from "../sub/Button";
import Spacer from "../sub/Spacer";
import { useScrolling } from "../helper/useScrolling";
export default function HomePage() {
  // upon load up, classes are added using js to hide selected elements
  useEffect(() => {
    let multiDivFromSection = document.querySelectorAll("section div div");
    let left = [
      multiDivFromSection[3],
      multiDivFromSection[4],
      multiDivFromSection[8],
      multiDivFromSection[9],
      multiDivFromSection[13],
      multiDivFromSection[13]
    ];
    let right = [
      multiDivFromSection[6],
      multiDivFromSection[15],
      multiDivFromSection[15]
    ];
    const addingNremovingClasses = () => {
      document.querySelectorAll("p").forEach((value, i, array) => {
        value.classList.add("opacityBottom");
        array[0].classList.remove("opacityBottom");
      });

      document.querySelectorAll("section div").forEach((value, i, array) => {
        value.classList.add("opacityBottom");
        array[0].classList.remove("opacityBottom");
        array[array.length - 1].classList.remove("opacityBottom");
      });

      left.forEach((value) => {
        value.classList.remove("opacityBottom");
        value.classList.add("opacityLeft");
      });

      right.forEach((value) => {
        value.classList.remove("opacityBottom");
        value.classList.add("opacityRight");
      });
    };
    window.addEventListener("animationstart", addingNremovingClasses());
    return () => {
      window.removeEventListener("animationstart", addingNremovingClasses());
    };
  }, []);

  // adds 'appear' class to elements once 9/10 of the screen has passed by
  function addingAppear(array, direction) {
    array.forEach((value, index) => {
      if (value !== undefined) {
        let currSectionTop = value.getBoundingClientRect().top;
        if (index !== array.length) {
          if (currSectionTop <= theFractionIrandomlyDecideOn) {
            value.classList.add(direction);
          } else {
            value.classList.remove(direction);
          }
        }
      }
    });
  }
  // Setup of specific items to have them appear once 9/10 of the screen has scrolled through
  let sections = document.querySelectorAll("section div");
  let ps = document.querySelectorAll("p");
  let theFractionIrandomlyDecideOn = Math.floor((window.innerHeight / 12) * 10);
  let multiDivFromSection = document.querySelectorAll("section div div");
  let left = [
    multiDivFromSection[3],
    multiDivFromSection[4],
    multiDivFromSection[8],
    multiDivFromSection[9],
    multiDivFromSection[13]
  ];
  let right = [multiDivFromSection[6], multiDivFromSection[15]];
  addingAppear(sections, "appearBottom");
  addingAppear(ps, "appearBottom");
  left[0] && addingAppear(left, "appearLeft");
  left[0] && addingAppear(right, "appearRight");
  // props for Banner component out of homepage
  let bannerInfo = [
    "img0",
    "Pro-Select Flooring LLC.",
    "29+ Years of Experience"
  ];
  // uses state to constantly check the scroll on this page
  let scrollData = useScrolling();

  return (
    <section className="fade">
      <Banner props={bannerInfo} />
      <TriSection />
      <Spacer />
      <WeDoMore />
      <Button />
    </section>
  );
}
