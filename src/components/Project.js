import React from 'react';

export function Project(props) {
  return (
    <div className="row project-row">
      <div className="col-md-4 col-sm portfolio-col-img">
        <img src={props.projectArr.image} className="img-thumbnail" />
      </div>
      <div className="col-md-8 col-sm portfolio-col-text">
        <h3>{props.projectArr.name}</h3>
        <p>{props.projectArr.description}</p>
        <a
          type="button"
          className="btn btn-outline-light live-app"
          href={props.projectArr.link}
        >
          Live App
        </a>
        <a
          type="button"
          className="btn btn-outline-light"
          href={props.projectArr.github}
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
}
