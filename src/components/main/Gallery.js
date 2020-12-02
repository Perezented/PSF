import axios from "axios";
import { useEffect, useState } from "react";
import { useScrolling } from "../helper/useScrolling";
import ImgModal from "../sub/imgModal";
import Loader from "../sub/Loader";
export default function Gallery() {
  let scrollData = useScrolling();
  // State for s3 image data
  const [imgData, setImgData] = useState([]);
  // Know how many photos to load and pull from s3
  const [imageSliceCounter, setImageSliceCounter] = useState(1);
  // error handling
  const [error, setError] = useState();
  // state for current scroll location and max window scroll available
  const [currImg, setCurrImg] = useState();
  // gets all the image data from s3 and sets it to ImgData on gallery page load
  // On scroll, checks the footer rectangle top minus 2/3 of window height
  // If true, add 4 to imageSliceCount
  const handleImageSliceCount = () => {
    let rightAboveFooter = document.getElementById("footer").getClientRects()[0]
      .y;

    if (rightAboveFooter - (window.outerHeight / 3) * 2 <= 0) {
      setImageSliceCounter(imageSliceCounter + 4);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3030`)
      .then((response) => {
        setImgData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
    document.querySelectorAll("section div").forEach((value) => {
      value.classList.remove("opacityBottom");
    });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleImageSliceCount);

    return () => {
      window.removeEventListener("scroll", handleImageSliceCount);
    };
  }, [imageSliceCounter]);

  let imageLinks = {};

  // pushes links to image tags from s3, returns an object's values of html image elements
  function fillImages() {
    let count = imageSliceCounter;

    if (imgData.length > 0) {
      imgData.slice(1, count + 4).forEach((value) => {
        if (!(value.Key in imageLinks)) {
          imageLinks[value.Key] = (
            <img
              src={process.env.REACT_APP_.S3_LINK + value.Key}
              alt=""
              key={value.Key}
              className="imgs"
              onClick={(e) => {
                let curr =
                  e.target.src.split("/")[3] + "/" + e.target.src.split("/")[4];
                setCurrImg(curr);
              }}
            />
          );
        }
      });
    }
    return Object.values(imageLinks);
  }
  let images = fillImages();

  return (
    <section className="gallery fade">
      {error ? (
        <>
          <h4>ERROR</h4>
          {error}
        </>
      ) : (
        <>
          <h1>Gallery section of Pro-Select work</h1>
          <ImgModal imgModal={currImg} setCurrImg={setCurrImg} />
          <div className="imgContainer" id='"imgContainer"'>
            {images.length > 0 ? fillImages() : <Loader />}
          </div>
        </>
      )}
    </section>
  );
}
