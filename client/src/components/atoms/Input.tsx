import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  padding: 9px;
  border-radius: 10px;
  border-color: #0a090c;
  padding-left: 20px;
  margin-bottom: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 1.25rem;
`;

interface Props {
  label?: string;
  required?: boolean;
  name: string;
  type: string | 'text';
  pattern?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: string;
  defaultValue?: string;
}

const Input: React.FC<Props> = ({
  placeholder,
  label,
  required,
  name,
  type,
  pattern,
  onChange,
  value,
  defaultValue
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputStyled
        onChange={onChange}
        required={required}
        type={type}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
      />
    </InputContainer>
  );
};

export default Input;
