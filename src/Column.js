import React from 'react';
import classnames from 'classnames';

export default function Column({ children, units, maxUnits, responsiveSize }) {
  const suffix = `${units}-${maxUnits}`;
  const responsiveClass = responsiveSize
    ? `pure-u-${responsiveSize}-${suffix}`
    : '';

  const classes = classnames(`pure-u-${suffix}`, responsiveClass);
  
  return <div className={classes}>{ children }</div>
}
