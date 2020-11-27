import axios from "axios";
import { useEffect, useState } from "react";
import img0 from "../styles/img/IMG_0331.JPG";
import useWindowDimensions from "./helper/useWindowDimensions";
export default function Gallery() {
  const [imgData, setImgData] = useState([]);
  const [images, setImages] = useState([]);
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    axios
      .get(`http://localhost:3030`)
      .then((response) => {
        setImgData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let i = 1;

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
