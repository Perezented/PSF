import { useEffect, useState } from "react";
import TriSection from "../subhome/TriSection";
import Banner from "../sub/Banner";
import WeDoMore from "../subhome/WeDoMore";
import Spacer from "../sub/Spacer";
import { useScrolling } from "../helper/useScrolling";
export default function HomePage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  // upon load up, classes are added using js to hide selected elements
  useEffect(() => {
    const multiDivFromSection = document.querySelectorAll("section div div");
    // all items on the left side of we do more section
    const left = [
      multiDivFromSection[3],
      multiDivFromSection[4],
      multiDivFromSection[8],
      multiDivFromSection[9],
      multiDivFromSection[13],
      multiDivFromSection[13]
    ];
    // all items on the left side of we do more section
    const right = [
      multiDivFromSection[6],
      multiDivFromSection[15],
      multiDivFromSection[15]
    ];
    // Add opacity to specified group of tags and removing the first item to keep in view for the user
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
    // on animationstart, starts adding and removing opacity classes
    window.addEventListener("animationstart", addingNremovingClasses());
    // cleanup for event listener
    return () => {
      window.removeEventListener("animationstart", addingNremovingClasses());
    };
  }, []);

  // adds 'appear' class to elements once theFractionIrandomlyDecideOn of the screen has passed by
  function addingAppear(array, direction) {
    array.forEach((value, index) => {
      if (value !== undefined) {
        const currSectionTop =
          windowWidth > 1200
            ? value.getBoundingClientRect().top
            : value.getBoundingClientRect().top - 250;
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
  const sections = document.querySelectorAll("section div");
  const ps = document.querySelectorAll("p");
  const theFractionIrandomlyDecideOn = Math.floor((window.innerHeight / 12) * 10);
  const multiDivFromSection = document.querySelectorAll("section div div");
  // all items on the left side of we do more section
  const left = [
    multiDivFromSection[3],
    multiDivFromSection[4],
    multiDivFromSection[8],
    multiDivFromSection[9],
    multiDivFromSection[13]
  ];
  // all items on the left side of we do more section
  const right = [multiDivFromSection[6], multiDivFromSection[15]];
  addingAppear(sections, "appearBottom");
  addingAppear(ps, "appearBottom");
  // once left appears, start running appearLeft and appearRight
  left[0] && addingAppear(left, "appearLeft");
  left[0] && addingAppear(right, "appearRight");
  // props for Banner component out of homepage
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 1991;
  const bannerInfo = [
    "img0",
    "Pro-Select Flooring LLC.",
    `${yearsOfExperience}+ Years of Experience`
  ];
  // uses state to constantly check the scroll on this page
  const scrollData = useScrolling();

  return (
    <section className="fade">
      <Banner props={bannerInfo} />
      <TriSection />
      <Spacer />
      <WeDoMore />
    </section>
  );
}
