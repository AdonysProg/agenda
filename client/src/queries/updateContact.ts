import { Contact } from '../utils/contact.dto';

export const updateContact = async (_id: string, contact: Contact) => {
  const result = await fetch(`http://localhost:4000/contact/${_id}`, {
    method: 'PATCH',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => (data._id ? data : alert(JSON.stringify(data))));

  return result;
};
