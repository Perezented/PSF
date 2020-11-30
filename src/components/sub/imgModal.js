export default function ImgModal(props) {
  console.log("props", props, props.imgModal);
  return (
    <section
      className={props.imgModal ? "visible" : "invisible"}
      onClick={() => {
        props.setCurrImg();
      }}
    >
      <div>
        <img
          src={
            props.imgModal && process.env.REACT_APP_.S3_LINK0 + props.imgModal
          }
          alt=""
        />
      </div>
    </section>
  );
}
