import { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const formInput = useRef();
  const FormSubmission = (e) => {
    e.preventDefault();
    const inputLetter = formInput.current.value;
    //value is always a string
    const newInputLetter = +inputLetter;

    if (
      inputLetter.trim().length === "" ||
      newInputLetter < 1 ||
      newInputLetter > 5
    ) {
      return;
    }

    props.onAddtoCart(newInputLetter);
  };

  return (
    <form className={classes.form} onSubmit={FormSubmission}>
      <Input
        ref={formInput}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
