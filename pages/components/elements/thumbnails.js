import React, { useState } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Button, Card, Row, Col, Form, Collapse } from "react-bootstrap";
import Link from "next/link"
import Seo from '../../../shared/layout-components/seo/seo';


//Images

import media15 from "../../../public/assets/img/media/15.jpg"
import media13 from "../../../public/assets/img/media/13.jpg"
import media14 from "../../../public/assets/img/media/14.jpg"
import media10 from "../../../public/assets/img/media/10.jpg"
import media11 from "../../../public/assets/img/media/11.jpg"
import media9 from "../../../public/assets/img/media/9.jpg"
import media8 from "../../../public/assets/img/media/8.jpg"
import media12 from "../../../public/assets/img/media/12.jpg"

import user5 from "../../../public/assets/img/users/5.jpg"
import user4 from "../../../public/assets/img/users/4.jpg"

const Thumbnails = () => {
	const [ImageThumbnail, setImageThumbnail] = useState(false);
	const [AligningThumbnail, setAligningThumbnail] = useState(false);
	const [ContentThumbnail, setContentThumbnail] = useState(false);
	const [ResponsiveThumbnail, setResponsiveThumbnail] = useState(false);
	const [BackgroundImage, setBackgroundImage] = useState(false);

  return (
    <div>
      <Seo title="Thumbnails"/>

      <PageHeader title="Thumbnails" item="Elements" active_item="Thumbnails"/>

      {/* <!-- Row --> */}
      <Row className="row-sm">
        <Col xl={9} lg={12}>
          <Card className="custom-card" id="thumb">
            <Card.Header className="d-md-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Image Thumbnail</h6>
                <p className="text-muted card-sub-title">
                  Images in Bootstrap are made responsive with .img-fluid.
                  max-width: 100%; and height: auto; are applied to the image so
                  that it scales with the parent element.
                </p>
              </div>
              <Form.Check
                aria-controls="example-collapse-text"
                onClick={() => setImageThumbnail(!ImageThumbnail)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body className=" ht-100p ">

              <div className="text-wrap">
                <div className="example">
                  <Row className="row-sm">
                    <Col md={3} className="col-6 my-2">
                      <img alt="media15" className="img-thumbnail" src={media15.src} />
                    </Col>
                    <Col md={3} className="col-6 my-2">
                      <img alt="media13" className="img-thumbnail" src={media13.src} />
                    </Col>
                    <Col md={3} className="col-6 my-2">
                      <img alt="media14" className="img-thumbnail" src={media14.src} />
                    </Col>
                    <Col md={3} className="col-6 my-2">
                      <img alt="media15" className="img-thumbnail" src={media15.src} />
                    </Col>
                  </Row>
                </div>


                <Collapse in={ImageThumbnail}>
                  <pre>
                    <code>
                      {
                        `
<div className="example">
<Row className="row-sm">
<Col md={3} className="col-6 my-2">
<img alt="media15" className="img-thumbnail" src={media15.src} />
</Col>
<Col md={3} className="col-6 my-2">
<img alt="media13" className="img-thumbnail" src={media13.src} />
</Col>
<Col md={3} className="col-6 my-2">
<img alt="media14" className="img-thumbnail" src={media14.src} />
</Col>
<Col md={3} className="col-6 my-2">
<img alt="media15" className="img-thumbnail" src={media15.src} />
</Col>
</Row>
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
            <Card.Header className="d-md-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">Aligning Thumbnails</h6>
                <p className="text-muted card-sub-title">
                  Align images with the helper float classNamees or text alignment
                  classNamees.
                </p>
              </div>
              <Form.Check
                aria-controls="example-collapse-text"
                onClick={() => setAligningThumbnail(!AligningThumbnail)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body className="">

              <div className="text-wrap">
                <div className="example">
                  <div className="clearfix">
                    <img className="float-sm-left wd-100p wd-sm-200"
                      src={media10.src}
                      alt="img"
                    />
                    <img className="float-sm-right wd-100p wd-sm-200 mg-t-10 mg-sm-t-0"
                      src={media11.src}
                      alt="img"
                    />
                  </div>
                </div>
                <Collapse in={AligningThumbnail}>
                  <pre>
                    <code>
                      {
                        `
<div className="example">
<div className="clearfix">
<img
src={media10.src}
className="float-sm-left wd-100p wd-sm-200"
alt="img"
/>
<img
src={media11.src}
className="float-sm-right wd-100p wd-sm-200 mg-t-10 mg-sm-t-0"
alt="img"
/>
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
            <Card.Header className="d-md-flex justify-content-between align-items-center">
              <div>
                <h6 className="main-content-label mb-1">
                  Custom content Thumbnails
                </h6>
                <p className="text-muted card-sub-title">
                  Using the images in custom content thumbnails
                </p>
              </div>
              <Form.Check
                aria-controls="example-collapse-text"
                onClick={() => setContentThumbnail(!ContentThumbnail)}
                type="switch"
                label="ShowCode"
              />
            </Card.Header>
            <Card.Body className=" ht-100p ">

              <div className="text-wrap">
                <div className="example">
                  <Row className="row-sm">
                    <Col sm={6}>
                      <div className="img-thumbnail">

                        <img src={media9.src} alt="thumb1" className="thumbimg" />

                        <div className="caption">
                          <h5>Thumbnail label</h5>
                          <p>
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                          </p>
                          <div className="btn btn-list">
                            <Link href="#!" className="btn ripple btn-primary" role="button">Button</Link>
                            <Link href="#!" className="btn ripple btn-secondary" role="button">Button</Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <div className="col-sm-6">
                      <div className="img-thumbnail">
                        <img src={media8.src} alt="thumb1" className="thumbimg" />

                        <div className="caption">
                          <h5>Thumbnail label</h5>
                          <p>
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                          </p>
                          <div className="btn btn-list">
                            <Link href="#!" className="btn ripple btn-primary" role="button">Button</Link>
                            <Link href="#!" className="btn ripple btn-secondary" role="button">Button</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
                <Collapse in={ContentThumbnail}>
                  <pre>
                    <code>
                      {
                        `
<div className="example">
<Row className="row-sm">
<Col sm={6}>
<div className="img-thumbnail">

<img src={"/assets/img/media/8.jpg"} alt="thumb1" className="thumbimg" />

<div className="caption">
<h5>Thumbnail label</h5>
<p>
sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.
</p>
<div className="btn btn-list">
<Link href="#!" className="btn ripple btn-primary" role="button">Button</Link>
<Link href="#!" className="btn ripple btn-secondary" role="button">Button</Link>
</div>
</div>
</div>
</Col>
<div className="col-sm-6">
<div className="img-thumbnail">
<img src={"/assets/img/media/8.jpg"} alt="thumb1" className="thumbimg" />

<div className="caption">
<h5>Thumbnail label</h5>
<p>
sed do eiusmod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat.
</p>
<div className="btn btn-list">
<Link href="#!" className="btn ripple btn-primary" role="button">Button </Link>
<Link href="#!" className="btn ripple btn-secondary" role="button">Button</Link>
</div>
</div>
</div>
</div>
</Row>
</div>
                        `
                      }

                    </code>
                  </pre>
                </Collapse>
              </div>
            </Card.Body>
          </Card>
          <Row className="row-sm">
            <Col lg={6} md={12}>
              <Card className="custom-card">
                <Card.Header className="d-md-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="main-content-label mb-1">
                      Responsive Thumbnails
                    </h6>
                    <p className="text-muted card-sub-title">
                      Images in Bootstrap are made responsive with .img-fluid.
                      max-width: 100%; and height: auto; are applied to the image
                      so that it scales with the parent element.
                    </p>
                  </div>
                  <Form.Check
                    aria-controls="example-collapse-text"
                    onClick={() => setResponsiveThumbnail(!ResponsiveThumbnail)}
                    type="switch"
                    label="ShowCode"
                  />
                </Card.Header>
                <Card.Body className=" ht-100p ">
                  <div className="text-wrap">
                    <div className="example">
                      <div>
                        <img
                          alt="media15"
                          className="img-fluid w-100"
                          src={media15.src}
                        />
                      </div>
                    </div>
                    <Collapse in={ResponsiveThumbnail}>
                      <pre>
                        <code>
                          {
                            `
<div className="example">
<div>
<img
alt="media15"
className="img-fluid"
src={media15.src}
/>
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
            <div className="col-lg-6 col-md-12">
              <Card className="custom-card" id="background">
                <Card.Header className="d-md-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="main-content-label mb-1">Background Image</h6>
                    <p className="text-muted card-sub-title">
                      Make image as background to your content using the helper or
                      utilities classNamees. are applied to the image
                      so that it scales with the parent element.
                    </p>
                  </div>
                  <Form.Check
                    aria-controls="example-collapse-text"
                    onClick={() => setBackgroundImage(!BackgroundImage)}
                    type="switch"
                    label="ShowCode"
                  />
                </Card.Header>
                <Card.Body className=" ht-100p ">
                  <div className="text-wrap">
                    <div className="example">
                      <figure className="pos-relative mg-b-0">
                        <img
                          alt="media12"
                          className="img-fit-cover"
                          src={media12.src}
                        />
                        <figcaption className="pos-absolute a-0 pd-25 bg-black-5 tx-white-8">
                          <h6 className="tx-14 tx-sm-16 tx-white tx-semibold mg-b-15 mg-sm-b-20">
                            What Does Royalty-Free Mean?
                          </h6>
                          <p className="mg-b-0">
                            Royalty free means you just need to pay for rights to
                            use the item once per end product.
                          </p>
                        </figcaption>
                      </figure>
                    </div>
                    <Collapse in={BackgroundImage}>
                      <pre>
                        <code>
                          {
                            `
<div className="example">
<figure className="pos-relative mg-b-0">
<img
alt="media12"
className="img-fit-cover"
src={media12.src})}
/>
<figcaption className="pos-absolute a-0 pd-25 bg-black-5 tx-white-8">
<h6 className="tx-14 tx-sm-16 tx-white tx-semibold mg-b-15 mg-sm-b-20">
What Does Royalty-Free Mean?
</h6>
<p className="mg-b-0">
Royalty free means you just need to pay for rights to
use the item once per end product. You don't need to
pay additional or ongoing fees for each person who
sees or uses it.
</p>
</figcaption>
</figure>
</div>
                        `
                          }

                        </code>
                      </pre>
                    </Collapse>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Col>
        <Col xl={3} lg={12} className=" d-none d-xl-block custom-leftnav">
          <div className="main-content-left-components">
            <Card className="custom-card">
              <Card.Body className=" user-card text-center">
                <div className="main-img-user avatar-lg online text-center">
                  <img alt="avatar" className="rounded-circle" src={user5.src} />
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
            
              <Card.Body className=" user-card text-center">
                <div className="main-img-user avatar-lg online text-center">
                  <img alt="avatar" className="rounded-circle" src={user4.src} />
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
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      {/* <!-- End Row --> */}
      </div>
  )
}

Thumbnails.layout = "Contentlayout"

export default Thumbnails