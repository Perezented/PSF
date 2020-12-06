import { useState } from "react";

export default function ImgModal(props) {
  const [xMoves, setXMoves] = useState([]);
  const handleTouchMove = (e) => {
    let filler = xMoves;
    filler.push(e.touches[0].pageX);
    setXMoves(filler);
  };
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
              if (props.imgModal.nex && xMoves[0] > xMoves[xMoves.length - 1]) {
                props.imgModalClickHandler(
                  e,
                  props.imgModal.nex,
                  props.imgModal.index + 1,
                  props.allImgs
                );
              } else if (
                props.imgModal.prev &&
                xMoves[xMoves.length - 1] > xMoves[0]
              ) {
                props.imgModalClickHandler(
                  e,
                  props.imgModal.prev,
                  props.imgModal.index - 1,
                  props.allImgs
                );
              }
              setXMoves([]);
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            src={process.env.REACT_APP_.S3_LINK0 + props.imgModal.key.Key}
            alt=""
          />
        )}
      </div>
    </section>
  );
}
