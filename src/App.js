import "./App.css";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function App() {
  const [lucky, setLucky] = useState([]);
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false);
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num).sort(function (a, b) {
      return a - b;
    });
  }
  const Array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];
  const handleClick = () => {
    setLucky(getMultipleRandom(Array, 5));
    setLoading(true);
    setTimeout(() => {
      setAnimate(true);
    }, 1500);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setAnimate(false);
  }, [lucky, animate]);
  return (
    <div className="App">
      <header className="App-header">AI Random Numbers</header>
      <div className="App-body">
        <h2>Get Your Ai Lucky Numbers</h2>
        {loading ? (
          <div class="drawing" id="loading">
            <div class="loading-dot"></div>
          </div>
        ) : (
          <div className="numbers-wrapper">
            {lucky.length > 0 ? (
              lucky?.map((item, index) => {
                return (
                  <Button className="custom-btn" variant="primary" key={index}>
                    {item}
                  </Button>
                );
              })
            ) : (
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
}

export default App;
