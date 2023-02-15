import { useDispatch, useSelector } from "react-redux";
import {
  inputName,
  inputEmail,
  inputMobile,
  inputPassword,
  inputDesignation,
  inputTechnology,
} from "../services/action/index";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormInput() {
  const myState = useSelector((state) => state.changeFormData);
  const dispatch = useDispatch();

  const userList = [];
  const { name, email, mobile, password, designation, technology } = myState;
  userList.push([
    { name },
    { email },
    { mobile },
    { password },
    { designation },
    { technology },
  ]);
  console.log(userList, "data");

  const handleBlur = () => {
    console.log("Api Call");
  };

  return (
    <div
      style={{
        marginTop:'10px',
        width: "60%",
        marginLeft: "20%",
        backgroundImage: `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?auto=format&h=200')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <Form style={{ padding: "50px" }}>
        <>
          <h1 style={{ textAlign: "center" }}>Registration - Form</h1>
          <Row>
            <Col>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                name="name"
                placeholder="Enter Name..."
                onChange={(e) => dispatch(inputName(e))}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                name="email"
                placeholder="Enter Email..."
                onChange={(e) => dispatch(inputEmail(e))}
                onBlur={handleBlur}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Mobile:</Form.Label>
              <Form.Control
                name="mobile"
                placeholder="Enter Mobile..."
                onChange={(e) => dispatch(inputMobile(e))}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                name="password"
                placeholder="Enter Password..."
                onChange={(e) => dispatch(inputPassword(e))}
                onBlur={handleBlur}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Designation:</Form.Label>
              <Form.Control
                name="designation"
                placeholder="Enter Designation..."
                onChange={(e) => dispatch(inputDesignation(e))}
                onBlur={handleBlur}
              />
            </Col>
            <Col>
              <Form.Label>Technology:</Form.Label>
              <Form.Control
                name="technology"
                placeholder="Enter Technology..."
                onChange={(e) => dispatch(inputTechnology(e))}
                onBlur={handleBlur}
              />
            </Col>
          </Row>
        </>
      </Form>
    </div>
  );
}

export default FormInput;
