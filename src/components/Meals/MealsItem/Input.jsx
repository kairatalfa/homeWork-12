import React from "react";
import styles from "./mealItemForm.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} type="text" />
    </div>
  );
};

export default Input;
