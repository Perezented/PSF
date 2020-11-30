import React from "react";
export default function HomeBanner(props) {
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
        {props.props[0] === "img0" && (
          <button
            onClick={() => {
              window.location = "/contact";
            }}
          >
            Contact Us
          </button>
        )}
      </div>
    </section>
  );
}
