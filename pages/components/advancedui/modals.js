import React, { Fragment, useState} from 'react'
import dynamic from 'next/dynamic';
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Seo from '../../../shared/layout-components/seo/seo';
import {  Modal,  Button,  Breadcrumb,  Row,  Col,  Card,  Tooltip,  Popover,  OverlayTrigger,} from "react-bootstrap";
const Searchable = dynamic(() => import('react-searchable-dropdown'), { ssr: false });
import DatePicker from "react-datepicker";
import Link from "next/link"
import { Alertdangermessage } from "../../../shared/data/advanceui/modals/Modaldangeralert";
import { Alertmessagesuccess } from "../../../shared/data/advanceui/modals/Modalsuccessalert";
import { Gridmodal } from "../../../shared/data/advanceui/modals/Gridmodal";



const Modals = () => {
	const [date, setDate] = useState(new Date());
	const handleCalendarClose = () => {};
	const handleCalendarOpen = () => {};
	//popovers:
	const popover = (
	  <Popover id="popover-basic">
		<Popover.Header as="h3">Popover </Popover.Header>
		<Popover.Body>
		  <p> Vivamus sagittis lacus vel</p>
		</Popover.Body>
	  </Popover>
	);
  
	// popovercontent-end:
	// Tooltip:
	const renderTooltip = (props) => (
	  <Tooltip id="button-tooltip" {...props}>
		Tooltip
	  </Tooltip>
	  // Tooltip-end
	);
  
	const [Basic, setShow1] = useState(false);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
	const [show4, setShow4] = useState(false);
	const [show5, setShow5] = useState(false);
	const [show6, setShow6] = useState(false);
	const [show7, setShow7] = useState(false);
	const [show8, setShow8] = useState(false);
	const [show9, setShow9] = useState(false);
	const [show10, setShow10] = useState(false);
  
  
	let viewDemoShow = (modal) => {
	//  [eslint]
	  switch (modal) {
		case "Basic":
		  setShow1(true);
		  break;
		case "show2":
		  setShow2(true);
		  break;
		case "show3":
		  setShow3(true);
		  break;
		case "show4":
		  setShow4(true);
		  break;
		case "show5":
		  setShow5(true);
		  break;
		case "show6":
		  setShow6(true);
		  break;
		case "show7":
		  setShow7(true);
		  break;
		case "show8":
		  setShow8(true);
		  break;
		case "show9":
		  setShow9(true);
		  break;
		  case "show10":
			setShow10(true);
			break;
	  }
	};
  
	let viewDemoClose = (modal) => {
	  switch (modal) {
		case "Basic":
		  setShow1(false);
		  break;
		case "show2":
		  setShow2(false);
		  break;
		case "show3":
		  setShow3(false);
		  break;
		case "show4":
		  setShow4(false);
		  break;
		case "show5":
		  setShow5(false);
		  break;
		case "show6":
		  setShow6(false);
		  break;
		case "show7":
		  setShow7(false);
		  break;
		case "show8":
		  setShow8(false);
		  break;
		case "show9":
		  setShow9(false);
		  break;
		  case "show10":
			setShow10(false);
			break;
	  }
	};
  
	
	return (
    <>
        <Seo title="Modals"/>

    <PageHeader title="Modal" item="Advanced UI" active_item="Modals"/>

    		{/* <!-- container --> */}
			{/* <!-- row --> */}
			<Row className=" row-sm">
        <Col lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  Basic Example of Modal View
                </h6>
                <p className="text-muted card-sub-title">
                  Below is the static example of the basic modal.
                </p>
              </div>
              <div className="pd-20 bg-light">
                <div className="modal d-block pos-static">
                  <Modal.Dialog>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal Header</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <Modal.Title>Modal Body</Modal.Title>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                      </p>
                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="primary">Save changes</Button>
                      <Button variant="secondary">Close</Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className=" row-sm">
        <Col sm={4} md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3">Basic Modal</h6>
              </div>
              {/* <modalmethods.Basicmodal /> */}
              <Fragment>
                <Button
                  variant="secondary"
                  onClick={() => viewDemoShow("Basic")}
                  className="text-center"
                >
                  viewDemo
                </Button>

                <Modal show={Basic} size="large">
                  <Modal.Header
                    closeButton
                    onClick={() => {
                      viewDemoClose("Basic");
                    }}
                  >
                    <h6>Basic Modal</h6>
                  </Modal.Header>
                  <Modal.Body>
                    <h6>Modal Body</h6>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                    <br />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      onClick={() => {
                        viewDemoClose("Basic");
                      }}
                      className="text-center"
                    >
                      cantainue
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        viewDemoClose("Basic");
                      }}
                      className="text-center"
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Fragment>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3">Small Modal</h6>
              </div>
              <Fragment>
                <Button variant="primary" onClick={() => viewDemoShow("show2")}>
                  View Demo
                </Button>

                <Modal show={show2} size="sm" backdrop="static">
                  <Modal.Header
                    closeButton
                    onClick={() => {
                      viewDemoClose("show2");
                    }}
                  >
                    <Modal.Title>Modal Small</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Modal.Title>Modal Body</Modal.Title>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      onClick={() => {
                        viewDemoClose("show2");
                      }}
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        viewDemoClose("show2");
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Fragment>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3">Large Modal</h6>
              </div>

              <Fragment>
                <Button variant="info" onClick={() => viewDemoShow("show3")}>
                  View Demo
                </Button>

                <Modal show={show3} size="lg" backdrop="static">
                  <Modal.Header
                    closeButton
                    onClick={() => {
                      viewDemoClose("show3");
                    }}
                  >
                    <Modal.Title>Modal Large</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Modal.Title>Modal Body</Modal.Title>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      onClick={() => {
                        viewDemoClose("show3");
                      }}
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        viewDemoClose("show3");
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Fragment>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3">Grid Modal</h6>
              </div>
              <Gridmodal/>

            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3">
                  Modal Success Alert Messages
                </h6>
              </div>
              <Alertmessagesuccess/>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3">
                  Modal Danger Alert Messages
                </h6>
              </div>
              <Alertdangermessage/>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3">
                  Tooltips and popovers
                </h6>
              </div>
              <Fragment>
                <Button variant="success" onClick={() => viewDemoShow("show9")}>
                  View Demo
                </Button>
                <Modal show={show9} backdrop="static">
                  <Modal.Header
                    closeButton
                    onClick={() => {
                      viewDemoClose("show9");
                    }}
                  >
                    <Modal.Title>Tooltips & Popover</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h5>Popover in a modal</h5>
                    <p className="me-2">
                      This
                      <OverlayTrigger
                        trigger="click"
                        placement="right"
                        overlay={popover}
                      >
                        <Button
                          variant="primary"
                          className="btn btn-sm ripple btn-primary mx-2"
                          data-bs-container="body"
                          data-bs-content="Vivamus sagittis lacus vel"
                          data-bs-placement="right"
                          data-bs-popover-color="default"
                          data-bs-toggle="popover"
                          title="Popover"
                          type="button"
                          size="sm"
                        >
                          Popover
                        </Button>
                      </OverlayTrigger>
                      triggers a popover on click
                    </p>
                    <hr />
                    <h5>Tooltips in a modal</h5>
                    <p>
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                      >
                        <Link href="#!">
                          <span className="mx-2">Hover me</span>
                        </Link>
                      </OverlayTrigger>
                      and
                      <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                      >
                        <Link href="#!">
                          <span className="mx-2">Hover me</span>
                        </Link>
                      </OverlayTrigger>
                      have tooltips on hover
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="success"
                      onClick={() => {
                        viewDemoClose("show9");
                      }}
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        viewDemoClose("show9");
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Fragment>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3">Full Screen Modal</h6>
              </div>
              <Fragment>
                <Button variant="primary" onClick={() => viewDemoShow("show5")}>
                  View Demo
                </Button>

                <Modal
                  show={show5}
                  onClick={() => {
                    viewDemoClose("show5");
                  }}
                  size="fullscreen"
                  backdrop="static"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>FullScreen</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Modal.Title>Modal Body</Modal.Title>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="danger"
                      onClick={() => {
                        viewDemoClose("show3");
                      }}
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => {
                        viewDemoClose("show3");
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Fragment>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} md={4}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3"> Extra Large Modal</h6>
              </div>
              <Fragment>
      <Button variant="info" onClick={() => viewDemoShow("show10")}>
        View Demo
      </Button>

      <Modal show={show10}  size="xl" backdrop="static">
        <Modal.Header  closeButton
                    onClick={() => {
                      viewDemoClose("show10");
                    }}
                  >
          <Modal.Title>FullScreen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal.Title>Modal Body</Modal.Title>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"  onClick={() => viewDemoClose("show10")}>
            Save Changes
          </Button>
          <Button variant="secondary"  onClick={() => viewDemoClose("show10")}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3">Scrolling Modal</h6>
              </div>
              <Fragment>
                <Button variant="primary" onClick={() => viewDemoShow("show6")}>
                  View Demo
                </Button>

                <Modal show={show6} backdrop="static">
                  <Modal.Header
                    closeButton
                    onClick={() => {
                      viewDemoClose("show6");
                    }}
                  >
                    <Modal.Title>Basic Modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Modal.Title>Modal Body</Modal.Title>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ration.sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequiqui ratione voluptatem sequi nesciunt nesciunt. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ration.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="danger"
                      onClick={() => {
                        viewDemoClose("show6");
                      }}
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => {
                        viewDemoClose("show6");
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Fragment>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3">
                  Scrolling with Content
                </h6>
              </div>
              <Fragment>
                <Button
                  variant="secondary"
                  onClick={() => viewDemoShow("show7")}
                  backdrop="static"
                >
                  View Demo
                </Button>

                <Modal show={show7} backdrop="static">
                  <Modal.Header
                    closeButton
                    onClick={() => {
                      viewDemoClose("show7");
                    }}
                  >
                    <Modal.Title>Basic Modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nemo enim ipsam voluptatem quia voluptas
                      sit aspernatur aut odit aut fugit, sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Nemo enim ipsam voluptatem quia
                      voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="success"
                      onClick={() => {
                        viewDemoClose("show7");
                      }}
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        viewDemoClose("show7");
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Fragment>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3">
                  Select2 Inside Modals
                </h6>
              </div>

              <Fragment>
                <Button variant="success" onClick={() => viewDemoShow("show4")}>
                  View Demo
                </Button>
                <Modal show={show4} backdrop="static">
                  <Modal.Header
                    closeButton
                    onClick={() => {
                      viewDemoClose("show4");
                    }}
                  >
                    <Modal.Title>Select2 Modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Searchable
                      className="form-control select2"
                      value="test"
                      placeholder="Choose one" // by default "Search"
                      notFoundText="No result found" // by default "No result found"
                      noInput
                      options={[
                        { value: "", label: "All categories" },
                        { value: "it projects", label: "IT Projects" },
                        { value: "business case", label: "Business Case" },
                        {
                          value: "microsoft project",
                          label: "Microsoft Project",
                        },
                        { value: "risk ]management", label: "Risk Management" },
                        { value: "popular", label: "Popular" },
                        { value: "team building", label: "Team Building" },
                      ]}
                      onSelect={(value) => {}}
                      listMaxHeight={140} //by default 140
                    />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tenetur laudantium, obcaecati esse non sunt qui.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="success"
                      onClick={() => {
                        viewDemoClose("show4");
                      }}
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        viewDemoClose("show4");
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Fragment>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={6} lg={6}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-3">Modal-datepicker</h6>
              </div>
              <Fragment>
                <Button variant="primary" onClick={() => viewDemoShow("show8")}>
                  View Demo
                </Button>

                <Modal show={show8}>
                  <Modal.Header
                    closeButton
                    onClick={() => {
                      viewDemoClose("show8");
                    }}
                  >
                    <Modal.Title>Basic Modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Modal.Title>Modal Body</Modal.Title>
                    <DatePicker
                      className="form-control"
                      selected={date}
                      onChange={(date) => setDate(date)}
                      onCalendarClose={handleCalendarClose}
                      onCalendarOpen={handleCalendarOpen}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="danger"
                      onClick={() => {
                        viewDemoClose("show8");
                      }}
                    >
                      Save Changes
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => {
                        viewDemoClose("show8");
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Fragment>
            </Card.Body>
          </Card>
        </Col>
      </Row>
			{/* <!-- /row --> */}
    </>
  )
}
Modals.layout = "Contentlayout"

export default Modals