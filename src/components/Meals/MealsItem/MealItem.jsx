import { useState } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealtemForm";
export function MealItem(props) {
  const price = props.price.toFixed(2);
  const [state, setState] = useState(0);
  const [total, setTotal] = useState(price);

  function sushiMinus() {
    if (state > 0) {
      setState(state - 1);
      setTotal((prevTotal) => +prevTotal - props.price);
    }
  }
  function sushiplus() {
    setState(state + 1);

    setTotal((prevTotal) => +prevTotal + props.price);
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div className={classes.minus}>
        <button className={classes.click} onClick={sushiMinus}>
          -
        </button>
        <p className={classes.total}>{state}</p>

        <button className={classes.click} onClick={sushiplus}>
          +
        </button>
        <div>
          <p className={classes.total}>{Number(total).toFixed(2)}</p>
        </div>
      </div>
      <div>
        <MealItemForm id={props.id}/>
      </div>
    </li>
  );
}
