import React from 'react';
import { createContact } from '../../queries/createContact';
import { updateContact } from '../../queries/updateContact';
import { Contact } from '../../utils/contact.dto';
import { Svg } from '../../utils/Svgs';
import { SvgContainer } from '../atoms/Container';
import IconButton from '../atoms/IconButton';
import Input from '../atoms/Input';

interface Props {
  refetchOnSuccess: () => void;
}

const CreateForm: React.FC<Props> = ({ refetchOnSuccess }) => {
  const [value, setValue] = React.useState<Contact>({
    firstName: '',
    email: '',
    lastName: '',
    phoneNumber: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
      createContact(value).then((res) => {
        if (res !== undefined) {
          refetchOnSuccess();
          setValue({
            firstName: '',
            email: '',
            lastName: '',
            phoneNumber: '',
          });
        }
      });
    }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((value) => {
      return {
        ...value,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <Input
        required
        label="First Name"
        name="firstName"
        type="text"
        onChange={handleChange}
        value={value.firstName}
      />
      <Input
        required
        label="Last Name"
        name="lastName"
        type="text"
        onChange={handleChange}
        value={value.lastName}
      />
      <Input
        required
        label="Number"
        placeholder="1234567890"
        name="phoneNumber"
        type="tel"
        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        onChange={handleChange}
        value={value.phoneNumber}
      />
      <Input
        required
        label="Email"
        name="email"
        type="mail"
        onChange={handleChange}
        value={value.email}
      />
      <IconButton type="submit">
        <SvgContainer>
          <Svg type="add" size="20px" color="green" />
        </SvgContainer>
      </IconButton>
    </form>
  );
};

export default CreateForm;
