import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Row, Card, Col, Button, Table, Breadcrumb, Nav, } from "react-bootstrap";
import Link from "next/link"
import Seo from '../../../shared/layout-components/seo/seo';


//Images
import users5 from "../../../public/assets/img/users/5.jpg" 
import users4 from "../../../public/assets/img/users/4.jpg" 

const Margin = () => {
  return (
    <div>
      <Seo title="Margin"/>

    <PageHeader title="Margin" item="Utilities" active_item="Margin"/>
      

    {/* <!-- Row --> */}
	<Row className=" row-sm">
      <Col xl={9} lg={12}>
        <Card className="custom-card" id="setmargin">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Set Margin</h6>
              <p className="text-muted  card-sub-title">
                You can set a margin to an element instantly by using the
                following utilities classNamees.
              </p>
            </div>
            <div className="d-flex">
              <div className="wd-150 ht-80 bg-light"></div>
              <div className="d-flex align-items-center justify-content-center text-center wd-150 ht-80 bg-light mg-l-20">
                .mg-l-20 (or) .ms-2
              </div>
              <div className="d-flex align-items-center justify-content-center text-center wd-150 ht-80 bg-light mg-l-40">
                .mg-l-40 (or) .ms-4
              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">Smaller Margin</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>
                        .mg-t-[value]
                        <br />
                        .mg-r-[value]
                        <br />
                        .mg-b-[value]
                        <br />
                        .mg-l-[value]
                      </code>
                    </td>
                    <td>1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10</td>
                  </tr>
                  <tr>
                    <td>
                      <code>
                        .mt-[value]
                        <br />
                        .me-[value]
                        <br />
                        .mb-[value]
                        <br />
                        .ms-[value]
                      </code>
                    </td>
                    <td>0 | 1 | 2 | 3 | 4 | 5</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Footer>
        </Card>
        <Card className="custom-card" id="mediamargin">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Media Query Margin</h6>
              <p className="text-muted  card-sub-title">
                You can also set a margin to a different media query using the
                following utilities classNamees.
              </p>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>
                        .mg-[breakpoint]-t-[value]
                        <br />
                        .mg-[breakpoint]-r-[value]
                        <br />
                        .mg-[breakpoint]-b-[value]
                        <br />
                        .mg-[breakpoint]-l-[value]
                      </code>
                    </td>
                    <td>
                      <p className="mg-b-5">
                        breakpoint: xs | sm | md | lg | xl
                      </p>
                      <p className="mg-b-0">
                        value: the margin value (refer to code above)
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>
                        .mt-[breakpoint]-[value]
                        <br />
                        .me-[breakpoint]-[value]
                        <br />
                        .mb-[breakpoint]-[value]
                        <br />
                        .ms-[breakpoint]-[value]
                      </code>
                    </td>
                    <td>
                      <p className="mg-b-5">
                        breakpoint: xs | sm | md | lg | xl
                      </p>
                      <p className="mg-b-0">
                        value: the margin value (refer to code above)
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="automargin">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Auto Margin</h6>
              <p className="text-muted  card-sub-title">
                You can also set a margin to a different media query using the
                following utilities classNamees.
              </p>
            </div>
            <div className="table-responsive">
              <Table className="table main-table-reference mt-0 mb-0">
                <thead>
                  <tr>
                    <th className="wd-30p">className</th>
                    <th className="wd-70p">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>.mg-t-auto</code> (or) <code>.mt-auto</code>
                    </td>
                    <td>Set a top margin to auto</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.mg-r-auto</code> (or) <code> .me-auto</code>
                    </td>
                    <td>Set a right margin to auto</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.mg-b-auto</code> (or) <code>.mb-auto</code>
                    </td>
                    <td>Set a bottom margin to auto</td>
                  </tr>
                  <tr>
                    <td>
                      <code>.mg-l-auto</code> (or) <code>.ms-auto</code>
                    </td>
                    <td>Set a left margin to auto</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={12} className=" d-none d-xl-block custom-leftnav">
        <div className="main-content-left-components">
          <Card className="custom-card">
            <Card.Body className="component-item">
              <Nav className="nav flex-column">
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#setmargin">
                    Set Margin
                  </Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#mediamargin">
                    Media Query Margin
                  </Nav.Link></Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" href="#automargin">
                    Auto Margin
                  </Nav.Link></Nav.Item>
              </Nav>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={users4.src} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Reynante</h5>
                <p className="mb-1 tx-inverse">Web Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
				View Profile
              </Link>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={users5.src} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Joyce Chua</h5>
                <p className="mb-1 tx-inverse">Team Leader</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-secondary btn-sm mt-3">
				View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
						{/* <!-- End Row--> */}
      </div>
  )
}
Margin.layout = "Contentlayout"

export default Margin