import React from 'react';
import { CSSTransition } from 'react-transition-group';

export const Pop = ({children, ...props}) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="pop"
  >
    {children}  
  </CSSTransition>
)