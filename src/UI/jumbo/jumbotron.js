import React from "react";
import propTypes from "prop-types";

const jumbo = props => {
  const { title, subTitle, text, bHref, bText } = props;
  return (
    <div className="jumbotron mt-5">
      <h1 className="display-4">{title}</h1>
      <p className="lead">{subTitle}</p>
      <hr className="my-4" />
      <p>{text}</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href={bHref} role="button">
          {bText}
        </a>
      </p>
    </div>
  );
};

jumbo.defaultProps = {
  title: "Title",
  subTitle: "SubTitle",
  text: "text paragraph",
  bHref: "/",
  bText: "Prova"
};

jumbo.propTypes = {
  title: propTypes.string,
  subTitle: propTypes.string,
  text: propTypes.string,
  bHref: propTypes.string,
  bText: propTypes.string
};

export default jumbo;

