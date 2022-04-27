import React, { useState } from "react";
import styles from "./App.module.css";
import powerdImage from "./assets/unnamed.webp";
import GridItem from "./components/GridItem";
import { levels, calculateBMI, Level } from "./helpers/imc";
import LeftArrowImage from "./assets/leftarrow.png";

const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [showItem, setShowItem] = useState<Level | null>(null);

  const handleCalculate = () => {
    if (height && weight) {
      setShowItem(calculateBMI(height, weight));
    } else {
      alert("Please fill all file");
    }
  };

  const handleBackButton = () => {
    setShowItem(null);
    setHeight(0);
    setWeight(0);
  };

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerdImage} alt="" width={90} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calculate your BMI</h1>
          <p>
            Body mass index (BMI) is a measure of body fat based on height and
            weight that applies to adult men and women.
          </p>
          <input
            placeholder=" Enter your Height Ex:1.5 (meters)"
            type={"number"}
            value={height > 0 ? height : " "}
            onChange={(event) => {
              setHeight(parseFloat(event.target.value));
            }}
            disabled={showItem ? true : false}
          />
          <input
            placeholder=" Enter your Weight Ex:70 (Kg)"
            type={"number"}
            value={weight > 0 ? weight : " "}
            onChange={(event) => {
              setWeight(parseFloat(event.target.value));
            }}
            disabled={showItem ? true : false}
          />
          <button onClick={handleCalculate} disabled={showItem ? true : false}>
            Calculate
          </button>
        </div>
        <div className={styles.rightSide}>
          {!showItem && (
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} data={item} />
              ))}
            </div>
          )}
          {showItem && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}>
                <img
                  src={LeftArrowImage}
                  alt=""
                  width={25}
                  onClick={handleBackButton}
                />
              </div>
              <GridItem data={showItem} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
