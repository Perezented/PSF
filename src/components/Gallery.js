import img0 from "../styles/img/IMG_0331.JPG";
export default function Gallery() {
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
