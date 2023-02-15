import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const initialValues = {
  f1: "",
  f2: "",
  f3: "",
  f4: "",
  f5: "",
  f6: "",
};

function Forms() {
  const userList = [];

  const [values, setValues] = useState(initialValues);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const { f1, f2, f3, f4, f5, f6 } = values;
  // console.log(f1)

  userList.push([
    { f1 },
    { f2 },
    { f3 },
    { f4 },
    { f5 },
    { f6 },
  ]);

  console.log(userList, "data");

  const handleBlur = () => {
    if (values) console.log("hello");
  };

  // list.push(name1, name2, name3, name4, name5, name6);
  // console.log(list);

  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?auto=format&h=200')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        margin: "10px",
      }}
    >
      <Form>
        <>
          <Row>
            <Col>
              <Form.Label>Field1</Form.Label>
              <Form.Control
                name="f1"
                value={values.f1}
                placeholder="Field1"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <Form.Label>Field2</Form.Label>
              <Form.Control
                name="f2"
                value={values.f2}
                placeholder="Field2"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Field3</Form.Label>
              <Form.Control
                name="f3"
                value={values.f3}
                placeholder="Field3"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <Form.Label>Field4</Form.Label>
              <Form.Control
                name="f4"
                value={values.f4}
                placeholder="Field4"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Field5</Form.Label>
              <Form.Control
                name="f5"
                value={values.f5}
                placeholder="Field5"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <Form.Label>Field6</Form.Label>
              <Form.Control
                name="f6"
                value={values.f6}
                placeholder="Field6"
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
            </Col>
          </Row>
        </>
      </Form>
    </div>
  );
}

export default Forms;
