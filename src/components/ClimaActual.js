import React from 'react';
import {Card} from 'react-bootstrap';
import img from '../img/9846.jpg';
var moment = require('moment');

const ClimaCard = ({dt, temp_min, temp_max, temp_main, main, icon}) => {
  // create a date object with Date class constructor
  const newDate = new Date();
    newDate.setTime(dt)

  return (
    <>
    <Card.Body>
        <Card.Title> Actual </Card.Title>
        <p style={{fontSize:'3rem'}}>{temp_main}</p>
      </Card.Body>
    <Card style={{backgroundImage: "url("+img+")"}}>
      <Card.Body>
        <Card.Subtitle className="mb-1 text-muted">{moment(newDate).format('dddd')}</Card.Subtitle>
      </Card.Body>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body>
    
      </Card.Body>
    </Card>
    </>
  );
};
export default ClimaCard;