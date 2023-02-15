import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div>
      <MDBFooter
        className="bg-light text-center text-white"
        style={{ backgroundColor: "#caced1" }}
      >
        <MDBContainer className="p-4">
          <section className="">
            <MDBRow>
              <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
                <MDBRipple
                  rippleColor="light"
                  className="bg-image hover-overlay shadow-1-strong rounded"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                    className="w-100"
                    alt="img1"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
                <MDBRipple
                  rippleColor="light"
                  className="bg-image hover-overlay shadow-1-strong rounded"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                    className="w-100"
                    alt="img2"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
                <MDBRipple
                  rippleColor="light"
                  className="bg-image hover-overlay shadow-1-strong rounded"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                    className="w-100"
                    alt="img3"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
                <MDBRipple
                  rippleColor="light"
                  className="bg-image hover-overlay shadow-1-strong rounded"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                    className="w-100"
                    alt="img4"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
                <MDBRipple
                  rippleColor="light"
                  className="bg-image hover-overlay shadow-1-strong rounded"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                    className="w-100"
                    alt="img5"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
              <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
                <MDBRipple
                  rippleColor="light"
                  className="bg-image hover-overlay shadow-1-strong rounded"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                    className="w-100"
                    alt="img6"
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </MDBRipple>
              </MDBCol>
            </MDBRow>
          </section>
        </MDBContainer>
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com/KiwiTech"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/KiwiTechCorp"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="https://www.kiwitech.com/"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="https://www.instagram.com/kiwitech_us/"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/company/kiwitech/?original_referer=https%3A%2F%2Fwww.kiwitech.com"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              floating
              className="m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/KiwiTech"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgb(0 0 0 / 68%)" }}
        >
          © 2023 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
           @ Kiwitech.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
