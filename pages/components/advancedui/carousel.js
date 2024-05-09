import React, { useEffect, useRef, useState } from 'react'
import {Card, Carousel, Col, Row } from "react-bootstrap";
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Slider from "react-slick";
import Link from 'next/link';

;

//images
import media1 from "../../../public/assets/img/media/1.jpg"
import media2 from "../../../public/assets/img/media/2.jpg"
import media3 from "../../../public/assets/img/media/3.jpg"
import media4 from "../../../public/assets/img/media/4.jpg"
import media5 from "../../../public/assets/img/media/5.jpg"
import media6 from "../../../public/assets/img/media/6.jpg"
import media7 from "../../../public/assets/img/media/7.jpg"
import media8 from "../../../public/assets/img/media/8.jpg"
import media9 from "../../../public/assets/img/media/9.jpg"
import media10 from "../../../public/assets/img/media/10.jpg"
import media11 from "../../../public/assets/img/media/11.jpg"
import media12 from "../../../public/assets/img/media/12.jpg"
import media15 from "../../../public/assets/img/media/15.jpg"
import media16 from "../../../public/assets/img/media/16.jpg"
import media17 from "../../../public/assets/img/media/17.jpg"
import media18 from "../../../public/assets/img/media/18.jpg"
import media19 from "../../../public/assets/img/media/19.jpg"
import Seo from '../../../shared/layout-components/seo/seo';




