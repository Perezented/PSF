import { useScrolling } from "../helper/useScrolling";

export default function HomeBanner(props) {
  let scrollData = useScrolling();
  return (
    <section className={"homeImg " + props.props[0]}>
      <div
        className={
          props.props[0] === "img0"
            ? "homepageBannerSize pageBanner"
            : "contactBannerSize pageBanner"
        }
      >
        <h1>{props.props[1]}</h1>
        <h3>{props.props[2]}</h3>
      </div>
    </section>
  );
}
