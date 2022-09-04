import React from "react";
import DateTimePicker from "react-datetime-picker";
import { FormGroup, Label } from "reactstrap";

const DateTimeInput = ({ value, setValue, label, id }) => {
  return (
    <FormGroup style={{marginBottom: "0 !important"}}>
      <Label
        for={id}
        className={"mr-2"}
      >
        { label }
      </Label>
        <DateTimePicker
          className={"ms-3"}
          id={id}
          onChange={setValue}
          value={value}
        />
    </FormGroup>
  );
};

export default DateTimeInput;