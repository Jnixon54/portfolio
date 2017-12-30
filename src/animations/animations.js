import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Pop = ({children, ...props}) => (
  <CSSTransition
    {...props}
    classNames="pop"
  >
    {children}  
  </CSSTransition>
)