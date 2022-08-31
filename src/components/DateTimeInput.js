import React from 'react';
import DateTimePicker from "react-datetime-picker";
import { Col, FormGroup, Label } from "reactstrap";

const DateTimeInput = ({ value, setValue, label, id }) => {
  return (
    <FormGroup row className={'align-items-center text-center justify-content-center'}>
      <Label
        for={id}
        size="md"
        sm={3}
      >
        { label }
      </Label>
      <Col sm={6}>
        <DateTimePicker
          id={id}
          onChange={setValue}
          value={value}
        />
      </Col>
    </FormGroup>
  );
};

export default DateTimeInput;