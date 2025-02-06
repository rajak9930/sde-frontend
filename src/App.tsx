import React from 'react';
import { Container, Button, useMantineColorScheme } from '@mantine/core';
import TableComponent from './components/TableComponent';
import BarChartComponent from './components/BarChartComponent';

const App: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Container>
      <Button onClick={toggleColorScheme} style={{ marginBottom: 20 }}>
         {colorScheme === 'dark' ? 'Light' : 'Dark'} mode
      </Button>
      <TableComponent />
      <BarChartComponent />
    </Container>
  );
};

export default App;