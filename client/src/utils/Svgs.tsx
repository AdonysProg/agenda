import React from 'react';
import styled from 'styled-components';

const svg = styled.svg`
  width: 24px;
  height: 24px;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

interface SvgProps {
  onClick?: any;
  color?: string;
  size?: string;
  type: 'delete' | 'edit' | 'add';
}

export const Svg: React.FC<SvgProps> = ({ onClick, color, size, type }) => {
  switch (type) {
    case 'delete':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          style={{ cursor: 'pointer' }}
          onClick={onClick}
          fontSize={size}
          fill={color}
        >
          <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
        </svg>
      );
    case 'edit':
      return (
        <svg
          width={24}
          xmlns="http://www.w3.org/2000/svg"
          height={24}
          style={{ cursor: 'pointer' }}
          onClick={onClick}
          fontSize={size}
          fill={color}
        >
          <path d="M8.071 21.586l-7.071 1.414 1.414-7.071 14.929-14.929 5.657 5.657-14.929 14.929zm-.493-.921l-4.243-4.243-1.06 5.303 5.303-1.06zm9.765-18.251l-13.3 13.301 4.242 4.242 13.301-13.3-4.243-4.243z" />
        </svg>
      );

    case 'add':
      return (
        <svg
          width={24}
          xmlns="http://www.w3.org/2000/svg"
          height={24}
          style={{ cursor: 'pointer' }}
          onClick={onClick}
          fontSize={size}
          fill={color}
        >
          <path d="M22.697 17.991c.487 1.694.954 3.318 1.254 4.369.033.118.049.236.049.35 0 .522-.32 1.005-.83 1.201l-.002.002c-.604.232-1.286-.013-1.599-.578-.694-1.253-1.866-3.304-2.47-4.357l.428.016c1.18 0 2.273-.371 3.17-1.003zm-4.215 6.002h-12.953l-.231-5.686s-1.901 3.195-2.867 4.937c-.313.565-.995.81-1.599.579l-.002-.003c-.51-.196-.83-.678-.83-1.201 0-.114.016-.232.049-.349.635-2.23 2.038-6.952 2.771-9.526.273-.959 1.152-1.619 2.154-1.619h9.582c-.344.717-.537 1.521-.537 2.369 0 2.751 2.027 5.033 4.67 5.437l-.207 5.062zm1.018-14.993c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm.5 2h-1v2h-2v1h2v2h1v-2h2v-1h-2v-2zm-7.994-11c2.777 0 5.031 2.243 5.031 5.006 0 2.763-2.254 5.006-5.031 5.006-2.777 0-5.031-2.243-5.031-5.006 0-2.763 2.254-5.006 5.031-5.006z" />
        </svg>
      );
  }
  return null;
};
