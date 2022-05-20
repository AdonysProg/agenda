import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const SvgContainerStyled = styled.div`
  justify-content: center;
  display: flex;
  margin: 20px;
`;

interface Props {
  children?: React.ReactNode;
}

const Container: React.FC<Props> = (props) => {
  return <ContainerStyled>{props.children}</ContainerStyled>;
};

export const SvgContainer: React.FC<Props> = (props) => {
  return <SvgContainerStyled>{props.children}</SvgContainerStyled>;
};

export default Container;
