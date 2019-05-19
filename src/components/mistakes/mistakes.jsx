import React from 'react';
import {connect} from 'react-redux';
import {number} from 'prop-types';

export const Mistakes = ({mistakes}) => (
  <div className="game__mistakes">
    {(new Array(mistakes)).fill(1).map((value, i) => (<div key={`mistake-${i}-${value}`} className="wrong"></div>))}
  </div>
);

Mistakes.propTypes = {
  mistakes: number.isRequired
};

const mapStateToProps = ({mistakes}, ownProps) => Object.assign({}, ownProps, {
  mistakes
});

export default connect(mapStateToProps, null)(Mistakes);
