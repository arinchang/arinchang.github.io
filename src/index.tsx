import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Container from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <head>
      <div>Welcome to CS 70!</div>
    </head> */}
    <div>
      <h1> Welcome to CS 70! </h1>
      <div id="contact">
        <a href="mailto:arinchang@berkeley.edu" target="_blank" rel="noopener noreferrer">arinchang@berkeley.edu</a><br></br>
        <strong>Discussion:</strong> MTWTH 5pm <br></br>
        <strong>Discussion:</strong> TWTHF 11am <br></br>
      </div>

      <div>Below are my teaching materials for CS 70 which include notes from discussion section and potential resources.</div>

      <h2>Testing</h2>
      <div>
        <a href="https://www.eecs70.org/static/notes/n0.pdf">Note 0</a><br></br>
        <a href="http://www.eecs70.org/static/notes/n1.pdf">Note 1</a>
      </div>

    </div>

    {/* <Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
</Container> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
