import "./App.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import CustomButtons from "./CustomButtons";

const Array = [
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29,
];

const App = () => {
  const [lucky, setLucky] = useState([]);
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [numbers, setNumbers] = useState("5");
  const [numberOfTickets, setNumberOfTickets] = useState("1");

  const getMultipleRandom = (arr) => {
    const arr1 = [...arr]
      .sort(() => 0.5 - Math.random())
      .slice(0, numbers)
      .sort((a, b) => a - b);
    const arr2 = [...arr]
      .sort(() => 0.5 - Math.random())
      .slice(0, numbers)
      .sort((a, b) => a - b);
    const arr3 = [...arr]
      .sort(() => 0.5 - Math.random())
      .slice(0, numbers)
      .sort((a, b) => a - b);
    const arr4 = [...arr]
      .sort(() => 0.5 - Math.random())
      .slice(0, numbers)
      .sort((a, b) => a - b);
    const arr5 = [...arr]
      .sort(() => 0.5 - Math.random())
      .slice(0, numbers)
      .sort((a, b) => a - b);
    if (numberOfTickets === "1") {
      return [arr1];
    }
    if (numberOfTickets === "2") {
      return [arr1, arr2];
    }
    if (numberOfTickets === "3") {
      return [arr1, arr2, arr3];
    }
    if (numberOfTickets === "4") {
      return [arr1, arr2, arr3, arr4];
    }
    if (numberOfTickets === "5") {
      return [arr1, arr2, arr3, arr4, arr5];
    }
  };

  const handleAmout = (e) => {
    const ticketAmount = e.target.value;
    setNumberOfTickets(ticketAmount);
  };

  const handleTicketsNumber = (e) => {
    const tickets = e.target.value;
    setNumbers(tickets);
  };

  const handleClick = () => {
    setLucky(getMultipleRandom(Array));
    setLoading(true);
    setTimeout(() => {
      setAnimate(true);
    }, 2000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setAnimate(false);
  }, [lucky, animate, numbers, numberOfTickets]);

  const luckyBtns = (
    <div>
      <Button
        className="custom-btn animate__animated animate__backInLeft"
        variant="primary"
      >
        L
      </Button>
      <Button
        className="custom-btn animate__animated animate__backInDown"
        variant="primary"
      >
        U
      </Button>
      <Button
        className="custom-btn animate__animated animate__backInUp"
        variant="primary"
      >
        C
      </Button>
      <Button
        className="custom-btn animate__animated animate__backInDown"
        variant="primary"
      >
        K
      </Button>
      <Button
        className="custom-btn animate__animated animate__backInRight"
        variant="primary"
      >
        Y
      </Button>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header">AI Random Numbers</header>
      <div className="App-body">
        <h2>Get Your Ai Lucky Numbers</h2>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => handleAmout(e)}
        >
          <option>Select numbers from total</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </Form.Select>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => handleTicketsNumber(e)}
        >
          <option>Select number of tickets</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
        {loading ? (
          <div className="drawing" id="loading">
            <div className="loading-dot"></div>
          </div>
        ) : (
          <div className="numbers-wrapper">
            {lucky && lucky.length > 0 ? (
              <div className="d-flex flex-center">
                {
                  <CustomButtons
                    lucky={lucky}
                    numberOfTickets={numberOfTickets}
                  />
                }
              </div>
            ) : (
              luckyBtns
            )}
          </div>
        )}
        <Button onClick={handleClick} className="search-btn" variant="warning">
          Search Numbers
        </Button>
      </div>
      {/* <footer className="App-footer">Footer</footer> */}
    </div>
  );
};

export default App;
