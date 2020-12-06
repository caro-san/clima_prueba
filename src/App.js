import React from 'react';
import Formulario from './components/Formulario';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
import ClimaLista from './components/ClimaLista';

const App = () => {
  const {data, error, Cargando, setUrl} = UseFetch();

  const getContent = () => {
    if(error) return <h2>Error: {error}</h2>
    if(!data && Cargando) return <h2>Loading...</h2>
    if(!data) return null;
    return <ClimaLista weathers={data.list} />
  };

  return (
    <Container className="App">
      <Formulario onSearch={(ciudad) => setUrl(`http://api.openweathermap.org//data/2.5/forecast?q=${ciudad}&cnt=40&appid=af30ad5d737fa343f42cb8cba9ab4690&units=metric&lang=es`)} />

      {/* conditionally render  */}
      {getContent()}
    </Container>
  );
};

export default App;