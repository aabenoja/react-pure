import React from 'react';
import classnames from 'classnames';

export default function Menu({
  children,
  className,
  componentClass: ComponentClass,
  heading,
  isHorizontal
}) {
  const classes = {
    'pure-menu': true,
    'pure-menu-horizontal': isHorizontal
  };

  const listItems = React.Children.map(children, child =>
    <li className="pure-menu-item">{ child }</li>
  );

  return (
    <ComponentClass className={classnames(classes, className)}>
      { heading && <span className="pure-menu-heading">{ heading }</span> }
      <ul className="pure-menu-list">
        { listItems }
      </ul>
    </ComponentClass>
  );
}
