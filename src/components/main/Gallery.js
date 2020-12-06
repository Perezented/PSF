import axios from "axios";
import { useEffect, useState } from "react";
import { useScrolling } from "../helper/useScrolling";
import ImgModal from "../sub/imgModal";
import Loader from "../sub/Loader";
export default function Gallery() {
  let drawThisManyPhotos = 7;
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
    if (rightAboveFooter - window.outerHeight <= 0) {
      setImageSliceCounter(imageSliceCounter + drawThisManyPhotos);
    }
  };
  // Pulls the image data from the node server
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_.REACHING_LINK + "images")
      .then((response) => {
        setImgData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
    // removes the no opacity for the divs in section
    document.querySelectorAll("section div").forEach((value) => {
      value.classList.remove("opacityBottom");
    });
  }, []);

  // adds a scroll event listener to know when to load in more images
  useEffect(() => {
    window.addEventListener("scroll", handleImageSliceCount);
    return () => {
      window.removeEventListener("scroll", handleImageSliceCount);
    };
  }, [imageSliceCounter]);

  // object to hold the links of images as keys and img tags as values
  let imageLinks = {};
  function imgModalClickHandler(e, key, index, arr) {
    let curr = {};
    curr["index"] = index;
    curr["key"] = key;
    if (arr[index - 1] !== undefined) {
      curr["prev"] = arr[index - 1];
    }
    if (arr[index + 1] !== undefined) {
      curr["nex"] = arr[index + 1];
    }

    setCurrImg(curr);
  }
  // pushes links to image tags from s3, returns an object's values of html image elements
  function fillImages() {
    let count = imageSliceCounter;

    if (imgData.length > 0) {
      imgData
        .slice(1, count + drawThisManyPhotos)
        .forEach((value, i, imgDataSlice) => {
          if (!(value.Key in imageLinks)) {
            imageLinks[value.Key] = (
              <img
                src={process.env.REACT_APP_.S3_LINK + value.Key}
                alt=""
                key={value.Key}
                className="imgs"
                onClick={(e) => imgModalClickHandler(e, value, i, imgDataSlice)}
              />
            );
          }
        });
    }

    return Object.values(imageLinks);
  }
  let images = fillImages();

  return (
    <section className={"gallery fade"}>
      {error ? (
        <>
          <h4>ERROR</h4>
          {error}
        </>
      ) : (
        <>
          <h1>Gallery of Pro-Select work</h1>
          <ImgModal
            imgModal={currImg}
            setCurrImg={setCurrImg}
            allImgs={imgData.slice(1)}
            imgModalClickHandler={imgModalClickHandler}
          />
          <div className="imgContainer" id='"imgContainer"'>
            {images.length > 0 ? fillImages() : <Loader />}
          </div>
        </>
      )}
    </section>
  );
}
