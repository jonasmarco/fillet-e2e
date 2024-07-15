import React from 'react';

import './index.scss';

type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({children, onSubmit}: FormProps): JSX.Element => {
  return (
    <div className="Form">
      <div className="Form__wrapper">
        <form onSubmit={onSubmit}>
          <div className="Form__content">{children}</div>
        </form>
      </div>
    </div>
  );
};

export default Form;
