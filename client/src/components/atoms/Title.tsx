import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.h1`
  text-align: center;
`;

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return <TitleStyled>{text}</TitleStyled>;
};

export default Title;
