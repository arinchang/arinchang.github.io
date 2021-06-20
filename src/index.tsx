import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

// const discussions = [
//   {
//     name: "Discussion 1A",
//     worksheet: "REPLACE WITH LINK",
//     section_note: "REPLACE WITH ACTUAL LINK"
//   }
// ]

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    
    <div>
      <h1> Welcome to CS 70! </h1>
      <div id="contact">
        <a href="mailto:arinchang@berkeley.edu" target="_blank" rel="noopener noreferrer">arinchang@berkeley.edu</a><br></br>
        <strong>Discussion:</strong> MTWTh 5pm <br></br>
        <strong>Discussion:</strong> TWThF 11am <br></br>
      </div>

      <div>Below are my teaching materials for the summer 2021 rendition of <a href="https://www.eecs70.org" target="_blank" rel="noopener noreferrer">CS 70</a> which include notes from discussion section and potential resources.
      </div>

      <h2>Discussions</h2>
      <div>
        <Table striped bordered hover className="table">
           <thead>
            <tr>
              <th>Discussion</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>{<a href="https://www.eecs70.org/static/notes/n0.pdf" target="_blank" rel="noopener noreferrer">Note 0</a>}</td>
              <td>Note</td> */}
            </tr>
          </tbody>
        </Table>
      </div>

      <h2>Resources</h2>
    </div>

    



  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
