import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {
  const [buttonText, setButtonText] = useState('click');
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setButtonText('Button Clicked');
  };

  return (
    <Container>
      <div className="container mt-5">
        <div className="text-center">
          <h1>{count}</h1>
          <button className="btn btn-primary m-2" onClick={() => setCount(count + 1)}>Count</button>
          <button className="m-2" style={{ textAlign: "center", backgroundColor:"red" }}>Red Button</button>
          <button className="m-2" style={{ textAlign: "center" }}>Centered Text Button</button>
        </div>
        <ul className="list-group">
          <li className=" xyz">Banana</li>
          <li className=" xyz">Mango</li>
        </ul>
        <div className="text-center mt-4">
          <h1>Data: {buttonText}</h1>
          <button className="btn btn-info" onClick={handleClick}>{buttonText}</button>
          <div className="mt-3">
            <img src="rc" alt="hi" title="this is my image" className="img-thumbnail" />
            <input name="username" type="text" id="id" value="SCB Reactjs" className="form-control mt-2" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;
