import React from 'react';
import classnames from 'classnames';

export default function Button({ 
  active,
  className,
  componentClass: ComponentClass = 'input',
  disabled,
  primary,
  ...props
}) {
  const classes = {
    'pure-button': true,
    'pure-button-active': active,
    'pure-button-disabled': disabled,
    'pure-button-primary': primary
  };

  return <ComponentClass className={classnames(classes, className)} {...props} />
}
