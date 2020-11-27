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
    if (maxWindowScroll - 50 <= windowScroll) {
      setImageSliceCounter(imageSliceCounter + 10);
    }
  };

  useEffect(() => {
    function fitImages() {
      imgData.slice(i, i + 10).forEach((value) => {
        const curr_img_link = process.env.REACT_APP_.S3_LINK + value.Key;
        const imgCopy = images;
        imgCopy.push(curr_img_link);
        setImages(imgCopy, <img src={curr_img_link} alt="" />);
      });
      i += 10;
      return i;
    }
    fitImages();
  console.log(images);
  let reactData = [];
  function renderImages(array) {
    let i = 0;
    while (i !== array.length) {
      reactData.push(
        <img src={array[i]} alt="" className="img0" key={array[i]} />
      );
      i++;
    }

    return reactData;
  }
  return (
    <section className="gallery">
      <h1>This is going to to be the gallery section</h1>
      <div className="cardContainer">
        <img src={img0} alt="workers on bridge" className="img0" />
        {images == [] ? "LOADING" : renderImages(images)}
      </div>
    </section>
  );
}
