export const getContacts = async () => {
  const result = await fetch('http://localhost:4000/contact', { method: 'GET' }).then(
    (response) => response.json()
  ).then((data) => data);

  return result;
};
