import React from 'react';
import {connect} from 'react-redux';

export const Mistakes = ({mistakes}) => (
  <div className="game__mistakes">
    {(new Array(mistakes)).fill(1).map((value, i) => (<div key={`mistake-${i}`} className="wrong"></div>))}
  </div>
);

const mapStateToProps = ({mistakes}, ownProps) => Object.assign({}, ownProps, {
  mistakes
});

export default connect(mapStateToProps, null)(Mistakes);
