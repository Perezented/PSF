import { useState } from "react";

export default function ImgModal(props) {
  const [screenXPos, setScreenXPos] = useState([]);
  const handleTouchMove = (e) => {
    const filler = [...screenXPos];
    filler.push(e.touches[0].pageX);
    setScreenXPos(filler);
  };
  if (props.imgModal) {
    document.body.classList.add("overflow");
  } else {
    document.body.classList.remove("overflow");
  }
  return (
    <section
      className={props.imgModal ? "visible" : "invisible"}
      onClick={(e) => {
        props.setCurrImg();
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
      }}
    >
      <div>
        {props.imgModal !== undefined && (
          <img
            id={props.imgModal.key.Key}
            onTouchMove={(e) => {
              handleTouchMove(e);
              e.stopPropagation();
            }}
            onTouchEnd={(e) => {
              if (
                props.imgModal.nex &&
                screenXPos[0] > screenXPos[screenXPos.length - 1]
              ) {
                props.imgModalClickHandler(
                  e,
                  props.imgModal.nex,
                  props.imgModal.index + 1,
                  props.allImgs
                );
              } else if (
                props.imgModal.prev &&
                screenXPos[screenXPos.length - 1] > screenXPos[0]
              ) {
                props.imgModalClickHandler(
                  e,
                  props.imgModal.prev,
                  props.imgModal.index - 1,
                  props.allImgs
                );
              }
              setScreenXPos([]);
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            src={
              "https://psf-node-images.onrender.com/images/" +
              props.imgModal.key
            }
            alt=""
          />
        )}
      </div>
    </section>
  );
}
