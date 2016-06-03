import React from 'react';
import classnames from 'classnames';

export default function Form({
  children,
  legend,
  type,
  ...props
}) {
  const classes = {
    'pure-form': true,
    'pure-form-aligned': type === 'aligned',
    'pure-form-stacked': type === 'stacked'
  };

  return (
    <form className={classnames(classes)} {...props}>
      <fieldset>
        { legend && <legend>{ legend }</legend> }
        { children }
      </fieldset>
    </form>
  );
}
