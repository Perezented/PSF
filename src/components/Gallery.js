import axios from "axios";
import { useEffect, useState } from "react";
import { NotFound } from "./NotFound";
export default function Gallery() {
  // State for s3 image data
  const [imgData, setImgData] = useState([]);
  // Know how many photos to load and pull from s3
  const [imageSliceCounter, setImageSliceCounter] = useState(1);
  // error handling
  const [error, setError] = useState();
  // state for current scroll location and max window scroll available

  const [windowScroll, setWindowScroll] = useState(window.scrollY);
  const [maxWindowScroll, setMaxWindowScroll] = useState(
    document.documentElement.scrollHeight - window.innerHeight
  );

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

  // Changes the window scroll and max window scroll
  const handleWindowScroll = () => {
    setWindowScroll(window.scrollY);
    setMaxWindowScroll(
      document.documentElement.scrollHeight - window.innerHeight
    );
  };
  const handleImageSliceCount = () => {
    if (maxWindowScroll - maxWindowScroll / 15 <= windowScroll) {
      setImageSliceCounter(imageSliceCounter + 10);
    }
  };
  // On scroll, checks windowScroll and maxWindowScroll
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
  }, []);
  useEffect(() => {
    // On scroll, checks if windowScroll > maxWindowScroll - number
    // If true, add 10 to imageSliceCount
    window.addEventListener("scroll", handleImageSliceCount);
  }, [windowScroll]);

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
            />
          );
        }
      });
    }
    return Object.values(imageLinks);
  }
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
          <div className="imgContainer">
            {imgData ? fillImages() : <NotFound />}
          </div>
        </>
      )}
    </section>
  );
}
