import React, { Fragment, useState } from "react";
import { Breadcrumb, Button, Card, Col, Dropdown, Modal, Row } from "react-bootstrap";
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Link from "next/link"
import {
	Singleselectday,
	SingleselectMonth,
	Singleselectyear,
  } from "../../../shared/data/forms/formlayouts"
import Seo from "../../../shared/layout-components/seo/seo";
const FormLayouts = () => {
	const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Seo title="Form Layouts"/>

      <PageHeader title="Form Layouts" item="Forms" active_item="Form Layouts"/>
      {/* <!-- Row --> */}
      <Row className=" row-sm">
        <Col lg={6} md={12}>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Basic Example</h6>
                <p className="text-muted card-sub-title">
                  A form control layout using basic layout.
                </p>
              </div>
              <div className="d-flex flex-column">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Enter your username"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Enter Your Email"
                    type="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Enter Your Password"
                    type="password"
                  />
                </div>
                <div className="form-group">
                  <label className="ckbox">
                    <input type="checkbox" />
                    <span className="tx-13">I agree terms and conditions</span>
                  </label>
                </div>
                <Button className="btn ripple btn-main-primary">Submit</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Horizonatal Form</h6>
                <p className="text-muted card-sub-title">
                  A form control layout using basic layout.
                </p>
              </div>
              <div className="">
                <div className="row row-xs align-items-center mg-b-20">
                  <div className="col-md-4">
                    <label className="mg-b-0">Firstname</label>
                  </div>
                  <div className="col-md-8 mg-t-5 mg-md-t-0">
                    <input
                      className="form-control"
                      placeholder="Enter your firstname"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row row-xs align-items-center mg-b-20">
                  <div className="col-md-4">
                    <label className="mg-b-0">Lastname</label>
                  </div>
                  <div className="col-md-8 mg-t-5 mg-md-t-0">
                    <input
                      className="form-control"
                      placeholder="Enter your lastname"
                      type="text"
                    />
                  </div>
                </div>
                <div className="row row-xs align-items-center mg-b-20">
                  <div className="col-md-4">
                    <label className="mg-b-0">Email</label>
                  </div>
                  <div className="col-md-8 mg-t-5 mg-md-t-0">
                    <input
                      className="form-control"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                </div>
                <div className="form-group row justify-content-end">
                  <div className="col-md-8 ps-md-2">
                    <div className="form-group mb-0">
                      <label className="ckbox">
                        <input type="checkbox" />
                        <span className="tx-13">
                          I agree terms and conditions
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group row justify-content-end mb-0">
                  <div className="col-md-8 ps-md-2 btn-list">
                    <Button className="btn ripple btn-primary pd-x-30 mg-r-5">
                      Register
                    </Button>
                    <button className="btn ripple btn-secondary pd-x-30">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col lg={12} md={12}>
        <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Grid Form</h6>
                <p className="text-muted card-sub-title">
                  A form group layout for entering card information upon
                  checkout.
                </p>
              </div>
              <Row className="row-sm">
                <Col md={12} lg={12} xl={12} >
                  <div className="">
                    <div className="form-group">
                      <label className="">Name</label>
                      <input className="form-control" required="" type="text" />
                    </div>
                    <div className="form-group">
                      <label className="">Email</label>
                      <div className="pos-relative">
                        <input
                          className="form-control"
                          required=""
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <Row className="row-sm">
                        <div className="col-sm-4">
                          <label className="">Date</label>

                          <Singleselectday />
                        </div>
                        <div className="col-sm-4 mg-t-20 mg-sm-t-0">
                          <label className="">Month</label>

                          <SingleselectMonth />
                        </div>
                        <div className="col-sm-4 mg-t-20 mg-sm-t-0">
                          <label className="">Year</label>

                          <Singleselectyear />
                        </div>
                      </Row>
                    </div>
                    <div className="form-group mg-b-20">
                      <label className="ckbox">
                        <input defaultdefaultchecked="true" type="checkbox" />
                        <span className="tx-13">
                          I agree terms and conditions
                        </span>
                      </label>
                    </div>
                    <Button className="btn ripple btn-main-primary btn-block">
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col lg={6} md={12}>
          <Card className=" custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">Form in Dropdown</h6>
                <p className="text-muted card-sub-title">
                  A form group layout inside a dropdown panel.
                </p>
              </div>
              <Dropdown className="main-dropdown-form-demo text-center">
                <Dropdown.Toggle className="btn ripple btn-main-primary pd-x-20">
                  Live Example
                  <i className="icon ion-ios-arrow-down mg-l-5 tx-12"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu id="LiveExampleSubscribe">
                  <h6 className="dropdown-title text-center mb-4">Subscribe</h6>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Enter your fullname"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                  <Button className="btn ripple btn-primary btn-block">
                    Subscribe
                  </Button>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <Card className=" custom-card text-center">
            <Card.Body>
              <div className="text-start">
                <h6 className="main-content-label mb-1">Form in Modal</h6>
                <p className="text-muted card-sub-title">
                  A form group layout inside a modal panel.
                </p>
              </div>
              <div>
                <Button
                  onClick={handleShow}
                  className="btn ripple btn-main-primary"
                >
                  View Live Demo
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton />
                  <Modal.Body className=" pd-20 pd-sm-40">
                    <Modal.Title className=" mb-4 text-center">
                      Create New Account
                    </Modal.Title>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Firstname"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Lastname"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Phone"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        placeholder="Email"
                        type="text"
                      />
                    </div>
                    <div className="form-group mg-b-25">
                      <label className="ckbox mg-b-5">
                        <input type="checkbox" />
                        <span className="tx-13">
                          I agree to
                          <Link href="#!" className="mx-1">Terms</Link> and 
                          <Link href="#!" className="mx-1">Privacy Policy</Link>
                        </span>
                      </label>
                    </div>
                    <Button className="btn ripple btn-primary btn-block">
                      Continue
                    </Button>
                  </Modal.Body>
                </Modal>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
      </div>
  )
}
FormLayouts.layout = "Contentlayout"

export default FormLayouts