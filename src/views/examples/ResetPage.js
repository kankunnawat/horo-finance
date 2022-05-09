/*!

=========================================================
* BLK Design System PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

export default function ResetPage() {
  const [emailFocus, setEmailFocus] = React.useState(false);
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("reset-page");
    return function cleanup() {
      document.body.classList.remove("reset-page");
    };
  }, []);
  return (
    <>
      <ColorNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="page-header-image" />
          <Container>
            <Col className="mx-auto" lg="5" md="8">
              <Card className="card-login">
                <Form action="" className="form" method="">
                  <CardHeader>
                    <CardImg
                      alt="..."
                      src={require("assets/img/shape.png").default}
                    />
                    <CardTitle tag="h4">Reset Password</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <h4 className="description text-center">
                      Enter email address to reset password
                    </h4>
                    <InputGroup
                      className={classnames("input-lg", {
                        "input-group-focus": emailFocus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        className="form-control-lg"
                        placeholder="Your email"
                        type="email"
                        onFocus={(e) => setEmailFocus(true)}
                        onBlur={(e) => setEmailFocus(false)}
                      />
                    </InputGroup>
                    <Button
                      block
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      Request Reset
                    </Button>
                  </CardBody>
                  <CardFooter>
                    <div className="pull-left ml-3 mb-3">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Back to Sign in
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right mr-3 mb-3">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}
