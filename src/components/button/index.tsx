import React from 'react';

import './index.scss';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'primary | secondary';
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  return (
    <button className={`Button Button--variant-${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
