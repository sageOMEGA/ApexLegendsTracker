import React from 'react';
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form'
import Dropdown from './components/Dropdown'

const App = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Dropdown />
      <Form />
    </Card>
  );
}

export default App;
