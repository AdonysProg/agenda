import React from 'react';
import styled from 'styled-components';
import { Svg } from '../../utils/Svgs';

const TableStyled = styled.table`
  border-collapse: collapse;
  width: 90%;
  text-align: center;
  margin: 20px;

  & tr:nth-child(even) {
    background-color: #7bcdba;
    color: #fff;
  }
`;

interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface Props {
  data: Contact[];
  deleteContact: (email: string) => void;
}

const Table: React.FC<Props> = ({ data, deleteContact }) => {
  return (
    <TableStyled typeof="striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((contact: Contact) => {
          return (
            <tr key={contact._id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
              <td>
                <Svg
                  type="delete"
                  color="red"
                  onClick={() => deleteContact(contact.email)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableStyled>
  );
};

export default Table;
