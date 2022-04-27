import React from "react";
import styles from "./GridItem.module.css";
import { Level } from "../../helpers/imc";
import upImage from "../../assets/up.png";
import downImage from "../../assets/down.png";

type Props = {
  data: Level;
};
const GridItem = ({ data }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: data.color }}>
      <div className={styles.gridIcon}>
        <img src={data.icon === "up" ? upImage : downImage} alt="" width="30" />
      </div>
      <div className={styles.gridTitle}>{data.title}</div>

      {data.yourBmi && (
        <div className={styles.yourBmi}> Your BMI is {data.yourBmi}kg/m2</div>
      )}
      <div className={styles.gridInfo}>
        <>
          BMI is between <strong>{data.bmi[0]}</strong> and{" "}
          <strong>{data.bmi[1]}</strong>
        </>
      </div>
    </div>
  );
};

export default GridItem;
