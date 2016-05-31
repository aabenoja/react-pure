import React from 'react';

export default function Input({ children, hideLabel, id, ...props }) {
  return (
    <div className="pure-control-group">
      <label htmlFor={id}>{ children }</label>
      <input id={id} {...props} />
    </div>
  );
}
