import React from "react";
import Input from "./Input";
import styles from "./mealItemForm.css";

const MealItemForm = (props) => {
  const inputProps = {
    id: `amount ${props.id}`,
    type: "number",
    min: "1",
    mix: "5",

    step: "1",
    defaultValue: "1",
  };
  return (
    <form className={styles.form}>
      <Input label={"Amount"} input={inputProps} />
      <button>add +</button>
    </form>
  );
};

export default MealItemForm;
