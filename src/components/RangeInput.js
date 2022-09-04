import React from "react";
import {
  Col,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const RangeInput = ({ label, id, value, setValue }) => {
  return (
    <FormGroup row className={"align-items-center text-center justify-content-center"}>
      <Label
        for={id}
        size="md"
        sm={3}
      >
        { label }
      </Label>
      <Col sm={6}>
        <Input
          id={id}
          name={id}
          type="range"
          plaintext
          onChange={({ target }) => setValue(+target.value)}
          value={value}
        />
      </Col>
    </FormGroup>
  );
};

export default RangeInput;