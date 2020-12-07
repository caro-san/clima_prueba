import React from 'react';
import Formulario from './components/Formulario';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import ClimaLista from './components/ClimaLista';
import { ApiBase, ApiKey } from "./apis/config";

const App = () => {
  const {data, error, Cargando, setUrl} = UseFetch();


  const oContenido = () => {
    if(error) return <h2>Error: {error}</h2>
    if(!data && Cargando) return <h2>Cargando...</h2>
    if(!data) return null;
    return <ClimaLista weathers={data.list.filter(reading => reading.dt_txt.includes("18:00:00"))} />
  };

  return (
    <Container className="App">
      <Formulario onSearch={(ciudad) => setUrl(`${ApiBase}/data/2.5/forecast?q=${ciudad}&cnt=40&appid=${ApiKey}&units=metric&lang=es`)} />
      {oContenido()}
    </Container>
  );
};

export default App;