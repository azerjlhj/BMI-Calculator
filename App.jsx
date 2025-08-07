import React, { useState, useEffect } from "react";

function calculateBmi(pounds, inches) {
  return ((pounds * 703) / (inches * inches)).toFixed(1);
}

function App() {
  const [weight, setWeight] = useState(200);
  const [height, setHeight] = useState(69);
  const [bmi, setBmi] = useState(calculateBmi(weight, height));

  useEffect(() => {
    setBmi(calculateBmi(weight, height));
  }, [weight, height]);

  function incrementWeight() {
    setWeight((prev) => prev + 1);
  }

  function decrementWeight() {
    setWeight((prev) => prev - 1);
  }

  function incrementHeight() {
    setHeight((prev) => prev + 1);
  }

  function decrementHeight() {
    setHeight((prev) => prev - 1);
  }

  return (
    <div>
      <h1>
        <u>BMI</u>
      </h1>
      <h2>{bmi}</h2>

      <div className="container" style={{ gap: 75 }}>
        <div>
          <h2>Weight</h2>
          <h3>{weight} lbs</h3>
          <div className="container">
            <button onClick={incrementWeight}>+</button>
            <button onClick={decrementWeight}>-</button>
          </div>
        </div>

        <div>
          <h2>Height</h2>
          <h3>{height} in</h3>
          <div className="container">
            <button onClick={incrementHeight}>+</button>
            <button onClick={decrementHeight}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
