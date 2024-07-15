import React from 'react';

import './Input.scss';

type FormInputProps = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  type = 'text',
  name,
  id,
  placeholder,
  value,
  required = true,
  onChange,
}: FormInputProps): JSX.Element => {
  return (
    <input
      className="FormInput"
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
    />
  );
};

export default FormInput;
