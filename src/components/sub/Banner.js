import Button from "./Button";

export default function HomeBanner(props) {
  // let scrollData = useScrolling();
  return (
    <section className={`homeImg ${props.props[0]}`}>
      <div
        className={
          props.props[0] === "img0"
            ? "homepageBannerSize pageBanner"
            : "contactBannerSize pageBanner"
        }
      >
        <h1>{props.props[1]}</h1>
        <h2>{props.props[2]}</h2>
        {props.props[0] === "img0" && <Button />}
      </div>
    </section>
  );
}
