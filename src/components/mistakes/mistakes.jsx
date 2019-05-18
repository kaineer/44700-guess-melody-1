import React from 'react';

export const Mistakes = ({mistakes}) => (
  <div className="game__mistakes">
    {(new Array(mistakes)).fill(1).map((value, i) => (<div key={`mistake-${i}`} className="wrong"></div>))}
  </div>
);
