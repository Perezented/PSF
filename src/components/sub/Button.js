export default function Button(props) {
  return (
    <div className="buttonHolder">
      <button
        className="button"
        onClick={() => {
          window.location = "/contact";
        }}
      >
        {props.text}
      </button>
    </div>
  );
}
