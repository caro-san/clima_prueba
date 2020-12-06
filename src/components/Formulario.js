import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const Formulario = ({onSearch}) => {
    const [ciudad, setCiudad] = useState('');

    return (
      <>
        <Row>
          <Col>
            <h1>Busca tu ciudad</h1>
          </Col>
        </Row>
  
        <Row>
          <Col xs={4}>
            <FormControl
              placeholder="Ej. Buenos Aires"
              onChange={(event) => setCiudad(event.target.value)}
              value={ciudad}
            />
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Button onClick={() => onSearch(ciudad)}>Buscar</Button>
          </Col>
        </Row>
      </>
    );
  };

export default Formulario;