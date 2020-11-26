import axios from "axios";
import { useEffect, useState } from "react";
import img0 from "../styles/img/IMG_0331.JPG";

export default function Gallery() {
  const [imgData, setImgData] = useState([]);
  const [images, setImages] = useState([]);
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

  let reactData = [];
  function renderImages(array) {
    console.log("renderImages", i);
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
        <h3>Image date</h3>
        <img src={img0} alt="image of workers on bridge" className="img0" />
      </div>
    </section>
  );
}
