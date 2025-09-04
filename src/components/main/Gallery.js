import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import ImgModal from "../sub/imgModal";
export default function Gallery() {
  const drawThisManyPhotos = 7;
  // const scrollData = useScrolling();
  // State for s3 image data
  const [ imgData, setImgData ] = useState([]);
  // Know how many photos to load and pull from s3
  const [ imageSliceCounter, setImageSliceCounter ] = useState(1);
  // error handling
  const [ error, setError ] = useState();
  // state for current scroll location and max window scroll available
  const [ currImg, setCurrImg ] = useState();
  // gets all the image data from s3 and sets it to ImgData on gallery page load
  // On scroll, checks the footer rectangle top minus 2/3 of window height
  // If true, add 4 to imageSliceCount
  const handleImageSliceCount = () => {
    let rightAboveFooter = document.getElementById("footer").getClientRects()[ 0 ]
      .y;
    if (rightAboveFooter - window.outerHeight <= 0) {
      setImageSliceCounter(imageSliceCounter + drawThisManyPhotos);
    }
  };
  // Pulls the image data from the node server
  useEffect(() => {
    axios
      .get("https://psf-node-images.onrender.com/compressed_images/")
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
  }, [ imageSliceCounter ]);

  // object to hold the links of images as keys and img tags as values
  const imageLinks = {};
  function imgModalClickHandler(e, imgName, index, imagesArray) {
    const curr = {};
    curr.index = index;
    curr.key = imgName;
    if (imagesArray[ index - 1 ] !== undefined) {
      curr.prev = imagesArray[ index - 1 ];
    }
    if (imagesArray[ index + 1 ] !== undefined) {
      curr.nex = imagesArray[ index + 1 ];
    }

    setCurrImg(curr);
  }
  // fills the imageLinks object with img tags and returns an array of the values
  function fillImages() {
    if (imgData.images_array !== undefined) {
      imgData.images_array
        .slice(1, imageSliceCounter + drawThisManyPhotos)
        .forEach((value, i, imgDataSlice) => {
          if (!(value in imageLinks)) {
            imageLinks[ value ] = (
              <img
                src={
                  "https://psf-node-images.onrender.com/compressed_images/" +
                  value
                }
                alt=""
                key={value}
                className="imgs"
                onClick={(e) => imgModalClickHandler(e, value, i, imgDataSlice)}
              />
            );
          }
        });
    }

    return Object.values(imageLinks);
  }

  const images = fillImages();
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
            allImgs={imgData.images_array}
            imgModalClickHandler={imgModalClickHandler}
          />
          <div className="imgContainer" id='"imgContainer"'>
            {images.length > 0 ? fillImages() : <FillerImages images={images} drawThisManyPhotos={drawThisManyPhotos} />}
          </div>
        </>
      )}
    </section>
  );
}

const FillerImages = (props) => {
  const { drawThisManyPhotos } = props;
  // Ref for the typed.js element
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Please wait a bit, this may take a few seconds!",
        "Please wait a bit, your gallery is loading!",
        "Fetching gallery photos...",
        "Fetching images from the cloud...",
        "Fetching 1010's...",
        "Server is loading images...",
        "Server is loading gallery photos...",
        "Server is loading the images requested...",
        "Server is loading from the cloud...",
        "Almost there, loading your images!",
        "Hang tight, preparing your gallery...",
        "Loading gallery photos...",
        "Loading your images...",
        "Retrieving images from the cloud...",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const [centered, setCentered] = useState(false);

  useEffect(() => {
    // Alternate animation every 3 seconds
    const interval = setInterval(() => {
      setCentered((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ width: '100%', textAlign: 'center', margin: '16px 0' }}>
        <h4>
          <span ref={typedRef} />{""}
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: centered ? "center" : "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          transition: "justify-content 1s cubic-bezier(.68,-0.55,.27,1.55)",
          minHeight: "220px",
        }}
      >
        {Array.from({ length: drawThisManyPhotos }).map((_, i) => {
          const isPortrait = Math.random() > 0.5;
          return (
            <div
              key={`loader-img-${i}`}
              style={{
                background: "linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%)",
                borderRadius: "8px",
                margin: centered ? "8px" : "24px",
                width: isPortrait ? "120px" : "180px",
                height: isPortrait ? "180px" : "120px",
                animation: "shimmer 5s infinite linear",
                backgroundSize: "400px 100%",
                transition: "margin 1s cubic-bezier(.68,-0.55,.27,1.55)",
              }}
              className="loader-img"
            />
          );
        })}
      </div>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
      `}</style>
    </>
  );
};