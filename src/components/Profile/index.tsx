import React from 'react';
// import './style.scss';

function Avatar(props) {
  const { photo, name, subtitle } = props;

  return (
    <div className="avatar">
      <img src={photo} alt={name} className="avatar__photo" />
      <div className="avatar__intro">
        <div className="avatar__name">{name}</div>
        <small className="avatar__subtitle">{subtitle}</small>
      </div>
    </div>
  );
}

export default Avatar;
