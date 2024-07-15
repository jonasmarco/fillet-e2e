import React from 'react';

import './index.scss';

type LogoProps = {
  src: string;
  alt?: string;
};

const Logo = ({src, alt}: LogoProps): JSX.Element => {
  return (
    <div className="Logo">
      <img src={src} alt={alt || 'Logo'} />
    </div>
  );
};

export default Logo;
