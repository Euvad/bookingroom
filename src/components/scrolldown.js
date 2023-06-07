import React from 'react';

export default function ScrollDown({ reference }) {
  return (
    <div className="arrow_container">
      <a href={reference}>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <span className="arrow_text">Faites défiler</span>
      </a>
    </div>
  );
}