import axios from "axios";
import { useEffect, useState } from "react";
import { useScrolling } from "../helper/useScrolling";
import ImgModal from "../sub/imgModal";
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
  useEffect(() => {
    axios
      .get(`http://localhost:3030`)
      .then((response) => {
        setImgData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handleImageSliceCount = () => {
    if (
      scrollData["max_scroll"] - scrollData["max_scroll"] / 15 <=
      scrollData["curr_scroll"]
    ) {
      setImageSliceCounter(imageSliceCounter + 10);
    }
  };

  useEffect(() => {
    // On scroll, checks if scrollData['curr_scroll'] > maxWindowScroll - number
    // If true, add 10 to imageSliceCount
    window.addEventListener("scroll", handleImageSliceCount);
  }, [scrollData["curr_scroll"]]);

  let imageLinks = {};

  // pushes links to image tags from s3, returns an object's values of html image elements
  function fillImages() {
    let count = imageSliceCounter;

    if (imgData.length > 0) {
      imgData.slice(1, count + 10).forEach((value) => {
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
    <section className="gallery">
      {error ? (
        <>
          <h4>ERROR</h4>
          {error}
        </>
      ) : (
        <>
          <h1>Gallery section of Pro-Select work</h1>
          <ImgModal imgModal={currImg} setCurrImg={setCurrImg} />
          <div className="imgContainer">
            {images.length > 0 ? fillImages() : "LOADING"}
          </div>
        </>
      )}
    </section>
  );
}
