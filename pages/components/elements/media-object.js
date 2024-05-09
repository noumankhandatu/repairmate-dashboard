import React, { useState } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Link from "next/link"
import Seo from '../../../shared/layout-components/seo/seo';

import { Breadcrumb, Button, Card, Row, Col, Form, Collapse } from "react-bootstrap";

//Images
import media1 from "../../../public/assets/img/media/1.jpg"
import media2 from "../../../public/assets/img/media/2.jpg"
import media4 from "../../../public/assets/img/media/4.jpg"
import media6 from "../../../public/assets/img/media/6.jpg"
import media7 from "../../../public/assets/img/media/7.jpg"
import media8 from "../../../public/assets/img/media/8.jpg"
import media5 from "../../../public/assets/img/media/5.jpg"



const MediaObject = () => {
  const [BasicExampleMediaobject, setBasicExampleMediaobject] = useState(false);
  const [Nestingexample, setNestingexample] = useState(false);
  const [Alignmentexample, setAlignmentexample] = useState(false);
  const [Orderexample, setOrderexample] = useState(false);
  const [MediaList, setMediaList] = useState(false);
  return (
    <div>
      <Seo title="Media Object"/>

      <PageHeader title="Media Objects" item="Elements" active_item="Media Objects"/>
      
      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Basic Example</h6>
                <p className="text-muted card-sub-title">
                  The media object helps build complex and repetitive components
                  where some media is positioned alongside content that doesn’t
                  wrap around said media.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setBasicExampleMediaobject(!BasicExampleMediaobject)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="media d-block d-sm-flex">
                    <span className="wd-100p wd-sm-200  mg-sm-r-20 mg-b-20 mg-sm-b-0">
                    <img
                      alt="img"
                      className="wd-100p wd-sm-200  mg-sm-r-20 mg-b-20 mg-sm-b-0"
                      src={media1.src}
                    />
                    </span>
                    <div className="media-body">
                      <h5>Media heading</h5>Cras sit amet nibh libero, in gravida
                      nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                      purus odio, vestibulum in vulputate at, tempus viverra
                      turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                      Donec lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>

                <Collapse in={BasicExampleMediaobject}>
                  <pre>
                    <code>
                      {
                        `
<div className="example">
<div className="media d-block d-sm-flex">
<img
alt="img"
className="wd-100p wd-sm-200  mg-sm-r-20 mg-b-20 mg-sm-b-0"
src={"/assets/img/media/1.jpg"}
/>
<div className="media-body">
<h5>Media heading</h5>Cras sit amet nibh libero, in gravida
nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
purus odio, vestibulum in vulputate at, tempus viverra
turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
Donec lacinia congue felis in faucibus.
</div>
</div>
</div>
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Nesting</h6>
                <p className="text-muted card-sub-title">
                  Media objects can be infinitely nested, though we suggest you
                  stop at some point. Place nested <code>.media</code> within the
                  <code>.media-body</code> of a parent media object.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setNestingexample(!Nestingexample)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="media d-block d-sm-flex">
                    <span className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0">
                    <img alt="img" className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0" src={media2.src} />
                    </span>
                    <div className="media-body">
                      <h5>Media heading</h5>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis. Fusce
                        condimentum nunc ac nisi vulputate fringilla. Donec
                        lacinia congue felis in faucibus.
                      </p>
                      <div className="media d-block d-sm-flex mg-t-25">
                        <span className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0">
                        <img alt="img" className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0"
                          src={media1.src}
                        />
                        </span>
                        <div className="media-body">
                          <h5>Media heading</h5>Cras sit amet nibh libero, in
                          gravida nulla. Nulla vel metus scelerisque ante
                          sollicitudin. Cras purus odio, vestibulum in vulputate
                          at, tempus viverra turpis. Fusce condimentum nunc ac
                          nisi vulputate fringilla. Donec lacinia congue felis in
                          faucibus.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Collapse in={Nestingexample}>
                  <pre>
                    <code>
                      {
                        `
<div className="example">
<div className="media d-block d-sm-flex">
<img
alt="img" className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0" src={"/assets/img/media/2.jpg"} />
<div className="media-body">
<h5>Media heading</h5>
<p>
Cras sit amet nibh libero, in gravida nulla. Nulla vel
metus scelerisque ante sollicitudin. Cras purus odio,
vestibulum in vulputate at, tempus viverra turpis. Fusce
condimentum nunc ac nisi vulputate fringilla. Donec
lacinia congue felis in faucibus.
</p>
<div className="media d-block d-sm-flex mg-t-25">
<img alt="img" className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0"
src={"/assets/img/media/1.jpg"}
/>
<div className="media-body">
<h5>Media heading</h5>Cras sit amet nibh libero, in
gravida nulla. Nulla vel metus scelerisque ante
sollicitudin. Cras purus odio, vestibulum in vulputate
at, tempus viverra turpis. Fusce condimentum nunc ac
nisi vulputate fringilla. Donec lacinia congue felis in
faucibus.
</div>
</div>
</div>
</div>
</div>
                        `
                      }
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Alignment</h6>
                <p className="text-muted card-sub-title">
                  Media in a media object can be aligned with flexbox utilities to
                  the top (default), middle, or end of your .media-body content.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setAlignmentexample(!Alignmentexample)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="media d-block d-sm-flex">
                    <span className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0 align-self-center">
                    <img
                      alt="img"
                      className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0 align-self-center"
                      src={media4.src} />
                    </span>
                    <div className="media-body">
                      <h5>Media heading</h5>Cras sit amet nibh libero, in gravida
                      nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                      purus odio, vestibulum in vulputate at, tempus viverra
                      turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                      Donec lacinia congue felis in faucibus. Cras sit amet nibh
                      libero, in gravida nulla. Nulla vel metus scelerisque ante
                      sollicitudin. Cras purus odio, vestibulum in vulputate at,
                      tempus viverra turpis. Fusce condimentum nunc ac nisi
                      vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>

                <Collapse in={Alignmentexample}>
                  <pre>
                    <code>
                      {
                        `
<div className="example">
<div className="media d-block d-sm-flex">
<img
alt="img"
className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0 align-self-center"
src={"/assets/img/media/4.jpg"} />
<div className="media-body">
<h5>Media heading</h5>Cras sit amet nibh libero, in gravida
nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
purus odio, vestibulum in vulputate at, tempus viverra
turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
Donec lacinia congue felis in faucibus. Cras sit amet nibh
libero, in gravida nulla. Nulla vel metus scelerisque ante
sollicitudin. Cras purus odio, vestibulum in vulputate at,
tempus viverra turpis. Fusce condimentum nunc ac nisi
vulputate fringilla. Donec lacinia congue felis in faucibus.
</div>
</div>
</div>
            `
                      }
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card" >
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Media List</h6>
                <p className="text-muted card-sub-title">
                  Because the media object has so few structural requirements, you
                  can also use these classes on list HTML elements.
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setMediaList(!MediaList)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>

              <div className="text-wrap">
                <div className="example">
                  <ul className="list-unstyled">
                    <li className="media d-block d-sm-flex">
                      <span className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0">
                      <img
                        alt="img"
                        className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0"
                        src={media6.src}
                      />
                      </span>
                      <div className="media-body">
                        <h5>Media heading</h5>Cras sit amet nibh libero, in
                        gravida nulla. Nulla vel metus scelerisque ante
                        sollicitudin. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                      </div>
                    </li>
                    <li className="media d-block d-sm-flex mg-t-25">
                      <span className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0">
                      <img
                        alt="img"
                        className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0"
                        src={media7.src}
                      />
                      </span>
                      <div className="media-body">
                        <h5>Media heading</h5>Cras sit amet nibh libero, in
                        gravida nulla. Nulla vel metus scelerisque ante
                        sollicitudin. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                      </div>
                    </li>
                    <li className="media d-block d-sm-flex mg-t-25">
                      <span className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0">
                      <img alt="img" className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0" src={media8.src} />
                      </span>
                      <div className="media-body">
                        <h5>Media heading</h5>Cras sit amet nibh libero, in
                        gravida nulla. Nulla vel metus scelerisque ante
                        sollicitudin. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in
                        faucibus.
                      </div>
                    </li>
                  </ul>
                </div>

                <Collapse in={MediaList}>
                  <pre>
                    <code>
                      {
                        `
<div className="example">
<ul className="list-unstyled">
<li className="media d-block d-sm-flex">
<img
alt="img"
className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0"
src={"/assets/img/media/6.jpg"}

/>
<div className="media-body">
<h5>Media heading</h5>Cras sit amet nibh libero, in
gravida nulla. Nulla vel metus scelerisque ante
sollicitudin. Cras purus odio, vestibulum in vulputate at,
tempus viverra turpis. Fusce condimentum nunc ac nisi
vulputate fringilla. Donec lacinia congue felis in
faucibus.
</div>
</li>
<li className="media d-block d-sm-flex mg-t-25">
<img
alt="img"
className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0"
src={"/assets/img/media/7.jpg"}

/>
<div className="media-body">
<h5>Media heading</h5>Cras sit amet nibh libero, in
gravida nulla. Nulla vel metus scelerisque ante
sollicitudin. Cras purus odio, vestibulum in vulputate at,
tempus viverra turpis. Fusce condimentum nunc ac nisi
vulputate fringilla. Donec lacinia congue felis in
faucibus.
</div>
</li>
<li className="media d-block d-sm-flex mg-t-25">
<img alt="img" className="wd-100p wd-sm-100  mg-sm-r-20 mg-b-20 mg-sm-b-0" src={"/assets/img/media/8.jpg"} />
<div className="media-body">
<h5>Media heading</h5>Cras sit amet nibh libero, in
gravida nulla. Nulla vel metus scelerisque ante
sollicitudin. Cras purus odio, vestibulum in vulputate at,
tempus viverra turpis. Fusce condimentum nunc ac nisi
vulputate fringilla. Donec lacinia congue felis in
faucibus.
</div>
</li>
</ul>
</div>
                       `
                      }
                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className="d-sm-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Order</h6>
                <p className="text-muted card-sub-title">
                  Change the order of content in media objects by modifying the
                  HTML itself, or by adding some custom flexbox CSS to set the
                  order property (to an integer of your choosing).
                </p>
              </div>
              <Form.Check className="mb-3 mb-sm-0"
                aria-controls="example-collapse-text"
                onClick={() => setOrderexample(!Orderexample)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body>
              <div className="text-wrap">
                <div className="example">
                  <div className="media d-block d-sm-flex">
                    <div className="media-body">
                      <h5>Media heading</h5>Cras sit amet nibh libero, in gravida
                      nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                      purus odio, vestibulum in vulputate at, tempus viverra
                      turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                      Donec lacinia congue felis in faucibus.
                    </div>
                    <span className="wd-100p wd-sm-200  mg-sm-l-20 mg-t-20 mg-sm-t-0">
                    <img alt="img2" className="wd-100p wd-sm-200  mg-sm-l-20 mg-t-20 mg-sm-t-0" src={media5.src} />
                    </span>
                  </div>
                </div>

                <Collapse in={Orderexample}>
                  <pre>
                    <code>
                      {
                        `
<div className="example">
<div className="media d-block d-sm-flex">
<div className="media-body">
<h5>Media heading</h5>Cras sit amet nibh libero, in gravida
nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
purus odio, vestibulum in vulputate at, tempus viverra
turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
Donec lacinia congue felis in faucibus.
</div>
<img alt="img2" className="wd-100p wd-sm-200  mg-sm-l-20 mg-t-20 mg-sm-t-0" src={"/assets/img/media/5.jpg"} />
</div>
</div>
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} lg={12} className="col-xl-3 col-lg-12 d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card">
              <Card.Body className="user-card text-center">
                <div className="main-img-user avatar-lg online text-center">
                  <span className="-circle">
                  <img alt="avatar" className="-circle" src={media5.src} />
                  </span>
                </div>
                <div className="mt-2">
                  <h5 className="mb-1">Reynante</h5>
                  <p className="mb-1 tx-inverse">Web Developer</p>
                  <span className="text-muted">
                    <i className="far fa-check-circle text-success me-1"></i>
                    Verified
                  </span>
                </div>
                <Link href="#!" className="btn ripple btn-primary btn-sm mt-3" >
                  View Profile
                </Link>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <div className="card-body user-card text-center">
                <div className="main-img-user avatar-lg online text-center">
                  <span className="-circle">
                  <img alt="avatar" className="-circle"
                    src={media4.src} />
                  </span>
                </div>
                <div className="mt-2">
                  <h5 className="mb-1">Joyce Chua</h5>
                  <p className="mb-1 tx-inverse">Team Leader</p>
                  <span className="text-muted">
                    <i className="far fa-check-circle text-success me-1"></i>
                    Verified
                  </span>
                </div>
                <Link href="#!" className="btn ripple btn-secondary btn-sm mt-3" >
                  View Profile
                </Link>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
      </div>
  )
}
MediaObject.layout = "Contentlayout"

export default MediaObject