import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  border: 0px;
  display: flex;
  margin: auto;
`;

interface Props {
  children: React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
}

const IconButton: React.FC<Props> = ({  children, type }) => {
  return <Button  type={type}>{children}</Button>;
};

export default IconButton;
