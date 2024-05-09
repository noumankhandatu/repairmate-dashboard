import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import {Col, Row, Card } from "react-bootstrap";
import * as cards from "../../../shared/data/advanceui/cards"
import Link from 'next/link';
import Seo from '../../../shared/layout-components/seo/seo';



//Images

import media1 from "../../../public/assets/img/media/1.jpg"
import media2 from "../../../public/assets/img/media/2.jpg"
import media3 from "../../../public/assets/img/media/3.jpg"
import media4 from "../../../public/assets/img/media/4.jpg"
import media11 from "../../../public/assets/img/media/11.jpg"
import media13 from "../../../public/assets/img/media/13.jpg"

import user1 from "../../../public/assets/img/users/1.jpg"
import user2 from "../../../public/assets/img/users/2.jpg"


const Cards = () => {
  return (
    <>
    <Seo title="Cards"/>
    <PageHeader title="Cards" item="Advanced UI" active_item="Cards"/>

   
    {/* <!-- Row --> */}
    <Row className="row-sm">
      <div className="col-md">
        <Card.Body className="card custom-card card-body">
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the {`card's`} content. Lorem ipsum dolor sit amet
            consictetur...
          </Card.Text>
        </Card.Body>
      </div>
      <div className="col-md">
        <Card.Body className="card custom-card bg-primary tx-white">
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the {`card's`} content. Lorem ipsum dolor sit amet
            consictetur...
          </Card.Text>
        </Card.Body>
      </div>
      <div className="col-md">
        <Card.Body className="card custom-card bg-gray-800 tx-white">
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the {`card's`} content. Lorem ipsum dolor sit amet
            consictetur...
          </Card.Text>
        </Card.Body>
      </div>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <div className="col-md">
        <Card className="custom-card">
          <Card.Body>
            <h5 className="main-content-label tx-dark tx-medium mg-b-10">
              The Card Title
            </h5>
            <p className="card-subtitle mg-b-15">This is the card subtitle</p>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content.
            </Card.Text>
            <Card.Link href="#!">
              Card link
            </Card.Link>
            <Card.Link href="#!">
              Another link
            </Card.Link>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md ">
        <Card className="custom-card bg-primary tx-white">
          <Card.Body>
            <h5 className="main-content-label tx-white tx-medium mg-b-10">
              The Card Title
            </h5>
            <p className="card-subtitle mg-b-15 tx-white-8">
              This is the card subtitle
            </p>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content.
            </Card.Text>
            <Card.Link className=" tx-white-7 hover-white" href="#!">
              Card link
            </Card.Link>
            <Card.Link className=" tx-white-7 hover-white" href="#!">
              Another link
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md ">
        <Card className="custom-card  bg-gray-800 tx-white">
          <Card.Body>
            <h5 className="main-content-label tx-white tx-medium mg-b-10">
              The Card Title
            </h5>
            <p className="card-subtitle tx-white-8 mg-b-15">
              This is the card subtitle
            </p>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content.
            </Card.Text>
            <Card.Link className=" tx-white-7 hover-white" href="#!">
              Card link
            </Card.Link>
            <Card.Link className=" tx-white-7 hover-white" href="#!">
              Another link
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </Row>
    {/* <!--End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col md={12} xl={4}>
        <cards.Basiccard />
      </Col>
      <Col md={12} xl={4}>
        <cards.Fullscreenbutton />
      </Col>
      <Col md={12} xl={4}>
        <Card className="custom-card">
          <Card.Header className="custom-card-header border-bottom-0 ">
            <h5 className="main-content-label tx-dark my-auto tx-medium mb-0">
              Basic Card
            </h5>
            <div className="card-options">
              <Card.Link href="#!" className="btn btn-primary btn-sm">
                Action 1
              </Card.Link>
              <Card.Link href="#!" className="btn btn-secondary btn-sm ms-2">
                Action 2
              </Card.Link>
            </div>
          </Card.Header>
          <Card.Body>
            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
            consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
            viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
            varius laoreet
          </Card.Body>
          <Card.Footer>This is Basic card footer</Card.Footer>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={12} xl={4} md={12} sm={12} className="col-12">
        <Card className="custom-card">
          <Card.Header className="custom-card-header border-bottom-0">
            <h5 className="main-content-label tx-dark tx-medium mb-0">
              Card Header
            </h5>
          </Card.Header>
          <Card.Body>
            <h6>Special title treatment</h6>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Card.Link href="#!" className="btn btn-primary ripple btn-block">
              View
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} xl={4} md={12} sm={12} className="col-12">
        <Card className="custom-card">
          <Card.Header className="custom-card-header border-bottom-0">
            <h5 className="main-content-label tx-dark tx-medium mb-0">
              Card Header
            </h5>
          </Card.Header>
          <Card.Body>
            <h6 className="">Special title treatment</h6>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <h6 className="mb-0">Card-footer</h6>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg={12} xl={4} md={12} sm={12} className="col-12">
        <Card className="custom-card">
          <Card.Header className="custom-card-header border-bottom-0">
            <h5 className="main-content-label tx-dark tx-medium mb-0">
              Blockquote
            </h5>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col md={6} lg={3}>
        <Card className="overflow-hidden custom-card ">
          <span className="img-fluid b-img">
          <img alt="media1"  src={media1.src} />
          </span>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={3}>
        <Card className="overflow-hidden custom-card">
          <span className="img-fluid b-img">
          <img alt="media2"  src={media2.src} />
          </span>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={3}>
        <Card className="overflow-hidden custom-card">
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content.
            </Card.Text>
          </Card.Body>
          <span className="img-fluid b-img">
          <img alt="media3"  src={media3.src} />
          </span>
        </Card>
      </Col>
      <Col md={6} lg={3}>
        <Card className="overflow-hidden custom-card">
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content.
            </Card.Text>
          </Card.Body>
          <span className="img-fluid b-img">
          <img alt="media4"  src={media4.src} />
          </span>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <div className="col-md">
        <Card className="overflow-hidden card-blog-overlay1 custom-card">
          <Card.Body className="text-white z-index2">
            <h3 className="main-content-label text-white">card-with image</h3>
            <p className="tx-white-7 tx-13 mb-0">
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
          <Card.Footer className=" text-white z-index2">
            This is Basic card footer
          </Card.Footer>
        </Card>
      </div>
      <div className="col-md ">
        <Card className="overflow-hidden card-blog-overlay2 custom-card">
          <Card.Header className="border-bottom-0 custom-card-header">
            <h3 className="main-content-label text-white mb-0">
              card-with image
            </h3>
          </Card.Header>
          <Card.Body className="text-white z-index2">
            <p className="tx-white-7 tx-13">
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
            <Link href="#!" className="tx-white">
              Read more
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md ">
        <Card className="overflow-hidden card-blog-overlay custom-card">
          <Card.Body className="text-white z-index2">
            <h3 className="main-content-label text-white">card-with image</h3>
            <p className="tx-white-7 tx-13">
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
            <Link href="#!" className="tx-white">
              Read more
            </Link>
          </Card.Body>
        </Card>
      </div>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col md={4}>
        <Card className="custom-card">
          <Card.Header className="p-3 tx-medium my-auto tx-white bg-primary">
            Description
          </Card.Header>
          <Card.Body>
            <p className="mg-b-0">
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="custom-card">
          <Card.Header className="p-3 tx-medium my-auto tx-white bg-secondary">
            Description
          </Card.Header>
          <Card.Body>
            <p className="mg-b-0">
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="custom-card">
          <Card.Header className="p-3 tx-medium my-auto tx-white bg-success">
            Description
          </Card.Header>
          <Card.Body>
            <p className="mg-b-0">
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <div className="col-md">
        <Card className="custom-card">
          <Card.Body>
            <p className="mg-b-0">
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
          <Card.Footer>January, 20, 2017 4:30am</Card.Footer>
        </Card>
      </div>
      <div className="col-md ">
        <Card className="custom-card">
          <Card.Body>
            <p className="mg-b-0">
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
          <Card.Footer className=" tx-center">
            <Link href="#!">Read more</Link>
          </Card.Footer>
        </Card>
      </div>
      <div className="col-md ">
        <Card className="custom-card">
          <Card.Body>
            <p className="mg-b-0">
              Some quick example text to build on the card title and make up the
              bulk of the {`card's`} content. Lorem ipsum dolor sit amet
              consictetur...
            </p>
          </Card.Body>
          <Card.Footer className=" tx-right">
            Share <i className="icon ion-logo-facebook mx-2"></i>
            <i className="icon ion-logo-twitter"></i>
          </Card.Footer>
        </Card>
      </div>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <div className="col-md">
        <Card.Body className="custom-card tx-white-8 bg-primary border-0 card">
          Some quick example text to build on the card title and make up the
          bulk of the {`card's`} content. Lorem ipsum dolor sit amet consictetur.
        </Card.Body>
      </div>
      <div className="col-md ">
        <Card.Body className="custom-card tx-white-8 bg-secondary border-0 card">
          Some quick example text to build on the card title and make up the
          bulk of the {`card's`} content. Lorem ipsum dolor sit amet consictetur.
        </Card.Body>
      </div>
      <div className="col-md ">
        <Card.Body className="custom-card tx-white-8 bg-gray-800 border-0 card">
          Some quick example text to build on the card title and make up the
          bulk of the {`card's`} content. Lorem ipsum dolor sit amet consictetur.
        </Card.Body>
      </div>
    </Row>
    {/* <!-- End Row --> */}

    {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col lg={6}>
        <Card className="card-aside custom-card">
          <a className='card-aside-column cover-image rounded-start-11' data-image-src={media11.src} style ={{background: `url(${media11.src}) center center`}}></a>
          <Card.Body>
            <h5 className="main-content-label tx-dark tx-medium mg-b-10">
              The Card Title
            </h5>
            <div className="">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
            <div className="d-flex align-items-center pt-3 mt-auto">
              <div className="main-img-user avatar-sm me-3">
                <span className="w-10 rounded-circle">
                <img
                  src={user1.src}
                  alt="user1"
                />
                </span>
              </div>
              <div>
                <Card.Link href="#!" className="text-default">
                  Alica Nestle
                </Card.Link>
                <small className="d-block text-muted">15 mintues ago</small>
              </div>
              <div className="ms-auto text-muted">
                <Card.Link href="#!" className="icon d-none d-md-inline-block ms-3">
                  <i className="far fa-heart me-1"></i>
                </Card.Link>
                <Card.Link href="#!" className="icon d-none d-md-inline-block ms-3">
                  <i className="far fa-thumbs-up"></i>
                </Card.Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      {/* <img src='./logo.jpeg'href= /> */}
      <Col lg={6}>
        <Card className="card-aside custom-card">
          <Card.Body>
            <h5 className="main-content-label tx-dark tx-medium mg-b-10">
              The Card Title
            </h5>
            <div>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </div>
            <div className="d-flex align-items-center pt-3 mt-auto">
              <div className="main-img-user avatar-sm me-3">
                <span className="w-10 rounded-circle">
                <img
                  src={user2.src}
                  alt="user2"
                />
                </span>
              </div>
              <div>
                <Link href="#!" className="text-default">
                  Alica Nestle
                </Link>
                <small className="d-block text-muted">15 mintues ago</small>
              </div>
              <div className="ms-auto text-muted">
                <Link href="#!" className="icon d-none d-md-inline-block ms-3">
                  <i className="far fa-heart me-1"></i>
                </Link>
                <Link href="#!" className="icon d-none d-md-inline-block ms-3">
                  <i className="far fa-thumbs-up"></i>
                </Link>
              </div>
            </div>
          </Card.Body>
          <a className="card-aside-column  cover-image rounded-end-11" data-image-src={media13.src} style ={{background: `url(${media13.src}) center center`}}></a>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
    </>
  )
}
Cards.layout = "Contentlayout"

export default Cards