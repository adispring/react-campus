import React from 'react';

const imgStyle = {
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  marginRight: '20px',
};

const containerStyle = {
  border: '1px solid #eee',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  width: '200px',
  padding: '6px',
};

function Profile(props) {
  const { imgUrl, name } = props;

  return (
    <div style={containerStyle}>
      <img src={imgUrl} alt={name} style={imgStyle} />
      <span>{name}</span>
    </div>
  );
}

export default Profile;
