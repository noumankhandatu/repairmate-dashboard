	import React, { useState } from 'react'
	import PageHeader from '../../../shared/layout-components/page-header/page-header'
  import Seo from '../../../shared/layout-components/seo/seo';
  import {
    Accordion, Breadcrumb, Button, Card, Col, Row, Form, Collapse
  } from "react-bootstrap";
  import * as accordion from "../../../shared/data/elements/accordion";
  import * as customizedAccordions from "../../../shared/data/elements/customizedaccodions";

const Accordions = () => {
  const [Accordion1, setAccordion1] = useState(false);
	
  return (
    <div>
      <Seo title="Accordion"/>
      <PageHeader title="Accordion" item="Advanced UI" active_item="Accordion"/>
      <Row className="row-sm">
        <Col lg={12}>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <Card.Title className="main-content-label mb-1">
                  <h6>Making a Beautiful CSS3 Button Set</h6>
                </Card.Title>
                <Card.Subtitle className="text-muted card-sub-title">
                  <p>The default collapse behavior to create an accordion.</p>
                </Card.Subtitle>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setAccordion1(!Accordion1)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Making a Beautiful CSS3 Button Set</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Horizontal Navigation Menu Fold Animation</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Creating CSS3 Button with Rounded Corners</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <br />
              <Collapse in={Accordion1}>
                <pre>
                  <code>
                    {
                      `<Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Making a Beautiful CSS3 Button Set</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Horizontal Navigation Menu Fold Animation</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Creating CSS3 Button with Rounded Corners</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

                        `
                    }

                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className=" row-sm">
        <Col lg={12}>
          <Card className=" custom-card">
            <Card.Body>
              <Card.Title>
                <h6 className="mb-1">Controlled accordion</h6>
              </Card.Title>
              <Card.Subtitle>
                <p className="text-muted card-sub-title">
                  Extend the default behavior to create an accordion with the
                  Accordion component.
                </p>
              </Card.Subtitle>
              <accordion.ControlledAccordions />
            </Card.Body>
            <Row className=" row-sm">
              <Col lg={12}>
                <Card className=" custom-card">
                  <Card.Body className="card-body">
                    <div>
                      <Card.Title className="main-content-label mb-1">
                        <h6>Customization</h6>
                      </Card.Title>
                      <Card.Subtitle>
                        <p className="text-muted card-sub-title">
                          Here is an example of customizing the component
                        </p>
                      </Card.Subtitle>
                    </div>
                    <customizedAccordions.CustomizedAccordions />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      
      </div>
  )
}
Accordions.layout = "Contentlayout"

export default Accordions