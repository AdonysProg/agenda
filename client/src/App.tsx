import React from 'react';
import Container from './components/atoms/Container';
import Title from './components/atoms/Title';
import Table from './components/molecules/Table';
import { deleteContact } from './queries/deleteContact';
import { getContacts } from './queries/getContacts';
import CreateForm from './components/organisms/CreateForm';

function App() {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const result = await getContacts();
    setData(result);
  };

  const deleteData = (email: string) => {
    deleteContact(email).then(() => fetchData());
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Title text="How to overkill an Agenda" />
      <Container>
        <CreateForm refetchOnSuccess={fetchData} />
        <Table data={data} deleteContact={deleteData} />
      </Container>
    </>
  );
}

export default App;
