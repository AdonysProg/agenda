export const deleteContact = async (email: string) => {
  const result = await fetch(`http://localhost:4000/contact?email=${email}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => data);

  return result;
};
