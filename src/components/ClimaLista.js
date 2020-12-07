import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ClimaCard from './ClimaCard';


const ClimaLista = ({weathers}) => {
    return (
        <Row>
            {weathers.map(({dt,main, weather}) => (
                <Col key={dt}>
                    <ClimaCard
                    temp_main={Math.round(main.temp)}
                    temp_max={Math.round(main.temp_max)} 
                    temp_min={Math.round(main.temp_min)} 
                    dt={dt * 1000} 
                    main={weather[0].main} 
                    icon={weather[0].icon}/>
                </Col>
            ))} 
        </Row>
        
    )
}

export default ClimaLista;