const Carousels = () => {



  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    // rtl: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingswithfade = {
    dots: true,
    fade: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,

    slidesToScroll: 1,
  };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  //i dont seem to need this

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  const settings2 = {
    arrows: true,
  };

  function SampleNextArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
  
          fontSize: "1.3rem",
          borderRadius: "50%",
          width: "3rem",
          height: "3rem",
          textAlign: "center",
          background: "rgb(255 255 255)",
          border: "1px solid #e8ebf3 !important",
          zIndex: "99",
          boxShadow: "0 4px 15px rgb(67 67 67 / 15%)",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow1(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "rgb(255 255 255)",
          // height: "20px",
          fontSize: "1.3rem",
          borderRadius: "50%",
          width: "3rem",
          height: "3rem",
          textAlign: "center",
  
          border: "1px solid #e8ebf3 !important",
          zIndex: "99",
          boxShadow: "0 4px 15px rgb(67 67 67 / 15%)",
        }}
        onClick={onClick}
      />
    );
  }

  const settingsSlickcarousel = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // rtl: true,

    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const settingsMultipleslider = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // rtl: true,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow1 />,
    prevArrow: <SamplePrevArrow1 />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
        <Seo title="Carousel"/>
    <PageHeader title="Carousel" item="Advanced UI" active_item="Carousel"/>

    <Row className="row-sm">
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">Static Carousel</h6>
              <p className="text-muted card-sub-title">
                Heres a carousel with slides only.
              </p>
            </div>
            <div>
              <div
                id="carouselExampleSlidesOnly"
              >
                <div className="carousel-inner ap">
                <Slider {...settings}>
                <div className="item">
                <img alt="img" className="d-block w-100" src={media8.src} />
                </div>
                <div className="item">
                <img alt="img" className="d-block w-100" src={media9.src} />
                </div>
                <div className="item">
                <img alt="img" className="d-block w-100" src={media10.src} />
                </div>
                </Slider>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">With Controls</h6>
              <p className="text-muted card-sub-title">
                Adding in the previous and next controls.
              </p>
            </div>
            <div>
              <div id="carouselExample2">
              <Slider {...settings}>
              <div className="item">
              <img alt="img" className="d-block w-100" src={media11.src} />
              </div>
              <div className="item">
              <img alt="img" className="d-block w-100" src={media8.src} />
              </div>
              <div className="item">
              <img alt="img" className="d-block w-100" src={media6.src} />
              </div>
              </Slider>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">
                With Indicator/With Controls
              </h6>
              <p className="text-muted card-sub-title">
                You can also add the indicators to the carousel.
              </p>
            </div>
            <div>
              <div id="carouselExample3">
              <Slider {...settings}>
                <div className="item">
                <img alt="img" className="d-block w-100" src={media12.src} />
                </div>
                <div className="item">
                <img alt="img" className="d-block w-100" src={media15.src} />
                </div>
                <div className="item">
                <img alt="img" className="d-block w-100" src={media16.src} />
                </div>
              </Slider>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">With Caption</h6>
              <p className="text-muted card-sub-title">
                Add captions to your slides easily with the
                <code>.carousel-caption</code> element within any
                <code>.carousel-item.</code>
              </p>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={media18.src}
                    alt="First"
                  />
                  <Carousel.Caption>
                    <h4>First slide</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque,
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={media19.src}
                    alt="Second"
                  />

                  <Carousel.Caption>
                    <h4>Second slide</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={media17.src}
                    alt="Third"
                  />

                  <Carousel.Caption>
                    <h4>Third slide</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">Fade Animate Carousel</h6>
              <p className="text-muted card-sub-title">
                Add fade transition to your carousel to animate slides with a
                fade transition instead of a slide.
              </p>
            </div>
            <div>
              <div id="carouselExample5">
              <Slider {...settingswithfade}>
            <div>
          <img className="d-block w-100" src={media1.src} alt="media1" />
        </div>
        <div>
          <img className="d-block w-100" src={media18.src} alt="media18" />
        </div>
        <div>
          <img className="d-block w-100" src={media9.src} alt="media9" />
        </div>
        <div>
          <img className="d-block w-100" src={media3.src} alt="media3" />
        </div>
      </Slider>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6} xl={4} md={6} >
        <Card className="custom-card">
          <Card.Body className="h-100">
            <div>
              <h6 className="main-content-label mb-1">
                Carousel With Thumbnails
              </h6>
              <p className="text-muted card-sub-title">
                The Carousel controls the Thumbnails easily design the images
                <br />
                with thumbnails
              </p>
            </div>
            <div id="carouselExample6">

            <Slider
        className="mainSlider"
        asNavFor={nav2}
        ref={slider1}
        {...settings}
      >
        <div>
          <div className="item thum">
            <span className="d-block w-100">
            <img alt="img" className="" src={media7.src} />
                  </span>
          </div>
        </div>
        <div>
          <div className="item thum">
            <span className="d-block w-100">
            <img alt="img" className="" src={media8.src} />
                  </span>
          </div>
        </div>
        <div>
          <div className="item thum">
            <span className="d-block w-100">
            <img alt="img" className="" src={media9.src} />
                  </span>
          </div>
        </div>
        <div>
          <div className="item thum">
            <span className="d-block w-100">
            <img alt="img" className="" src={media10.src} />
                  </span>
          </div>
        </div>
        <div>
          <div className="item thum">
            <span className="d-block w-100">
            <img alt="img" className="" src={media11.src} />
                  </span>
          </div>
        </div>
        <div>
          <div className="item thum">
            <span className="d-block w-100">
            <img alt="img" className="" src={media1.src} />
                  </span>
          </div>
        </div>
      </Slider>

      <Slider className='img-thumbnail-preview'
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        {...settings}
      >
        <div>
          <span className="d-block pe-2">
          <img alt="img"  src={media7.src} />
          </span>
        </div>
        <div>
          <span className="d-block pe-2">
          <img alt="img"  src={media8.src} />
          </span>
        </div>
        <div>
          <span className="d-block pe-2">
          <img alt="img"  src={media9.src} />
          </span>
        </div>
        <div>
          <span className="d-block pe-2">
          <img alt="img"  src={media10.src} />
          </span>
        </div>
        <div>
          <span className="d-block pe-2">
          <img alt="img"  src={media11.src} />
          </span>
        </div>
        <div>
          <span className="d-block pe-2">
          <img alt="img"  src={media1.src} />
          </span>
        </div>
      </Slider>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card className="custom-card">
            <Card.Header>
              <h6 className="main-content-label mb-1">React slick Carousel</h6>
              <p className="text-muted card-sub-title">Touch enabled React slick plugin that lets you create a
                beautiful responsive carousel slider.</p>
            </Card.Header>
          <Card.Body className="h-100">
          <Slider {...settingsSlickcarousel}>
        <div className="item">
          <Card className="me-3 ">
            <Card.Body className=" user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={media5.src} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Reynante</h5>
                <p className="mb-1">Web Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={media4.src} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Joyce Chua</h5>
                <p className="mb-1">Team Leader</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={media6.src} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Owen Bongcaras</h5>
                <p className="mb-1">Web Designer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={media7.src} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Mariane Galeon</h5>
                <p className="mb-1">Php Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={media8.src} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Reynante</h5>
                <p className="mb-1">Web Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={media9.src} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Joyce Chua</h5>
                <p className="mb-1">Team Leader</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item ">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={media10.src} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Owen Bongcaras</h5>
                <p className="mb-1">Web Designer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div className="item">
          <Card className="me-3">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img alt="avatar" className="rounded-circle" src={media11.src} />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Mariane Galeon</h5>
                <p className="mb-1">Php Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i> Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Slider>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={12} md={12}>
        <Card className="custom-card">
            <Card.Header>
              <h6 className="main-content-label mb-1"> Slick Multi Slider</h6>
              <p className="text-muted card-sub-title">
                Slick Multislider is a React Slick powered slideshow that
                specializes in showing more than one slide at a time. Theres no
                need to find messy CSS and JS work arounds for other
                single-slide solutions. Multislider allows the developer to
                focus fully on each individual slide as its own component, and
                then displays as many slides as you decide in a manner that is
                fluid, consistent, and dymanic.
              </p>
            </Card.Header>
          <Card.Body className="h-100">
            <div id="basicSlider">
            <Slider {...settingsMultipleslider}>
        <div className="item  pe-3">
          <Link href="#!" target="_blank">
            <img src={media1.src} alt="media1" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={media2.src} alt="media2" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={media3.src} alt="media3" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={media4.src} alt="media4" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={media5.src} alt="media5" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={media6.src} alt="media6" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={media7.src} alt="media7" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank ">
            <img src={media8.src} alt="media8" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={media9.src} alt="media9" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={media10.src} alt="media10" />
          </Link>
        </div>
        <div className="item pe-3">
          <Link href="#!" target="_blank">
            <img src={media11.src} alt="media11" />
          </Link>
        </div>
      </Slider>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </>
  )
}
Carousels.layout = "Contentlayout"

export default Carousels